import React, { useContext } from "react";
import './SliderDot.css';
import { SliderContext } from "../Slider/Slider";

function SliderDot({ number }) {
  const { goToSlide, slideNumber  } = useContext(SliderContext);

  return (
    <div
      className={`slider-dot ${slideNumber === number ? "slider-dot_selected" : ""}`}
      onClick={() => goToSlide(number)}
    />
  );
}

export default SliderDot;
