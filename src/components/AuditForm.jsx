import { useState } from "react";

function AuditForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [connection, setConnection] = useState("");
  const [timeline, setTimeline] = useState("1-3 Months");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [solarCredit, setSolarCredit] = useState(true);
  const [euSupport, setEuSupport] = useState(false);
  const [energyRecords, setEnergyRecords] = useState(false);

  function resetForm() {
    setName("");
    setEmail("");
    setConnection("");
    setTimeline("1-3 Months");
    setDetails("");
    setSolarCredit(true);
    setEuSupport(false);
    setEnergyRecords(false);
    setSubmitted(false);
  }

  function submitForm(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="audit-section" id="contact">
      <div className="section-wrap audit-inner">
        <span className="section-kicker">EVALUATION PORTAL // SECTION 6</span>

        <h2>Request a Grid Check</h2>

        <p>
          Fill in the form to request a basic check of your site's clean energy
          setup.
        </p>

        <form className="audit-form" onSubmit={submitForm}>
          <div className="form-grid">
            <label>
              Your Name
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
              />
            </label>

            <label>
              Email Address
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
              />
            </label>
          </div>

          <label>
            Grid Connection Type

            <select
              value={connection}
              onChange={(e) => setConnection(e.target.value)}
              required
            >
              <option value="">Select connection type...</option>
              <option>High-voltage transmission (HV)</option>
              <option>Medium-voltage distribution (MV)</option>
              <option>Low-voltage microgrid (LV)</option>
              <option>Off-grid system</option>
            </select>
          </label>

          <fieldset>
            <legend>When do you plan to start?</legend>

            <div className="choice-row">
              <label className="choice">
                <input
                  type="radio"
                  name="timeline"
                  checked={timeline === "1-3 Months"}
                  onChange={() => setTimeline("1-3 Months")}
                />
                1-3 Months
              </label>

              <label className="choice">
                <input
                  type="radio"
                  name="timeline"
                  checked={timeline === "3 - 6 Months"}
                  onChange={() => setTimeline("3 - 6 Months")}
                />
                3 - 6 Months
              </label>

              <label className="choice">
                <input
                  type="radio"
                  name="timeline"
                  checked={timeline === "6+ Months"}
                  onChange={() => setTimeline("6+ Months")}
                />
                6+ Months
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend>Available Energy Support</legend>

            <div className="choice-row">
              <label className="choice">
                <input
                  type="checkbox"
                  checked={solarCredit}
                  onChange={(e) => setSolarCredit(e.target.checked)}
                />
                Solar Credits
              </label>

              <label className="choice">
                <input
                  type="checkbox"
                  checked={euSupport}
                  onChange={(e) => setEuSupport(e.target.checked)}
                />
                EU Support
              </label>

              <label className="choice">
                <input
                  type="checkbox"
                  checked={energyRecords}
                  onChange={(e) => setEnergyRecords(e.target.checked)}
                />
                Energy Records
              </label>
            </div>
          </fieldset>

          <label>
            Extra Details
            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Tell us about your energy needs..."
            />
          </label>

          <div className="form-actions">
            <span className="success-message">
              {submitted ? "✓ Your request has been submitted." : ""}
            </span>

            <button
              type="button"
              className="secondary-btn"
              onClick={resetForm}
            >
              Reset Form
            </button>

            <button type="submit" className="primary-btn">
              Send Request →
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AuditForm;