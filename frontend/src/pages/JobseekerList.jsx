import React, { useEffect, useState,Fragment } from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import Footer from '../components/Footer/Footer';
import styled from 'styled-components';

const JobseekerList = () => {
  const [jobseekerData, setJobseekerData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/jobseekers');
        const data = await response.json();
        setJobseekerData(data);
      } catch (error) {
        console.error('Error fetching job seeker data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Fragment>
    <Container>
      <Row>
        <Col>
          <h2>Job Seeker Data</h2>
          <TableContainer>
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Education</th>
                  <th>Passout Year</th>
                  <th>Resume</th>
                </tr>
              </thead>
              <tbody>
                {jobseekerData.map((jobseeker) => (
                  <tr key={jobseeker._id}>
                    <td>{jobseeker.user_name}</td>
                    <td>{jobseeker.user_email}</td>
                    <td>{jobseeker.user_mobile}</td>
                    <td>{jobseeker.user_education}</td>
                    <td>{jobseeker.user_passout}</td>
                    <td>
                    <a href={`http://localhost:5000${jobseeker.user_resume}`} target="_blank" rel="noopener noreferrer">
                          View Resume
                        </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </TableContainer>
        </Col>
      </Row>
     
    </Container>
     <Footer />
     </Fragment>
  );
};

export default JobseekerList;

const TableContainer = styled.div`
  max-height: 400px; /* Adjust the height as needed */
  overflow-y: auto;
  margin-top: 20px;

  table {
    width: 100%;
    border-collapse: collapse;

    th, td {
      padding: 8px;
      text-align: left;
      border: 1px solid #ddd;
    }

    th {
      background-color: #f2f2f2;
    }
  }
`;
