import './header.css';
import ironhack from '../assets/images/ironhack-logo-xs.png';
import menu from '../assets/images/menu-top-xs.png';

function Header() {
  return (
    <div className="header">
      <img src={ironhack} alt="Ironhack" />
      <img src={menu} alt="Menu" />
    </div>
  );
}

export default Header;
