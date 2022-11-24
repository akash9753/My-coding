import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <nav className="navbar navbar-expand-lg navbar-light justify-content-between-footer">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link-footer" href="/#">
                Terms of Use
              </a>
              <span>|</span>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link-footer"
                to="/privacy-policy"
              >
                Privacy Policy
              </Link>
            </li>
            <li className="nav-item">
              <a href="/#" className="footer-content">
                Copyright @2022.Hurix Digital .All Rights Reserved.
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
