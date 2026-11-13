function Hero() {
  return (
    <section className="hero section-wrap" id="overview">
      <div className="hero-copy">
        <span className="eyebrow">
           SOLARISGRID CLEANTECH
        </span>

        <h1>
          Decentralized <em>Clean Energy</em> for Resilient Power Grids
        </h1>

        <p>
          A clean energy system that helps manage solar, wind, and water power.
          It also helps save energy and keep local power grids reliable.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="primary-btn">
             Connect Clean Grid
          </a>

          <a href="#matrix" className="secondary-btn">
            Calculate Carbon Offset
          </a>
        </div>

        <div className="metrics">
          <div className="metric">
            <strong>1.84 GW</strong>
            <span>Managed Active Load</span>
          </div>

          <div className="metric">
            <strong>4 MT</strong>
            <span>CO₂ Averted Annually</span>
          </div>

          <div className="metric">
            <strong>99%</strong>
            <span>Fault Immunity Level</span>
          </div>
        </div>
      </div>

      <div className="telemetry">
        <div className="telemetry-head">
          <div>
            <small>LIVE GRID STATUS</small>
            <h3>Power Station #084-S</h3>
          </div>

          <span className="efficiency">
            Grid Efficiency:
            <b>98%</b>
          </span>
        </div>

        <div className="telemetry-info">
          <div>
            Grid Frequency
            <b>60 Hz (Stable)</b>
          </div>

          <div>
            Grid Status
            <b className="green">Stable</b>
          </div>
        </div>

        <div className="mix-title">
          <b>Current Energy Mix</b>
          <small>Live update</small>
        </div>

        <div className="energy-row">
          <div>
            <span className="dot sun"></span>
            Solar Energy
            <b>62%</b>
          </div>
          <div className="bar">
            <i style={{ width: "62%" }}></i>
          </div>
        </div>

        <div className="energy-row">
          <div>
            <span className="dot wind"></span>
            Wind Energy
            <b>26%</b>
          </div>
          <div className="bar">
            <i style={{ width: "26%" }}></i>
          </div>
        </div>

        <div className="energy-row">
          <div>
            <span className="dot water"></span>
            Water Energy
            <b>12%</b>
          </div>
          <div className="bar">
            <i style={{ width: "12%" }}></i>
          </div>
        </div>

        <div className="battery">

          <div>
            <small>Storage State</small>
            <b>Lithium Iron Phosphate</b>
          </div>

          <strong>
            94%
            <small>Capacity Ready</small>
          </strong>
        </div>

        <div className="terminal">
          System: Clean Energy Dashboard
          <span>Status: Online</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
