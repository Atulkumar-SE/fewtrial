import React from "react";
import "./LandingPage.css";

function ApplyProcess() {
  return (
    <>
      <div className="apply_process_container">
        <h2>How To Apply A Job In Fewwork</h2>
        <div className="card-group ">
          <div className="card ">
            <div className="card-body card_container">
              <img
                src={process.env.PUBLIC_URL + "/images/bg-form.svg"}
                className="apply_icon"
                alt="form"
              />
              <div className="text">
                <h5 className="card-title">Complete Your Registration</h5>
              </div>
            </div>
          </div>

          <div className="arrow" style={{ width: "5rem" }}>
            <img
              src={process.env.PUBLIC_URL + "/images/arrow-left.svg"}
              className="arrow_right"
              alt="arrow"
            />
          </div>
          <div className="card">
            <div className="card-body card_container">
              <img
                src={process.env.PUBLIC_URL + "/images/bg-search.svg"}
                className="apply_icon"
                alt="form"
              />
              <h5 className="card-title">Apply a Job</h5>
            </div>
          </div>

          <div className=" arrow" style={{ width: "5rem" }}>
            <img
              src={process.env.PUBLIC_URL + "/images/arrow-left.svg"}
              className="arrow_right"
              alt="arrow"
            />
          </div>
          <div className="card">
            <div className="card-body card_container">
              <img
                src={process.env.PUBLIC_URL + "/images/bg-call.svg"}
                className="apply_icon"
                alt="form"
              />
              <h5 className="card-title">Contact to HR directly</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApplyProcess;
