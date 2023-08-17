import React, { useContext } from "react";
import './SliderItem.css'
import { SliderContext} from '../Slider/Slider'
import SlideImg from "../SlideImg/SlideImg";

function SliderItem() {
  const { slideNumber, photo } = useContext(SliderContext);

  return (
    <div
      className="slide-item"
      style={{ transform: `translateX(-${slideNumber * 100}%)`}}
    >
      {photo._embedded.items.map((card) =>
        <SlideImg
          card = {card}
          key = {card.resource_id}
        />
      )}
    </div>
  );
}

export default SliderItem;
