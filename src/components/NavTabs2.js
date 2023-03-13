import React from "react";
import { NavLink } from "react-router-dom";

function NavTabs() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark container-fluid">
      <div className="container-fluid">
        <div className="navbar-brand">
          Anton Yosifov - Portfolio
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
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/projects" className="nav-link p-2 m-1">
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/skills" className="nav-link p-2 m-1">
                Skills
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link p-2 m-1">
                Contact Me
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavTabs;
