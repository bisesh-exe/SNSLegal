import React from 'react';

function Home() {
  return (
    <div className="container-fluid min-vh-100 d-flex flex-column justify-content-center py-5" style={{ 
      backgroundImage: 'linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(https://vivi-realestate.com/wp-content/uploads/2022/03/abogados.jpg)', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center' 
    }}>
      <div className="row mb-5 pt-5">
        <div className="col-md-6 mx-auto p-5">
          <img src="https://www.trios.com/uploads/2023/01/what-is-a-legal-assistant.jpg" alt="Image" className="img-fluid rounded pt-5 mt-5" style={{ width: '100%', height: 'auto' }} />
        </div>
        <div className="col-md-6 mx-auto p-5 d-flex flex-column justify-content-center">
          <h2 className="mb-3 text-dark">S&S Legal and Conveyancing Services</h2>
          <p className="mb-4 text-dark">With experienced team of Advocates get the legal advice.</p>
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Home;