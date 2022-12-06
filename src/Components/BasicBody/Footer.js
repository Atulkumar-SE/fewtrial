import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <>
      <div className="card footer_container">
        <div className="card-group ">
          <div
            className="card-body text-center footer_logo_icon"
            style={{ width: "20rem" }}
          >
            <a href="#" className="card-link ">
              <img
                src={process.env.PUBLIC_URL + "/images/footerlogo.svg"}
                alt="Logo"
              />
            </a>
            <div>
              <p className="footer_fewwork">Fewwork</p>
              {/* <a className="footer_fewwork">
                Fewwork
              </a> */}
            </div>
            <div className="social_media_link">
              <ul>
                <li>
                  <img
                    src={process.env.PUBLIC_URL + "/images/facebook.svg"}
                    alt="facebook"
                  />
                </li>
                <li>
                  <img
                    src={process.env.PUBLIC_URL + "/images/linkedin.svg"}
                    alt="facebook"
                  />
                </li>
                <li>
                  <img
                    src={process.env.PUBLIC_URL + "/images/instagram.svg"}
                    alt="facebook"
                  />
                </li>
                <li>
                  <img
                    src={process.env.PUBLIC_URL + "/images/youtube.svg"}
                    alt="facebook"
                  />
                </li>
                <li>
                  <img
                    src={process.env.PUBLIC_URL + "/images/whatsapp.svg"}
                    alt="facebook"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="card-body text_container" style={{ width: "13rem" }}>
            <h5>Fewwork</h5>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Recruiters</li>
              <li>Job Seekers</li>
              <li>Media</li>
              <li>For startup Hiring</li>
            </ul>
          </div>
          <div className="card-body text_container " style={{ width: "13rem" }}>
            <h5>Legal</h5>
            <ul>
              <li>Privacy Policy</li>
              <li>Term & Conditions</li>
              <li>Product & Price</li>
              <li>Refund Policy</li>
            </ul>
          </div>
          <div
            className="card-body text_container contact_us"
            style={{ width: "13rem" }}
          >
            <h5>Contact Us</h5>
            <ul>
              <li>
                <img
                  src={process.env.PUBLIC_URL + "/images/call.svg"}
                  alt="email"
                />
                0123456789
              </li>
              <li>
                {" "}
                <img
                  src={process.env.PUBLIC_URL + "/images/mail.svg"}
                  alt="mail"
                />{" "}
                xyz@gmail.com
              </li>
              <li>
                {" "}
                <img
                  src={process.env.PUBLIC_URL + "/images/location.svg"}
                  alt="Location"
                />{" "}
                Noida, India
              </li>
              <li>
                <div className="footer_search_bar">
                  <input
                    type="text"
                    placeholder="Location.."
                    className="search_bar_textarea"
                  />
                  <button type="submit" className="search_icon">
                    <img
                      src={process.env.PUBLIC_URL + "/images/down arrow.svg"}
                      alt="down"
                    />
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="card text-center copyright" style={{ height: "3rem" }}>
          copyright 2022, Fewwork all right reserved.
        </div>
      </div>
    </>
  );
}

export default Footer;
