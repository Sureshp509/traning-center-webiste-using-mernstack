import React, { Fragment, useState } from 'react';
import Footer from '../Footer/Footer';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';

const Employeer = () => {
  const [formData, setFormData] = useState({
    company_name: '',
    hr_name: '',
    employeer_email: '',
    employeer_mobile: '',
    requirement: '',
    jd: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/employeers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit data');
      }

      alert('Data submitted successfully!');
      setFormData({
        company_name: '',
        hr_name: '',
        employeer_email: '',
        employeer_mobile: '',
        requirement: '',
        jd: '',
      });
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit data');
    }
  };

  return (
    <Fragment>
      <Container>
        <Row>
          <Col lg="5" md="5" className="m-auto">
            <h2>Employeer</h2>
            <StyledContactForm>
              <form onSubmit={handleSubmit}>
                <label>Company Name</label>
                <input
                  type="text"
                  name="company_name"
                  value={formData.company_name}
                  onChange={handleChange}
                  required
                />
                <label>HR Name</label>
                <input
                  type="text"
                  name="hr_name"
                  value={formData.hr_name}
                  onChange={handleChange}
                  required
                />
                <label>Email</label>
                <input
                  type="email"
                  name="employeer_email"
                  value={formData.employeer_email}
                  onChange={handleChange}
                  required
                />
                <label>Mobile</label>
                <input
                  type="number"
                  name="employeer_mobile"
                  value={formData.employeer_mobile}
                  onChange={handleChange}
                  required
                />
                <label>Requirement</label>
                <input
                  type="text"
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleChange}
                />
                <label>Job Description</label>
                <textarea
                  name="jd"
                  value={formData.jd}
                  onChange={handleChange}
                />
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

export default Employeer;

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

    input[type='submit'] {
      margin-top: 2rem;
      cursor: pointer;
      background: #24a0ed;
      color: white;
      border: none;
    }
  }
`;
