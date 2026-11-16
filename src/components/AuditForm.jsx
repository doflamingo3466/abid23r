import { useState } from "react";

function AuditForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    connection: "",
    timeline: "",
    solarCredit: false,
    euSupport: false,
    energyRecords: false,
    details: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  }

  function resetForm() {
    setForm({
      name: "",
      email: "",
      connection: "",
      timeline: "",
      solarCredit: false,
      euSupport: false,
      energyRecords: false,
      details: "",
    });
    setSubmitted(false);
  }

  function handleSubmit(e) {
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

        <form className="audit-form" onSubmit={handleSubmit}>
          <label>
            Your Name
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
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
              required
            />
          </label>

          <label>
            Grid Connection Type
            <select
              name="connection"
              value={form.connection}
              onChange={handleChange}
              required
            >
              <option value="">Select connection type</option>
              <option>High-voltage transmission (HV)</option>
              <option>Medium-voltage distribution (MV)</option>
              <option>Low-voltage microgrid (LV)</option>
              <option>Off-grid system</option>
            </select>
          </label>

          <fieldset>
            <legend>When do you plan to start?</legend>

            {["1-3 Months", "3 - 6 Months", "6+ Months"].map((item) => (
              <label key={item}>
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
          </fieldset>

          <fieldset>
            <legend>Available Energy Support</legend>

            <label>
              <input
                type="checkbox"
                name="solarCredit"
                checked={form.solarCredit}
                onChange={handleChange}
              />
              Solar Credits
            </label>

            <label>
              <input
                type="checkbox"
                name="euSupport"
                checked={form.euSupport}
                onChange={handleChange}
              />
              EU Support
            </label>

            <label>
              <input
                type="checkbox"
                name="energyRecords"
                checked={form.energyRecords}
                onChange={handleChange}
              />
              Energy Records
            </label>
          </fieldset>

          <label>
            Extra Details
            <textarea
              name="details"
              value={form.details}
              onChange={handleChange}
            />
          </label>

          {submitted && <p>Your request has been submitted</p>}

          <button className="secondary-btn" type="button" onClick={resetForm}>
            Reset Form
          </button>

          <button className="primary-btn" type="submit">Send Request</button>
        </form>
      </div>
    </section>
  );
}

export default AuditForm;
