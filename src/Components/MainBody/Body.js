import React from 'react'
import ApplyProcess from '../LandingPage/ApplyProcess';
import Banner from '../LandingPage/Banner';
import HighPayingCompanies from '../LandingPage/HighPayingCompanies';
import RegistrationForm from '../Login & Registration form/RegistrationForm';
import './Body.css'
function Body() {
  return (

    <>
    <ApplyProcess/>

    <RegistrationForm/>
    <Banner/>
    <HighPayingCompanies/>
    </>
  )
}

export default Body;