import React from 'react';
import './header.css'; // Import your CSS file
import lilyLogo from '/images/lily_logo.png'; // Import your logo image
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  // Map paths to link IDs
  const pathToLinkId = {
    "/": "about-link",
    "/portfolio": "portfolio-link",
    "/contact": "contact-link",
  };

  // Determine the active link based on the current path
  const activeLink = pathToLinkId[location.pathname] || "about-link";

  return (
    <header className="header mb-8">
      <div className="logo-container">
        <img src={lilyLogo} alt="Lily's Creations Logo" className="logo" />
      </div>
      <nav className="nav content-center">
        <ul className="nav-list">
          <li className="nav-item">
            <a
              id="about-link"
              href="/"
              className={`nav-link ${activeLink === "about-link" ? "active" : ""}`}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              id="portfolio-link"
              href="/portfolio"
              className={`nav-link ${activeLink === "portfolio-link" ? "active" : ""}`}
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              id="contact-link"
              href="/contact"
              className={`nav-link ${activeLink === "contact-link" ? "active" : ""}`}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
