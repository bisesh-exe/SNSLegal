import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Services from './components/Services';
import Testimony from './components/Testimony';
import Getquote from './components/Getquote';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimony" element={<Testimony />} />
        <Route path="/getquote" element={<Getquote />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
