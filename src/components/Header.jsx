import { useState } from "react";

function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className="topbar">
        <span>STANDARDIZED TEST ENVIRONMENT</span>
        <span>SolarisGrid CleanTech Evaluation Suite</span>
        <span>Allocated Duration: 05 hr</span>
      </div>

      <header className="header">
        <a href="#overview" className="brand">
          <span className="brand-mark">A C</span>
          <span>
            <b>AegisCore</b>
            <small>Standards Engine</small>
          </span>
        </a>

        <button className="mobile-toggle" onClick={() => setMenu(!menu)}>
          {menu ? "✕" : "☰"}
        </button>

        <nav className={menu ? "nav nav-open" : "nav"}>
          <a href="#overview">Overview</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#matrix">Matrix</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
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
