import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="https://www.youtube.com/">
          Navbar
        </a>
        <div className={`navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="https://www.youtube.com/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.youtube.com/">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true" href="https://www.youtube.com/">
                Disabled
              </a>
            </li>
          </ul>
          
        </div>
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
      </div>
    </nav>
  );
};

export default Navbar;
