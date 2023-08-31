import './Portfolio.css';
import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import PhotoCards from '../PhotoCards/PhotoCards';
import ImgModal from '../ImgModal/ImgModal';
import Preloader from '../Preloader/Preloader';
import useResizeScreen from '../../utils/ResizeScreen';
import {
  desktopScreenWidth,
  padScreenWidth,
  mobileScreenWidth,
  initialPhoto
} from '../../utils/constants';
import { photoAnimation } from '../../utils/constants';
import { motion } from 'framer-motion';

function Portfolio({ photos, onClick, isOpen, isLoading}) {
  const Screen = useResizeScreen();

  const [ selectedPhoto, setSelectedPhoto ] = useState(null);
  const [ cardRender, setCardRender] = useState([]);
  const [ photoCard, setPhotoCard] = useState([]);

  useEffect(() => {
    if (Screen === desktopScreenWidth) {
      setCardRender(initialPhoto.desktop);
    } else if (padScreenWidth <= Screen <= desktopScreenWidth) {
      setCardRender(initialPhoto.desktop);
    } else if (mobileScreenWidth <= Screen <= padScreenWidth) {
      setCardRender(initialPhoto.pad);
    } else if (Screen === mobileScreenWidth ) {
      setCardRender(initialPhoto.mobile);
    }
  }, [Screen]);



  useEffect(() => {
      const sortedphotoList = photos.sort((a, b) => {
        return new Date(b.modified) - new Date(a.modified);
      });
      const photoList = sortedphotoList.filter((photo, item) => {
        return item < cardRender.photo;
      });
      setPhotoCard(photoList);
  }, [cardRender, photos, setPhotoCard]);

  const handleCardClick = (card) => {
    setSelectedPhoto(card);
  }

  const handleShowMore = () => {
    const initialMoviesCount =  photoCard.length;
    const MoviesToShow = initialMoviesCount + cardRender.more;
    const moviesCount = photos.length -  initialMoviesCount;
    if ( moviesCount > 0) {
      const movieElement = photos.slice(initialMoviesCount, MoviesToShow);
      setPhotoCard([...photoCard, ...movieElement]);
    }
  };

  const ifShowMore = () => {
    if ( photos.length >= 5 && photoCard.length < photos.length) {
      return(<button className='portfolio__show-more' onClick={handleShowMore}>Показать больше</button>)
    }
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
        {!isLoading &&
          <motion.div
            className="portfolio__cards"
            onClick={onClick}
            initial='hidden'
            whileInView='visible'
          >
          {photoCard.map((p, index) =>
            <PhotoCards
              card = {p}
              key={p.name}
              onPhotoClick={handleCardClick}
              isLoading = {isLoading}
              custom={index + 1}
              variants={photoAnimation}
            />
          )}
        </motion.div>}
        {ifShowMore()}
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
