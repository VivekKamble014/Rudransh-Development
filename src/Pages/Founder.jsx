import React from 'react';
import '../Styles/Navbar.css';
import '../Styles/AboutUs.css';
import vivekImage from '../Images/vivek.png';
import Footer from '../Components/Footer';
import { 
  FaCode, 
  FaPalette, 
  FaRocket, 
  FaGraduationCap,
  FaAward,
  FaUsers,
  FaLightbulb,
  FaHeart,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaEnvelope
} from 'react-icons/fa';

export default function Founder() {
  const skills = [
    { name: "React.js", level: 95, icon: FaCode },
    { name: "Node.js", level: 90, icon: FaCode },
    { name: "UI/UX Design", level: 88, icon: FaPalette },
    { name: "MongoDB", level: 85, icon: FaCode },
    { name: "JavaScript", level: 95, icon: FaCode },
    { name: "CSS/SCSS", level: 92, icon: FaPalette }
  ];

  const achievements = [
    {
      icon: FaAward,
      title: "5+ Years Experience",
      description: "Extensive experience in web development and design"
    },
    {
      icon: FaUsers,
      title: "20+ Projects Delivered",
      description: "Successfully completed projects for various clients"
    },
    {
      icon: FaRocket,
      title: "Startup Founder",
      description: "Founded Rudransh Development with a vision for excellence"
    },
    {
      icon: FaLightbulb,
      title: "Innovation Leader",
      description: "Always exploring new technologies and methodologies"
    }
  ];

  const timeline = [
    {
      year: "2019",
      title: "Started Web Development Journey",
      description: "Began learning web technologies and started building projects"
    },
    {
      year: "2020",
      title: "First Professional Project",
      description: "Delivered first client project with excellent feedback"
    },
    {
      year: "2021",
      title: "Advanced Skills Development",
      description: "Mastered React, Node.js, and modern development practices"
    },
    {
      year: "2022",
      title: "Founded Rudransh Development",
      description: "Established the company with a vision to help businesses grow digitally"
    },
    {
      year: "2023",
      title: "Team Expansion",
      description: "Started building a team of talented developers and designers"
    },
    {
      year: "2024",
      title: "Current Focus",
      description: "Leading innovation in web development and expanding services"
    }
  ];

  return (
    <div className="founder-page" style={{ minHeight: '100vh', paddingTop: '120px' }}>
      {/* Hero Section */}
      <section className="founder-hero" style={{ padding: '60px 0', background: '#1a1a1a' }}>
        <div className="container">
          <div className="founder-hero-content">
            <h1 style={{ color: '#ffffff', fontSize: '3rem', textAlign: 'center', marginBottom: '20px' }}>
              Meet Our Founder
            </h1>
            <div className="founder-image-section">
              <div className="founder-image-container">
                <img src={vivekImage} alt="Vivek Kamble - Founder" />
                <div className="image-glow"></div>
              </div>
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
              </div>
            </div>
            <div className="founder-info-section">
              <div className="founder-badge">
                <FaRocket />
                <span>Founder & CEO</span>
              </div>
              <h1>Vivek Kamble</h1>
              <p className="founder-title">CEO & Lead Developer</p>
              <p className="founder-description">
                A passionate web developer and entrepreneur with over 5 years of experience in creating 
                exceptional digital experiences. Vivek founded Rudransh Development with a vision to help 
                businesses establish their digital presence through innovative web solutions.
              </p>
              <div className="founder-stats">
                <div className="stat">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">Projects Delivered</span>
                </div>
                <div className="stat">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Happy Clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="founder-skills">
        <div className="container">
          <div className="section-header">
            <h2>Technical Expertise</h2>
            <p>Proficient in modern web technologies and development practices</p>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <skill.icon className="skill-icon" />
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="founder-achievements">
        <div className="container">
          <div className="section-header">
            <h2>Key Achievements</h2>
            <p>Milestones and accomplishments in my journey</p>
          </div>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-icon">
                  <achievement.icon />
                </div>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="founder-timeline">
        <div className="container">
          <div className="section-header">
            <h2>Journey Timeline</h2>
            <p>My path from learning to leading in web development</p>
          </div>
          <div className="timeline">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="founder-philosophy">
        <div className="container">
          <div className="philosophy-content">
            <div className="philosophy-text">
              <h2>My Philosophy</h2>
              <p>
                I believe that great web development is not just about writing code, but about understanding 
                the business needs and creating solutions that truly make a difference. Every project is an 
                opportunity to learn, grow, and deliver something exceptional.
              </p>
              <p>
                At Rudransh Development, we don't just build websites – we create digital experiences that 
                help businesses connect with their audience, achieve their goals, and grow in the digital world.
              </p>
              <div className="philosophy-quote">
                <FaHeart className="quote-icon" />
                <blockquote>
                  "Technology should serve people, not the other way around. Every line of code I write 
                  is with the intention of making someone's life better or easier."
                </blockquote>
              </div>
            </div>
            <div className="philosophy-visual">
              <div className="philosophy-card">
                <FaLightbulb className="philosophy-icon" />
                <h3>Innovation</h3>
                <p>Always exploring new technologies and creative solutions</p>
              </div>
              <div className="philosophy-card">
                <FaUsers className="philosophy-icon" />
                <h3>Collaboration</h3>
                <p>Working closely with clients to understand their vision</p>
              </div>
              <div className="philosophy-card">
                <FaAward className="philosophy-icon" />
                <h3>Excellence</h3>
                <p>Committed to delivering the highest quality work</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}