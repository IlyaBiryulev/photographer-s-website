import './Contacts.css';
import Header from '../Header/Header';
import { motion } from 'framer-motion';
import { textAnimation } from '../../utils/constants';

function Contacts() {
  return (
    <div className="contacts">
      <Header />
      <motion.main
        className="contacts__content"
        initial='hidden'
        whileInView='visible'
      >
        <motion.h1 className="contacts__title" variants={textAnimation} custom={1}><span className="contacts__title-span">ОБЯЗАТЕЛЬНО</span> НАПИШИ МНЕ</motion.h1>
        <motion.p className="contacts__subtitle" variants={textAnimation} custom={2}>Если у&nbsp;тебя есть какие-то вопросы или предложения, очень жду тебя в&nbsp;сообщениях.</motion.p>
        <motion.ul className="contacts__list" variants={textAnimation} custom={3}>
          <li className='contacts__list-item'><a href="https://vk.com/stormsi" className="contacts__link">ВКОНТАКТЕ</a></li>
          <li className='contacts__list-item'><a href="https://t.me/ilya_bir" className="contacts__link">TELEGRAM</a></li>
          <li className='contacts__list-item'><a href="2" className="contacts__link">INSTAGRAM</a></li>
          <li className='contacts__list-item'><a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=birulevila@gmail.com" className="contacts__link">GMAIL</a></li>
        </motion.ul>
        <p className="contacts__quote">&laquo;На&nbsp;каждой фотографии всегда есть два человека: фотограф и&nbsp;зритель&raquo;.&mdash; Ансель Адамс</p>
      </motion.main>
    </div>
  );
}

export default Contacts;
