import React from "react";
import "../../styles/header.css"
import Logo from "../../assets/images/Logo.png"
import "@fontsource/poppins"; 


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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                How it Works
                </a>
              </li>
            </ul>
            <div className="side-btn">
                <a className="sign-btn" href="javascript:;">Sign up</a>
                <a className="fund-btn" href="javascript:;">Start Fundraising</a>
            </div>
          </div>
        
      </nav>
    </div>
    </section>
   
    </>
  );
}

export default header;
