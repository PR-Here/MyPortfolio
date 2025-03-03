import "./Contact.css";
import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../../components/shared/AnimatedSection';

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  value: string;
  link?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false
  });

  // Add function to check if device is mobile
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // Update contactInfo array
  const contactInfo: ContactInfo[] = [
    {
      icon: <FaEnvelope className="contact-icon" />,
      title: "Email",
      value: "ranapankaj8446@gmail.com",
      link: isMobile ? "mailto:ranapankaj8446@gmail.com" : undefined
    },
    {
      icon: <FaPhone className="contact-icon" />,
      title: "Phone",
      value: "+91 8445611760",
      link: isMobile ? "tel:+918445611760" : undefined
    },
    {
      icon: <FaMapMarkerAlt className="contact-icon" />,
      title: "Location",
      value: "New Delhi, India"
    },
    {
      icon: <FaLinkedin className="contact-icon" />,
      title: "LinkedIn",
      value: "Open LinkedIn",
      link: "https://www.linkedin.com/in/pankaj-rana-b10941153?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false });

    try {
      // Send the contact form email
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(
        'service_00oe3zu',
        'template_h72vhyn',
        templateParams,
        'EaNNU6xXcc-5_2Qld'
      );

      // Send auto-reply email
      const autoReplyParams = {
        to_name: formData.name,
        to_email: formData.email,
        reply_subject: `Re: ${formData.subject}`,
        // You can customize the auto-reply message
        reply_message: `Dear ${formData.name},

Thank you for reaching out! I have received your message and will get back to you as soon as possible.

Best regards,
Your Name`
      };

      await emailjs.send(
        'service_00oe3zu',
        'template_chetmbd', // Create a new template for auto-reply
        autoReplyParams,
        'EaNNU6xXcc-5_2Qld'
      );

      setStatus({ submitting: false, submitted: true, error: false });
      setFormData({ name: "", email: "", subject: "", message: "" });

      alert("Message sent successfully!");

    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus({ submitting: false, submitted: false, error: true });
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <section className="contact">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Get In Touch</h2>
        <div className="underline"></div>
      </motion.div>

      <div className="contact-container">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -100, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            type: "spring",
            bounce: 0.4
          }}
        >
          <h3>Contact Information</h3>
          <div className="info-grid">

            {contactInfo.map((info, index) => (
              <a href={info.link && info.link} target="_blank">
                <AnimatedSection key={index} delay={0.2 * index}>
                  <div className="info-item">
                    <div className="icon-box">
                      {info.icon}
                    </div>
                    <div className="info-content">
                      <h4>{info.title}</h4>
                      <p>{info.value}</p>
                    </div>
                  </div>
                </AnimatedSection>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="contact-form"
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            type: "spring",
            bounce: 0.4
          }}
        >
          <h3>Send Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={status.submitting}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={status.submitting}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                disabled={status.submitting}
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={status.submitting}
              />
            </div>
            <button
              type="submit"
              className="submit-btn"
              disabled={status.submitting}
            >
              {status.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
