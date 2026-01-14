import React from "react";
import SectionHeading from "../SectionHeading";
import ContactWrapper from "./ContactWrapper";
import ContactBackground from "./ContactBackground";
import Form from "./Form";

const Contact: React.FC = () => {
    return (
        <ContactWrapper>
            <ContactBackground />
            <SectionHeading align="center" content="Get In Touch"></SectionHeading>
            <Form />
        </ContactWrapper>
    )
}

export default Contact;