import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/roadmap">Roadmap</Link>
      <Link to="/youtube">YouTube</Link>
      <Link to="/about">About</Link>
      <Link to="/resources">Resources</Link>
      <Link to="/coming-soon">Coming Soon</Link>
    </nav>
  );
};

export default Navbar;
