import React, { useState, useRef, useCallback } from 'react';
import emailjs from '@emailjs/browser';
import { FORM_INITIAL, CONTACT_INFO, validateForm } from '../data/constants';

// ─── EmailJS config ───────────────────────────────────────────────────────────
// 1. Sign up free at https://www.emailjs.com
// 2. Create a service (Gmail / Outlook / etc.) → copy Service ID below
// 3. Create an email template → copy Template ID below
//    Template variables used: {{firstName}}, {{lastName}}, {{email}},
//                              {{company}}, {{service}}, {{details}}
// 4. Go to Account → API Keys → copy your Public Key below
const EJS_SERVICE  = 'service_v2dm128';
const EJS_TEMPLATE = 'template_1ii912x';
const EJS_PUBLIC   = 'pKFK0zo-CNu0sq_yo';
// ─────────────────────────────────────────────────────────────────────────────

const Field = ({ id, label, error, children }) => (
  <div className="fg">
    <label htmlFor={id}>{label}</label>
    {children}
    {error && <span className="f-err" role="alert">{error}</span>}
  </div>
);

export function Contact() {
  const [fields, setFields] = useState(FORM_INITIAL);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const lastSubmit = useRef(0);

  const update = useCallback((key) => (e) => setFields((f) => ({ ...f, [key]: e.target.value })), []);

  const submit = async (e) => {
    e.preventDefault();

    // Honeypot spam check
    if (fields._hp) return;

    // Rate limit: 10 seconds between submissions
    if (Date.now() - lastSubmit.current < 10000) return;

    // Validate
    const errs = validateForm(fields);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setErrors({});
    setStatus('sending');
    lastSubmit.current = Date.now();

    try {
      await emailjs.send(
        EJS_SERVICE,
        EJS_TEMPLATE,
        {
          firstName: fields.firstName,
          lastName:  fields.lastName,
          email:     fields.email,
          phone:     fields.phone,
          service:   fields.service,
          details:   fields.details,
          reply_to:  fields.email,
        },
        EJS_PUBLIC
      );
      setStatus('sent');
      setFields(FORM_INITIAL);
      setTimeout(() => setStatus('idle'), 4000);
    } catch (err) {
      console.error('EmailJS error status:', err?.status);
      console.error('EmailJS error text:', err?.text);
      console.error('Full error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="sec" aria-labelledby="contact-h">
      <div className="sec-in"><div className="ct-lay">

        {/* Left — info */}
        <div className="ct-l">
          <span className="lbl rv">Let's Work Together</span>
          <h2 id="contact-h" className="sh rv">Got a project?<br /><em>Let's talk.</em></h2>
          <p className="sdesc rv">Tell us what you're building — custom software, automation, or a full product. We'd love to hear it.</p>
          <div style={{ marginTop: '2.8rem' }}>
            {CONTACT_INFO.map(([icon, label, val], i) => (
              <div className={`ct-det rv ${i ? `d${i}` : ''}`} key={label}>
                <div className="ct-ico" aria-hidden="true">{icon}</div>
                <div><div className="ct-lb">{label}</div><div className="ct-v">{val}</div></div>
              </div>
            ))}
          </div>
          <div className="ct-soc rv d3">
            {['in', '𝕏', 'gh', 'yt'].map((h) => (
              <a href="https://linkedin.com" className="csoc" key={h} aria-label={h} rel="noopener noreferrer">{h}</a>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <form className="ct-form rv d1" onSubmit={submit} noValidate aria-label="Contact form">
          {/* Honeypot */}
          <input name="_hp" type="text" value={fields._hp || ''} onChange={update('_hp')}
            tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: 'none' }} />

          <div className="f-row">
            <Field id="firstName" label="First Name" error={errors.firstName}>
              <input id="firstName" className={`fi ${errors.firstName ? 'fi-err' : ''}`} type="text"
                placeholder="Varun" value={fields.firstName} onChange={update('firstName')}
                autoComplete="given-name" maxLength={50} />
            </Field>
            <Field id="lastName" label="Last Name" error={errors.lastName}>
              <input id="lastName" className={`fi ${errors.lastName ? 'fi-err' : ''}`} type="text"
                placeholder="Kapoor" value={fields.lastName} onChange={update('lastName')}
                autoComplete="family-name" maxLength={50} />
            </Field>
          </div>

          <Field id="email" label="Email" error={errors.email}>
            <input id="email" className={`fi ${errors.email ? 'fi-err' : ''}`} type="email"
              placeholder="you@company.com" value={fields.email} onChange={update('email')}
              autoComplete="email" maxLength={100} />
          </Field>

          <Field id="phone" label="Phone Number" error={errors.phone}>
            <input id="phone" className={`fi ${errors.phone ? 'fi-err' : ''}`} type="tel"
              placeholder="+91 98765 43210" value={fields.phone} onChange={update('phone')}
              autoComplete="tel" maxLength={20} />
          </Field>

          <Field id="service" label="Service Needed" error={errors.service}>
            <select id="service" className={`fsl ${errors.service ? 'fi-err' : ''}`}
              value={fields.service} onChange={update('service')}>
              <option>Select...</option>
              <option>Custom Software</option>
              <option>Automation System</option>
              <option>Website / Landing Page with SEO</option>
              <option>Consulting</option>
              <option>Other</option>
            </select>
          </Field>

          <Field id="details" label="Project Details" error={errors.details}>
            <textarea id="details" className={`fta ${errors.details ? 'fi-err' : ''}`}
              placeholder="Describe your project, goals, and timeline..."
              value={fields.details} onChange={update('details')} maxLength={2000} />
          </Field>

          <button
            type="submit"
            className="f-sub"
            disabled={status === 'sending'}
            aria-busy={status === 'sending'}
            style={status === 'sent' ? { background: 'var(--rose)' } : status === 'error' ? { background: '#c0392b' } : {}}
          >
            <span>
              {status === 'sending' ? 'Sending…'
                : status === 'sent'  ? '✓ Message Sent!'
                : status === 'error' ? '✗ Failed — try again'
                : 'Request a Meeting →'}
            </span>
          </button>
          <p className="f-note">Response within 24 hours · No spam</p>
        </form>

      </div></div>
    </section>
  );
}
