import { motion } from 'framer-motion';
import './PhotoCards.css';
import { photoAnimation } from '../../utils/constants';

const PhotoCards = ({ card, onPhotoClick }) => {

  function handleClick() {
    onPhotoClick(card);
  }

  return (
    <motion.div
      className='card'
      initial='hidden'
      whileInView='visible'
      viewport={{once:true}}
    >
      <motion.div className="card__img-wrapper" variants={photoAnimation}>
        <img
          className='card__img '
          src={card._embedded.items[0].sizes[8].url}
          alt={card._embedded.items[0].name}
          onClick = {handleClick}
        />
      </motion.div>
      <motion.h1 className='card__title' variants={photoAnimation}>{card.name}</motion.h1>
    </motion.div>
  );
};

export default PhotoCards;
