import React, { Fragment, useState } from 'react';
import Footer from '../Footer/Footer';
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";

const Jobseeker = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_mobile: '',
    user_education: '',
    user_passout: '',
    user_resume: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      user_resume: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const response = await fetch('http://localhost:5000/api/jobseekers', {
        method: 'POST',
        body: data,
      });

      if (!response.ok) {
        throw new Error('Failed to add job seeker');
      }

      alert('Job seeker added successfully!');
      setFormData({
        user_name: '',
        user_email: '',
        user_mobile: '',
        user_education: '',
        user_passout: '',
        user_resume: null
      });
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to add job seeker');
    }
  };

  return (
    <Fragment>
      <Container>
        <Row>
          <Col lg="5" md="5" className="m-auto">
            <h2>Job Seeker</h2>
            <StyledContactForm>
              <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="user_name" value={formData.user_name} onChange={handleChange} required />
                <label>Email</label>
                <input type="email" name="user_email" value={formData.user_email} onChange={handleChange} required />
                <label>Mobile</label>
                <input type="number" name="user_mobile" value={formData.user_mobile} onChange={handleChange} required />
                <label>Education</label>
                <input type="text" name="user_education" value={formData.user_education} onChange={handleChange} required />
                <label>Passout Year</label>
                <input type="number" name="user_passout" value={formData.user_passout} onChange={handleChange} required />
                <label>Upload Resume</label>
                <input type="file" name="user_resume" onChange={handleFileChange} required />
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

export default Jobseeker;

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
