import './PhotoCards.css'

function PhotoCards({cards}) {
  return (
    <div className="card">
      <img
        src={cards.file}
        className="card__img"
        alt={cards.name}
      />
      <h1 className='card__title'>{cards.name}</h1>
    </div>
  );
}

export default PhotoCards;
