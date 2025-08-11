// app/contact/page.jsx
"use client";

import { useState } from 'react'; // Make sure useState is imported
import Link from 'next/link';

export default function ContactPage() {
  // --- THIS IS THE LOGIC THAT WAS MISSING ---
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/api/send-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('Sorry, something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      setStatus('Failed to send message. Please check your connection.');
    }
  };
  // --- END OF MISSING LOGIC ---

  return (
    <div className=" text-black pt-26">
      <div className="max-w-2xl mx-auto py-20 px-4">
        <div className="text-center mb-12">
          <h1 className=" text-[#0067ff] md:text-3xl   font-sans-serif font-semibold  text-center mb-12max-w-4xl mx-auto mb-4">Get In Touch</h1>
          <p className="text-lg text-black">
            Have a question, suggestion, or partnership inquiry? We'd love to hear from you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#FED600] p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-sans-serif text-purple-950 mb-2 font-semibold">Full Name :</label>
            <input type="text" id="name" value={formData.name} onChange={handleChange} required className="w-full p-3 bg-white rounded border border-gray-300 text-gray-800 focus:border-reviva-green focus:ring focus:ring-reviva-green focus:ring-opacity-50 transition-colors" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-sans-serif text-lg text-purple-950 mb-2 font-semibold">Email Address :</label>
            <input type="email" id="email" value={formData.email} onChange={handleChange} required className="w-full p-3 bg-white rounded border border-gray-300 text-gray-800 focus:border-reviva-green focus:ring focus:ring-reviva-green focus:ring-opacity-50 transition-colors" />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-lg text-purple-950 mb-2 font-semibold font-sans-serif">Subject :</label>
            <input type="text" id="subject" value={formData.subject} onChange={handleChange} required className="w-full p-3 bg-white rounded border border-gray-300 text-gray-800 focus:border-reviva-green focus:ring focus:ring-reviva-green focus:ring-opacity-50 transition-colors" />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block font-sans-serif text-lg text-purple-950 mb-2 font-semibold">Message :</label>
            <textarea id="message" rows="5" value={formData.message} onChange={handleChange} required className="w-full p-3 bg-white rounded border border-gray-300 text-gray-800 focus:border-reviva-green focus:ring focus:ring-reviva-green focus:ring-opacity-50 transition-colors"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-white hover:bg-black hover:text-white text-black font-semibold font-sans-serif py-3 px-8 rounded-lg transition-colors w-full sm:w-auto">Send Message</button>
          </div>
          {status && <p className="text-center text-green-600 mt-6">{status}</p>}
        </form>

        <div className="text-center mt-12">
          <Link href="/">
            <button className="border-2 border-black bg-green-700 hover:bg-white hover:text-black text-white font-semibold font-sans-serif py-3 px-8 rounded-lg text-lg transition-colors">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}