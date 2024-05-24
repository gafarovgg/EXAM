import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="left-header">
            <div className="logo">
              <h1>FOUNDATION</h1>
            </div>
          </div>
          <div className="right-header">
            <nav>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink>About</NavLink>
                </li>
                <li>
                  <NavLink>Discover</NavLink>
                </li>
                <li>
                  <NavLink>Donate</NavLink>
                </li>
                <li>
                  <NavLink>Blog</NavLink>
                </li>
                <li>
                  <NavLink to="/add-product">AddProduct</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
