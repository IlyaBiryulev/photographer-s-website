/* import { useState, useEffect, useCallback } from "react"; */

import './Portfolio.css'
import Header from "../Header/Header";
import PhotoCards from '../PhotoCards/PhotoCards'

console.log()
function Portfolio({ folder, photo }) {
  return (
    <div>
      <div className="header_dark-theme">
        <Header />
      </div>
      <main className="portfolio">
        <p className="portfolio__quote">
          &quot;Большинство вещей в&nbsp;жизни&nbsp;&mdash;
          это моменты удовольствия и&nbsp;смущения на&nbsp;
          всю жизнь. Фотография&nbsp;&mdash; это момент смущения
          и&nbsp;наслаждения на&nbsp;всю жизнь&quot;.&mdash;
          Тони Бенн
        </p>
        <div className="portfolio__cards">
          {folder._embedded?.items.map((cards) =>
            <PhotoCards
              cards = {cards}
              key={cards.resource_id}
              photo={photo}
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default Portfolio;
