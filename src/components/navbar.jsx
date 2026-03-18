import { useState } from "react";
import { motion } from "framer-motion";
import bookLogo from "../assets/book.png"; // your book image

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar-container">
      {/* Floating Book Across Screen */}
      <motion.img
        src={bookLogo}
        className="floating-book"
        alt="Library Book"
        animate={{
          rotate: [0, 10, -10, 10, 0],       // subtle rolling
          scaleY: [1, 1.3, 0.7, 1.3, 1],    // open/close pages
          x: ["0%", "calc(100vw - 100px)"], // move from left to right
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse", // move back from right to left
          ease: "easeInOut",
        }}
      />

      {/* Navbar */}
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