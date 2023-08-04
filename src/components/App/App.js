import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Main from '../Main/Main';
import Portfolio from '../Portfolio/Portfolio';
import AboutMe from './AboutMe';
import Contacts from '../Contacts/Contacts';

function App() {
  return (
    <div className="app__content">
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/portfolio' element={<Portfolio />}/>
        <Route path='/about-me' element={<AboutMe />}/>
        <Route path='/contacts' element={<Contacts />}/>
      </Routes>
    </div>
  );
}

export default App;
