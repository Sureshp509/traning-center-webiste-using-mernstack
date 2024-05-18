import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/about-us.png";
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="5" md="5">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
          <Col lg="1" md="1">
            
          </Col>
          <Col lg="6" md="6">
            <div className="about__content">
              <h2>About Us</h2>
              <p>
 MNS Solutions has been immensely successful in creating a global network of highly adept intelligent workforce that can help a company achieve their mission-critical projects and goals.
 
 
 Here is where MNS Solutions comes into play to bring the best-suited talent for your company.
  
 All
 
 
 
 our resources are multifaceted and come with years of commended performance. The project completion rate of our consultants is 97%, and 3% is attributed to unforeseen situations like project shutdown, health issues, relocation, etc. We appreciate the experience that our candidates bring from various industries, and we like to leverage it for the mutual benefit of both clients and candidates. We specialize in healthcare, tech, retail, and startup hiring.
  
 
 We take pride in introducing ourselves as one of the fast-growing and most trusted business partners of some very affluent corporate companies where we were able to place brilliant candidates in the shortest possible time.
  
              </p>
             

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={25} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Completed Projects</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={12} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">Students Around World</p>
                  </div>
                </div>

                {/* <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={95} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">Ideas Raised Funds</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={5} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Categories Served</p>
                  </div> 
                </div>*/}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
