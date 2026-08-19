"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setStatus("sending");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error ?? `Request failed (${res.status})`);
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <form className="contact-form reveal d1" onSubmit={onSubmit}>
      <div className="field-row">
        <div className="field">
          <label htmlFor="f-name">Your name</label>
          <input id="f-name" type="text" name="name" placeholder="Alex Chen" required />
        </div>
        <div className="field">
          <label htmlFor="f-company">Company</label>
          <input id="f-company" type="text" name="company" placeholder="Acme Health" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="f-email">Work email</label>
        <input id="f-email" type="email" name="email" placeholder="alex@acmehealth.com" required />
      </div>
      <div className="field">
        <label htmlFor="f-type">Project type</label>
        <select id="f-type" name="type" defaultValue="custom">
          <option value="custom">Custom application — build from scratch</option>
          <option value="support">Maintenance &amp; support retainer</option>
          <option value="modernization">Legacy modernization</option>
          <option value="performance">Performance / QA engagement</option>
          <option value="advisory">Not sure yet — advisory call</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="f-msg">Tell us about it</label>
        <textarea
          id="f-msg"
          name="message"
          placeholder="What are you trying to build, and by when? Rough budget range if you have one."
          required
        />
      </div>
      <div className="form-foot">
        <span className="fine">
          {status === "sent"
            ? "Message received — we’ll reply within 24 hours."
            : status === "error"
            ? error ?? "Something went wrong. Try again?"
            : "We reply to every message."}
        </span>
        <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : status === "sent" ? "Sent ✓" : "Send message"}
          {status === "idle" ? <span className="arrow">→</span> : null}
        </button>
      </div>

      <style jsx>{`
        .contact-form {
          background: var(--surface);
          border: 1px solid var(--rule);
          border-radius: 24px;
          padding: clamp(1.8rem, 3vw, 2.5rem);
          display: flex; flex-direction: column; gap: 1.4rem;
          box-shadow: var(--shadow-md);
        }
        .field { display: flex; flex-direction: column; gap: 0.5rem; }
        .field label {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: var(--text-soft);
        }
        .field input,
        .field textarea,
        .field select {
          background: transparent;
          border: 0;
          border-bottom: 1px solid var(--rule);
          padding: 0.75rem 0;
          color: var(--text);
          font-family: inherit;
          font-size: 1rem;
          transition: border-color 0.2s var(--ease);
          outline: none;
          width: 100%;
          appearance: none;
          border-radius: 0;
        }
        .field select {
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238B8D95' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>");
          background-repeat: no-repeat;
          background-position: right 0 center;
          padding-right: 1.4rem;
          cursor: pointer;
        }
        .field select option { background: var(--surface); color: var(--text); }
        .field input::placeholder, .field textarea::placeholder { color: var(--text-soft); }
        .field input:focus, .field textarea:focus, .field select:focus { border-color: var(--accent); }
        .field textarea { min-height: 110px; resize: vertical; font-family: inherit; }
        .field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.4rem; }
        .form-foot {
          display: flex; align-items: center; justify-content: space-between;
          gap: 1rem;
          margin-top: 0.4rem;
          flex-wrap: wrap;
        }
        .form-foot .fine {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-soft);
        }
        @media (max-width: 820px) {
          .field-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </form>
  );
}
