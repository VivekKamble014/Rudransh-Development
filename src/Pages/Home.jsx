import React, { useState, useEffect, useRef } from 'react';
import '../Styles/index.css';
import '../Styles/Navbar.css';
import '../Styles/Home.css';
import vivekImage from '../Images/vivek.png';
import { 
  FaRocket, 
  FaPalette, 
  FaCode, 
  FaCloud, 
  FaMobileAlt, 
  FaShieldAlt,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaStar,
  FaChevronDown,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram
} from 'react-icons/fa';

export default function Home() {
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  // Mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (typeof window !== 'undefined') {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100
        });
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animateKey = entry.target.dataset.animate;
            if (animateKey) {
              // Add animate class to trigger CSS animations
              entry.target.classList.add('animate');
              
              // Update state for React re-renders
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

    // Use setTimeout to ensure DOM is ready
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

  const services = [
    {
      icon: FaPalette,
      title: "Web Design",
      description: "Creative and modern designs that captivate your audience and reflect your brand identity.",
      color: "#FF6B6B",
      gradient: "linear-gradient(135deg, #FF6B6B, #FF8E8E)"
    },
    {
      icon: FaCode,
      title: "Web Development",
      description: "Full-stack development solutions using the latest technologies and best practices.",
      color: "#4ECDC4",
      gradient: "linear-gradient(135deg, #4ECDC4, #7FDBDA)"
    },
    {
      icon: FaCloud,
      title: "Web Hosting",
      description: "Reliable and secure hosting services to keep your website running smoothly 24/7.",
      color: "#45B7D1",
      gradient: "linear-gradient(135deg, #45B7D1, #6BC5D8)"
    },
    {
      icon: FaMobileAlt,
      title: "Mobile Apps",
      description: "Cross-platform mobile applications that provide seamless user experiences.",
      color: "#96CEB4",
      gradient: "linear-gradient(135deg, #96CEB4, #B8E6B8)"
    }
  ];

  const reviews = [
    {
      name: "Kunal Malekar",
      company: "Coditas",
      role: "Senior Developer",
      review: "Working with Rudransh Development was an exceptional experience. Their technical expertise and attention to detail helped us build a robust web application that exceeded our expectations. The team's professionalism and communication throughout the project was outstanding.",
      rating: 5,
      project: "Full-Stack Web Application"
    },
    {
      name: "Mansi Sanjekar",
      company: "Vidara Creation",
      role: "Creative Director",
      review: "Rudransh Development delivered our e-commerce platform ahead of schedule with flawless execution. Their understanding of modern design trends and user experience made our online store a huge success. Highly recommended for any web development needs!",
      rating: 5,
      project: "E-Commerce Platform"
    },
    {
      name: "Sumukh Tandel",
      company: "As You Plan",
      role: "Business Owner",
      review: "The team's creativity and technical expertise transformed our business idea into a stunning digital presence. Our portfolio website has significantly increased our client engagement. Their ongoing support and maintenance services are top-notch.",
      rating: 5,
      project: "Business Portfolio Website"
    },
    {
      name: "Priya Sharma",
      company: "TechStart Solutions",
      role: "CEO",
      review: "Rudransh Development helped us launch our startup with a professional web presence. Their responsive design and fast loading times have been crucial for our business growth. The team's dedication and technical skills are truly impressive.",
      rating: 5,
      project: "Startup Website & Dashboard"
    },
    {
      name: "Rajesh Kumar",
      company: "Digital Marketing Pro",
      role: "Marketing Director",
      review: "Our website's performance improved dramatically after Rudransh Development's optimization work. Their SEO-friendly approach and modern development practices have increased our online visibility by 300%. Exceptional service!",
      rating: 5,
      project: "Website Optimization & SEO"
    },
    {
      name: "Sneha Patel",
      company: "Creative Agency",
      role: "Art Director",
      review: "The collaboration with Rudransh Development was seamless. They understood our creative vision and brought it to life with cutting-edge technology. Our client satisfaction has increased significantly since the website launch.",
      rating: 5,
      project: "Creative Agency Website"
    }
  ];

  const stats = [
    { number: "20+", label: "Projects Completed" },
    { number: "10+", label: "Happy Clients" },
    { number: "2+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className='hero-section' ref={heroRef}>
        <section className='home'>
          {/* Animated Background Elements */}
          <div className="floating-elements">
            <div className="floating-shape shape-1" style={{ 
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)` 
            }}></div>
            <div className="floating-shape shape-2" style={{ 
              transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)` 
            }}></div>
            <div className="floating-shape shape-3" style={{ 
              transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)` 
            }}></div>
          </div>

          {/* Particle System */}
          <div className="particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="particle" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}></div>
            ))}
          </div>

          <div className="hero-content">
            <div className="hero-badge" data-animate="badge">
              <FaRocket className="badge-icon" />
              <span>Trusted by 5+ Companies Worldwide</span>
            </div>
            
            <h1 className='hero-title' data-animate="title">
              <span className="title-line" data-animate="title-line-1">Transform Your Digital Vision</span>
              <span className="title-line" data-animate="title-line-2">Into Reality</span>
            </h1>
            
            <p className="hero-subtitle" data-animate="subtitle">
              Welcome to Rudransh Development, where we craft exceptional web experiences that drive business growth. 
              From stunning designs to powerful applications, we bring your ideas to life with cutting-edge technology 
              and creative excellence. Let's build something amazing together.
            </p>
            
            <div className="hero-features" data-animate="features">
              <div className="feature-item">
                <FaPalette className="feature-icon" />
                <span>Custom Design</span>
              </div>
              <div className="feature-item">
                <FaCode className="feature-icon" />
                <span>Fast Development</span>
              </div>
              <div className="feature-item">
                <FaShieldAlt className="feature-icon" />
                <span>Secure & Reliable</span>
              </div>
            </div>
            
            <div className="hero-buttons" data-animate="buttons">
              <a href="/projects" className="btn btn-primary">
                <span>View Our Work</span>
                <div className="btn-shine"></div>
              </a>
              <a href="/ContactUs" className="btn btn-secondary">
                <span>Get Started</span>
                <div className="btn-shine"></div>
              </a>
            </div>
            

            {/* Scroll Indicator */}
          </div>
        </section>
      </div>

      {/* Statistics Section */}
      <section className="stats-section" data-animate="stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item" data-animate={`stat-${index}`}>
                <div className="stat-number" data-count={stat.number}>{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" data-animate="services">
        <div className="container">
          <div className="section-header" data-animate="services-header">
            <h2>Our Services</h2>
            <p>Comprehensive web solutions tailored to your business needs</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card" data-animate={`service-${index}`}>
                <div className="service-icon-container">
                  <div className="service-icon" style={{ background: service.gradient }}>
                    <service.icon className="service-icon-svg" />
                  </div>
                  <div className="icon-glow" style={{ background: service.gradient }}></div>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-hover-effect" style={{ background: service.gradient }}></div>
                <div className="service-border" style={{ background: service.gradient }}></div>
                <div className="service-particles">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="service-particle" style={{ 
                      background: service.color,
                      animationDelay: `${i * 0.1}s`
                    }}></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="founder-section">
        <div className="container">
          <div className="founder-content">
            <div className="founder-image">
              <img src={vivekImage} alt="Vivek Kamble - Founder" />
            </div>
            <div className="founder-info">
              <h2>Meet Our Founder</h2>
              <h3>Vivek Kamble</h3>
              <p className="founder-title">CEO & Lead Developer</p>
              <p className="founder-description">
                With over 5 years of experience in web development and design, Vivek founded Rudransh Development 
                with a vision to help businesses establish their digital presence. His expertise in modern web 
                technologies and passion for creating exceptional user experiences drives our company's success.
              </p>
              <div className="founder-skills">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">UI/UX Design</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews-section">
        <div className="container">
          <div className="section-header">
            <h2>What Our Clients Say</h2>
            <p>Don't just take our word for it - hear from our satisfied customers</p>
          </div>
          <div className="reviews-grid">
            {reviews.map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-header">
                  <div className="review-stars">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} className="star-icon" />
                    ))}
                  </div>
                  <div className="review-project">
                    <span className="project-tag">{review.project}</span>
                  </div>
                </div>
                <p className="review-text">"{review.review}"</p>
                <div className="review-author">
                  <div className="author-info">
                    <strong className="author-name">{review.name}</strong>
                    <span className="author-role">{review.role}</span>
                  </div>
                  <span className="author-company">{review.company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
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
    </>
  );
}