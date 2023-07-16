import React from "react";
import "../../styles/donateNow.css"
import Donate1 from "../../assets/images/donate-1.png"
import Donate2 from "../../assets/images/donate-2.png"
import Donate3 from "../../assets/images/donate-3.png"
import arrow1 from "../../assets/images/Arrow-1.png"

export default function donateNow() {
  return (
    <>
      <section className="case-study">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
              <div className="donate-box">
                <div className="img-box">
                  <img className="img-fluid w-100" src={Donate1} />
                  <a className="donate-btn" href="javascript:;">
                    Donate Now
                  </a>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow={75}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <ul className="bar-list">
                  <li>Raised 100K</li>
                  <li>90%</li>
                </ul>
                <div className="lower-content">
                  <h6>Value # 01</h6>
                  <p className="para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur aliquet maximus elementum. Praesent eu mi euismod
                    neque commodo volutpat. Suspendisse
                  </p>
                  <div className="arrow-right">
                    <a href="javascript:;">
                      <img src={arrow1} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
              <div className="donate-box">
                <div className="img-box">
                  <img className="img-fluid w-100" src={Donate2} />
                  <a className="donate-btn" href="javascript:;">
                    Donate Now
                  </a>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow={75}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <ul className="bar-list">
                  <li>Raised 100K</li>
                  <li>90%</li>
                </ul>
                <div className="lower-content">
                  <h6>Value # 02</h6>
                  <p className="para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur aliquet maximus elementum. Praesent eu mi euismod
                    neque commodo volutpat. Suspendisse
                  </p>
                  <div className="arrow-right">
                    <a href="javascript:;">
                    <img src={arrow1} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
              <div className="donate-box">
                <div className="img-box">
                  <img className="img-fluid w-100" src={Donate3} />
                  <a className="donate-btn" href="javascript:;">
                    Donate Now
                  </a>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow={75}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <ul className="bar-list">
                  <li>Raised 100K</li>
                  <li>90%</li>
                </ul>
                <div className="lower-content">
                  <h6>Value # 03</h6>
                  <p className="para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur aliquet maximus elementum. Praesent eu mi euismod
                    neque commodo volutpat. Suspendisse
                  </p>
                  <div className="arrow-right">
                    <a href="javascript:;">
                    <img src={arrow1} alt="" />
                    </a>
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
