import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="d-flex justify-content-between main_header">
        {/* <div className="d-flex "> */}
        <div className="btn btn_container">
          <img
            src={process.env.PUBLIC_URL + "/images/office bag.svg"}
            alt="location"
          />
          <button type="button" className="btn btn-light btn1">
            JobType
          </button>
          <button
            type="button"
            className="btn btn-light dropdown-toggle dropdown-toggle-split btn2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-bs-reference="parent"
          >
            <span className="visually-hidden"> Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu toggle_menu_item">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Separated link
              </a>
            </li>
          </ul>
        </div>
        <div className="btn btn_container">
          <img
            src={process.env.PUBLIC_URL + "/images/building.svg"}
            alt="building"
          />
          <button type="button" className="btn btn-light btn1 city">
            City
          </button>
          <button
            type="button"
            className="btn btn-light dropdown-toggle dropdown-toggle-split btn2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-bs-reference="parent"
          >
            <span className="visually-hidden"> Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Separated link
              </a>
            </li>
          </ul>
        </div>
        <div className="btn btn_container">
          <img
            src={process.env.PUBLIC_URL + "/images/i-location.svg"}
            alt="location"
          />
          <button type="button" className="btn btn-light btn1">
            Area/Location
          </button>
          <button
            type="button"
            className="btn btn-light dropdown-toggle dropdown-toggle-split btn2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-bs-reference="parent"
          >
            <span className="visually-hidden"> Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Separated link
              </a>
            </li>
          </ul>
        </div>
        <div className="btn btn_container">
          <img src={process.env.PUBLIC_URL + "/images/i-chat.svg"} alt="chat" />
          <button type="button" className="btn btn-light btn1">
            Interviews
          </button>
          <button
            type="button"
            className="btn btn-light dropdown-toggle dropdown-toggle-split btn2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-bs-reference="parent"
          >
            <span className="visually-hidden"> Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Separated link
              </a>
            </li>
          </ul>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default Header;
