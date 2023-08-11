import './SlideImg.css'

function SlideImg({card}) {
  return (
      <img
        src={card.file}
        className="slide-img"
        alt={card.name}
      />
  );
}

export default SlideImg;
