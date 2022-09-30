import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <nav className="navbar">
      <ul className="list header-list">
        <li className="connect-container header-list-item">
          <div className="dropdown">
            <div
              className="dropdown-btn"
              onClick={(e) => setIsActive(!isActive)}
            >
              connect
            </div>
            {isActive && (
              <div
                className="dropdown-content"
                onMouseLeave={(e) => setIsActive(!isActive)}
              >
                <div className="dropdown-item">
                  <a
                    className="dropdown-link"
                    href="https://www.linkedin.com/in/bobmerullo/"
                  >
                    linkedin
                  </a>
                </div>
                <div className="dropdown-item">
                  <a
                    className="dropdown-link"
                    href="https://github.com/BMerullo"
                  >
                    github
                  </a>
                </div>
                <div className="dropdown-item">
                  <a className="dropdown-link" href="#">
                    email
                  </a>
                </div>
              </div>
            )}
          </div>
        </li>
        <li className="header-list-item">
          <Link
            className="nav-link"
            activeClassName="active-nav-link"
            id="header-link"
            to="/"
          >
            about
          </Link>
        </li>
        <li className="header-list-item">
          <Link className="nav-link" id="header-link" to="/projects">
            projects
          </Link>
        </li>
        <li className="header-list-item">
          <Link className="nav-link" id="header-link" to="/web">
            web
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
