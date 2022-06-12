import { Link } from 'react-router-dom';

const NavItems = () => (
    <ul className="nav-list-items">
    <li className="nav-item">
       <Link to="/space-tourism">
          <strong>00</strong> Home
       </Link>
    </li>
    <li className="nav-item">
       <Link to="/space-tourism/destination">
          <strong>01</strong> Destination
       </Link>
    </li>
    <li className="nav-item">
       <Link to="/space-tourism/crew">
          <strong>02</strong> Crew
       </Link>
    </li>
    <li className="nav-item">
       <Link to="/space-tourism/technology">
          <strong>03</strong> Technology
       </Link>
    </li>
 </ul>
)

export default NavItems;