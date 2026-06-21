import "./Service.css";
import { FaMobile, FaDesktop, FaServer } from "react-icons/fa";
import { motion } from 'framer-motion';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: <FaDesktop className="service-icon" />,
    title: "Web Application Development",
    description: "Building responsive and scalable web applications using modern technologies and best practices.",
    features: [
      "Single Page Applications (SPA)",
      "Progressive Web Apps (PWA)",
      "Custom Web Solutions",
      "E-commerce Platforms",
      "Real-time Applications",
      "Performance Optimization"
    ]
  },
  {
    icon: <FaMobile className="service-icon" />,
    title: "Mobile Application Development",
    description: "Developing cross-platform and native mobile applications for iOS and Android platforms.",
    features: [
      "React Native Development",
      "Cross-platform Solutions",
      "Native App Development",
      "App Store Optimization",
      "Mobile UI/UX Design",
      "App Performance Tuning"
    ]
  },
  {
    icon: <FaServer className="service-icon" />,
    title: "Backend Development",
    description: "Creating robust and scalable backend solutions with modern architectures and technologies.",
    features: [
      "API Development",
      "Database Design",
      "Cloud Integration",
      "Authentication & Security",
      "Server Management",
      "Performance Scaling"
    ]
  },
];

export const Services = () => {
  return (
    <section className="services">
      <motion.div 
        className="section-heading"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
      >
        <h2>Services</h2>
        <div className="underline"></div>
      </motion.div>

      <div className="services-container">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.7, 
              delay: index * 0.2, 
              type: "spring", 
              bounce: 0.3 
            }}
            whileHover={{ 
              scale: 1.05, 
              rotate: 1,
              transition: { duration: 0.2 } 
            }}
          >
            <div className="service-icon-wrapper">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul className="service-features">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex}>{feature}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};