import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";
import "../styles/howitworks.css"
import VideoBg from "../assets/images/howitworks-video.png"
import VideoIcon from "../assets/images/howitworks-video-icon.png"
import Crowdfunding1 from "../assets/images/howitworks-crowdfunding1.png"
import Crowdfunding2 from "../assets/images/howitworks-crowdfunding2.png"
import Crowdfunding3 from "../assets/images/howitworks-crowdfunding3.png"
import FaqIcon from "../assets/images/howitworks-faq-icon.png"


function HowItWorkspage() {
    return (
        <>
            <Header />
            <section className="howitworks-banner">
                <div className="container">
                    <div className="howitworks-banner-cnt text-center">
                        <h4>How it works?</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                    </div>
                </div>
            </section>


            <section className="howitworks-video">
                <div className="container">
                    <div className="howitworks-video-cnt">
                        <h4 className="howitworks-heading">Watch the video</h4>
                        <div className="howitworks-video-wrap">
                            <img src={VideoBg} />
                            <a href="javascript:;"><img src={VideoIcon} /></a>
                        </div>
                        <h4 className="howitworks-heading">Know more about Crowdfunding</h4>
                    </div>
                </div>
            </section>


            <section className="howitworks-crowdfunding">
                <div className="container">
                    <div className="howitworks-sec-heading text-center">
                        <h2>What is Crowdfunding</h2>
                    </div>
                </div>
                <div className="howitworks-crowdfunding-inner-sec">
                    <div className="howitworks-crowdfunding-inner-img-wrap">
                        <div className="row align-items-center">
                            <div className="col-md-4">
                                <img src={Crowdfunding1} />
                            </div>
                            <div className="col-md-4">
                                <img src={Crowdfunding2} />
                            </div>
                            <div className="col-md-4">
                                <img src={Crowdfunding3} />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <p>
                            <span>Crowdfunding</span> is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                    </div>
                </div>
            </section>


            <section className="howitworks-steps">
                <div className="container">
                    <h4 className="howitworks-heading">Follow these steps to start today</h4>
                    <div className="howitworks-steps-inner-wrap">
                        <div className="howitworks-steps-inner-wrap-head">
                            <ul>
                                <li><h6>1</h6></li>
                                <li><h6>2</h6></li>
                                <li><h6>3</h6></li>
                            </ul>
                        </div>
                        <div className="howitworks-steps-inner-wrap-card">
                            <div className="row">
                                <div className="col-md-4">
                                    <h5>Start with the basics</h5>
                                    <p>Set your goal and location</p>
                                    <div className="howitworks-steps-inner-wrap-card-inner">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                        <div className="howitworks-steps-inner-wrap-card-inner-hover">
                                            <a href="javascript:;">Watch video</a>
                                            <a href="javascript:;">Watch video</a>
                                        </div>
                                    </div>
                                    <a className="howitworks-show-hover" href="">Start Fundraising</a>
                                </div>
                                <div className="col-md-4">
                                    <h5>Create your Story</h5>
                                    <p>We’ll guide you along the way</p>
                                    <div className="howitworks-steps-inner-wrap-card-inner">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                        <div className="howitworks-steps-inner-wrap-card-inner-hover">
                                            <a href="javascript:;">Watch video</a>
                                            <a href="javascript:;">Watch video</a>
                                        </div>
                                    </div>
                                    <a className="howitworks-show-hover" href="">Start Fundraising</a>
                                </div>
                                <div className="col-md-4">
                                    <h5>Share with friends</h5>
                                    <p>We make this easy too</p>
                                    <div className="howitworks-steps-inner-wrap-card-inner">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                        <div className="howitworks-steps-inner-wrap-card-inner-hover">
                                            <a href="javascript:;">Watch video</a>
                                            <a href="javascript:;">Watch video</a>
                                        </div>
                                    </div>
                                    <a className="howitworks-show-hover" href="">Start Fundraising</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="howitworks-faq">
                <div className="container">
                    <h4 className="howitworks-heading">Frequently Asked Questions</h4>

                    <div className="howitworks-faq-inner-wrap">
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <img src={FaqIcon} /> Question no. 01
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <img src={FaqIcon} /> Question no. 02
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <img src={FaqIcon} /> Question no. 03
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========== footer section ================ */}
            <Footer />
        </>
    )
}

export default HowItWorkspage