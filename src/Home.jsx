import React from 'react';

function Home() {
  return (
    <div className="container-fluid min-vh-100 d-flex flex-column justify-content-center py-5">
      <div className="row mb-5 pt-5">
        <div className="col-md-4 mx-auto p-5 pt-50 pl-50">
          <img src="https://www.trios.com/uploads/2023/01/what-is-a-legal-assistant.jpg" alt="Image" className="img-fluid rounded" />
        </div>
        <div className="col-md-8 mx-auto p-5 pt-50 pl-50">
          <h2 className="mb-3 text-dark">S&S Legal and Conveyancing Services</h2>
          <p className="mb-4 text-dark">With exprerienced team of Advocates get the best legal advice.</p>
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Home;