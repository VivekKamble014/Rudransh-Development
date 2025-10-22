import React, { useState, useEffect, useRef } from 'react';
import '../Styles/Skills.css';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaShieldAlt,
  FaGithub,
  FaBolt,
  FaGoogle,
  FaFire
} from 'react-icons/fa';

export default function Skills() {
    const [animatedSkills, setAnimatedSkills] = useState({});
    const skillsRef = useRef(null);

    const skills = [
        { name: 'HTML5', level: 95, icon: FaHtml5, category: 'Frontend' },
        { name: 'CSS3', level: 90, icon: FaCss3Alt, category: 'Frontend' },
        { name: 'JavaScript', level: 88, icon: FaJs, category: 'Frontend' },
        { name: 'React', level: 85, icon: FaReact, category: 'Frontend' },
        { name: 'Node.js', level: 82, icon: FaNodeJs, category: 'Backend' },
        { name: 'Express.js', level: 80, icon: FaNodeJs, category: 'Backend' },
        { name: 'MongoDB', level: 78, icon: FaDatabase, category: 'Database' },
        { name: 'MySQL', level: 75, icon: FaDatabase, category: 'Database' },
        { name: 'Supabase', level: 70, icon: FaFire, category: 'Database' },
        { name: 'Google Auth', level: 72, icon: FaGoogle, category: 'Authentication' },
        { name: 'Git', level: 85, icon: FaGithub, category: 'Tools' },
        { name: 'Vite', level: 80, icon: FaBolt, category: 'Tools' },
        { name: 'Tailwind CSS', level: 75, icon: FaCss3Alt, category: 'Frontend' },
        { name: 'Bootstrap', level: 88, icon: FaCss3Alt, category: 'Frontend' },
        { name: 'REST APIs', level: 82, icon: FaShieldAlt, category: 'Backend' },
        { name: 'Firebase', level: 70, icon: FaFire, category: 'Backend' }
    ];

    const categories = [...new Set(skills.map(skill => skill.category))];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const skillName = entry.target.dataset.skill;
                        if (skillName && !animatedSkills[skillName]) {
                            setAnimatedSkills(prev => ({
                                ...prev,
                                [skillName]: true
                            }));
                        }
                    }
                });
            },
            { threshold: 0.5 }
        );

        const skillElements = document.querySelectorAll('.skill-item');
        skillElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, [animatedSkills]);

    const getCategoryIcon = (category) => {
        const icons = {
            'Frontend': '🎨',
            'Backend': '⚙️',
            'Database': '🗄️',
            'Authentication': '🔐',
            'Tools': '🛠️'
        };
        return icons[category] || '💻';
    };

    return (
        <div className="skills-container">
            <div className="skills-header">
                <h1>Our Technical Expertise</h1>
                <p>Discover the cutting-edge technologies and skills we bring to every project</p>
            </div>

            <div className="skills-content" ref={skillsRef}>
                {categories.map((category, categoryIndex) => (
                    <div key={category} className="skill-category">
                        <div className="category-header">
                            <span className="category-icon">{getCategoryIcon(category)}</span>
                            <h2>{category}</h2>
                        </div>
                        
                        <div className="skills-grid">
                            {skills
                                .filter(skill => skill.category === category)
                                .map((skill, index) => (
                                    <div 
                                        key={skill.name} 
                                        className="skill-item"
                                        data-skill={skill.name}
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        <div className="skill-header">
                                            <div className="skill-info">
                                                <span className="skill-icon">
                                                    <skill.icon className="skill-icon-svg" />
                                                </span>
                                                <span className="skill-name">{skill.name}</span>
                                            </div>
                                            <span className="skill-percentage">{skill.level}%</span>
                                        </div>
                                        
                                        <div className="progress-container">
                                            <div 
                                                className={`progress-bar ${animatedSkills[skill.name] ? 'animate' : ''}`}
                                                style={{ 
                                                    '--progress': `${skill.level}%`,
                                                    animationDelay: `${index * 0.1 + 0.5}s`
                                                }}
                                            >
                                                <div className="progress-fill"></div>
                                            </div>
                                        </div>
                                        
                                        <div className="skill-level">
                                            {skill.level >= 90 ? 'Expert' : 
                                             skill.level >= 80 ? 'Advanced' : 
                                             skill.level >= 70 ? 'Intermediate' : 'Beginner'}
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="skills-summary">
                <div className="summary-card">
                    <h3>Why Choose Our Expertise?</h3>
                    <div className="summary-points">
                        <div className="summary-point">
                            <span className="point-icon">🎯</span>
                            <div>
                                <h4>Modern Technologies</h4>
                                <p>We stay updated with the latest frameworks and tools</p>
                            </div>
                        </div>
                        <div className="summary-point">
                            <span className="point-icon">⚡</span>
                            <div>
                                <h4>Fast Development</h4>
                                <p>Efficient coding practices for quick project delivery</p>
                            </div>
                        </div>
                        <div className="summary-point">
                            <span className="point-icon">🔒</span>
                            <div>
                                <h4>Secure Solutions</h4>
                                <p>Implementation of best security practices</p>
                            </div>
                        </div>
                        <div className="summary-point">
                            <span className="point-icon">📱</span>
                            <div>
                                <h4>Responsive Design</h4>
                                <p>Mobile-first approach for all devices</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}