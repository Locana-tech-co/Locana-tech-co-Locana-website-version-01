import React, { useState, useRef, useCallback } from 'react';
import { FORM_INITIAL, CONTACT_INFO, validateForm } from '../data/constants';

export function Contact() {
  const [fields, setFields] = useState(FORM_INITIAL);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const lastSubmit = useRef(0);

  const update = useCallback((key) => (e) => setFields((f) => ({ ...f, [key]: e.target.value })), []);

  const submit = (e) => {
    e.preventDefault();
    if (Date.now() - lastSubmit.current < 10000) return;
    if (fields._hp) return;

    const errs = validateForm(fields);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setErrors({}); setStatus('sending');
    lastSubmit.current = Date.now();

    setTimeout(() => {
      setStatus('sent');
      setFields(FORM_INITIAL);
      setTimeout(() => setStatus('idle'), 3200);
    }, 800);
  };

  const Field = ({ id, label, error, children }) => (
    <div className="fg">
      <label htmlFor={id}>{label}</label>
      {children}
      {error && <span className="f-err" role="alert">{error}</span>}
    </div>
  );

  return (
    <section id="contact" className="sec" aria-labelledby="contact-h">
      <div className="sec-in"><div className="ct-lay">
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
            {['in','𝕏','gh','yt'].map((h) => <a href="#contact" className="csoc" key={h} aria-label={h} rel="noopener noreferrer">{h}</a>)}
          </div>
        </div>

        <form className="ct-form rv d1" onSubmit={submit} noValidate aria-label="Contact form">
          <input name="_hp" type="text" value={fields._hp || ''} onChange={update('_hp')}
            tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: 'none' }} />

          <div className="f-row">
            <Field id="firstName" label="First Name" error={errors.firstName}>
              <input id="firstName" className={`fi ${errors.firstName ? 'fi-err' : ''}`} type="text" placeholder="Varun" value={fields.firstName} onChange={update('firstName')} autoComplete="given-name" maxLength={50} />
            </Field>
            <Field id="lastName" label="Last Name" error={errors.lastName}>
              <input id="lastName" className={`fi ${errors.lastName ? 'fi-err' : ''}`} type="text" placeholder="Kapoor" value={fields.lastName} onChange={update('lastName')} autoComplete="family-name" maxLength={50} />
            </Field>
          </div>
          <Field id="email" label="Email" error={errors.email}>
            <input id="email" className={`fi ${errors.email ? 'fi-err' : ''}`} type="email" placeholder="you@company.com" value={fields.email} onChange={update('email')} autoComplete="email" maxLength={100} />
          </Field>
          <Field id="company" label="Company" error={errors.company}>
            <input id="company" className={`fi ${errors.company ? 'fi-err' : ''}`} type="text" placeholder="Your company" value={fields.company} onChange={update('company')} autoComplete="organization" maxLength={100} />
          </Field>
          <Field id="service" label="Service Needed" error={errors.service}>
            <select id="service" className={`fsl ${errors.service ? 'fi-err' : ''}`} value={fields.service} onChange={update('service')}>
              <option>Select...</option>
              <option>Custom Software</option><option>Automation System</option>
              <option>AI / ML Integration</option><option>Locana Labs R&D</option>
              <option>Consulting</option>
            </select>
          </Field>
          <Field id="details" label="Project Details" error={errors.details}>
            <textarea id="details" className={`fta ${errors.details ? 'fi-err' : ''}`} placeholder="Describe your project, goals, and timeline..." value={fields.details} onChange={update('details')} maxLength={2000} />
          </Field>

          <button type="submit" className="f-sub" disabled={status === 'sending'} aria-busy={status === 'sending'}
            style={status === 'sent' ? { background: 'var(--rose)' } : {}}>
            <span>{status === 'sending' ? 'Sending…' : status === 'sent' ? '✓ Request Sent' : 'Request a Meeting →'}</span>
          </button>
          <p className="f-note">Response within 24 hours · No spam</p>
        </form>
      </div></div>
    </section>
  );
}
