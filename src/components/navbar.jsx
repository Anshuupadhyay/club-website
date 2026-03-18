import { useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar-container">
      {/* Logo wrapper for rolling + bounce */}
      <div className="logo-wrapper">
        <img src={logo} className="logo" alt="Logo" />
      </div>

      <nav className="navbar">
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li onClick={() => setMenuOpen(false)}>Home</li>
          <li onClick={() => setMenuOpen(false)}>Activities</li>
          <li onClick={() => setMenuOpen(false)}>Gallery</li>
          <li onClick={() => setMenuOpen(false)}>Leadership</li>
          <li onClick={() => setMenuOpen(false)}>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;