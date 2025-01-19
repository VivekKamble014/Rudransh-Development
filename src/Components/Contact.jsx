import React from 'react'
import '../Styles/contact.css'
export default function Contact() {
  return (
    <div className='contact'>
      <section className="contact-section">
  <div className="contact-form">
    <h2>Contact Us</h2>
    <div className="form-group">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" placeholder="Your Name" />
    </div>
    <div className="form-group">
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" placeholder="Your Email" />
    </div>
    <div className="form-group">
      <label htmlFor="message">Message:</label>
      <textarea id="message" placeholder="Your Message" rows="5"></textarea>
    </div>
    <button type="submit">Submit</button>
  </div>
</section>
    </div>
  )
}
