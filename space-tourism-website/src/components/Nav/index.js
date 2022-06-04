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
            <Link to="/"><strong>00</strong> Home</Link>
         </li>
         <li className="nav-item">
            <Link to="/destination"><strong>01</strong> Destination</Link>
         </li>
         <li className="nav-item">
            <Link to="/crew"><strong>02</strong> Crew</Link>
         </li>
         <li className="nav-item">
            <Link to="/technology"><strong>03</strong> Technology</Link>
         </li>
      </ul>
   </nav>
);

export default Nav;
