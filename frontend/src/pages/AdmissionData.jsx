import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import Footer from '../components/Footer/Footer';

const AdmissionData = () => {
  const [admissions, setAdmissions] = useState([]);

  useEffect(() => {
    const fetchAdmissions = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/admissions');
        if (!response.ok) {
          throw new Error('Failed to fetch admissions data');
        }
        const data = await response.json();
        setAdmissions(data);
      } catch (error) {
        console.error('Error fetching admissions data:', error);
      }
    };

    fetchAdmissions();
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col lg="12" className="mt-5">
            <h2>Admission List</h2>
            <Table striped>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Course</th>
                </tr>
              </thead>
              <tbody>
                {admissions.map((admission) => (
                  <tr key={admission._id}>
                    <td>{admission.name}</td>
                    <td>{admission.email}</td>
                    <td>{admission.mobile}</td>
                    <td>{admission.course}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default AdmissionData;
