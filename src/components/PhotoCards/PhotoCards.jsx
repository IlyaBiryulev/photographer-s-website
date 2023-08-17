import './PhotoCards.css'

function PhotoCards({ card, onPhotoClick }) {

  function handleClick() {
    onPhotoClick(card);
  }

  return (
    <div className='card__wrapper'>
      <div className="card">
      <img
        className='card__img '
        src={card._embedded.items[0].file}
        alt={card._embedded.items[0].name}
        onClick = {handleClick}
      />
      </div>
      <h1 className='card__title'>{card.name}</h1>
    </div>
  );
}

export default PhotoCards;
