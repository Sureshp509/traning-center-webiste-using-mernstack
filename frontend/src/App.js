import React, { useState } from 'react';
import { Container } from "reactstrap";
import Home from "./pages/Home";
import './App.css';
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Jobseeker from "./components/Jobseeker/Jobseeker";
import Employeer from './components/Employeer/Employeer';
import Careers from "./pages/Careers";
import Admissions from "./pages/Admissions";
import ContactUs from "./pages/ContactUs";
import logo from './assests/images/logo.png';

import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import AllCourses from './pages/AllCourses';
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  const closeMenus = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };
  return (
   

          <BrowserRouter>
          
        <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>
        
       
        
        <nav>
        <img src={logo} className="App-logo" alt=" MNS Solutions" />
          <ul className={menuOpen ? 'open' : ''}>
          <li>
        
            </li>
            <li>
              <Link to="/home" onClick={closeMenus}>Home</Link>
            </li>
            <li>
              <Link to="/aboutus" onClick={closeMenus}>About Us</Link>
            </li>
            <li>
              <Link to="/services" onClick={closeMenus}>Services</Link>
            </li>
            <li>
              <button className="dropdown-toggle" onClick={toggleServices}>Careers</button>
              <ul className={servicesOpen ? 'open' : ''}>
                <li><Link to="/jobseeker" onClick={closeMenus}>JobSeeker</Link></li>
                <li><Link to="/employeer" onClick={closeMenus}>Employeer</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/admissions" onClick={closeMenus}>Admissions</Link>
            </li>
            <li>
              <Link to="/contactus" onClick={closeMenus}>Contact Us </Link>
            </li>
            <li>
              <Link to="https://rzp.io/l/IJi2WctKg0" onClick={closeMenus}>Register Now </Link>
            </li>
          </ul>
        </nav>
        
        <div className={`content ${servicesOpen ? 'services-open' : ''}`}>
  <Routes>
    <Route index element={<Home />}></Route>
    <Route path="/home" element={<Home />}></Route> 
    <Route path="/aboutus" element={<AboutUs />}></Route>
    <Route path="/services" element={<Services />}></Route>
    <Route path="/careers" element={<Careers />}></Route>
    <Route path="/jobseeker" element={<Jobseeker />} />
    <Route path="/employeer" element={<Employeer />} />
    
    <Route path="/admissions" element={<Admissions />}></Route>
    <Route path="/contactus" element={<ContactUs />}></Route>
    <Route path="/allcourses" element={<AllCourses />}></Route>
  </Routes>
  </div>


  </BrowserRouter>
  
 
 
  );
}

export default App;
