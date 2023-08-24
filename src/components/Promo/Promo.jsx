import './Promo.css';
import Header from '../Header/Header';
import { motion } from "framer-motion";
import { textAnimation } from '../../utils/constants';

function Promo({ onAboutClick }) {

  return (
    <motion.div
      className='promo'
      initial='hidden'
      whileInView='visible'
    >
      <Header />
      <motion.h1 className='promo__title' variants={textAnimation}>ILYA BIRYULEV</motion.h1>
      <button className='promo__about-ref' onClick={onAboutClick} />
    </motion.div>
  );
}

export default Promo;
