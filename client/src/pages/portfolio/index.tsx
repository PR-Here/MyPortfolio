import "./Projects.css";
import {  FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveLink: string;
}

const projects: Project[] = [
  {
    title: "Tez Rummy",
    description: "A skill-based Indian rummy game platform offering real-money gaming experiences. Features include secure payments, real-time multiplayer matches, and intuitive gameplay for all skill levels. Built with React Native for optimal performance across devices.",
    technologies: ["React Native", "Firebase", "Zustand","Deep-Linking", "Re-Animated","Rest-API", "Firebase Auth", "Firebase Storage", "Firebase Crashlytics", "Firebase Analytics", "Google Pay", "RazorPay", "Paytm", "Google Map"],
    image: "https://play-lh.googleusercontent.com/gr6QPRBYPco4EXnWvT-LnOJ9jY0BU2csbTY5cNUlEC2qerhHJb6nG483sU1zgqe0vJs=w480-h960-rw",
    liveLink: "https://play.google.com/store/apps/details?id=com.battles99.rummyandroid&pcampaignid=web_share"
  },
  {
    title: "Capri Loans",
    description: "A comprehensive loan management app providing secure financial services including Gold Loans, Home Loans, and MSME Loans. Features real-time tracking, automated payments, and detailed loan analytics with 24/7 accessibility.",
    technologies: ["React Native", "Firebase", "Redux-toolkit", "Re-Animated", "Rest-API", "Firebase Auth", "Firebase Storage", "Firebase Crashlytics", "Firebase Analytics", "Google Pay", "RazorPay", "Paytm", "Google Map"],
    image: "https://play-lh.googleusercontent.com/JKh_zMqJcWYe3ayKk6TyWFIK2WO5i4LQE67muJ3I-YyjVTJJS79WdEl7AmzHS_8Ev4I=w2560-h1440-rw",
    liveLink: "https://play.google.com/store/apps/details?id=com.capriloans.consumer&pcampaignid=web_share"
  },
  {
    title: "Zupee Ludo",
    description: "A modern take on the classic Ludo game, offering competitive online matches with real players. Features include skill-based matchmaking, secure transactions, and an engaging reward system. Built for smooth gameplay and social interaction.",
    technologies: ["React Native", "Firebase", "Redux-toolkit", "Re-Animated", "Rest-API", "Firebase Auth", "Firebase Storage", "Firebase Crashlytics", "Firebase Analytics", "Google Pay", "RazorPay", "Paytm", "Google Map"],
    image: "https://play-lh.googleusercontent.com/5XJQoo9o2COfAo9BUddn8dqN-dJ9Q_Dd_0RAyh18QmyL_280fMF6wY7gcJFjLhgNHw=s512-rw",
    liveLink: "https://play.google.com/store/apps/details?id=com.zupee.free&pcampaignid=web_share"
  }
];

const Projects = () => {
  const [imageErrors, setImageErrors] = useState<{[key: number]: boolean}>({});

  const handleImageError = (index: number) => {
    setImageErrors(prev => ({...prev, [index]: true}));
  };

  return (
    <section className="projects">
      <motion.div 
        className="section-heading"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
      >
        <h2>Featured Projects</h2>
        <div className="underline"></div>
      </motion.div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.2, 
              type: "spring", 
              bounce: 0.3 
            }}
            whileHover={{ 
              y: -8, 
              scale: 1.02,
              transition: { duration: 0.2 } 
            }}
          >
            <div className="project-image">
              {imageErrors[index] ? (
                <div className="image-fallback">
                  <span>{project.title}</span>
                </div>
              ) : (
                <img 
                  src={project.image} 
                  alt={project.title}
                  onError={() => handleImageError(index)}
                />
              )}
              <div className="project-overlay">
                <div className="project-links">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt className="project-icon" />
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
