import "./Footer.css";
import { socialLinks, personalInfo } from '../../constants/socialLinks';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavigation = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "Home", onClick: () => handleNavigation('home') },
    { name: "About", onClick: () => handleNavigation('about') },
    { name: "Projects", onClick: () => handleNavigation('projects') },
    { name: "Services", onClick: () => handleNavigation('services') },
    { name: "Contact", onClick: () => handleNavigation('contact') }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Me</h3>
          <p>
            Full Stack Developer specializing in building exceptional digital experiences.
            Focused on creating innovative and user-friendly applications.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="quick-links">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a onClick={link.onClick}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h3>Connect With Me</h3>
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright">
          <p>&copy; {currentYear} {personalInfo.name}. All rights reserved.</p>
        </div>
        <div className="footer-info">
          <p>Made with ❤️ using React & TypeScript</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  