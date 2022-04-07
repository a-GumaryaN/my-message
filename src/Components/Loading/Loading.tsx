import { FC } from "react";
// import "./Loading.css";
import styled, { keyframes } from "styled-components";


const CircleKeyframes = keyframes`
0% {
    top: 60px;
    height: 5px;
    border-radius: 50px 50px 25px 25px;
    transform: scaleX(1.7);
  }

  40% {
    height: 20px;
    border-radius: 50%;
    transform: scaleX(1);
  }

  100% {
    top: 0%;
  }
  `;

const ShadowKeyframes = keyframes`
  0% {
    transform: scaleX(1.5);
  }

  40% {
    transform: scaleX(1);
    opacity: .7;
  }

  100% {
    transform: scaleX(.2);
    opacity: .4;
  }
  `;

const Wrapper = styled.div`
& span {
    position: absolute;
    top: 75px;
    font-size: 20px;
    letter-spacing: 12px;
    color: #fff;
    left: 15%;
  }

    width: 200px;
    height: 60px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);


`;
const Circle = styled.div`

    width: 20px;
    height: 20px;
    position: absolute;
    border-radius: 50%;
    background-color: #fff;
    left: 15%;
    transform-origin: 50%;
    animation: ${CircleKeyframes} .5s alternate infinite ease;
  
  &:nth-child(2) {
    left: 45%;
    animation-delay: .2s;
  }
  
  &:nth-child(3) {
    left: auto;
    right: 15%;
    animation-delay: .3s;
  }
  `;

const Shadow = styled.div`

    width: 20px;
    height: 4px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, .5);
    position: absolute;
    top: 62px;
    transform-origin: 50%;
    z-index: -1;
    left: 15%;
    filter: blur(1px);
    animation: ${ShadowKeyframes} .5s alternate infinite ease;

  
  @keyframes & {
    0% {
      transform: scaleX(1.5);
    }
  
    40% {
      transform: scaleX(1);
      opacity: .7;
    }
  
    100% {
      transform: scaleX(.2);
      opacity: .4;
    }
  }
  
  &:nth-child(4) {
    left: 45%;
    animation-delay: .2s
  }
  
  &:nth-child(5) {
    left: auto;
    right: 15%;
    animation-delay: .3s;
  }`;


const Loading: FC<{}> = () => {
    return <Wrapper>
        <Circle className="circle" />
        <Circle className="circle" />
        <Circle className="circle" />
        <Shadow className="shadow" />
        <Shadow className="shadow" />
        <Shadow className="shadow" />
        <span>Loading</span>
    </Wrapper>
}

export default Loading