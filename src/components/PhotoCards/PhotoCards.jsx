import './PhotoCards.css'
import React, { useEffect, useState, useCallback } from 'react';

function PhotoCards({ card }) {
  /* console.log(cards) */
  return (
    <div className='card__wrapper'>
      <div className="card">
      <img
        className='card__img '
        src={card._embedded.items[0].file}
        alt=""
      />
      </div>
      <h1 className='card__title'>{card.name}</h1>
    </div>
  );
}

export default PhotoCards;
