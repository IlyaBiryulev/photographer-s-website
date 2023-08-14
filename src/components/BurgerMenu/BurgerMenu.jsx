import './BurgerMenu.css'

import Overlay from '../Overlay/Overlay';
import NavBar from '../NavBar/NavBar'

function BurgerMenu({isOpen}) {
  return (
    <Overlay>
      <div className={`burger-menu ${isOpen ? 'burger-menu_active' : ''}`}>
        <NavBar />
      </div>
    </Overlay>
  );
}

export default BurgerMenu;
