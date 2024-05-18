import React,{ Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom';
const Careers = () => {
  return (
    <Fragment>
   
    <Outlet />
    <Footer />
    </Fragment>
  )
}

export default Careers