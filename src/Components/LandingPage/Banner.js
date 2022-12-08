import React from 'react'
import './LandingPage.css'

function banner() {
  return (
    <>
        <div className='banner'> 
        <img src={process.env.PUBLIC_URL+"/images/warning-banner.svg"} alt="banner" />
        </div>
    </>
  )
}

export default banner;