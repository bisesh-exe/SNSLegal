import "../CSS/Home.css";
import familySvg from "../assets/family.svg";
import crimeSvg from "../assets/crime.svg";
import businessSvg from "../assets/business.svg";

import { Link } from 'react-router-dom';

function Home() {

 
  return (
    <>
    {/* parallex */}
      <div className="home1">
        <div className="text1">
          <h1>S&S Legal and Conveyancing</h1>
          <h3>Legal solutions to every matter</h3>
          <Link to="/getquote" className="button1">Get a Quote</Link>
        </div>
      </div>

{/* Services */}
<h1 className="home2-h1">Our Expertise</h1>
      <div className="home2">
      <div className="text2">
          <img src={familySvg} alt="Family law" />
          <h3>Family Law</h3>
          <p>At S&S Legal, we specialize in family law, providing expert guidance and compassionate support for all family-related legal matters.</p>
        </div>
        <div className="text2">
          <img src={crimeSvg} alt="Crime law" />
          <h3>Criminal Law</h3>
          <p>Our experienced team at S&S Legal offers dedicated criminal law services, ensuring robust defense and fair representation in all criminal cases.</p>
        </div>
        <div className="text2">
          <img src={businessSvg} alt="Business law" />
          <h3>Business Law</h3>
          <p>S&S Legal excels in business law, delivering comprehensive legal solutions to protect and enhance your business interests.</p>
        </div>
      </div>
    </>
  );
}

export default Home;
