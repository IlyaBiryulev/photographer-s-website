import './Filming.css';
import {useState} from 'react';
import Header from '../Header/Header';
import { filmingData } from '../../utils/filmingContent';
import Accordion from '../Accordion/Accordion';

function Filming() {
  const [opened, setOpened] = useState(null)

  return (
    <div className='filming'>
      <Header />
      <div className="filming__item">
        <h1 className='filming__title'>ИНФОРМАЦИЯ О СЪЕМКАХ</h1>
        {filmingData.map((item, i) =>
          <Accordion item={item} opened={ i === opened } toggle = {setOpened.bind(null, i === opened ? null : i)}/>
        )}
      </div>
    </div>
  );
}

export default Filming;
