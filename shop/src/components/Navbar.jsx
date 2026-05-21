import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="nav-container">

        {/* LOGO */}
        <div className="logo">
          Shop<span>Hub</span>
        </div>

        {/* DESKTOP LINKS */}
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <Link className="admin" to="/admin">Admin</Link>
        </div>

        {/* MOBILE BUTTON */}
        <div
          className="menu-btn"
          onClick={() => setOpen(!open)}
        >
          ☰
        </div>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="mobile-menu">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <Link className="admin" to="/admin">Admin</Link>
        </div>
      )}

    </nav>
  );
}