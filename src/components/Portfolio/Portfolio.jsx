import './Portfolio.css';
import Header from '../Header/Header';
import PhotoCards from '../PhotoCards/PhotoCards';
function Portfolio({ folder, photo, onClick, pagesArray, changePage }) {

  return (
    <div>
      <Header />
      <main className="portfolio">
        <p className="portfolio__quote">
          &laquo;Большинство вещей в&nbsp;жизни&nbsp;&mdash;
          это моменты удовольствия и&nbsp;смущения на&nbsp;
          всю жизнь. Фотография&nbsp;&mdash; это момент смущения
          и&nbsp;наслаждения на&nbsp;всю жизнь&raquo;.&mdash;
          Тони Бенн
        </p>
        <div className="portfolio__cards" onClick={onClick}>
          {photo.map((p) =>
            <PhotoCards
              card = {p}
              key={p}
            />
          )}
          {/* <div>
              <img
              className='card__img '
              src={p._embedded.items[0].file}
              alt=""
            />
            <p>{p.name}</p>
            </div> */}

        </div>
        {/* <div>
          {pagesArray.map((p) =>
            <button key={p} onClick={() => changePage(p)}>{p}</button>
          )}
        </div> */}
      </main>
    </div>
  );
}

export default Portfolio;
