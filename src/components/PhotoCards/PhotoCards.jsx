import './PhotoCards.css';

function PhotoCards({ card, onPhotoClick }) {

  function handleClick() {
    onPhotoClick(card);
  }

  return (
    <div className='card'>
      <div className="card__img-wrapper">
        <img
          className='card__img '
          src={card._embedded.items[0].sizes[8].url}
          alt={card._embedded.items[0].name}
          onClick = {handleClick}
        />
      </div>
      <h1 className='card__title'>{card.name}</h1>
    </div>
  );
}

export default PhotoCards;
