import React,{ Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../assests/pic/1.png";
import courseImg2 from "../assests/pic/2.png";
import courseImg3 from "../assests/pic/3.png";
import courseImg4 from "../assests/pic/4.png";
import courseImg5 from "../assests/pic/5.png";
import courseImg6 from "../assests/pic/6.png";
import courseImg7 from "../assests/pic/7.png";
import courseImg8 from "../assests/pic/8.png";
import courseImg9 from "../assests/pic/9.png";
import courseImg10 from "../assests/pic/10.png";
import courseImg11 from "../assests/pic/11.png";
import courseImg12 from "../assests/pic/12.png";
import courseImg13 from "../assests/pic/13.png";
import "../components/Courses-section/courses.css";
import CourseCard from '../components/Courses-section/CourseCard';

const coursesData = [
    {
      id: "01",
      title: "Cybersecurity",
      lesson: 12,
      students: 12.5,
      rating: 5.9,
      imgUrl: courseImg1,
    },
  
    {
      id: "02",
      title: "AWS",
      lesson: 12,
      students: 12.5,
      rating: 5.9,
      imgUrl: courseImg2,
    },
  
    {
      id: "03",
      title: "Java",
      lesson: 12,
      students: 12.5,
      rating: 5.9,
      imgUrl: courseImg3,
    },
    {
        id: "04",
        title: "Python",
        lesson: 12,
        students: 12.5,
        rating: 5.9,
        imgUrl: courseImg4,
      },
    
      {
        id: "05",
        title: "Salesforce",
        lesson: 12,
        students: 12.5,
        rating: 5.9,
        imgUrl: courseImg5,
      },
    
      {
        id: "06",
        title: "PowerBI",
        lesson: 12,
        students: 12.5,
        rating: 5.9,
        imgUrl: courseImg6,
      },
      {
        id: "07",
        title: "Blockchain",
        lesson: 12,
        students: 12.5,
        rating: 5.9,
        imgUrl: courseImg7,
      },
    
      {
        id: "08",
        title: "Testing",
        lesson: 12,
        students: 12.5,
        rating: 5.9,
        imgUrl: courseImg8,
      },
    
      {
        id: "09",
        title: ".Net",
        lesson: 12,
        students: 12.5,
        rating: 5.9,
        imgUrl: courseImg9,
      },
      {
        id: "10",
        title: "AngularJs",
        lesson: 12,
        students: 12.5,
        rating: 5.9,
        imgUrl: courseImg10,
      },
    
      {
        id: "11",
        title: "NodeJs",
        lesson: 12,
        students: 12.5,
        rating: 5.9,
        imgUrl: courseImg11,
      },
    
      {
        id: "12",
        title: "ReactJs",
        lesson: 12,
        students: 12.5,
        rating: 5.9,
        imgUrl: courseImg12,
      },
      {
        id: "13",
        title: "Digital Marketing",
        lesson: 12,
        students: 12.5,
        rating: 5.9,
        imgUrl: courseImg13,
      },
    
  ];

const AllCourses = () => {
  return (
    <Fragment>
  <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Popular Courses</h2>
                {/* <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  consequatur libero quod voluptatibus ullam quia quas, vitae
                  voluptatem recusandae reprehenderit!
                </p> */}
              </div>

              {/* <div className="w-50 text-end">
                <button className="btn">See All</button>
              </div> */}
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
   
    <Footer />
    </Fragment>
  )
}

export default AllCourses