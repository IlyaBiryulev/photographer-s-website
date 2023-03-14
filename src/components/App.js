import React from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Portfolio from './Portfolio';
import AboutMe from './AboutMe';
import Contacts from './Contacts';

function App() {
  return (
    <div className="page">
      <Header />
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
