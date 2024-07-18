import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form id="contact-form">
        <input type="text" id="name" name="name" placeholder="Your Name" required />
        <input type="email" id="email" name="email" placeholder="Your Email" required />
        <textarea id="message" name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
