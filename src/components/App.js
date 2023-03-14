import React from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import '../index.css';
import Header from './Header';
import Main from './Main';

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Routes>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
