import React, { useEffect, useState, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Main from '../Main/Main';
import Portfolio from '../Portfolio/Portfolio';
import AboutMe from '../AboutMe/AboutMe';
import Contacts from '../Contacts/Contacts';
import * as api from '../../utils/Api';
import ImgModal from '../ImgModal/ImgModal';
/* import { getPageCount, getPagesArray } from '../../utils/utils';
 */

function App() {

  const [ folder, setFolder] = useState([]);
  const [ cardPhoto, setCardPhoto] = useState([]);
  const [ popupOpen, setIsPopupOpen] = useState(false);

  const [ totalPages, setTotalPages] = useState(0);
  const [ limit, setLimit] = useState(6);
  const [ page, setPage] = useState(1);
  const [ paths, setPaths] = useState();

  const handlePopupOpen = () => {
    if(!popupOpen) {
      setIsPopupOpen(true)
    } else {
      setIsPopupOpen(false)
    }
  }


  const getPhotoCard = useCallback(
    async () => {
      try {
        const res = await api.getPhotoCards(['/photo/test', '/photo/test1', '/photo/test2', '/photo/test3', '/photo/test4', '/photo/test5']);
        setCardPhoto(res)
      } catch(err) {
        console.error(err);
      }
    },[]
  );

  const getFolder = useCallback(
    async () => {
      try {
        const res = await api.getFolder(limit, page);
        if (res) {
          setFolder(res.data)
          setPaths(res.data._embedded?.items.map((item) => item.path))
          /* const totalCount = res.data._embedded.total
          setTotalPages(getPageCount(totalCount, limit)) */
        }
      } catch(err) {
        console.error(err);
      }
    },[limit, page]
  );

  useEffect(() => {
    getPhotoCard();
    getFolder()
  },[])

  /* folder._embedded?.items.name.map((p) => {
    console.log(p)
    setTest(p)
  }
  ) */


/*   const changePage = (page) => {
    setPage(page);
  } */

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
              onClick = {handlePopupOpen}
              /* pagesArray={getPagesArray(totalPages)} */
              /* changePage={changePage} */
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
      <ImgModal
        isOpen = {popupOpen}
        photo = {cardPhoto}
        onClick = {handlePopupOpen}
      />
    </div>
  );
}

export default App;
