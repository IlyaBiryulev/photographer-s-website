import React, { useContext } from "react";
import { SliderContext } from "../Slider/Slider";
import './SliderArrow.css';


function SliderArrow() {
  const { changeSlide } = useContext(SliderContext);

  return (
    <div
      className='slider__arrows'
    >
      <div className="slider__arrow slider__arrow_left" onClick={() => changeSlide(-1)} />
      <div className="slider__arrow slider__arrow_right" onClick={() => changeSlide(1)} />
    </div>
  );
}

export default SliderArrow;
