import { useState } from "react";

function AuditForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    connection: "",
    timeline: "1-3 Months",
    solarCredit: true,
    euSupport: false,
    energyRecords: false,
    details: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function submitForm(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  function resetForm() {
    setForm({
      name: "",
      email: "",
      connection: "",
      timeline: "1-3 Months",
      solarCredit: true,
      euSupport: false,
      energyRecords: false,
      details: "",
    });

    setSubmitted(false);
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
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </label>

            <label>
              Email Address
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email"
                required
              />
            </label>
          </div>

          <label>
            Grid Connection Type
            <select
              name="connection"
              value={form.connection}
              onChange={handleChange}
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
              {["1-3 Months", "3 - 6 Months", "6+ Months"].map((item) => (
                <label className="choice" key={item}>
                  <input
                    type="radio"
                    name="timeline"
                    value={item}
                    checked={form.timeline === item}
                    onChange={handleChange}
                  />
                  {item}
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend>Available Energy Support</legend>

            <div className="choice-row">
              <label className="choice">
                <input
                  type="checkbox"
                  name="solarCredit"
                  checked={form.solarCredit}
                  onChange={handleChange}
                />
                Solar Credits
              </label>

              <label className="choice">
                <input
                  type="checkbox"
                  name="euSupport"
                  checked={form.euSupport}
                  onChange={handleChange}
                />
                EU Support
              </label>

              <label className="choice">
                <input
                  type="checkbox"
                  name="energyRecords"
                  checked={form.energyRecords}
                  onChange={handleChange}
                />
                Energy Records
              </label>
            </div>
          </fieldset>

          <label>
            Extra Details
            <textarea
              name="details"
              value={form.details}
              onChange={handleChange}
              placeholder="Tell us about your energy needs"
            />
          </label>

          <div className="form-actions">
            <span className="success-message">
              {submitted && "✓ Your request has been submitted."}
            </span>

            <button type="button" className="secondary-btn" onClick={resetForm}>
              Reset Form
            </button>

            <button type="submit" className="primary-btn">
              Send Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AuditForm;
