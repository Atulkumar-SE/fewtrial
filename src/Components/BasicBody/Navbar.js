import React, { useState } from "react";
import RegistrationForm from "../Login & Registration form/RegistrationForm";
import "./Navbar.css";


const Navbar = () => {
  
  function Reg_form(){
    alert("hello")
     
  }
  const [showMenubtn, setShowMenubtn] = useState(false);
  return (
    <>
      <nav className="main_nav">
        {/*--------------------------Logo--------------------------- */}
        <div className="logo">
          <img src={process.env.PUBLIC_URL + "/images/logo.svg"} alt="Logo" />
          <span className="few">Few</span>
          <span className="work">work</span>
        </div>
        {/*---------------------------Search bar-------------------- */}
        <div className="search_bar">
          <input
            type="text"
            placeholder="Job Title, Keywords or Company"
            className="search_bar_textarea"
          />
          <button type="submit" className="search_icon">
            <img src={process.env.PUBLIC_URL + "/images/search.svg"} alt="" />
          </button>
        </div>
        {/*-----------------------------Menu list--------------------- */}
        <div
          className={showMenubtn ? "menu_list mobile_menu_list" : "menu_list"}
          id="Mob_menu_list"
        >
          <ul className="mobile_menu_list_content">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Job Reference</a>
            </li>
            <li>
              <a href="">Make/Edit Resume</a>
            </li>
            <li>
              <a href="">Latest Job</a>
            </li>
            <li className="mobile_user_account">
              <a href="" onClick={()=> Reg_form(RegistrationForm)}>User Account</a>
            </li>
          </ul>
        </div>
        {/*-------------------------User Account----------------------- */}
        <div className="user">
          <img
            src={process.env.PUBLIC_URL + "/images/user.svg"}
            alt="User"
            className="user_icon"
          />
          <a href="#" onClick={() => setShowMenubtn(!showMenubtn)}>
            <img src={process.env.PUBLIC_URL + "/images/menu.svg"} alt="menu" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
