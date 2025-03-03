import "./About.css";
import profilePic from "../../assets/second.jpeg";
import { FaUser, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { motion } from 'framer-motion';

const skillsData = {
  "Programming Languages": [
    "JavaScript",
    "TypeScript",
    "Dart",
  ],
  "Frontend Development": [
    "React.js",
    "Next.js",
    "HTML",
    "CSS",
    "Redux",
    "Material UI",
    "Tailwind CSS"
  ],
  "Mobile Development": [
    "React Native",
    "Flutter",
    "Android",
    "iOS"
  ],
  "Backend Development": [
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Firebase",
    "REST API",
    "GraphQL"
  ]
};

const About = () => {
  return (
    <section className="about">
      <motion.div 
        className="section-heading"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
      >
        <h2>About Me</h2>
        <div className="underline"></div>
      </motion.div>

      <div className="about-container">
        <motion.div 
          className="about-image"
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        >
          <div className="image-frame">
            <img src={profilePic} alt="Profile" />
          </div>
        </motion.div>
        
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3>Why Choose Me For Your Next Project?</h3>
          <p>
          As a Full Stack Developer with 6+ years of experience, I specialize in building scalable and high-performance web and mobile applications. My expertise spans modern front-end and back-end technologies, ensuring robust, efficient, and user-centric solutions. I focus on delivering tailored digital experiences that align with business goals and industry standards. With a deep understanding of scalability, performance, and security, I create innovative solutions that drive success.          </p>
          <div className="info-grid">
            <div className="info-item" data-aos="fade-up" data-aos-delay="200">
              <div className="icon-box">
                <FaUser className="info-icon" />
              </div>
              <div className="info-text">
                <span className="label">Name:</span>
                <span className="value">Pankaj Rana</span>
              </div>
            </div>
            <div className="info-item" data-aos="fade-up" data-aos-delay="600">
              <div className="icon-box">
                <FaMapMarkerAlt className="info-icon" />
              </div>
              <div className="info-text">
                <span className="label">Location:</span>
                <span className="value">New Delhi, India</span>
              </div>
            </div>
            <div className="info-item" data-aos="fade-up" data-aos-delay="800">
              <div className="icon-box">
                <FaClock className="info-icon" />
              </div>
              <div className="info-text">
                <span className="label">Experience:</span>
                <span className="value">6 Years</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="section-heading" data-aos="fade-down">
        <h2>Technical Skills</h2>
        <div className="underline"></div>
      </div>

      <motion.div 
        className="skills-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
      >
        {Object.entries(skillsData).map(([category, skills], index) => (
          <motion.div
            key={category}
            className="skill-category"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2, type: "spring" }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <h4>{category}</h4>
            <div className="skill-items">
              {skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * skillIndex }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
