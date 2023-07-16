import React from "react";
import "../../styles/MainBanner.css";
import bannerimg1 from "../../assets/images/banner-img-1.png";
import bannerimg2 from "../../assets/images/banner-img-2.png";
import bannerimg3 from "../../assets/images/banner-img-3.png";
import bannerimg4 from "../../assets/images/banner-img-4.png";
import SmileIcon from "../../assets/images/smile-icon.png";

export default function mainbanner() {
  return (
    <>
      <section className="Main-banner">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-12 col-md-9 col-lg-8 col-xl-8 col-xxl-8">
              <div className="content-box">
                <h2>Let’s Build a Great future for others together</h2>
                <p className="para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur aliquet maximus elementum. Praesent eu mi euismod
                  neque commodo volutpat. Suspendisse id ipsum vel mauris
                  consectetur.
                </p>
                <ul className="banner-btn">
                  <li>
                    <a className="donate-btn" href="javascript:;">
                      Donate Now
                    </a>
                  </li>
                  <li>
                    <a className="video-btn" href="javascript:;">
                      Watch Video
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lower-box">
            <div className="row align-items-end">
              <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <div className="img-card">
                  <div className="img-box">
                    <img src={bannerimg1} alt="" className="img-fluid" />
                  </div>
                  <div className="text-box-1">
                    <div className="row align-items-center">
                      <div className="col-4">
                      <img src={SmileIcon} alt="" className="img-fluid" />
                      </div>
                      <div className="col-8">
                          <p className="short-text">Everybody deserve to live a carefree life</p>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <div className="img-card">
                  <div className="img-box">
                    <img src={bannerimg2} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <div className="img-card">
                  <div className="img-box">
                    <img src={bannerimg3} alt="" className="img-fluid" />
                  </div>
                  <div className="text-box-2">
                    <div className="row">
                      <div className="col-12">
                          <p className="short-text">Empowering the underprivileged, one step at a time.</p>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                <div className="img-card">
                  <div className="img-box">
                    <img src={bannerimg4} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
