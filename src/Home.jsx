import React from 'react';

function Home() {
  return (
    <>


<div className="card text-bg-white" style={{ paddingTop: 170 }}>
  <img
    src="https://www.forbes.com/advisor/wp-content/uploads/2022/11/Become_a_Lawyer.jpeg.jpg"
    className="card-img-top"
    alt="..."
    style={{ objectFit: 'cover', height: '200px', width: '100%', Opacity: 50 }}
  />
  <div className="card-img-overlay d-flex flex-column justify-content-center" style={{ paddingTop: 170 }}>
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h2 className="display-4 card-title text-white">S&S Legal</h2>
          <p className="card-text text-white" style={{backgroundColor: 'black'}}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <button type="button" className="btn btn-dark">Explore</button>
        </div>
      </div>
    </div>
  </div>
</div>

      <div style={{ backgroundColor: 'white' }}>
        <div className="row p-1">
          <div className="col-md-6 mx-auto p-5">
            <div>
              <img src="https://www.trios.com/uploads/2023/01/what-is-a-legal-assistant.jpg" alt="Image" className="img-fluid rounded" style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>
          <div className="col-md-6 mx-auto d-flex flex-column justify-content-center">
            <div>
              <h2 className="mb-3 text-dark">Legal Services from Experienced Team</h2>
              <p className="mb-4 text-dark">With an experienced team of Advocates, get the legal advice you need.</p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
