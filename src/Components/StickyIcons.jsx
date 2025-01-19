import React from 'react';
import '../Styles/StickyIcons.css';
import whatsappIcon from '../Images/whatsappicon.png'; // Update path as per your project structure
import callIcon from '../Images/callicon.png'; // Update path as per your project structure

export default function StickyIcons() {
  return (
    <div className="sticky-icons">
      <a
        href="https://wa.me/7709629488" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="sticky-icon whatsapp" 
        title="Chat on WhatsApp"
      >
        <img src={whatsappIcon} alt="WhatsApp" />
      </a>
      <a
        href="tel:+917709629488" 
        className="sticky-icon call" 
        title="Call Us"
      >
        <img src={callIcon} alt="Call" />
      </a>
    </div>
  );
}