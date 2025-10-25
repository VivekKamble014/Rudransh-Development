import React, { useState } from 'react';
import '../Styles/contact.css';
import Footer from './Footer';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaClock, 
  FaPaperPlane,
  FaCheckCircle,
  FaUser,
  FaAt,
  FaComment,
  FaBuilding,
  FaGlobe
} from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    service: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
        service: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email Us",
      details: "rudranshdevelopment@gmail.com",
      description: "Send us an email anytime",
      action: "mailto:rudranshdevelopment@gmail.com"
    },
    {
      icon: FaPhone,
      title: "Call Us",
      details: "+91 7709629488",
      description: "Mon-Fri from 9am to 6pm",
      action: "tel:+917709629488"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Visit Us",
      details: "Samrat Ashok Nagar, Tasgaon 416312",
      description: "Maharashtra, India",
      action: "https://maps.google.com"
    },
    {
      icon: FaClock,
      title: "Working Hours",
      details: "Monday - Friday",
      description: "9:00 AM - 6:00 PM IST",
      action: null
    }
  ];

  const services = [
    "Web Design",
    "Web Development", 
    "Mobile App Development",
    "E-commerce Solutions",
    "SEO Services",
    "Web Hosting",
    "UI/UX Design",
    "Consultation"
  ];

  return (
    <div className='contact'>
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Get In Touch</h1>
            <p>Ready to start your next project? We'd love to hear from you. Let's discuss how we can help bring your ideas to life.</p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-info-card">
                <div className="info-icon">
                  <info.icon />
                </div>
                <div className="info-content">
                  <h3>{info.title}</h3>
                  <p className="info-details">{info.details}</p>
                  <p className="info-description">{info.description}</p>
                  {info.action && (
                    <a href={info.action} className="info-action">
                      {info.title === "Email Us" ? "Send Email" : 
                       info.title === "Call Us" ? "Call Now" : 
                       info.title === "Visit Us" ? "View on Map" : ""}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="form-container">
            <div className="form-header">
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>

            {isSubmitted ? (
              <div className="success-message">
                <FaCheckCircle className="success-icon" />
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for contacting us. We'll get back to you soon.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      <FaUser className="input-icon" />
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      <FaAt className="input-icon" />
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address" 
                      required 
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">
                      <FaBuilding className="input-icon" />
                      Company Name
                    </label>
                    <input 
                      type="text" 
                      id="company" 
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Enter your company name" 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">
                      <FaPhone className="input-icon" />
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number" 
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="service">
                      <FaGlobe className="input-icon" />
                      Service Interested In
                    </label>
                    <select 
                      id="service" 
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">
                      <FaComment className="input-icon" />
                      Subject *
                    </label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?" 
                      required 
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    <FaComment className="input-icon" />
                    Message *
                  </label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project, requirements, or any questions you have..." 
                    rows="6"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <div className="spinner"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="faq-header">
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions about our services</p>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How long does a typical project take?</h3>
              <p>Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 2-6 months. We provide detailed timelines during consultation.</p>
            </div>
            <div className="faq-item">
              <h3>Do you provide ongoing support?</h3>
              <p>Yes! We offer comprehensive maintenance and support packages to keep your website running smoothly and up-to-date.</p>
            </div>
            <div className="faq-item">
              <h3>What technologies do you use?</h3>
              <p>We use modern technologies including React, Node.js, MongoDB, and various cloud platforms to build scalable, secure applications.</p>
            </div>
            <div className="faq-item">
              <h3>Do you work with international clients?</h3>
              <p>Absolutely! We work with clients worldwide and are experienced in remote collaboration and different time zones.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
