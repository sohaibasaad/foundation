import React from "react";
import "../../styles/header.css"
import Logo from "../../assets/images/Logo.png"
import "@fontsource/poppins";
import { Link } from "react-router-dom";


function header() {
  return (
    <>
      <section className="main-header">
        <div className="container">
          <nav className="navbar nav-box navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#">
              <img src={Logo} alt="" className="img-fluid" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto ">
                <li className="nav-item">
                  <Link to="/home" className="nav-link active">Home</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <Link to="/howItWorks" className="nav-link">How it Works</Link>
                </li>
              </ul>
              <div className="side-btn">
                <a className="sign-btn" href="javascript:;">Sign up</a>
                <Link to="/multiStepForm" className="fund-btn">Start Fundraising</Link>
              </div>
            </div>

          </nav>
        </div>
      </section>

    </>
  );
}

export default header;
