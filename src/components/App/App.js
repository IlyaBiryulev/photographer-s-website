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
  const [ limit, setLimit] = useState(12);
  const [ page, setPage] = useState(1);
  const [ folder, setFolder] = useState([]);

  useEffect(() => {
    Promise.all([api.getFolder(limit, page)])
    .then((values) => {
      setFolder(values[0].data._embedded)
    })
    .catch((err) => {
      console.log(err);
    });
  },[limit, page])

  const handlePopupOpen = () => {
    if(!popupOpen) {
      setIsPopupOpen(true)
    } else {
      setIsPopupOpen(false)
    }
  }

  const getPhotoCard = useCallback(
    async () => {
      const allItems = await Promise.all(
        folder.items.map(
          item =>  api.getPhotoCards(item.path)
        )
      );
      setCardPhoto(allItems.map((i) => i.data));
    },[folder.items]
  );

  useEffect(() => {
    getPhotoCard()
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
              photo = {cardPhoto}
              isOpen = {popupOpen}
              onClick = {handlePopupOpen}
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
