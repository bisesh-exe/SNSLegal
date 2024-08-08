import { Link } from 'react-router-dom';
import '../CSS/Navbar.css';

function Navbar() {
  return (
    <div className='Navbar-container'>
      <div className='logo'>
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9IwSANPVZUv0Rtb2P63DlRpU7h6hoEpO1NqazB4zzCtaSQmW4i7DuTDKFNPY2xP2UBHC-1HbHNVvJMjbBwkyoYOZT6oJH7kFdaumAO280smZm1T3TXiz4H3HQeFp7QRNVNcULTUOOgIGaSOh6AY1Dq6NkOtoVANsC3VwOAINxqTeaE7vggks41plzNYK9/s320/S&S%20legal%20logo%205.png" alt="S&S Legal and Conveyancing Logo" />
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/testimony">Testimony</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
