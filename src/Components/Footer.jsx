function Footer() {
    return (
      <footer className="footer bg-dark text-white py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4 mb-4 mb-md-0">
              <h5 className="text-uppercase">Address</h5>
              <p>Suite 15, Level 1, 301 Catelreagh st, NSW 2000</p>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <h5 className="text-uppercase">Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white">Blogs</a></li>
                <li><a href="#" className="text-white">CSR(Corporate Social Responsibility)</a></li>
                <li><a href="#" className="text-white">Career</a></li>
              </ul>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <h5 className="text-uppercase">Follow Us</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white"><i className="fab fa-facebook-f" /></a></li>
                <li><a href="#" className="text-white"><i className="fab fa-twitter" /></a></li>
                <li><a href="#" className="text-white"><i className="fab fa-instagram" /></a></li>
              </ul>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-10">
                
              <p className="text-center text-white">Copyright 2024 All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;