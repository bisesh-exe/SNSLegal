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

        <label htmlFor="services" className="label">Services</label>
        <select id="services" required>
          <option value="">Select a service</option>
          <option value="FamilyLaw">Family Law</option>
          <option value="CriminalLaw">Criminal Law</option>
          <option value="BusinessLaw">Business Law</option>
        </select>

        <input type="submit" value="Submit" className="submit-btn" />
      </form>
    </div>
  );
}

export default Getquote;