import './Header.css'
import NavBar from "../NavBar/NavBar";

function Header() {
    return (
      <div>
        <header className="header">
            <div className="header__logo"></div>
            <NavBar />
        </header>
      </div>
    );
  }

  export default Header;
