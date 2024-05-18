import React,{Fragment} from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "reactstrap";

const Admin = () => {
  return (
   <Fragment>
    <Container>
        <Row>
            <Col lg="4">
    <Link to="/jobseekerdata">
          <button className="btn">Job Seekers</button>
      </Link> 
      </Col>
      <Col lg="4">
      
              <Link to="/employeerdata">
                  <button className="btn">Employeers</button>
              </Link>
              </Col>
              <Col lg="4">
              <Link to="/admissiondata">
                  <button className="btn">Admissions</button>
              </Link>
              </Col>
          </Row>
          </Container>
          
          </Fragment>
    
  )
}

export default Admin