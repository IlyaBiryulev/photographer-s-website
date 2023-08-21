import './Portfolio.css';
import React, { useState } from 'react';
import Header from '../Header/Header';
import PhotoCards from '../PhotoCards/PhotoCards';
import ImgModal from '../ImgModal/ImgModal';
import Preloader from '../Preloader/Preloader';
function Portfolio({ photo, onClick, isOpen, isLoading, showMore}) {
  const [ selectedPhoto, setSelectedPhoto ] = useState(null);

  const handleCardClick = (card) => {
    setSelectedPhoto(card);
  }

  return (
    <div>
      <Header />
      <main className="portfolio">
        <div className='portfolio__wrapper'>
          <a href='https://360.yandex.ru/disk/' className='portfolio__link'><div className='yandex-logo'></div></a>
          <p className="portfolio__quote">
            &laquo;Большинство вещей в&nbsp;жизни&nbsp;&mdash;
            это моменты удовольствия и&nbsp;смущения на&nbsp;
            всю жизнь. Фотография&nbsp;&mdash; это момент смущения
            и&nbsp;наслаждения на&nbsp;всю жизнь&raquo;.&mdash;
            Тони Бенн
          </p>
        </div>
        {isLoading && <Preloader/>}
        {!isLoading && <div className="portfolio__cards" onClick={onClick}>
          {photo.map((p) =>
            <PhotoCards
              card = {p}
              key={p.name}
              onPhotoClick={handleCardClick}
              isLoading = {isLoading}
            />
          )}
        </div>}
        {/* <button className='portfolio__show-more' onClick={showMore}>Показать еще</button> */}
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
