import React, { useState } from "react";
import "./Hero.scss";
import styled from "styled-components";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { slideData } from "../../data/data";
import { v4 as uuidv4 } from "uuid";

//styled components:
const Wrapper = styled.div`
  height: 80vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: space-between;
  flex-direction: column;
  background-color: #d3d3d3;
  transition: 1.5s ease-in-out;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Arrow = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 30px;
  opacity: 0.5;
  cursor: pointer;
`;

const Hero = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleSlideClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <>
      <div className="hero">
        {slideData.map((slide) => {
          return (
            <Wrapper slideIndex={slideIndex} key={uuidv4()}>
              <div className="hero__conatiner">
                <Arrow
                  direction="left"
                  onClick={() => handleSlideClick("left")}
                >
                  <ArrowBackIosNewIcon />
                </Arrow>
                <div className="hero__slide-container">
                  <div className="hero__image-container">
                    <img
                      className="hero__image"
                      src={slide.img}
                      alt={slide.alt}
                    />
                  </div>
                  <div className="hero__info-container">
                    <h1 className="hero__info-title">{slide.title}</h1>
                    <button className="hero__info-button">
                      {slide.button}
                    </button>
                  </div>
                </div>
                <Arrow
                  direction="right"
                  onClick={() => handleSlideClick("right")}
                >
                  <ArrowForwardIosIcon />
                </Arrow>
              </div>
            </Wrapper>
          );
        })}
      </div>
    </>
  );
};

export default Hero;
