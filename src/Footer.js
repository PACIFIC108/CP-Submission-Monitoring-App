import React from 'react';
import './App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-logo">PacificWebsite</p>
        <p className="copyright">© {new Date().getFullYear()} PacificWebsite. All rights reserved.</p>
        {/*<ul className="footer-links">
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>*/}
        <ul className="social-icons">
          <li><a href="https://www.instagram.com/prasantkayshep__/profilecard/?igsh=OXo1MXFvMDI3NXhi" 
                   target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
              </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
