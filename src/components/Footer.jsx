function Footer() {
  return (
    <footer className="footer section-wrap">
      <div className="footer-main">
        <div className="footer-brand">
          <div className="brand">
            <span className="brand-mark">A C</span>
            <b>AegisCore Architecture</b>
          </div>

          <p>
            A clean energy dashboard project made to show how renewable power
            can support local grids.
          </p>

          <small> ISO/IEC 27001 SOC 2 Type II NIST 800-53</small>
        </div>

        <div className="footer-col">
          <b>STANDARDS</b>
          <a href="#overview">ISO/IEC 42001:2023</a>
          <a href="#overview">IEEE 7000 Series</a>
          <a href="#overview">OWASP ASVS Level 3</a>
          <a href="#overview">Zero Trust Architecture</a>
        </div>

        <div className="footer-col">
          <b>QUICK LINKS</b>
          <a href="#overview">Home</a>
          <a href="#capabilities">Features</a>
          <a href="#matrix">Compliance Matrix</a>
          <a href="#projects">Projects</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2025 AegisCore Systems Inc. All rights reserved.</span>

        <span>
          <a href="#contact">Security Policy</a>
          <a href="#contact">Trust Center</a><a href="#contact">Terms</a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
