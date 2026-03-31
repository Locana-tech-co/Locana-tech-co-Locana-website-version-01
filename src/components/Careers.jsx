import React, { useState } from 'react';
import { JOBS } from '../data/constants';

export function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', portfolio: '', coverLetter: '' });
  const [status, setStatus] = useState('idle');

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setStatus('sending');

    fetch('/api/apply', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ job: selectedJob.title, ...form })
    })
    .then(res => res.json())
    .then(() => {
      setStatus('sent');
    })
    .catch(() => setStatus('idle'));
  };

  const handleBack = () => {
    setStatus('idle');
    setSelectedJob(null);
    setForm({ name: '', email: '', portfolio: '', coverLetter: '' });
  };

  return (
    <section id="careers" className="sec" style={{ background: 'var(--bg2)' }} aria-labelledby="careers-h">
      <div className="sec-in">
        <span className="lbl rv">Careers</span>
        <h2 id="careers-h" className="sh rv">Build the future <em>with us</em></h2>
        <p className="sdesc rv">We're always looking for exceptional engineers, AI researchers, and designers to join our core team in India.</p>
        
        {!selectedJob ? (
          <div className="job-list" role="list">
            {JOBS.map((j) => (
              <div className={`job-row ${j.delay || ''}`} key={j.title} role="listitem">
                <div className="job-info">
                  <h4>{j.title}</h4>
                  <div className="job-meta">{j.location} <span aria-hidden="true">•</span> {j.type} <span aria-hidden="true">•</span> {j.dept}</div>
                </div>
                <button onClick={() => setSelectedJob(j)} className="job-ar" style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontFamily: 'inherit', color: 'var(--brand)' }} aria-label={`Apply for ${j.title}`}>Apply →</button>
              </div>
            ))}
          </div>
        ) : (
          <div className="ct-lay" style={{ marginTop: '3rem' }}>
            <div className="ct-l">
              <h3 className="sh" style={{ fontSize: '2rem' }}>Apply for<br/><em>{selectedJob.title}</em></h3>
              <p className="sdesc">Fill out the form to apply. We review all applications and will get back to you soon.</p>
              <button onClick={() => setSelectedJob(null)} className="btn-ghost" style={{ marginTop: '1rem', border: 'none', padding: '0', color: 'var(--body)' }}>← Back to roles</button>
            </div>
            {status === 'sent' ? (
              <div className="ct-form" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
                <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--ink)' }}>Application Received</h4>
                <p className="sdesc" style={{ margin: '0 auto 2rem' }}>We've sent an overview to our hiring team. We'll be in touch soon!</p>
                <button onClick={handleBack} className="btn-fill">Go back to roles</button>
              </div>
            ) : (
              <form className="ct-form" onSubmit={submit} noValidate>
                 <div className="fg">
                   <label htmlFor="appName">Full Name</label>
                   <input id="appName" className="fi" type="text" placeholder="John Doe" value={form.name} onChange={update('name')} required />
                 </div>
                 <div className="fg">
                   <label htmlFor="appEmail">Email Address</label>
                   <input id="appEmail" className="fi" type="email" placeholder="john@example.com" value={form.email} onChange={update('email')} required />
                 </div>
                 <div className="fg">
                   <label htmlFor="appPortfolio">Portfolio / Resume Link</label>
                   <input id="appPortfolio" className="fi" type="url" placeholder="https://..." value={form.portfolio} onChange={update('portfolio')} />
                 </div>
                 <div className="fg">
                   <label htmlFor="appCoverLetter">Why join us?</label>
                   <textarea id="appCoverLetter" className="fta" placeholder="A brief about yourself..." value={form.coverLetter} onChange={update('coverLetter')} />
                 </div>
                 <button type="submit" className="f-sub" disabled={status === 'sending'}>
                   <span>{status === 'sending' ? 'Sending…' : 'Submit Application →'}</span>
                 </button>
              </form>
            )}
          </div>
        )}

        <div className="rv d4" style={{ marginTop: '3rem', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--f)', fontSize: '1rem', color: 'var(--body)', marginBottom: '1rem' }}>Don't see a role that fits? Send us your portfolio.</p>
          <a href="mailto:locanatechnologies@gmail.com" className="btn-ghost">locanatechnologies@gmail.com</a>
        </div>
      </div>
    </section>
  );
}
