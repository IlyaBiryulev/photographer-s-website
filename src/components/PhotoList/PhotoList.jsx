import './PhotoList.css';
import { useState, useCallback, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PhotoListItem from '../PhotoListItem/PhotoListItem';
import Preloader from '../Preloader/Preloader';
import { motion } from 'framer-motion';
import { textAnimation } from '../../utils/constants';

function PhotoList({getPhotos, isLoading}) {
  const [photo, setPhoto] = useState([])
  const param = useParams();
  const navigate = useNavigate();

  const getPhoto = useCallback(
    async () => {
      const data = await getPhotos(param.id);
      if (data) {
        setPhoto(data.data._embedded.items);
      }
    }, [getPhotos, param.id]
  );

  useEffect(() => {
    getPhoto()
  },[getPhoto])

  return (
    <motion.div
      className='photo-list'
      initial='hidden'
      whileInView='visible'
    >
      <motion.h1 className='photo-list__title' variants={textAnimation}>{param.id}</motion.h1>
      <motion.button className='photo-list__back-btn' onClick={() => navigate(-1)} variants={textAnimation} whileHover={{ scale: 1.1 }}></motion.button>
      {isLoading && <Preloader/>}
      {!isLoading &&
        <div className='photo-list__wrapper'>
        {
          photo.map(item =>
            <PhotoListItem
              photo={item}
              key={item.name}
            />
          )
        }
        </div>
      }
    </motion.div>
  );
}

export default PhotoList;
