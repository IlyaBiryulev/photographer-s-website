import './About.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import photo from '../../image/cb1nOsuHEHE.jpg';
import { textAnimation } from '../../utils/constants';

function About({ onRef }) {
  return (
    <motion.section
      className='about'
      initial='hidden'
      whileInView='visible'
      viewport={{amount: 0.2, once: true}}
    >
      <article className='about__wrapper' ref={onRef}>
        <motion.h1 className='about__title' variants={textAnimation} custom={1}>О себе</motion.h1>
        <motion.p className='about__info' variants={textAnimation} custom={2}> Меня зовут Илья, и я с удовольствием приветствую вас на своем фотографическом портфолио.
          Профессионально фотографией занимаюсь более 5 лет назад, и с тех пор каждый кадр для меня — это возможность запечатлеть мгновение, сохранить эмоции и рассказать уникальную историю через объектив.
          Моя работа — это путешествие в мир визуальных возможностей, в поисках идеального ракурса и игры света.
          За эти годы я преодолел множество творческих барьеров, развивал свой стиль и подход к съемке.
          Мне важно не только создавать красивые фотографии, но и передавать настроение, эмоции, искренность.
          Я верю, что именно эти аспекты делают каждое фото неповторимым и ценным.
        </motion.p>
        <motion.button className='about__link-btn' variants={textAnimation} custom={3}><Link to="/portfolio" className='about__link'>ПОРТФОЛИО</Link></motion.button>
        <motion.img src={photo} alt='Фотография автора' className='about__img' variants={textAnimation} custom={4}></motion.img>
      </article>
    </motion.section>
  );
}

export default About;
