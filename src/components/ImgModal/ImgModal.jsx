import './ImgModal.css';
import Overlay from '../Overlay/Overlay';
import Slider from '../Slider/Slider';

function ImgModal({photo, isOpen, onClick}) {
  return (
    <Overlay isOpen={isOpen} onClick={onClick}>
      <Slider photo={photo}/>
    </Overlay>
  );
}

export default ImgModal;
