import React, { useState } from 'react';
import { Container, Row, Col, Button, Accordion, Card, Dropdown } from 'react-bootstrap';
import { CardDescription, CardTitle, Description, GoalCard, Heading, ImageWrap, Line, SubHeading, TitleWrap,RowWrap, GoalButton, Section } from './OurGoalsElement';

import {AiOutlineDown, AiOutlineUp} from "react-icons/ai";
import styled, { keyframes, css } from 'styled-components';

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`;

const RotatingIcon = styled(AiOutlineDown)`
  transition: transform 0.3s ease-in-out;
  transform: ${({ isRotated }) => (isRotated ? 'rotate(180deg)' : 'rotate(0deg)')};
  ${({ isRotated }) =>
    isRotated &&
    css`
      animation: ${rotateAnimation} 0.3s forwards;
    `}
    color: ${({ isExpanded }) => (isExpanded ? '#FFFFFF' : '#000000')};
`;

const IconContainer = styled.div`
  cursor: pointer;
`;


const OurGoals = () => {

    const [isExpanded1, setExpanded1] = useState(false);
    const [isExpanded2, setExpanded2] = useState(false);
    const [isExpanded3, setExpanded3] = useState(false);

    const handleToggle1 = () => {
        setExpanded1(!isExpanded1);
    };
    const handleToggle2 = () => {
        setExpanded2(!isExpanded2);
    };
    const handleToggle3 = () => {
        setExpanded3(!isExpanded3);
    };
    const [isRotated1, setRotated1] = useState(false);
    const [isRotated2, setRotated2] = useState(false);
    const [isRotated3, setRotated3] = useState(false);

  const handleClick1 = () => {
    setRotated1(!isRotated1);
  };
  const handleClick2 = () => {
    setRotated2(!isRotated2);
  };
  const handleClick3 = () => {
    setRotated3(!isRotated3);
  };
    return (
        <Section>
            <Row className='pt-5'>
                <Col className='mb-5' lg={6}>
                    <Container>
                    <Row>
                        <Col>
                        <TitleWrap>
                            <Line></Line>
                            <Heading>OUR GOAL</Heading>
                        </TitleWrap>
                        </Col>
                    </Row>
                    <Row>
                    <Col lg={7}>
                    <SubHeading>
                            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet
                        </SubHeading> 
                    </Col>
                    </Row>
                    <Row>
                    <Col lg={9}>
                    <Description>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet maximus elementum. Praesent eu mi euismod neque commodo volutpat. Suspendisse id ipsum vel mauris consectetur aliquam eu ac augue.
                        </Description>
                    </Col>
                    </Row>
                    <Row className='mt-3'>
                        <Col>
                            <GoalButton>Explore More</GoalButton>
                        </Col>
                    </Row>
                        
                        
                        
                    </Container>
                </Col>
                <Col lg={1}></Col>
                <Col lg={4} className=''>
                    <Container>
                    <Row className="mb-5">
                        <GoalCard isExpanded={isExpanded1} className="">
                        <RowWrap>
                            <ImageWrap></ImageWrap>
                            <CardTitle isExpanded={isExpanded1}>Lorem Ipsum dolor sit</CardTitle>
                            <IconContainer onClick={() => {
                                handleClick1()
                                handleToggle1()
                            }}>
      <RotatingIcon isExpanded={isExpanded1} isRotated={isRotated1} />
    </IconContainer>
                        </RowWrap>
                            <Row>
                                <Col>
                                    <CardDescription isExpanded={isExpanded1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet maximus elementum. Praesent eu mi euismod nequeLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet maximus elementum. Praesent eu mi euismod neque </CardDescription>
                                </Col>
                            </Row>
                        </GoalCard>
                    </Row>
                    <Row className="mb-5 mt-5">
                        <GoalCard isExpanded={isExpanded2} className="">
                        <RowWrap>
                            <ImageWrap></ImageWrap>
                            <CardTitle isExpanded={isExpanded2}>Lorem Ipsum dolor sit</CardTitle>
                            <IconContainer onClick={() => {
                                handleClick2()
                                handleToggle2()
                            }}>
      <RotatingIcon isExpanded={isExpanded2} isRotated={isRotated2} />
    </IconContainer>
                        </RowWrap>
                            <Row>
                                <Col>
                                    <CardDescription isExpanded={isExpanded2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet maximus elementum. Praesent eu mi euismod nequeLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet maximus elementum. Praesent eu mi euismod neque </CardDescription>
                                </Col>
                            </Row>
                        </GoalCard>
                    </Row>
                    <Row className="mb-5">
                        <GoalCard isExpanded={isExpanded3} className="">
                        <RowWrap>
                            <ImageWrap></ImageWrap>
                            <CardTitle isExpanded={isExpanded3}>Lorem Ipsum dolor sit</CardTitle>
                            <IconContainer onClick={() => {
                                handleClick3()
                                handleToggle3()
                            }}>
      <RotatingIcon isExpanded={isExpanded3} isRotated={isRotated3} />
    </IconContainer>
                        </RowWrap>
                            <Row>
                                <Col>
                                    <CardDescription isExpanded={isExpanded3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet maximus elementum. Praesent eu mi euismod nequeLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet maximus elementum. Praesent eu mi euismod neque </CardDescription>
                                </Col>
                            </Row>
                        </GoalCard>
                    </Row>
                    </Container>

                </Col>
            </Row>
        </Section>
    )
}

export default OurGoals