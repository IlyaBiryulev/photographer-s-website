import './PhotoCards.css'

function PhotoCards({ cards, photo }) {
  return (
    <div className='card__wrapper'>
      <div className="card">
      <img
        src={photo._embedded?.items[0].file}
        className="card__img"
        alt={photo._embedded?.items[0].name}
      />
      {/* {photo._embedded?.items.map((card) =>
        <div>
          <img
          src={card.file}
          className="card__img"
          alt={card.name}
        />
        </div>
      )} */}
    </div>
    <h1 className='card__title'>{cards.name}</h1>
    </div>
  );
}

export default PhotoCards;
