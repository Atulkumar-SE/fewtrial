import React from "react";

function TopJobCategories() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide topjob_main_container"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner topjob_slide_container">
          <div className="carousel-item active topjob_slide1">
            <img
              src={process.env.PUBLIC_URL + "/images/bg-call.svg"}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item topjob_slide2">
            {/* <img src={process.env.PUBLIC_URL+"/images/bg-call.svg"} className="d-block w-100" alt="..." /> */}
            <div className="topjob_items">
              <div className="card" style={{ width: "18rem" }}>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">An item</li>
                  <li className="list-group-item">A second item</li>
                  <li className="list-group-item">A third item</li>
                </ul>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">An item</li>
                  <li className="list-group-item">A second item</li>
                  <li className="list-group-item">A third item</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="carousel-item topjob_slide3">
            <img
              src={process.env.PUBLIC_URL + "/images/bg-call.svg"}
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default TopJobCategories;
