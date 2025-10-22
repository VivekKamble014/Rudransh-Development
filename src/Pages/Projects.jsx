import React from 'react';
import '../Styles/Projects.css';

export default function Projects() {
    const projects = [
        {
            id: 1,
            name: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Built with React, Node.js, and MongoDB.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
            websiteLink: "https://example-ecommerce.com",
            technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
            category: "Web Development"
        },
        {
            id: 2,
            name: "Portfolio Website",
            description: "A modern, responsive portfolio website with dark/light mode, smooth animations, and contact integration. Perfect for showcasing creative work.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
            websiteLink: "https://about-vivek-kamble.vercel.app/",
            technologies: ["MERN Stack", "CSS3", "JavaScript", "Vite"],
            category: "Web Design"
        },
        {
            id: 3,
            name: "Task Management App",
            description: "A collaborative task management application with real-time updates, team collaboration features, and project tracking capabilities.",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
            websiteLink: "https://example-tasks.com",
            technologies: ["React", "Firebase", "Material-UI", "Redux"],
            category: "Web Application"
        },
        {
            id: 4,
            name: "Restaurant Website",
            description: "A beautiful restaurant website with online menu, reservation system, and location integration. Mobile-first responsive design.",
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop",
            websiteLink: "https://example-restaurant.com",
            technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
            category: "Web Design"
        },
        {
            id: 5,
            name: "Blog Platform",
            description: "A content management system for bloggers with rich text editor, SEO optimization, and social media integration.",
            image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
            websiteLink: "https://example-blog.com",
            technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
            category: "Web Development"
        },
        {
            id: 6,
            name: "Fitness Tracker",
            description: "A comprehensive fitness tracking application with workout plans, progress tracking, and nutrition logging features.",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
            websiteLink: "https://example-fitness.com",
            technologies: ["React Native", "Firebase", "Chart.js", "Expo"],
            category: "Mobile App"
        }
    ];

    return (
        <div className="projects-container">
            <div className="projects-header">
                <h1>Our Projects</h1>
                <p>Explore our portfolio of successful web development and design projects</p>
            </div>
            
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <div className="project-image">
                            <img src={project.image} alt={project.name} />
                            <div className="project-overlay">
                                <a 
                                    href={project.websiteLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="visit-btn"
                                >
                                    Visit Website
                                </a>
                            </div>
                        </div>
                        <div className="project-content">
                            <div className="project-category">{project.category}</div>
                            <h3 className="project-name">{project.name}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-technologies">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}