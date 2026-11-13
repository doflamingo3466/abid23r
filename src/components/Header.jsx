import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="topbar">
        <span>● STANDARDIZED TEST ENVIRONMENT #08</span>
        <span>SolarisGrid CleanTech v4.2 Evaluation Suite</span>
        <span>Allocated Duration: 05:00:00</span>
      </div>

      <header className="header">
        <a href="#overview" className="brand">
          <span className="brand-mark">✓</span>
          <span>
            <b>AegisCore</b>
            <small>Standards Engine</small>
          </span>
        </a>

        <button
          className="mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          <a href="#overview" onClick={() => setMenuOpen(false)}>Overview</a>
          <a href="#capabilities" onClick={() => setMenuOpen(false)}>Capabilities</a>
          <a href="#matrix" onClick={() => setMenuOpen(false)}>Matrix</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>

        <div className="header-actions">
          <a href="#contact" className="primary-btn">
            Start Assessment
          </a>
          <span className="user-icon">U</span>
        </div>
      </header>
    </>
  );
}

export default Header;