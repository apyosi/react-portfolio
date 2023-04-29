import React from "react";
import { NavLink } from "react-router-dom";

function NavTabs() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark container-fluid">
      <div className="container-fluid">
        <div className="navbar-brand">
          <NavLink to="/" className="nav-link p-2 m-1">
          <i className="fa-brands fa-react" aria-hidden="true"></i> React Portfolio
          </NavLink>
        </div>
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link p-2 m-1">
              <i className="fa-solid fa-house" aria-hidden="true"></i> Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/projects" className="nav-link p-2 m-1">
              <i className="fa-solid fa-rocket" aria-hidden="true"></i> Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/skills" className="nav-link p-2 m-1">
              <i className="fa-solid fa-hammer" aria-hidden="true"></i> Skills
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link p-2 m-1">
              <i className="fa-solid fa-envelope" aria-hidden="true"></i> Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavTabs;
