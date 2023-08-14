import './BurgerMenu.css'

import Overlay from '../Overlay/Overlay';
import NavBar from '../NavBar/NavBar'

function BurgerMenu() {
  return (
    <Overlay>
      <div className='burger-menu'>
        <NavBar />
      </div>
    </Overlay>
  );
}

export default BurgerMenu;
