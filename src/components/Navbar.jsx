import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link to="/" className="logo">
          <Heart size={28} color="#ec4899" fill="#ec4899" />
          Impact<span>Drive</span>
        </Link>
        <div className="nav-links">
          <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
          <Link to="/charities" className={`nav-link ${isActive('/charities')}`}>Charities</Link>
          <Link to="/admin" className={`nav-link ${isActive('/admin')}`}>Admin</Link>
          <Link to="/dashboard" className={`nav-link ${isActive('/dashboard')}`}>Dashboard</Link>
        </div>
        <div className="nav-actions">
          <Link to="/subscribe" className="btn btn-primary">Subscribe & Play</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
