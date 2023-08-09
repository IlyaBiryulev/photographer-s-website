import "./ImagePopup.css";

import Overlay from "../Overlay/Overlay";

function ImagePopup({ isOpen, onBurgerClick, photo }) {
  return (
    <Overlay isOpen={isOpen} onClose={onBurgerClick}>
      <div className={`img-popup ${isOpen ? 'img-popup_opened' : ''}`}>
      <button className='img-popup__btn-cls' onClick={onBurgerClick}></button>
      <div className='img-popup__photo-wrapper'>
        {photo._embedded?.items.map((card) =>
          <div>
            <img
            src={card.file}
            className='img-popup__photo'
            alt={card.name}
          />
          </div>
        )}
      </div>
    </div>
    </Overlay>
  );
}

export default ImagePopup;
