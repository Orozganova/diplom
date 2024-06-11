import './Header.css';
import Menu from '../Nav/Nav';
import Logo from '../Logo/Logo';
import {Link} from 'react-router-dom'
import Auth from '../Auth/Auth'
import CartLink from '../CartLink/CartLink';

function Header() {
  return (
    <header className="Header">
      <div className="container">
        <div className="Head flex">
          <Logo />
          <Menu />
          <div className="Buttons flex">
            <Auth />
          </div>
          <Link to="/cart" className="Cart_ic">
            <span>0</span>
          </Link>
          <CartLink />
        </div>
      </div>
    </header>
  );
}

export default Header;