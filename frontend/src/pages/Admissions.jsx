import React,{ Fragment, useState  } from 'react'
import Footer from '../components/Footer/Footer';

import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";

const Admissions = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    course: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/admissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to add user');
      }

      alert('Admission added successfully!');
      setFormData({ name: '', email: '', mobile: '', course: '' });
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to add user');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
    return (
        <Fragment>
            <Container>
            <Row>
          <Col lg="5" md="5" className="m-auto">
            <h2>Admissions</h2>
             <StyledContactForm>
        <form  onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          <label>Mobile</label>
          <input type="number" name="mobile" value={formData.mobile} onChange={handleChange} />
          <label>Select Course</label>
          <select name="course" value={formData.course} onChange={handleChange}>
            <option value="">Select</option>
            <option value="inter">Intermediate</option>
            <option value="degree">Degree</option>
            <option value="bba">BBA</option>
            <option value="btech">B.Tech</option>
            <option value="mca">MCA</option>
            <option value="mba">MBA</option>
          </select>
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
  
 

export default Admissions


// npm i @emailjs/browser


// Styles
const StyledContactForm = styled.div`
  

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input,select {
      width: 100%;
      height: 35px;
      padding: 5px;
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