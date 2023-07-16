import React from 'react'
import "../../styles/ChooseUs.css";
import ChooseImg1 from "../../assets/images/choose-img-1.png"
import ChooseImg2 from "../../assets/images/choose-img-2.png"
import ChooseImg3 from "../../assets/images/choose-img-3.png"


export default function chooseUs() {
  return (
    <>
       <section className="sec-why-choose">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
              <div className="sec-title">
                <h2>Why Choose Us</h2>
                <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet maximus elementum. Praesent eu mi euismod neque commodo volutpat. Suspendisse id ipsum vel mauris consectetur aliquam eu ac augue.</p>
              </div>
            </div>
          </div>
          <div className="choose-box">
            <div className="row justify-content-center">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                    <div className="card-box">
                      <div className="img-box">
                        <img className="img-fluid" src={ChooseImg1} />
                      </div>
                      <h6>01</h6>
                      <h2>No Platform Fee</h2>
                      <ul>
                        <li>No setup or monthly fees.</li>
                        <li>No contract locks.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                    <div className="card-box">
                      <div className="img-box">
                        <img className="img-fluid" src={ChooseImg2} />
                      </div>
                      <h6>02</h6>
                      <h2>Lorem Ipsum dolor</h2>
                      <ul>
                        <li>Lorem Ipsum dolor sit amet.</li>
                        <li> Lorem Ipsum dolor sit amet.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                    <div className="card-box">
                      <div className="img-box">
                        <img className="img-fluid" src={ChooseImg3} />
                      </div>
                      <h6>03</h6>
                      <h2>Lorem Ipsum dolor</h2>
                      <ul>
                        <li>Lorem Ipsum dolor sit amet.</li>
                        <li>Lorem Ipsum dolor sit amet.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                    <div className="card-box">
                      <div className="img-box">
                        <img className="img-fluid" src={ChooseImg1} />
                      </div>
                      <h6>04</h6>
                      <h2>No Platform Fee</h2>
                      <ul>
                        <li>No setup or monthly fees.</li>
                        <li>No contract locks.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                    <div className="card-box">
                      <div className="img-box">
                        <img className="img-fluid" src={ChooseImg2} />
                      </div>
                      <h6>05</h6>
                      <h2>Lorem Ipsum dolor</h2>
                      <ul>
                        <li>Lorem Ipsum dolor sit amet.</li>
                        <li> Lorem Ipsum dolor sit amet.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                    <div className="card-box">
                      <div className="img-box">
                        <img className="img-fluid" src={ChooseImg3} />
                      </div>
                      <h6>06</h6>
                      <h2>Lorem Ipsum dolor</h2>
                      <ul>
                        <li>Lorem Ipsum dolor sit amet.</li>
                        <li>Lorem Ipsum dolor sit amet.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
