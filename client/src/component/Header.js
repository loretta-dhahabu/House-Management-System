import React from "react";

function Header() {
  return (
    //   NavBar
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky">
      <a className="navbar-brand text-white " href="/">
        Rental-Hs-Mgt
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto ">
           {/* <li className="nav-item active ">
            <a className="nav-link" href="/">
              <i className="fa fa-home" aria-hidden="true "></i>
              Home <span className="sr-only ">(current)</span>
            </a> 
          </li>  */}
          {/* <li className="nav-item active">
            <a className="nav-link" href="/apartments">
              <i className="fa fa-cutlery" aria-hidden="true"></i> Houses
            </a>
          </li> */}
          {/* <li className="nav-item active">
            <a className="nav-link" href="/tenants">
              <i className="fa fa-cutlery" aria-hidden="true"></i> Tenants
            </a>
          </li> */}
          {/* <li className="nav-item active">
            <a className="nav-link" href="/payments">
              <i className="fa fa-cutlery" aria-hidden="true"></i> Payments
            </a>
          </li> */}
          {/* <li className="nav-item active">
            <a className="nav-link" href="/dashboard">
              <i className="fa fa-cutlery" aria-hidden="true"></i> Dashboard
            </a>
          </li> */}
          <li className="nav-item active">
            <a className="nav-link" href="/dashboard">
              <button type="button" className="btn btn-primary">
                <i class="fa fa-backward" aria-hidden="true"></i> Previous
              </button>
            </a>
          </li>
          {/* <li className="nav-item active">
            <a className="nav-link" href="/contact">
              <i className="fa fa-phone" aria-hidden="true"></i> Contact
            </a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
