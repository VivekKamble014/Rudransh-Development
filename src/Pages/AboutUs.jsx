import React from 'react';
import '../Styles/AboutUs.css';

export default function AboutUs() {
    return (
        <section className='aboutus'>
            <div className="about-us">
                <header className="about-header">
                    <h1>About Us</h1>
                    <p>Your trusted partner in web design, development, and hosting.</p>
                </header>

                <div className="about-content">
                    <div className="about-intro">
                        <h2>Who We Are</h2>
                        <p>
                            Welcome to <strong>Rudransh Development</strong>, your go-to solution for all things web. 
                            We are a passionate team dedicated to delivering top-notch services in web design, 
                            web development, and web hosting.
                        </p>
                    </div>


                    <div className="about-mission">
                        <h2>Our Mission</h2>
                        <p>
                            At Rudransh Development, our mission is to empower businesses and individuals with 
                            high-quality, innovative web solutions that drive growth and success.
                        </p>
                    </div>
                    
                    {/* Reach Us Section */}
                    <div className="about-reach-us">
                        <h2>Reach Us</h2>
                        <p>
                            We would love to hear from you! Feel free to get in touch with us through any of the methods below:
                        </p>
                        <ul>
                            <li><strong>Email:</strong> contact@rudranshdev.com</li>
                            <li><strong>Phone:</strong> +91 7709629488</li>
                            <li><strong>Address:</strong> Samrat Ashok Nagar Tasgaon, 416312</li>
                        </ul>
                    </div>

                    {/* Get in Touch Section with Embedded Map */}
                    <div className="about-contact-map">
                        <h1>Get in Touch</h1>
                        <p>
                            Visit us or find us on the map below!
                        </p>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d17898.312707511977!2d74.60268046944533!3d17.01475694221519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1737313750870!5m2!1sen!2sin" 
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Location Map"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}