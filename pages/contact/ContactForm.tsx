'use client';

import React, { useState } from 'react';
import { submitContactForm } from './ContactService';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send to Formspree
    await fetch('https://formspree.io/f/mnndgevo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(form),
    });
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div>
      {!submitted ? (
        <form className="w-full max-w-md mx-auto" onSubmit={handleSubmit}>
          <input className="w-full mb-4 p-2 border rounded" type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
          <input className="w-full mb-4 p-2 border rounded" type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <textarea className="w-full mb-4 p-2 border rounded" name="message" placeholder="Message" value={form.message} onChange={handleChange} required />
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700" type="submit">Send</button>
        </form>
      ) : (
        <div className="w-full max-w-md mx-auto bg-green-100 border border-green-400 text-green-700 px-4 py-6 rounded relative">
          <p className="mb-4 font-semibold">Thank you for your message!</p>
          <button
            className="absolute top-2 right-2 text-green-700 hover:text-green-900"
            onClick={handleClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
} 