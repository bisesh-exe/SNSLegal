import React from 'react';

function Home() {
  return (
    <>

      <div className="container-fluid min-vh-100 d-flex flex-column justify-content-center ">
        
          
          <div className="col-md-6 mx-auto d-flex flex-column justify-content-center">
            <div >
              <h2 className="mb-3 text-dark">S&S Legal and Conveyancing Services</h2>
              <p className="mb-4 text-dark">With experienced team of Advocates get the legal advice.</p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>


    <div style={{ backgroundColor: 'white' }}>
      <div className="container-fluid min-vh-100 d-flex flex-column justify-content-center ">
        <div className="row mb-5 pt-5">
          <div className="col-md-6 mx-auto p-5">
            <div >
              <img src="https://www.trios.com/uploads/2023/01/what-is-a-legal-assistant.jpg" alt="Image" className="img-fluid rounded" style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>
          <div className="col-md-6 mx-auto d-flex flex-column justify-content-center">
            <div >
              <h2 className="mb-3 text-dark">Legal Services from Exprerienced Team</h2>
              <p className="mb-4 text-dark">With experienced team of Advocates get the legal advice.</p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      </div>
      </>
  );
}

export default Home;