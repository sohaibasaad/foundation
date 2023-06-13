import { AiOutlineDown } from 'react-icons/ai';
import styled, { keyframes } from 'styled-components';

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
  animation: ${({ isRotated }) => isRotated && `${rotateAnimation} 0.3s forwards`};
`;

const IconContainer = styled.div`
  cursor: pointer;
`;


export const Section = styled.div`
background-color: #F8F3EA;
`


export const TitleWrap = styled.div`
display:flex;
align-items:center;
${'' /* justify-content:center; */}
`
export const Line= styled.div`
width:3rem;
border:3px solid #014E7F;
margin-right:5px;
border-radius: 3px;
`

export const Heading= styled.h1`
font-family: 'Poppins', sans-serif;
font-weight: 600;
font-size: 28px;
line-height: 30px;
color: #014E7F;
margin:5px;

`

export const SubHeading= styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 25px;
line-height: 40px;
letter-spacing: 0.1em;
color: #000000;
`

export const Description= styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #000000;
`

export const GoalCard= styled.div`
background: #F8F3EA;
background: ${({ isExpanded }) => (isExpanded ? 'rgba(2, 98, 123, 0.76)' : '#F8F3EA')};
border: 1px solid #DFDFDF;
box-shadow: -1px 4px 4px 2px rgba(0, 0, 0, 0.25);
border-radius: 10px;
overflow:hidden;
${'' /* height:120px; */}
height: ${({ isExpanded }) => (isExpanded ? '200px' : '120px')};
transition: height 0.3s ease-in-out;
`

export const ImageWrap= styled.div`
width: 48px;
height: 48px;
background: #7C7C7C;
border-radius: 50px;
margin:10px 5px;
`

export const CardTitle= styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 27px;
text-align:center;
color: #000000;
margin-top:15px;
color: ${({ isExpanded }) => (isExpanded ? '#FFFFFF' : '#000000')};

${'' /* margin-right: 200px; */}
`

export const CardDescription= styled.p`
 font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #000000;
color: ${({ isExpanded }) => (isExpanded ? '#FFFFFF' : '#000000')};
`
export const RowWrap= styled.div`
display:flex;
justify-content: space-between;
align-items: center;

`

export const GoalButton = styled.button`

background: #B5D5D4;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 30px;
text-align: center;
color: #000000;


padding: 12px 30px;

display:flex;
 justify-content: center;
align-items: center;
border: ${({border}) => (border ? '2px solid black': 'none')};
${'' /* border:3px solid white; */}
&:hover {
  ${'' /* color: ${({hoverEffect}) => (hoverEffect ? 'black': 'white')}; */}
  ${'' /* background-color: ${({hoverEffect}) => (hoverEffect ? '#fcdc18': 'white')}; */}
  ${'' /* border: ${({hoverEffect}) => (hoverEffect ? '3px solid black': '3px solid white')}; */}
  transform: scale(1.02);
  color:black;
}

@media screen and (max-width: 460px) {
    font-size: 12px;
    padding: 12px 10px;
`






