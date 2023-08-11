import React, { useEffect, useState, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Main from '../Main/Main';
import Portfolio from '../Portfolio/Portfolio';
import AboutMe from '../AboutMe/AboutMe';
import Contacts from '../Contacts/Contacts';
import * as api from '../../utils/Api';
import Slider from '../Slider/Slider';

function App() {

  const [folder, setFolder] = useState([]);
  const [cardPhoto, setCardPhoto] = useState([]);
  const [ popupOpen, setIsPopupOpen] = useState(false);

  const handlePopupOpen = () => {
    if(!popupOpen) {
      setIsPopupOpen(true)
    } else {
      setIsPopupOpen(false)
    }
  }

  const getPhotoCard = useCallback(
    async () => {
      /* const folderName = folder._embedded?.items.map((function(i){return i.name})).find(function(value, index){return value[index]}) */
      try {
        const data = await api.getPhotoCard('testtwo')
        if (data) {
          console.log(data)
          setCardPhoto(data)
        }
      } catch(err) {
        console.error(err);
      }
    },[]
  );

  const getFolder = useCallback(
    async () => {
      try {
        const data = await api.getFolder();
        if (data) {
          console.log(data)
          setFolder(data)
        }
      } catch(err) {
        console.error(err);
      }
    },[]
  );

  useEffect(() => {
    getPhotoCard();
    getFolder()
  },[getFolder, getPhotoCard])

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
              folder = {folder}
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
      <Slider
        photo = {cardPhoto}
      />
    </div>
  );
}

export default App;