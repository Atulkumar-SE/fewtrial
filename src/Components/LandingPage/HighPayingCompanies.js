import React from "react";
import "./LandingPage.css";

function HighPayingCompanies() {
  return (
    // style={{ width: "20rem" }}
    <>
      <div id="carouselExampleControls" className="carousel slide carousel_main_container" data-bs-ride="carousel">
        <h2>High Paying Companies</h2>
        <div className="carousel-inner carousel_item">
          <div className="carousel-item active">
          <div className="img_container">
          <img
                src={process.env.PUBLIC_URL + "/images/CompanyLogo/hpc1.svg"}
                className="hpc_img"
                alt="form"
              />
          </div>
          <div className="img_container ic">
          <img
                src={process.env.PUBLIC_URL + "/images/CompanyLogo/hpc2.svg"}
                className="hpc_img"
                alt="form"
              />
          </div>
          <div className="img_container">
          <img
                src={process.env.PUBLIC_URL + "/images/CompanyLogo/hpc3.svg"}
                className="hpc_img"
                alt="form"
              />
          </div>
          <div className="img_container ic">
          <img
                src={process.env.PUBLIC_URL + "/images/CompanyLogo/hpc4.svg"}
                className="hpc_img"
                alt="form"
              />
          </div>
          </div>
          <div className="carousel-item">
          <div className="img_container">
          <img
                src={process.env.PUBLIC_URL + "/images/CompanyLogo/hpc5.svg"}
                className="hpc_img"
                alt="form"
              />
          </div>
          <div className="img_container ic">
          <img
                 src={process.env.PUBLIC_URL + "/images/CompanyLogo/hpc6.svg"}
                className="hpc_img"
                alt="form"
              />
          </div>
          <div className="img_container">
          <img
                 src={process.env.PUBLIC_URL + "/images/CompanyLogo/hpc7.svg"}
                className="hpc_img"
                alt="form"
              />
          </div>
          <div className="img_container ic">
          <img
                 src={process.env.PUBLIC_URL + "/images/CompanyLogo/hpc8.svg"}
                className="hpc_img"
                alt="form"
              />
          </div>
          </div>
          <div className="carousel-item">
          <div className="img_container">
          <img
                 src={process.env.PUBLIC_URL + "/images/CompanyLogo/hpc9.svg"}
                className="hpc_img"
                alt="form"
              />
          </div>
          <div className="img_container ic">
          <img
                 src={process.env.PUBLIC_URL + "/images/CompanyLogo/hpc10.svg"}
                className="hpc_img"
                alt="form"
              />
          </div>
          <div className="img_container">
          <img
                 src={process.env.PUBLIC_URL + "/images/CompanyLogo/hpc11.svg"}
                className="hpc_img"
                alt="form"
              />
          </div>
          <div className="img_container ic">
          <img
                 src={process.env.PUBLIC_URL + "/images/CompanyLogo/hpc12.svg"}
                className="hpc_img"
                alt="form"
              />
          </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    
    </>
  );
}

export default HighPayingCompanies;

