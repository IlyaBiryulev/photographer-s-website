import './Main.css';
import { useRef } from 'react';
import Promo from '../Promo/Promo';
import About from '../About/About';

function Main() {
  const AboutMe = useRef();

  const handleClickAboutMe = () => {
    AboutMe.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className='main'>
      <Promo onAboutClick = {handleClickAboutMe}/>
      <About onRef = {AboutMe}/>
    </div>
  );
}

export default Main;
