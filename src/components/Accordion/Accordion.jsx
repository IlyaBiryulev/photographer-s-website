import './Accordion.css';
import { motion, AnimatePresence } from 'framer-motion';

function Accordion({item, opened, toggle}) {
  return (
    <article className='accordion'>
      <div className='accordion__item'>
        <div className='accordion__card' onClick={toggle}>
          <p className='accordion__title'>{item.title}</p>
          <div className={opened ? 'accordion__plus accordion__plus_close' : 'accordion__plus'}/>
        </div>
        <AnimatePresence>
          {opened &&
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
