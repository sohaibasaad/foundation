import React from "react";
import "../../styles/AboutSection.css"
import aboutImg from "../../assets/images/about pic.png"
import {Col, Row,Container}  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "@fontsource/poppins"; 

const AboutSection = () => {
  return (
    
    
    <div className="abt_sect">
      <div className="aboutsection">

<div className="heading">
  <p className="line"></p>
  <p className="heading1">ABOUT US</p>
</div>

<Container className="allcontent">
  
  <Row>
    <Col sm={4}>
      <div className="about__img">
        <img src={aboutImg} alt="" className="w-100" />
      </div>
    </Col>

    <Col sm={8}>
      <p className="contentHeading">Lorem Ipsum</p>
      <p className="para">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo nulla voluptatibus dolorem accusantium exercitationem sed animi corporis numquam. Ipsam numquam blanditiis commodi dolorem autem rem voluptatem cupiditate, quaerat expedita quasi!</p>
    </Col>
  </Row>

  <Row id="contenttwo">
  <Col sm={8}>
      <p className="contentHeading">Lorem Ipsum</p>
      <p className="para">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo nulla voluptatibus dolorem accusantium exercitationem sed animi corporis numquam. Ipsam numquam blanditiis commodi dolorem autem rem voluptatem cupiditate, quaerat expedita quasi!</p>
    </Col>

    <Col sm={4}>
      <div className="about__img">
        <img src={aboutImg} alt="" className="w-100" />
      </div>
    </Col>
  </Row>

</Container>
</div>
    </div>

  );
};

export default AboutSection;
