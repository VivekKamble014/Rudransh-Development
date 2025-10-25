import React from 'react';
import { 
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Rudransh Development</h3>
            <p>Your trusted partner in web design, development, and hosting solutions. We create exceptional digital experiences that drive business growth.</p>
            <div className="social-links">
              <a href="mailto:rudranshdevelopment@gmail.com" className="social-link" title="Email">
                <FaEnvelope />
              </a>
              <a href="https://linkedin.com" className="social-link" title="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com" className="social-link" title="GitHub">
                <FaGithub />
              </a>
              <a href="https://twitter.com" className="social-link" title="Twitter">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" className="social-link" title="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/AboutUs">About Us</a></li>
              <li><a href="/projects">Our Projects</a></li>
              <li><a href="/skills">Skills & Expertise</a></li>
              <li><a href="/ContactUs">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Our Services</h4>
            <ul>
              <li><a href="#services">Web Design</a></li>
              <li><a href="#services">Web Development</a></li>
              <li><a href="#services">Web Hosting</a></li>
              <li><a href="#services">Mobile Apps</a></li>
              <li><a href="#services">SEO Services</a></li>
              <li><a href="#services">UI/UX Design</a></li>
            </ul>
          </div>
          
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Rudransh Development. All rights reserved. | Designed & Developed with ❤️ by Rudransh Development</p>
        </div>
      </div>
    </footer>
  );
}
