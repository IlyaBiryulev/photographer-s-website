import React, { useEffect, useState, createContext,useCallback } from "react";
import './Slider.css';
import PropTypes from "prop-types";

import SliderItem from "../SliderItems/SliderItem";
import SliderArrow from "../SliderArrow/SliderArrow";
import SliderDots from "../SliderDots/SliderDots";

export const SliderContext = createContext();

function Slider({photo, width, height, autoPlay, autoPlayTime}) {
  const [slide, setSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  const changeSlide = useCallback((direction = 1) => {
    let slideNumber = 0;

    if (slide + direction < 0) {
      slideNumber = photo._embedded?.limit - 1;
    } else {
      slideNumber = (slide + direction) % photo._embedded?.limit;
    }

    setSlide(slideNumber);
  }, [photo._embedded?.limit, slide]);

  const goToSlide = (number) => {
    setSlide(number % photo._embedded?.total);
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;

    setTouchPosition(touchDown);
  }

  const handleTouchMove = (e) => {
    if (touchPosition === null) {
      return;
    }

    const currentPosition = e.touches[0].clientX;
    const direction = touchPosition - currentPosition;

    if (direction > 10) {
      changeSlide(1);
    }

    if (direction < -10) {
      changeSlide(-1);
    }

    setTouchPosition(null);
  }

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      changeSlide(1);
    }, autoPlayTime);

    return () => {
      clearInterval(interval);
    };
  }, [autoPlay, autoPlayTime, changeSlide, photo._embedded?.limit, slide]);

  return (
    <div
      style={{ width, height }}
      className="slider"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <SliderContext.Provider
        value={{
          goToSlide,
          changeSlide,
          slidesCount: photo._embedded?.limit,
          slideNumber: slide,
          photo,
        }}
      >
        <SliderArrow />
        <SliderItem/>
        <SliderDots />
      </SliderContext.Provider>
    </div>
  );
}

Slider.propTypes = {
  autoPlay: PropTypes.bool,
  autoPlayTime: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string
};

Slider.defaultProps = {
  autoPlay: false,
  autoPlayTime: 5000,
  width: "100%",
  height: "100%"
};

export default Slider;
