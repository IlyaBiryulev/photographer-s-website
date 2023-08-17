import './Portfolio.css';
import React, { useState } from 'react';
import Header from '../Header/Header';
import PhotoCards from '../PhotoCards/PhotoCards';
import ImgModal from '../ImgModal/ImgModal';
function Portfolio({ photo, onClick, isOpen}) {
  const [ selectedPhoto, setSelectedPhoto ] = useState(null);

  const handleCardClick = (card) => {
    setSelectedPhoto(card);
  }

  return (
    <div>
      <Header />
      <main className="portfolio">
        <p className="portfolio__quote">
          &laquo;Большинство вещей в&nbsp;жизни&nbsp;&mdash;
          это моменты удовольствия и&nbsp;смущения на&nbsp;
          всю жизнь. Фотография&nbsp;&mdash; это момент смущения
          и&nbsp;наслаждения на&nbsp;всю жизнь&raquo;.&mdash;
          Тони Бенн
        </p>
        <div className="portfolio__cards" onClick={onClick}>
          {photo.map((p) =>
            <PhotoCards
              card = {p}
              key={p.name}
              onPhotoClick={handleCardClick}
            />
          )}
        </div>
      </main>
      { selectedPhoto !== null &&
        <ImgModal
        isOpen={isOpen}
        photo={selectedPhoto}
        onClick={onClick}
      />
      }
    </div>
  );
}

export default Portfolio;
