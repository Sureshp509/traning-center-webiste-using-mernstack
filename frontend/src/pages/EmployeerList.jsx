import React, { useEffect, useState,Fragment } from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import Footer from '../components/Footer/Footer';
import styled from 'styled-components';

const EmployeerList = () => {
  const [employeerData, setEmployeerData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/employeers');
        const data = await response.json();
        setEmployeerData(data);
      } catch (error) {
        console.error('Error fetching employeer data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Fragment>
    <Container>
      <Row>
        <Col>
          <h2>Employeer Data</h2>
          <TableContainer>
            <Table>
              <thead>
                <tr>
                  <th>Company Name</th>
                  <th>HR Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Requirement</th>
                  <th>Job Description</th>
                </tr>
              </thead>
              <tbody>
                {employeerData.map((employeer) => (
                  <tr key={employeer._id}>
                    <td>{employeer.company_name}</td>
                    <td>{employeer.hr_name}</td>
                    <td>{employeer.employeer_email}</td>
                    <td>{employeer.employeer_mobile}</td>
                    <td>{employeer.requirement}</td>
                    <td>{employeer.jd}</td>
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

export default EmployeerList;

const TableContainer = styled.div`
 
  overflow: auto;
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
