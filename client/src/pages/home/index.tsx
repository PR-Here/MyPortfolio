import "./Home.css";
import { TypeAnimation } from "react-type-animation";
import profilePic from "../../assets/first.jpeg";
import DownloadButton from "../../components/shared/DownloadButton";
import SocialLinks from "../../components/shared/SocialLinks";
import { motion } from 'framer-motion';
import { AnimatedSection } from '../../components/shared/AnimatedSection';

const Home = () => {
  return (
    <section className="home">
      <motion.div 
        className="home-content"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hello, It's Me
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Pankaj Rana
        </motion.h2>
        <TypeAnimation
          className="typing-text"
          sequence={[
            "And I'm a Flutter Developer",
            1500,
            "And I'm a Web Developer",
            1500,
            "And I'm a Full Stack Developer",
            1500,
            "And I'm a React Native Developer",
            1500,
          ]}
          speed={50}
          repeat={Infinity}
        />
        <AnimatedSection delay={0.6} className="home-content">
          <p>
            I am a <strong>Full Stack Mobile and Web Developer</strong> with <strong>6 years</strong> of experience in <strong>Flutter, React Native, iOS, Android, Web Development, Node.js, and TypeScript</strong>. I specialize in developing <strong>scalable, high-performance, and user-friendly applications</strong> for both mobile and web platforms. My expertise includes <strong>React.js, Next.js, Node.js, Express.js, and TypeScript</strong>, ensuring robust front-end and back-end development. I have built and deployed numerous cross-platform and native mobile apps, focusing on <strong>efficient UI/UX, Socket.IO, state management (Redux, MobX, Zustand, Bloc, GetX, Provider, etc)</strong>, and API integrations. I work with <strong>MongoDB, PostgreSQL, and Firebase</strong>. My technical skills extend to <strong>RESTful APIs and GraphQL</strong> for seamless data communication. Over the years, I have developed applications across various industries, including <strong>fintech, e-commerce, and AI-driven solutions</strong>. Passionate about <strong>mobile-first design, progressive web applications (PWAs), and backend scalability</strong>, I strive to build efficient, secure, and cutting-edge digital solutions that enhance user experiences.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.8}>
          <div className="home-social-download">
            <SocialLinks className="social-links" />
            <DownloadButton  />
          </div>
        </AnimatedSection>
      </motion.div>

      <motion.div 
        className="home-image"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <img src={profilePic} alt="Profile" />
      </motion.div>
    </section>
  );
};

export default Home;
