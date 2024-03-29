import './SlideImg.css';

function SlideImg({card}) {
  return (
      <img
        src={card.sizes[9].url}
        className="slide-img"
        alt={card.name}
      />
  );
}

export default SlideImg;
