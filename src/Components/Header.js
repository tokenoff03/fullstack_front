
import { NavLink, useNavigate } from 'react-router-dom';
import '../App.css';

function Header() {
  const navigate = useNavigate();
  let currentUser = JSON.parse(localStorage.getItem("user"))
  function logOut() {
    localStorage.removeItem("user")
    navigate("/login")
  }
  return (
    <div className="Header">
        <nav className="nav">
            <ul className="ul">
              <NavLink to="/" className={(navData) => (navData.isActive ? "active" : "")}><li className="li">HOME</li></NavLink>
              <NavLink to="/rooms" className={(navData) => (navData.isActive ? "active" : "")}><li className="li">Rooms</li></NavLink>
              <NavLink to="/comments" className={(navData) => (navData.isActive ? "active" : "")}><li className="li">Comments</li></NavLink>
                <li className="li">Profile</li>
                <li className="li">Admin</li>
                {
                  currentUser!= null? (<li className="li" onClick={logOut}>Log Out</li>): (<li className="li" onClick={()=>{navigate("/login")}}>Sign In</li>)
                }
                
                
            </ul>
            <input type="text" className="search" name="search" placeholder="Search"/>
        </nav>
    </div>
  );
}

export default Header;