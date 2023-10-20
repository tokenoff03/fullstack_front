
import { NavLink } from 'react-router-dom';
import '../App.css';

function Header() {
  return (
    <div className="Header">
        <nav class="nav">
            <ul class="ul">
              <NavLink to="/" className={(navData) => (navData.isActive ? "active" : "")}><li class="li">HOME</li></NavLink>
              <NavLink to="/rooms" className={(navData) => (navData.isActive ? "active" : "")}><li class="li">Rooms</li></NavLink>
                <li class="li">WHY CHOOSE US</li>
                <li class="li">Profile</li>
                <li class="li">Admin</li>
                <li class="li">Log Out</li>
                <li class="li">Sign In</li>
            </ul>
            <input type="text" class="search" name="search" placeholder="Search"/>
        </nav>
    </div>
  );
}

export default Header;