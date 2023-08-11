import React, { useContext } from "react";
import './SliderDots.css';
import { SliderContext } from "../Slider/Slider";
import SliderDot from "../SliderDot/SliderDot";

function SliderDots() {
  const { slidesCount } = useContext(SliderContext);

  console.log(slidesCount)

  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < slidesCount; i++) {
      dots.push(<SliderDot key={`dot-${i}`} number={i}/>);
    }
    return dots;
  }

  return (
    <div
      className='slider-dots'
    >
      {renderDots()}
    </div>
  );
}

export default SliderDots;
