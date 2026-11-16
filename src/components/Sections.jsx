import { modules, facilities, cases } from "../data/siteData";

export function PartnerStrip() {
  return (
    <div className="partners">
      <span> INTERCONNECTED UTILITY OPERATORS:</span>
      <b> TESLA ENERGY</b>
      <b> SIEMENS ENERGY</b>
      <b> ENPHASE</b>
      <b> VESTAS</b>
      <b> ORSTED</b>
    </div>
  );
}

export function Modules() {
  return (
    <section className="content-section section-wrap" id="capabilities">
      <div className="section-heading">
        <div>
          <span className="section-kicker">MODULAR ARCHITECTURE</span>
          <h2>Advanced Renewable Operating Modules</h2>
        </div>

        <p>
          Simple tools for managing clean power, storing energy, and checking
          carbon savings.
        </p>
      </div>

      <div className="module-grid">
        {[...modules].map((item) => (
          <article className="module-card" key={item.code}>
            <div className="module-top">
              <span className="module-icon">{item.icon}</span>
              <span className="tag">{item.tag}</span>
            </div>

            <h3>{item.title}</h3>
            <p>{item.text}</p>

            <div className="module-foot">
              <small>{item.code}</small>
              <a href="#contact">Deploy Module</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Matrix() {
  return (
    <section className="matrix-section" id="matrix">
      <div className="section-wrap">
        <span className="section-kicker">CONTINUOUS AUDIT PROTOCOL</span>

        <h2>Regional Energy Output & Carbon Savings</h2>

        <p className="section-sub">
          A quick look at power output and estimated carbon savings from
          different clean energy sites.
        </p>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Microgrid Facility</th>
                <th>Peak Megawatt Output</th>
                <th>Annual Metric Tons Offset</th>
                <th>Grid Stability Tier</th>
              </tr>
            </thead>

            <tbody>
              {[...facilities].map((facility) => (
                <tr key={facility[1]}>
                  <td>
                    <b className="facility-name">{facility[0]}</b>
                    <small>{facility[1]}</small>
                  </td>

                  <td>{facility[2]}</td>
                  <td className="green">{facility[3]}</td>

                  <td>
                    <span
                      className={
                        facility[4] === "Gold Standard"
                          ? "status gold"
                          : "status good"
                      }
                    >
                      {facility[4]}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function CaseStudies() {
  return (
    <section className="content-section section-wrap" id="projects">
      <span className="section-kicker">FIELD VALIDATIONS</span>

      <h2>Municipal Clean Energy Case Studies</h2>

      <p className="section-sub case-sub">
        Examples of how clean energy can support towns, hospitals, and other
        important places.
      </p>

      <div className="case-grid">
        {[...cases].map((item) => (
          <article className="case-card" key={item.title}>
            <div
              className="case-image"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <span className="case-label">{item.label}</span>
              <span className="image-chip">{item.chip}</span>
            </div>

            <div className="case-body">
              <h3>{item.title}</h3>
              <p>{item.text}</p>

              <div className="case-stats">
                <div>
                  <small>{item.metricLabel}</small>
                  <b>{item.metric}</b>
                </div>

                <div>
                  <small>{item.sideLabel}</small>
                  <b>{item.side}</b>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
