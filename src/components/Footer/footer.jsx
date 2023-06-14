import React from "react";
import "../../styles/footer.css"
import logoimg from "../../assets/images/logoimg.png"
import { Col, Row, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "@fontsource/poppins";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="2" md="2" sm="6">
            <div className="logofooter__logo">
              <img src={logoimg} alt="" className="w-10" />
            </div>
          </Col>

          <Col lg="2" md="4" sm="6" className="link">
            <div className="link_section">
              <h5 className="footer__link-title">Quick Links</h5>
              <ul className="Links_items">
                <li>Home</li>
                <li>About Us</li>
                <li>How it Works</li>
                <li>Our Goal</li>
                <li>Why Us?</li>
              </ul>
            </div>
          </Col>

          <Col lg="2" md="4" sm="6"  className="link">
            <div className="privacy_section">
              <h5 className="footer__privacy-title">Privacy</h5>
              <ul className="Links_items">
                <li>Terms & Conditions</li>
                <li>Privacy Policies</li>
                <li>Help</li>
                <li>Support Center</li>
              </ul>
            </div>
          </Col>

          <Col lg="6" md="12" sm="12">
            <div className="buttons_section" >
              <Container>
                <Row>
                  <Col lg="4"  md="4" sm="6">
                    <p className="desription">Ready to start? Join the thousands like you finding help
                    </p>
                  </Col>
                  <Col lg="8"  md="8" sm="6">
                    <div id="buttonsContainer" >
                      <button className="_button">Start Fundraising</button>
                      <button className="_button">How It Works</button>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </Col>
        </Row>

        <div className="social_links_section">
          <div className="social_links_heading">Follow us on</div>
          <div id="links_section">
            <a href="https://www.youtube.com/c/jamesqquick" className="youtubesocial">
              <FontAwesomeIcon icon={faYoutube} size="2x" /></a>
            <a href="https://www.facebook.com/learnbuildteach/" className="facebooksocial">
              <FontAwesomeIcon icon={faFacebook} size="2x" /></a>
            <a href="https://www.instagram.com/learnbuildteach" className="instagramsocial">
              <FontAwesomeIcon icon={faInstagram} size="2x" /></a>
            <a href="https://www.twitter.com/jamesqquick" className="twittersocial">
              <FontAwesomeIcon icon={faTwitter} size="2x" /></a>
            <a href="https://www.linkedin.com/jamesqquick" className="linkedinsocial">
              <FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
          </div>
        </div>


      </Container>
    </footer>

  );
};
export default footer;