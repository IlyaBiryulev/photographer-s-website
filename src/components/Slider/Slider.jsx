import React, { useEffect, useState, createContext,useCallback } from "react";
import './Slider.css';
import PropTypes from "prop-types";
import SliderItem from "../SliderItems/SliderItem";

export const SliderContext = createContext();

function Slider({photo, width, height, autoPlay, autoPlayTime}) {
  const [slide, setSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  const changeSlide = useCallback((direction = 1) => {
    let slideNumber = 0;

    if (slide + direction < 0) {
      slideNumber = photo.length - 1;
    } else {
      slideNumber = (slide + direction) % photo.length;
    }

    setSlide(slideNumber);
  }, [photo.length, slide]);

  const goToSlide = (number) => {
    setSlide(number % photo.length);
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
  }, [autoPlay, autoPlayTime, changeSlide, photo.length, slide]);

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
          slidesCount: photo.length,
          slideNumber: slide,
          photo,
        }}
      >
        {/* <Arrows /> */}
        <SliderItem/>
        {/* <Dots /> */}
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
