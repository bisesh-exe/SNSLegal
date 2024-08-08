import '../CSS/Getquote.css';

function Getquote() {
  return (
    <div className="getquote-container">
      <div className="rectangle"></div>
      <h1 className="getquote1-h1">Get Quote</h1>
      <form className="getquote-form">
        <label htmlFor="firstName" className="label">First Name</label>
        <input type="text" id="firstName" required />

        <label htmlFor="lastName" className="label">Last Name</label>
        <input type="text" id="lastName" required />

        <label htmlFor="contact" className="label">Contact</label>
        <input type="text" id="contact" required />

        <label htmlFor="email" className="label">Email</label>
        <input type="email" id="email" required />

        <label htmlFor="services" className="label">Buy, Sell or Transfer</label>
        <select id="services" required>
          <option value="">Select</option>
          <option value="Buy">Buy</option>
          <option value="Sell">Sell</option>
          <option value="Transfer">Transfer</option>
        </select>

        <label htmlFor="services" className="label">Property Type</label>
        <select id="services" required>
          <option value="">Select a Property</option>
          <option value="House">House</option>
          <option value="Strataunit">Strata Unit</option>
          <option value="Offtheplan">Off the plan</option>
          <option value="Vacantland">Vacant Land</option>
          <option value="Companytitle">Company Title</option>
          <option value="Commercialbuilding">Commercial Building</option>
          <option value="Commerciallease">Commercial Lease</option>
          <option value="Retaillease">Retail Lease</option>
        </select>

        <input type="submit" value="Submit" className="submit-btn" />
      </form>
    </div>
  );
}

export default Getquote;