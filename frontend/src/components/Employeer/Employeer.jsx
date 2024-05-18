import React,{ Fragment, useRef } from 'react'
import Footer from '../Footer/Footer'
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";

const Employeer = () => {
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
            <h2>Employeer</h2>
             <StyledContactForm>
        <form ref={form} onSubmit={sendEmail}>
          <label>Company Name</label>
          <input type="text" name="company_name" required/>
          <label>HR Name</label>
          <input type="text" name="hr_name" required />
          <label>Email</label>
          <input type="email" name="employeer_email" required/>
          <label>Mobile</label>
          <input type="number" name="employeer_mobile" required/>
          <label>Requirement</label>
          <input type="text" name="requirement"  />
          <label>Job Description</label>
          <textarea name="jd" />
          <input type="submit" value="Submit" />
        </form>
      </StyledContactForm>
      </Col>
      </Row>
      </Container>
         <Footer />
         </Fragment>
     
    );
  };
  
 

export default Employeer


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
      background: #24a0ed;
      color: white;
      border: none;
    }
  }
`;