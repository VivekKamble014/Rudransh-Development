import React, { useState, useEffect, useRef } from 'react';
import '../Styles/AboutUs.css';
import vivekImage from '../Images/vivek.png';
import mansiImage from '../Images/vivek.png';
import chaitanyaImage from '../Images/vivek.png';
import nikhilImage from '../Images/vivek.png';
import radhaImage from '../Images/vivek.png';
import yogitaImage from '../Images/vivek.png';
import ajayImage from '../Images/vivek.png';
import Footer from '../Components/Footer';
import { 
  FaRocket, 
  FaStar, 
  FaChartLine, 
  FaBullseye, 
  FaHandshake, 
  FaLightbulb, 
  FaBolt,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaAward,
  FaCode,
  FaPalette,
  FaCloud
} from 'react-icons/fa';
export default function AboutUs() {
    const [isVisible, setIsVisible] = useState({});
    const aboutRef = useRef(null);

    // Intersection Observer for scroll animations
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const animateKey = entry.target.dataset.animate;
                        if (animateKey) {
                            entry.target.classList.add('animate');
                            setIsVisible(prev => ({
                                ...prev,
                                [animateKey]: true
                            }));
                        }
                    }
                });
            },
            { threshold: 0.1 }
        );

        const timer = setTimeout(() => {
            const elements = document.querySelectorAll('[data-animate]');
            elements.forEach(el => observer.observe(el));
        }, 100);

        return () => {
            clearTimeout(timer);
            observer.disconnect();
        };
    }, []);

    // Trigger hero animations on page load
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const timer = setTimeout(() => {
            const heroElements = document.querySelectorAll('.hero-content [data-animate]');
            heroElements.forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add('animate');
                }, index * 200);
            });
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    const values = [
        {
            icon: FaBullseye,
            title: "Excellence",
            description: "We strive for perfection in every project, delivering exceptional quality that exceeds expectations."
        },
        {
            icon: FaHandshake,
            title: "Trust",
            description: "Building long-lasting relationships through transparency, reliability, and honest communication."
        },
        {
            icon: FaLightbulb,
            title: "Innovation",
            description: "Embracing cutting-edge technologies and creative solutions to solve complex challenges."
        },
        {
            icon: FaBolt,
            title: "Efficiency",
            description: "Delivering fast, optimized solutions without compromising on quality or attention to detail."
        }
    ];

    const team = [
        {
            name: "Vivek Kamble",
            role: "CEO & Lead Developer",
            image: vivekImage,
            skills: ["React", "Node.js", "MongoDB", "UI/UX Design"]
        },
        {
            name: "Development Team",
            role: "Full-Stack Developers",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=300&fit=crop&crop=face",
            skills: ["JavaScript", "Python", "Database Design", "API Development"]
        }
    ];

    return (
        <div className="about-container" ref={aboutRef}>
            {/* Hero Section */}
            <section className="about-hero">
                <div className="hero-background">
                    <div className="hero-particles">
                        {[...Array(15)].map((_, i) => (
                            <div key={i} className="hero-particle" style={{
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 3}s`,
                                animationDuration: `${3 + Math.random() * 4}s`
                            }}></div>
                        ))}
                    </div>
                </div>
                <div className="container">
                    <div className="hero-content" data-animate="hero-content">
                        <h1 className="hero-title">About Rudransh Development</h1>
                        <p className="hero-subtitle">
                            Your trusted partner in web design, development, and hosting solutions. 
                            We transform ideas into digital reality.
                        </p>
                        <div className="hero-stats">
                            <div className="hero-stat" data-animate="stat-1">
                                <span className="stat-number">20+</span>
                                <span className="stat-label">Projects</span>
                            </div>
                            <div className="hero-stat" data-animate="stat-2">
                                <span className="stat-number">10+</span>
                                <span className="stat-label">Clients</span>
                            </div>
                            <div className="hero-stat" data-animate="stat-3">
                                <span className="stat-number">2+</span>
                                <span className="stat-label">Years</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who We Are Section */}
            <section className="about-intro-section">
                <div className="container">
                    <div className="intro-content">
                        <div className="intro-text" data-animate="intro-text">
                            <h2>Who We Are</h2>
                            <p>
                                Welcome to <strong>Rudransh Development</strong>, your go-to solution for all things web. 
                                We are a passionate team dedicated to delivering top-notch services in web design, 
                                web development, and web hosting.
                            </p>
                            <p>
                                Founded with a vision to bridge the gap between innovative ideas and digital reality, 
                                we specialize in creating custom web solutions that drive business growth and success.
                            </p>
                        </div>
                        <div className="intro-visual" data-animate="intro-visual">
                            <div className="floating-card card-1">
                                <span className="card-icon">
                                    <FaCode />
                                </span>
                                <span className="card-text">Web Development</span>
                            </div>
                            <div className="floating-card card-2">
                                <span className="card-icon">
                                    <FaPalette />
                                </span>
                                <span className="card-text">Web Design</span>
                            </div>
                            <div className="floating-card card-3">
                                <span className="card-icon">
                                    <FaCloud />
                                </span>
                                <span className="card-text">Web Hosting</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values Section */}
            <section className="values-section">
                <div className="container">
                    <div className="section-header" data-animate="values-header">
                        <h2>Our Core Values</h2>
                        <p>The principles that guide everything we do</p>
                    </div>
                    <div className="values-grid">
                        {values.map((value, index) => (
                            <div key={index} className="value-card" data-animate={`value-${index}`}>
                                <div className="value-icon">
                                    <value.icon className="value-icon-svg" />
                                </div>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                                <div className="value-glow"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="mission-section">
                <div className="container">
                    <div className="mission-content">
                        <div className="mission-text" data-animate="mission-text">
                            <h2>Our Mission</h2>
                            <p>
                                At Rudransh Development, our mission is to empower businesses and individuals with 
                                high-quality, innovative web solutions that drive growth and success.
                            </p>
                            <p>
                                We believe in the power of technology to transform ideas into reality, and we're 
                                committed to delivering solutions that not only meet but exceed our clients' expectations.
                            </p>
                        </div>
                        <div className="mission-visual" data-animate="mission-visual">
                            <div className="mission-features">
                                <div className="mission-feature">
                                    <div className="feature-icon">
                                        <FaLightbulb className="feature-icon-svg" />
                                    </div>
                                    <span>Innovation</span>
                                </div>
                                <div className="mission-feature">
                                    <div className="feature-icon">
                                        <FaAward className="feature-icon-svg" />
                                    </div>
                                    <span>Excellence</span>
                                </div>
                                <div className="mission-feature">
                                    <div className="feature-icon">
                                        <FaChartLine className="feature-icon-svg" />
                                    </div>
                                    <span>Growth</span>
                                </div>
                                <div className="mission-feature">
                                    <div className="feature-icon">
                                        <FaBullseye className="feature-icon-svg" />
                                    </div>
                                    <span>Results</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section">
                <div className="container">
                    <div className="section-header" data-animate="team-header">
                        <h2>Meet Our Team</h2>
                        <p>The talented individuals behind our success</p>
                    </div>
                    <div className="team-grid">
                        {team.map((member, index) => (
                            <a 
                                key={index} 
                                href={member.name === "Vivek Kamble" ? "/founder" : "/development-team"}
                                className="team-card" 
                                data-animate={`team-${index}`}
                            >
                                <div className="team-image">
                                    <img src={member.image} alt={member.name} />
                                    <div className="team-overlay">
                                        <div className="team-skills">
                                            {member.skills.map((skill, skillIndex) => (
                                                <span key={skillIndex} className="skill-tag">{skill}</span>
                                            ))}
                                        </div>
                                        <div className="team-link-indicator">
                                            <span>Learn More →</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-info">
                                    <h3>{member.name}</h3>
                                    <p className="team-role">{member.role}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                    
                    {/* Team Navigation Links */}
                    <div className="team-navigation" data-animate="team-navigation">
                        <div className="team-nav-cards">
                            <a href="/founder" className="team-nav-card">
                                <div className="nav-card-icon">
                                    <FaRocket />
                                </div>
                                <h3>Meet Our Founder</h3>
                                <p>Learn about Vivek Kamble's journey, expertise, and vision for Rudransh Development</p>
                                <div className="nav-card-arrow">→</div>
                            </a>
                            
                            <a href="/development-team" className="team-nav-card">
                                <div className="nav-card-icon">
                                    <FaBolt />
                                </div>
                                <h3>Development Team</h3>
                                <p>Discover our talented team of developers, designers, and engineers</p>
                                <div className="nav-card-arrow">→</div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact-section">
                <div className="container">
                    <div className="contact-content">
                        <div className="contact-info" data-animate="contact-info">
                            <h2>Get in Touch</h2>
                            <p>
                                Ready to start your next project? We'd love to hear from you! 
                                Get in touch with us through any of the methods below.
                            </p>
                            <div className="contact-methods">
                                <div className="contact-method">
                                    <FaEnvelope className="method-icon" />
                                    <div className="method-info">
                                        <h4>Email</h4>
                                        <p>rudranshdevelopment@gmail.com</p>
                                    </div>
                                </div>
                                <div className="contact-method">
                                    <FaPhone className="method-icon" />
                                    <div className="method-info">
                                        <h4>Phone</h4>
                                        <p>+91 7709629488</p>
                                    </div>
                                </div>
                                <div className="contact-method">
                                    <FaMapMarkerAlt className="method-icon" />
                                    <div className="method-info">
                                        <h4>Address</h4>
                                        <p>Samrat Ashok Nagar, Tasgaon 416312</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contact-map" data-animate="contact-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d17898.312707511977!2d74.60268046944533!3d17.01475694221519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1737313750870!5m2!1sen!2sin" 
                                width="100%"
                                height="400"
                                style={{ border: 0, borderRadius: '15px' }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Location Map"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Footer */}
            <Footer />
        </div>
    );
}