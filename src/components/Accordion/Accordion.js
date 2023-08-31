import './Accordion.css';
import {React, useState} from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Accordion({item}) {
  const [ isActive, setIsActive ] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
    <article className='accordion'>
      <div className='accordion__item'>
        <div className='accordion__card' onClick={handleClick}>
          <p className='accordion__title'>{item.title}</p>
          <div className={isActive ? 'accordion__plus accordion__plus_close' : 'accordion__plus'}/>
        </div>
        <AnimatePresence>
        {isActive &&
          <div className='accordion__content'>
            <motion.p className='accordion__text'
              initial={{ opacity: 0, y: '50px' }}
              animate={{ opacity: 1, y: 0, transition: {duration: 0.3}}}
              exit={{ opacity: 0 }}
            >
              {item.content1}
            </motion.p>
            <motion.p className='accordion__text'
              initial={{ opacity: 0, y: '50px' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              {item.content2}
            </motion.p>
            <motion.p className='accordion__text'
              initial={{ opacity: 0, y: '50px' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              {item.content3}
            </motion.p>
          </div>
        }
        </AnimatePresence>
      </div>
    </article>
  );
}

export default Accordion;
