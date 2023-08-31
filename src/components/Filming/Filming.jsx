import './Filming.css';
import {React} from 'react';
import Header from '../Header/Header';
import { filmingData } from '../../utils/filmingContent';
import Accordion from '../Accordion/Accordion';

function Filming() {


  return (
    <div className='filming'>
      <Header />
      <div className="filming__item">
        <h1 className='filming__title'>ИНФОРМАЦИЯ О СЪЕМКАХ</h1>
        {filmingData.map((item) =>
          <Accordion item={item}/>
        )}
      </div>
    </div>
  );
}

export default Filming;
