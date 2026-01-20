import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import LinkedIn from './LinkedIn';

const FormContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 49%;

  @media (max-width: 1280px) {
    width: 90%;
  }

  @media (max-width: 767px) {
    width: 100%;
  }

  button[type="submit"] {
    border: 1px solid var(--fireTeal);
    background: var(--darkTeal);
    text-shadow: var(--text-shadow-xl);
    color: var(--pureWhite);
    font-size: 1rem;
    padding: 8px 50px;
    text-transform: uppercase;
    cursor: pointer;
    transition: .3s ease box-shadow;
    letter-spacing: 2px;
    margin-right: 1rem;

    &:hover {
        box-shadow: 0 0 10px var(--fireTeal);
    }
  }

  button[type="reset"] {
    border: 1px solid var(--red);
    background: var(--darkRed);
    text-shadow: var(--text-shadow-xl);
    color: var(--pureWhite);
    font-size: 1rem;
    padding: 8px;
    text-transform: uppercase;
    cursor: pointer;
    transition: .3s ease box-shadow;
    letter-spacing: 2px;

    &:hover {
        box-shadow: 0 0 10px var(--red);
    }
  }

  form {
    display: flex;
    justify-content: center;
    flex-direction: column;

    label {
      text-transform: uppercase;
      text-shadow: var(--text-shadow-xxl);
    }

    input,
    textarea {
      border: 1px solid var(--fireTeal);
      background: var(--aqua);
      color: var(--purWhite);
      padding: .5rem;
      margin-bottom: .5rem;
      transition: .5s ease box-shadow;
      font-family: var(--primaryFont);
      font-size: 1rem;
      border-radius: 0;

      &:active,
      &:focus,
      &:hover {
        box-shadow: 0 0 10px var(--fireTeal);
        outline: none;
      }
    }

    textarea {
      height: 100px;
      margin-bottom: 1rem;
    }

    button
  }
`

const ThankYouMessage = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  text-align: center;
  padding: 0 1rem 1rem 1rem;
  border: 1px solid var(--fireTeal);
  color: var(--pureWhite); // Solid text color
  font-size: 1.2rem;
  text-shadow: var(--text-shadow-xxl);
  letter-spacing: 1px;
  line-height: 1.6;

  @media (max-width: 767px) {
    width: 100%;
  }
`;


type ServerState = {
  submitting: boolean;
  status: { ok: boolean; msg: string } | null;
  showThankYou: boolean;
}

const Form: React.FC = () => {
const [serverState, setServerState] = useState<ServerState>({
  submitting: false,
  status: null,
  showThankYou: false // Add this line
});

const handleServerResponse = (ok: boolean, msg: string, form: HTMLFormElement) => {
  setServerState({
    submitting: false,
    status: { ok, msg },
    showThankYou: ok // Set to true when submission is successful
  });
  if (ok) {
    form.reset();
  }
};

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setServerState((prev) => ({ ...prev, submitting: true }));
    axios({
      method: "post",
      url: "https://getform.io/f/7c407c5a-a765-4595-988d-301d4398a779",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };

  //GetForm.io
  return (
  <>
    <FormContainer>
      {serverState.showThankYou ? (
        <ThankYouMessage>
          <h2>Thank You!</h2>
          <p>Your message has been successfully sent.</p>
          <p>I'll get back to you as soon as possible.</p>
        </ThankYouMessage>
      ) : (
        <form onSubmit={handleOnSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="email">E-Mail Address (Required)</label>
          <input type="email" name="email" id="email" required />
          <label htmlFor="message">Message (Required)</label>
          <textarea name="message" id="message" required />
          <div>
            <button type="submit" disabled={serverState.submitting}>
              {serverState.submitting ? 'Sending...' : 'Send'}
            </button>
            <button type="reset">Clear</button>
          </div>
        </form>
      )}
    </FormContainer>
    <LinkedIn />
  </>
  );
};

export default Form;