import Header from "./Header";
import Card1 from "../image/Card1.jpg";
import {cardImage} from "../utils/cardImage.js"

console.log(Card1)

console.log(cardImage)
function Portfolio() {
  return (
    <div>
      <div className="header_dark-theme">
        <Header />
      </div>
      <main className="portfolio">
        <p className="portfolio__quote">&quot;Большинство вещей в&nbsp;жизни&nbsp;&mdash; это моменты удовольствия и&nbsp;смущения на&nbsp;всю жизнь. Фотография&nbsp;&mdash; это момент смущения и&nbsp;наслаждения на&nbsp;всю жизнь&quot;.&mdash; Тони Бенн</p>
        <section className="cards">
          <img src= {cardImage.one} className="cards__img" alt="изображение"></img>
          <img src= {cardImage.two} className="cards__img" alt="изображение"></img>
          <img src= {cardImage.three} className="cards__img" alt="изображение"></img>
          <img src= {cardImage.four} className="cards__img" alt="изображение"></img>
          <img src= {cardImage.five} className="cards__img" alt="изображение"></img>
          <img src= {cardImage.six} className="cards__img" alt="изображение"></img>
        </section>
      </main>
    </div>
  );
}

export default Portfolio;
