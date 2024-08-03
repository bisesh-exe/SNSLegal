import React from 'react';
import Home from './Home.jsx';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <div className="container-fluid min-vh-100 d-flex flex-column justify-content-center py-5" style={{ 
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(https://vivi-realestate.com/wp-content/uploads/2022/03/abogados.jpg)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}>
          <Home />
        </div>
      </div>
      <Footer className="mt-auto" />
    </div>
  );
}

export default App;