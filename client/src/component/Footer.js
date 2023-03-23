import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Company Logo
            </h5>
            <p>Loremasdfghjkl;sdrtyuicgvhbjnkertyuioghjkbnm</p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Products
            </h5>
            <p className="text-white">House Types</p>

            <p className="text-white">Houses</p>

            <p className="text-white">Tenants</p>

            <p className="text-white">Payments</p>

          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Follow Us
            </h5>
            <div className="text-white text-center text-md-right">
              <ul className="list-unstyled list-block">
                <li className="list-block-item">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </li>
                <li className="list-block-item">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </li>
                <li className="list-block-item">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </li>
                <li className="list-block-item">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="mb-4 "></hr>
        <div className="row align-items-center">
          <div className="col-md-6 col-lg-7">
            <p>Copyright @2023 All rights reserved</p>
          </div>
          <div className="col-md-4 col-lg-4">
            <p>Terms & Services Privacy</p>
          </div>
          <div className="col-md-2 col-lg-1">
            <i className="fa fa-arrow-circle-o-up" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
