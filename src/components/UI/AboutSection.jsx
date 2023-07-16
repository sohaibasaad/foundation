import React from "react";
import "../../styles/AboutSection.css";
import aboutImg from "../../assets/images/about pic.png";
import "bootstrap/dist/css/bootstrap.css";
import "@fontsource/poppins";

const AboutSection = () => {
  return (
    <section className="sec-about">
      <div className="container">
        <div className="about-box">
          <div className="sec-title">
            <h2>About Us</h2>
          </div>
          <div className="row align-items-center mb-5">
            <div className="col-12 col-sm-12 col-md-5 col-lg-4 col-xl-4 col-xxl-4">
              <div className="img-box">
                <img src={aboutImg} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-7 col-lg-8 col-xl-8 col-xxl-8">
                <div className="content-box">
                    <h4>Lorem Ipsum</h4>
                    <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet maximus elementum. Praesent eu mi euismod neque commodo volutpat. Suspendisse id ipsum vel mauris consectetur aliquam eu ac augue. Nulla sed dui eget lacus elementum tincidunt quis ac sapien. Sed at molestie metus. Mauris porttitor ullamcorper nisl, ut vehicula leo pellentesque volutpat. Proin vel posuere magna. Donec scelerisque sapien sed nulla tristique efficitur.</p>
                </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-12 col-sm-12 col-md-7 col-lg-8 col-xl-8 col-xxl-8">
                <div className="content-box">
                    <h4>Lorem Ipsum</h4>
                    <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet maximus elementum. Praesent eu mi euismod neque commodo volutpat. Suspendisse id ipsum vel mauris consectetur aliquam eu ac augue. Nulla sed dui eget lacus elementum tincidunt quis ac sapien. Sed at molestie metus. Mauris porttitor ullamcorper nisl, ut vehicula leo pellentesque volutpat. Proin vel posuere magna. Donec scelerisque sapien sed nulla tristique efficitur.</p>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-5 col-lg-4 col-xl-4 col-xxl-4">
              <div className="img-box">
                <img src={aboutImg} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
