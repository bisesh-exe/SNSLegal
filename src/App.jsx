import React from 'react';
import Home from './Home.jsx';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';

const backgroundStyle = {
  backgroundImage: 'url(https://www.trios.com/uploads/2023/01/what-is-a-legal-assistant.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '100vh',
  width: '100vw'
};

function App() {
  return (
    <div className="d-flex flex-column h-100" style={backgroundStyle}>
      <Navbar />
      <Home />
      <Footer className="mt-auto" />
    </div>
  );
}

export default App;