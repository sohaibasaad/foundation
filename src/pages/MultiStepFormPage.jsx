import Header from "../components/Header/header";
import FooterDashboard from "../components/Footer/footerDashboard";
import "../styles/multistepform.css";
import ProfileIcon from "../assets/images/multiform-profile.png"
import InfoIcon from "../assets/images/multiform-info.png"
import ProfileMoneyIcon from "../assets/images/multiform-profile-mony.png"
import CameraIcon from "../assets/images/multiform-camera.png"
import Step1Img from "../assets/images/multiform-step1-img.png"
import Step2Img from "../assets/images/multiform-step2-img.png"
import Step3Img from "../assets/images/multiform-step3-img.png"
import Step4Img from "../assets/images/multiform-step4-img.png"
import UploadImg1 from "../assets/images/multiform-upload-img.png"
import UploadImg2 from "../assets/images/multiform-upload-img2.png"
import { useState } from "react";
function MultiStepFormPage() {
    const [activeTab, setActiveTab] = useState('tab1');
    return (
        <>
            <Header />

            <section className="multistep-sec">
                <div className="container">
                    <div className="multistep-sec-heading">
                        <h4 className={activeTab === "tab1" ? "" : "d-none"}>Start Fundraising</h4>
                    </div>
                    <div className="multistep-form-wrap px-lg-5">
                        <div className="row align-items-stretch">
                            <div className="col-lg-auto p-0">
                                <div className="multistep-head">
                                    <ul>
                                        <li className={activeTab === "tab1" ? "active" : ""} >
                                            <div className="multistep-item">
                                                <img src={ProfileIcon} />
                                            </div>
                                        </li>
                                        <li className={activeTab === "tab2" ? "active" : ""} >
                                            <div className="multistep-item">
                                                <img src={InfoIcon} />
                                            </div>
                                        </li>
                                        <li className={activeTab === "tab3" ? "active" : ""} >
                                            <div className="multistep-item">
                                                <img src={ProfileMoneyIcon} />
                                            </div>
                                        </li>
                                        <li className={activeTab === "tab4" ? "active" : ""} >
                                            <div className="multistep-item">
                                                <img src={CameraIcon} />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col p-0">
                                <div className="multistep-form-inner-main">
                                    <div className={activeTab === "tab1" ? "" : "d-none"}>
                                        <div className="row flex-column-reverse flex-lg-row align-items-center align-items-lg-end">
                                            <div className="col-lg-6">
                                                <div className="multiform-select mb-4">
                                                    <select>
                                                        <option value="self">I am raising funds for myself</option>
                                                        <option value="someone">I am raising funds for myselfI am raising funds on the behalf of someone else</option>
                                                    </select>
                                                </div>
                                                <div className="multiform-select-inner mb-5">
                                                    <h5>I am raising funds for</h5>
                                                    <select>
                                                        <option value="Medical">Medical</option>
                                                        <option value="option2">option2</option>
                                                        <option value="option3">option3</option>
                                                    </select>
                                                </div>
                                                <div className="multiform-input mb-4">
                                                    <input type="text" placeholder="Full Name" />
                                                </div>
                                                <div className="multiform-input mb-4">
                                                    <input type="text" placeholder="Email" />
                                                </div>
                                                <div className="multiform-input mb-4">
                                                    <input type="text" placeholder="Mobile Number" />
                                                </div>
                                                <div className="multiform-input mb-4">
                                                    <input type="text" placeholder="Your own Mobile Number" />
                                                </div>
                                                <div className="multiform-input mb-4">
                                                    <input type="text" placeholder="Patient’s Contact Number" />
                                                </div>
                                                <div className="input-check">
                                                    <input type="checkbox" name="agree1" id="agree1" />
                                                    <label htmlFor="agree1">
                                                        I agree to the <a href="#">terms</a> and <a href="#">privacy policy</a>.
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 text-center text-lg-end">
                                                <div className="step-img pb-5 pb-lg-0">
                                                    <img src={Step1Img} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="step-center-text text-center mt-5 pt-5">
                                            <h5>Already have an account? <a href="#">Sign in</a>.</h5>
                                            <button className="stepMain-btn mt-4" onClick={() => { setActiveTab('tab2') }}>Continue</button>
                                        </div>
                                    </div>
                                    <div className={activeTab === "tab2" ? "" : "d-none"}>
                                        <div className="row flex-column-reverse flex-lg-row align-items-center align-items-lg-end">
                                            <div className="col-lg-6">
                                                <div className="multiform-input mb-4">
                                                    <input type="text" placeholder="Patient’s Full Name" />
                                                </div>
                                                <div className="multiform-input mb-4">
                                                    <input type="text" placeholder="CNIC" />
                                                </div>
                                                <div className="multiform-input mb-4">
                                                    <input type="text" placeholder="Marital status" />
                                                </div>
                                                <div className="multiform-input mb-4">
                                                    <input type="text" placeholder="Address" />
                                                </div>
                                                <div className="multiform-input mb-4">
                                                    <input type="text" placeholder="What is the health issue?" />
                                                </div>
                                                <div className="multiform-input mb-4">
                                                    <input type="text" placeholder="Which hospital" />
                                                </div>
                                                <div className="multiform-input mb-4">
                                                    <input type="text" placeholder="City" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 text-center text-lg-end">
                                                <div className="step-img pb-5 pb-lg-0">
                                                    <img src={Step2Img} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="step-center-text mt-5">
                                            <button className="stepMain-btn" onClick={() => { setActiveTab('tab3') }}>Continue</button>
                                        </div>
                                    </div>
                                    <div className={activeTab === "tab3" ? "" : "d-none"}>
                                        <div className="row flex-column-reverse flex-lg-row align-items-center align-items-lg-end">
                                            <div className="col-lg-6">
                                                <div className="multiform-input-title mb-5">
                                                    <label>Fundraising Title</label>
                                                    <input type="text" />
                                                </div>
                                                <div className="multiform-input mb-5">
                                                    <input type="text" placeholder="Goal Amount" />
                                                </div>
                                                <div className="input-check mb-5">
                                                    <input type="checkbox" name="agree1" id="agree1" />
                                                    <label htmlFor="agree1">
                                                        Make my fundraiser <a href="#">private</a>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 text-center text-lg-end">
                                                <div className="step-img pb-5 pb-lg-0">
                                                    <img src={Step3Img} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="step-center-text mt-5">
                                            <button className="stepMain-btn" onClick={() => { setActiveTab('tab4') }}>Continue</button>
                                        </div>
                                    </div>
                                    <div className={activeTab === "tab4" ? "" : "d-none"}>
                                        <div className="row flex-column-reverse flex-lg-row align-items-center">
                                            <div className="col-lg-6">
                                                <div className="multiform-input-file mb-5">
                                                    <label htmlFor="docs">
                                                        <h5>Please upload the following documents to increase your cause’s credibility.</h5>
                                                        <img src={UploadImg1} />
                                                    </label>
                                                    <input type="file" name="docs" id="docs" />
                                                </div>
                                                <div className="multiform-docs-list">
                                                    <ul>
                                                        <li>
                                                            <label htmlFor="docs">
                                                                <h5>Pictures of Patient’s CNIC (front and back)</h5>
                                                                <img src={UploadImg2} />
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label htmlFor="docs">
                                                                <h5>Pictures of CNIC of the person collecting these funds (front and back)</h5>
                                                                <img src={UploadImg2} />
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label htmlFor="docs">
                                                                <h5>Picture of a patient's consent form giving you authority to raise these funds</h5>
                                                                <img src={UploadImg2} />
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label htmlFor="docs">
                                                                <h5>Picture of the patient’s latest utility bill (electricity bill is preferred)</h5>
                                                                <img src={UploadImg2} />
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label htmlFor="docs">
                                                                <h5>Picture of the current doctor’s testimonial certifying that the patient is under his care</h5>
                                                                <img src={UploadImg2} />
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label htmlFor="docs">
                                                                <h5>Picture of the prescription recommending the test/medication/treatment.</h5>
                                                                <img src={UploadImg2} />
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 text-center text-lg-end">
                                                <div className="step-img pb-5 pb-lg-0">
                                                    <img src={Step4Img} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="step-center-text mt-5">
                                            <button className="stepMain-btn">Done</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FooterDashboard />
        </>
    )
}

export default MultiStepFormPage