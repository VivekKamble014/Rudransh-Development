import React from 'react';
import '../Styles/Navbar.css';
import '../Styles/AboutUs.css';
import Footer from '../Components/Footer';
import vivekImage from '../Images/vivekImageforteam.png';
import radhaImage from '../Images/radhaImage.png';
import ajayImage from '../Images/ajayImage.png';
import yogitaImage from '../Images/yogitaImage.png';
import chaitanyaImage from '../Images/chaitanyaImage.png';
import mansiImage from '../Images/mansiImag.png';
import nikhilImage from '../Images/nikhilImage.png';
import { 
  FaCode, 
  FaPalette, 
  FaMobile, 
  FaServer,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
  FaUsers,
  FaRocket,
  FaLightbulb,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaGraduationCap,
  FaAward
} from 'react-icons/fa';

export default function DevelopmentTeam() {
  const teamMembers = [
    {
      name: "Vivek Kamble",
      role: "Founder & Lead Developer",
      image: vivekImage,
      skills: ["React.js", "Node.js", "MongoDB", "Express.js","UI/UX"],
      experience: "2+ Years",
      bio: "Passionate about creating exceptional web experiences and leading innovative projects.",
      social: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        email: "rudranshdevelopment@gmail.com"
      }
    },
    {
      name: "Mansi Sanjekar",
      role: "UI/UX & Graphics Designer",
      image: mansiImage,
      skills: ["Figma", "Adobe XD", "Sketch", "Prototyping","UI/UX"],
      experience: "2+ Years",
      bio: "Passionate about creating exceptional web experiences and leading innovative projects.",
      social: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        email: "rudranshdevelopment@gmail.com"
      }
    },
    {
      name: "Nikhil Yadav",
      role: "Senior Frontend Developer",
      image: nikhilImage,
      skills: ["React.js", "Vue.js", "TypeScript", "CSS"],
      experience: "6+ Months",
      bio: "Specialized in creating responsive and interactive user interfaces with modern frameworks.",
      social: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        email: "nikhil@rudranshdev.com"
      }
    },
    {
      name: "Radha Deshmukh",
      role: "Backend Developer",
      image: radhaImage,
      skills: ["Java", "Spring Boot", "PostgreSQL", "Mysql"],
      experience: "1+ Years",
      bio: "Expert in building scalable backend systems and cloud infrastructure solutions.",
      social: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        email: "radha@rudranshdev.com"
      }
    },
    {
      name: "Ajay Aldar",
      role: "UI/UX Designer",
      image: ajayImage,
      skills: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
      experience: "2+ Years",
      bio: "Creative designer focused on user-centered design and creating intuitive experiences.",
      social: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        email: "ajay@rudranshdev.com"
      }
    },
    {
      name: "Yogita Kanaki",
      role: "Backend Developer",
      image: yogitaImage,
      skills: ["Java", "spring Boot", "IOS", "Android"],
      experience: "1+ Years",
      bio: "Specialized in cross-platform mobile app development and native iOS/Android solutions.",
      social: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        email: "yogita@rudranshdev.com"
      }
    },
    {
      name: "Chaitanya Kashid",
      role: "Frontend Engineer",
      image: chaitanyaImage,
      skills: ["React", "Angular"],
      experience: "2+ Years",
      bio: "",
      social: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        email: "chaitanya@rudranshdev.com"
      }
    }
  ];

  const teamStats = [
    { number: "6", label: "Team Members", icon: FaUsers },
    { number: "25+", label: "Combined Experience", icon: FaGraduationCap },
    { number: "50+", label: "Projects Completed", icon: FaRocket },
    { number: "15+", label: "Technologies Used", icon: FaCode }
  ];

  const technologies = [
    { name: "Frontend", icon: FaPalette, techs: ["React.js", "Vue.js", "Angular", "TypeScript", "Next.js"] },
    { name: "Backend", icon: FaServer, techs: ["Node.js", "Python", "Express.js", "Django", "FastAPI"] },
    { name: "Database", icon: FaDatabase, techs: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"] },
    { name: "Mobile", icon: FaMobile, techs: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic"] },
    { name: "Cloud", icon: FaCloud, techs: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes"] },
    { name: "Security", icon: FaShieldAlt, techs: ["OAuth", "JWT", "SSL/TLS", "Penetration Testing", "Security Audits"] }
  ];

  return (
    <div className="development-team-page" style={{ minHeight: '100vh', paddingTop: '120px' }}>
      {/* Hero Section */}
      <section className="team-hero" style={{ padding: '60px 0', background: '#1a1a1a' }}>
        <div className="container">
          <div className="team-hero-content">
            <h1 style={{ color: '#ffffff', fontSize: '3rem', textAlign: 'center', marginBottom: '20px' }}>
              Development Team
            </h1>
            <div className="team-badge">
              <FaUsers />
              <span>Meet Our Team</span>
            </div>
            <h1>Development Team</h1>
            <p className="team-subtitle">
              Our talented team of developers, designers, and engineers work together to create 
              exceptional digital experiences. Each member brings unique skills and expertise to 
              deliver innovative solutions for our clients.
            </p>
            <div className="team-stats">
              {teamStats.map((stat, index) => (
                <div key={index} className="team-stat">
                  <stat.icon className="stat-icon" />
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="team-members">
        <div className="container">
          <div className="section-header">
            <h2>Our Team Members</h2>
            <p>Meet the talented individuals who make our projects successful</p>
          </div>
          <div className="members-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="member-card">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                  <div className="member-overlay">
                    <div className="member-social">
                      <a href={member.social.linkedin} className="social-link" title="LinkedIn">
                        <FaLinkedin />
                      </a>
                      <a href={member.social.github} className="social-link" title="GitHub">
                        <FaGithub />
                      </a>
                      <a href={`mailto:${member.social.email}`} className="social-link" title="Email">
                        <FaEnvelope />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-experience">{member.experience}</p>
                  <p className="member-bio">{member.bio}</p>
                  <div className="member-skills">
                    {member.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="team-technologies">
        <div className="container">
          <div className="section-header">
            <h2>Technologies We Master</h2>
            <p>Our team is proficient in a wide range of modern technologies</p>
          </div>
          <div className="technologies-grid">
            {technologies.map((category, index) => (
              <div key={index} className="technology-category">
                <div className="category-header">
                  <category.icon className="category-icon" />
                  <h3>{category.name}</h3>
                </div>
                <div className="tech-list">
                  {category.techs.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-item">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture Section */}
      <section className="team-culture">
        <div className="container">
          <div className="culture-content">
            <div className="culture-text">
              <h2>Our Team Culture</h2>
              <p>
                At Rudransh Development, we believe that great products are built by great teams. 
                Our culture is built on collaboration, continuous learning, and mutual respect.
              </p>
              <div className="culture-values">
                <div className="value-item">
                  <FaLightbulb className="value-icon" />
                  <h3>Innovation</h3>
                  <p>We encourage creative thinking and embrace new technologies</p>
                </div>
                <div className="value-item">
                  <FaUsers className="value-icon" />
                  <h3>Collaboration</h3>
                  <p>We work together as a team to achieve common goals</p>
                </div>
                <div className="value-item">
                  <FaAward className="value-icon" />
                  <h3>Excellence</h3>
                  <p>We strive for the highest quality in everything we do</p>
                </div>
                <div className="value-item">
                  <FaRocket className="value-icon" />
                  <h3>Growth</h3>
                  <p>We continuously learn and improve our skills</p>
                </div>
              </div>
            </div>
            <div className="culture-visual">
              <div className="culture-card">
                <h3>Remote-First</h3>
                <p>We work from anywhere in the world, bringing diverse perspectives to our projects.</p>
              </div>
              <div className="culture-card">
                <h3>Agile Methodology</h3>
                <p>We follow agile practices to deliver projects efficiently and adapt to changes.</p>
              </div>
              <div className="culture-card">
                <h3>Continuous Learning</h3>
                <p>We invest in our team's growth through training and conference attendance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="join-team">
        <div className="container">
          <div className="join-content">
            <h2>Join Our Team</h2>
            <p>
              We're always looking for talented individuals to join our growing team. 
              If you're passionate about web development and want to work on exciting projects, 
              we'd love to hear from you.
            </p>
            <div className="join-benefits">
              <div className="benefit">
                <FaRocket />
                <span>Exciting Projects</span>
              </div>
              <div className="benefit">
                <FaUsers />
                <span>Great Team</span>
              </div>
              <div className="benefit">
                <FaGraduationCap />
                <span>Learning Opportunities</span>
              </div>
              <div className="benefit">
                <FaAward />
                <span>Career Growth</span>
              </div>
            </div>
            <a href="/ContactUs" className="btn btn-primary">
              <span>Get In Touch</span>
            </a>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
