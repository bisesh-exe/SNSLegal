import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand mx-auto d-block" href="#">
          <img 
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9IwSANPVZUv0Rtb2P63DlRpU7h6hoEpO1NqazB4zzCtaSQmW4i7DuTDKFNPY2xP2UBHC-1HbHNVvJMjbBwkyoYOZT6oJH7kFdaumAO280smZm1T3TXiz4H3HQeFp7QRNVNcULTUOOgIGaSOh6AY1Dq6NkOtoVANsC3VwOAINxqTeaE7vggks41plzNYK9/s320/S&S%20legal%20logo%205.png" 
            style={{ width: 300, height: 150 }} 
            alt="S&S Legal Logo" 
          />
        </a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="offcanvas" 
          data-bs-target="#offcanvasDarkNavbar" 
          aria-controls="offcanvasDarkNavbar" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div 
          className="offcanvas offcanvas-end text-bg-dark" 
          tabIndex="-1" 
          id="offcanvasDarkNavbar" 
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">S&S Legal and Conveyancing</h5>
            <button 
              type="button" 
              className="btn-close btn-close-white" 
              data-bs-dismiss="offcanvas" 
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item dropdown">
                <a 
                  className="nav-link dropdown-toggle" 
                  href="#" 
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li><a className="dropdown-item" href="#">Legal Consultation</a></li>
                  <li><a className="dropdown-item" href="#">Types of Services</a></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li><a className="dropdown-item" href="#">Contact Us</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
