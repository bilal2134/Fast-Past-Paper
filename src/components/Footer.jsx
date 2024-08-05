import React from 'react';
import { FaInstagram, FaLinkedin, FaCopyright } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <FaCopyright /> LeBillion
      </div>
      <div className="footer-right">
      <a href="https://www.linkedin.com/in/bilal-shakeel-ab2145279/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="footer-icon" />
        </a>
        <a href="https://www.instagram.com/bilal_shakeel8/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="footer-icon" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="footer-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
