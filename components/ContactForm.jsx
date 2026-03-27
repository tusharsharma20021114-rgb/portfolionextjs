// components/ContactForm.jsx
'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
        setTimeout(() => setStatus('idle'), 3500);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div className="form-row">
          <div className="form-group">
            <label>Name</label>
            <input required type="text" placeholder="Your name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input required type="email" placeholder="your@email.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
          </div>
        </div>
        <div className="form-group">
          <label>Subject</label>
          <input type="text" placeholder="What's this about?" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea required placeholder="Tell me about your project..." value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} />
        </div>
        <button type="submit" className="form-submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Sending...' : 'Send Message →'}
        </button>
      </form>
      
      {/* Success Toast */}
      <div id="toast" className={status === 'success' ? 'show' : ''}>✓ Message sent securely!</div>
    </div>
  );
}
