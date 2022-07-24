import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import logo1 from "../../images/javian_logo2.png";

const Navbar = () => {
  const [headerClassName, setHeaderClassName] = useState(
    "navbar navbar-expand-lg navbar-dark"
  );

  // const handleScroll = (headerClassName) => {
  //   if (window.pageYOffset > 50) {
  //     setHeaderClassName(
  //       "navbar fixed-top navbar-expand-lg navbar-dark bg-dark shadow"
  //     );
  //   } else {
  //     setHeaderClassName("navbar fixed-top navbar-expand-lg navbar-dark");
  //   }
  // };

  // React.useEffect(() => {
  //   window.onscroll = () => handleScroll(headerClassName);
  // }, [headerClassName]);
  return (
    <nav
      className={headerClassName}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          {/* <img src={} alt="logo" height="40" /> */}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse nav-list" id="navbarNav">
          <div className="mx-auto"></div>
          <div className="navbar-nav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 set-size">
              <li className="nav-item">
                <Link
                  className="nav-link text-success fw-bold text-uppercase ms-1"
                  aria-current="page"
                  to="/"
                >
                  <i className="fa-solid fa-house"></i>&nbsp;Upload
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link text-success fw-bold text-uppercase ms-1"
                  aria-current="page"
                  to="/gallery"
                >
                  <i className="fa-solid fa-bars-progress"></i>&nbsp;Gallery
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
