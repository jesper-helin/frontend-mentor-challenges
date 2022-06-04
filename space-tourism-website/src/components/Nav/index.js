import logo from '../../assets/shared/logo.svg';
import './Nav.scss';
import { Link } from 'react-router-dom';

const Nav = () => (
   <nav className="nav">
      <div className="logo">
         <img src={logo} alt="logo" />
      </div>
      <ul className="nav-list">
         <li className="nav-item">
            <Link to="/">Home</Link>
         </li>
         <li className="nav-item">
            <Link to="/destination">Destination</Link>
         </li>
         <li className="nav-item">
            <Link to="/crew">Crew</Link>
         </li>
         <li className="nav-item">
            <Link to="/technology">Technology</Link>
         </li>
      </ul>
   </nav>
);

export default Nav;
