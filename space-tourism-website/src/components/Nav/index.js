import logo from '../../assets/shared/logo.svg';
import hamburger from '../../assets/shared/icon-hamburger.svg';
import close from '../../assets/shared/icon-close.svg';
import './Nav.scss';
import NavItems from './NavItems';

const Nav = () => (
   <nav className="nav">
      <div className="logo">
         <img src={logo} alt="logo" />
      </div>
      <div className="nav-line"></div>
      <div className="nav-list">
         <NavItems />
      </div>
      <div className="mobile-nav-list">
         <input
            type="checkbox"
            id="change-hamburger"
            className="change-hamburger"
         />
         <div className="hamburger">
            <img src={close} alt="close" className='close-icon' />
            <img src={hamburger} alt="hamburger" className='hamburger-icon' />
            <label htmlFor="change-hamburger"></label>
         </div>
         <div className="mobile-nav-list-items">
            <NavItems />
         </div>
      </div>
   </nav>
);

export default Nav;
