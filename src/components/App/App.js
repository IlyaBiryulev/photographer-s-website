import React, { useEffect, useState, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Main from '../Main/Main';
import Portfolio from '../Portfolio/Portfolio';
import AboutMe from '../AboutMe/AboutMe';
import Contacts from '../Contacts/Contacts';
import * as api from '../../utils/Api'

function App() {

  const [cardPhoto, setCardPhoto] = useState([]);

  const getPhotoCard = useCallback(
    async () => {
      try {
        const data = await api.getPhotoCard();
        if (data) {
          console.log(data)
          setCardPhoto(data)
        }
      } catch(err) {
        console.error(err);
      }
    },[]
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
