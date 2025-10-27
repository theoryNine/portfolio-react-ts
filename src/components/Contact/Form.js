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
    text-shadow: 0 0 5px var(--pureWhite);
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
    text-shadow: 0 0 5px var(--pureWhite);
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
      text-shadow: 0 0 10px var(--pureWhite);
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

const Form = () => {
  const [, setServerState] = useState({
    submitting: false,
    status: null
  });

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
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
      <form onSubmit={handleOnSubmit}>
        <label for="name" htmlFor="name">Name</label>
        <input type="text" labelledby="" name="name" id="name" />
        <label for="email" htmlFor="email">E-Mail Address (Required)</label>
        <input type="email" name="email" id="email" required />
        <label for="message" htmlFor="message">Message (Required)</label>
        <textarea name="message" id="message" required />
        <div>
          <button label="submit" type="submit">Send</button>
          <button label="clear" type="reset">Clear</button>
        </div>
      </form>
    </FormContainer>
    <LinkedIn />
    </>
  );
};

export default Form;