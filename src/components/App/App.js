import React, { useEffect, useState, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Main from '../Main/Main';
import Portfolio from '../Portfolio/Portfolio';
import AboutMe from '../AboutMe/AboutMe';
import Contacts from '../Contacts/Contacts';
import * as api from '../../utils/Api';


function App() {
  const [ cardPhoto, setCardPhoto] = useState([]);
  const [ popupOpen, setIsPopupOpen] = useState(false);
  const [ folder, setFolder] = useState([]);
  const [ loading, setLoading] = useState(false);

  useEffect(() => {
    Promise.all([api.getFolder()])
    .then((values) => {
      setFolder(values[0].data._embedded);
    })
    .catch((err) => {
      console.log(err);
    });
  },[])

  const handlePopupOpen = () => {
    if(!popupOpen) {
      setIsPopupOpen(true);
    } else {
      setIsPopupOpen(false);
    }
  }

  const getPhotoCard = useCallback(
    async () => {
      setLoading(true);
      try {
        const allItems = await Promise.all(
          folder.items.map(
            item =>  api.getPhotoCards(item.path)
          )
        );
        const cardPhoto = allItems.map((i) => i.data);
        setCardPhoto(cardPhoto);
      } catch(err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    },[folder.items]
  );

  useEffect(() => {
    getPhotoCard();
  },[getPhotoCard])

  return (
    <div className="app__content">
      <Routes>
        <Route path='/'
          element={
            <Main />
          }
        />
        <Route path='/portfolio'
          element={
            <Portfolio
              photos = {cardPhoto}
              isOpen = {popupOpen}
              onClick = {handlePopupOpen}
              isLoading = {loading}
            />
          }
        />
        <Route path='/about-me'
          element={
            <AboutMe />
          }
        />
        <Route path='/contacts'
          element={
            <Contacts />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
