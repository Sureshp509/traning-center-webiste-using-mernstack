import React,{ Fragment, useRef } from 'react'
import Footer from '../components/Footer/Footer';
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";

const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          // "service_j96cda2",
          // "template_6o6yf33",
          // form.current,
          // "OmTWDTFDzwlm0U7j9"
        )
        .then(
          (result) => {
            console.log(result.text);

            alert("Message sent");
          },
          (error) => {
            console.log(error.text);
            alert("Error:",error.text);
          }
        );
    };
  
    return (
        <Fragment>
            <Container>
            <Row>
          <Col lg="5" md="5" className="m-auto">
            <h2>Contact Us</h2>
             <StyledContactForm>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </StyledContactForm>
      </Col>
      </Row>
      </Container>
         <Footer />
         </Fragment>
     
    );
  };
  
 

export default ContactUs


// npm i @emailjs/browser


// Styles
const StyledContactForm = styled.div`
  

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;