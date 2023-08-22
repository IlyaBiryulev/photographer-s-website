import "./Overlay.css";
import React, { useEffect } from 'react';

import { ESC_KEY } from "../../utils/constants";

function Overlay({ isOpen, onClick, ...props }) {

  useEffect(() => {
    function handleEscClose(evt) {
      if (evt.key === ESC_KEY) {
        onClick();
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEscClose);
      return () => document.removeEventListener("keydown", handleEscClose);
    }
  }, [isOpen, onClick]);

  const closeByClickOnOverlay = (evt) => {
    if (evt.target === evt.currentTarget) {
      onClick();
    }
  };

  return (
    <div className={`overlay ${isOpen ? 'overlay_active' : ''}`} onMouseDown = {closeByClickOnOverlay}>
      <button className="overlay__cls-btn" onClick={onClick}></button>
      {props.children}
    </div>
  );
}

export default Overlay;
