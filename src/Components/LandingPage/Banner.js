import React from 'react'
import './LandingPage.css'

function banner() {
  return (
    <>
        <div className='banner'> 
        <img src={process.env.PUBLIC_URL+"/images/banner.svg"} className="web_banner" alt="banner" />
        <img src={process.env.PUBLIC_URL+"/images/Warning.svg"} className="mob_banner" alt="banner" />
        </div>
    </>
  )
}

export default banner;