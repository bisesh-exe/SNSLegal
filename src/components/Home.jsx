import "../CSS/Home.css";
import homeSvg from "../assets/home.svg";
import unitSvg from "../assets/unit.svg";
import rentSvg from "../assets/rent.svg";
import sachinpng from "../assets/sachin.png";

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

      {/* Expertise */}
      <h1 className="home2-h1">Our Expertise</h1>
      <div className="home2">
        <div className="text2">
          <img src={homeSvg} alt="Family law" />
          <h3>Buy, Sell Home</h3>
          <p>At S&S Legal, we specialize in family law, providing expert guidance and compassionate support for all family-related legal matters.</p>
        </div>
        <div className="text2">
          <img src={unitSvg} alt="Crime law" />
          <h3>Unit Lease</h3>
          <p>Our experienced team at S&S Legal offers dedicated criminal law services, ensuring robust defense and fair representation in all criminal cases.</p>
        </div>
        <div className="text2">
          <img src={rentSvg} alt="Business law" />
          <h3>Rent Land</h3>
          <p>S&S Legal excels in business law, delivering comprehensive legal solutions to protect and enhance your business interests.</p>
        </div>
      </div>



      {/* Why us */}
      
      <div className="home3">
  <h1 className="home3-h1">Why us?</h1>
  <div className="text3">
    <img className="sachinsir"src={sachinpng} alt="sachinsir pic" />
  </div>
  <div className="text4">
    <h2>Sachin Katuwal's diverse expertise as a Conveyancer, Financial Accountant, and Business Analyst</h2>
    <p>We are thrilled to announce that Sachin Katuwal has joined us as our new Business Manager and Analyst. Sachin has a vast amount of experience in both the private and the public sector with his most recent work being a Business Analyst at the iconic Sydney Opera House under the Australian Government.</p>
  </div>
</div>


    </>
  );
}

export default Home;
