import React from "react";
import "../../styles/footer.css"
import logoimg from "../../assets/images/logoimg.png"
import { Col, Row, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "@fontsource/poppins";

const footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col  md="3">
            <div className="logo footer__logo">
              <img src={logoimg} alt="" className="w-10" style={{ width: "100px" }} />
            </div>
          </Col>

          <Col md ="3">
            <div className="link_section">
              <h5 className="footer__link-title">Quick Links</h5>
              
            </div>
          </Col>

          <Col>#014E7F</Col>
          <Col>#014E7F</Col>
        </Row>
      </Container>
    </footer>

  );
};
export default footer;