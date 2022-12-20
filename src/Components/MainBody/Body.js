import React from 'react'
import ApplyProcess from '../LandingPage/ApplyProcess';
import Banner from '../LandingPage/Banner';
import HighPayingCompanies from '../LandingPage/HighPayingCompanies';
import TopJobCategories from '../LandingPage/TopJobCategories';
import RegistrationForm from '../Login & Registration form/RegistrationForm';
import './Body.css'
function Body() {
  return (

    <>
    <ApplyProcess/>
    <TopJobCategories/>
    <RegistrationForm/>
    <Banner/>
    <HighPayingCompanies/>
    </>
  )
}

export default Body;