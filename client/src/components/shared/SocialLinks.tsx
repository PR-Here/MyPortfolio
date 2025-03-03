import React from 'react';
import { socialLinks } from '../../constants/socialLinks';
import './SharedComponents.css';

interface SocialLinksProps {
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ className = '' }) => {
  return (
    <div className={`social-links ${className}`}>
      {socialLinks.map((social, index) => (
        <a 
          key={index}
          href={social.url}
          target="_blank" 
          rel="noopener noreferrer"
          aria-label={social.label}
        >
          <social.icon className="social-icon" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks; 