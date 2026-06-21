import "./Projects.css";
import { FaExternalLinkAlt, FaMobileAlt } from "react-icons/fa";
import { motion } from 'framer-motion';

interface AppItem {
  title: string;
  description: string;
  googlePlay: string;
  appStore?: string;
  status?: string;
  icon: React.ReactNode;
}

interface Certificate {
  title: string;
  url: string;
}

const Projects = () => {
  const apps: AppItem[] = [
    {
      title: "Zupee Ludo",
      description: "A modern online Ludo experience with competitive play, secure transactions, and engaging rewards.",
      googlePlay: "https://play.google.com/store/apps/details?id=com.zupee.free&pcampaignid=web_share",
      appStore: "https://apps.apple.com/in/app/zupee-play-ludo-watch-tv/id1576310504",
      icon: <FaMobileAlt />
    },
    {
      title: "Tez Rummy",
      description: "Skill-based rummy platform with real-time multiplayer gaming and secure payment channels.",
      googlePlay: "https://play.google.com/store/apps/details?id=com.battles99.rummyandroid",
      status: "App Store currently unavailable / delisted",
      icon: <FaMobileAlt />
    },
    {
      title: "Hobbytwin",
      description: "Community-driven hobby social app designed to help users discover and connect with new hobby friends.",
      googlePlay: "https://play.google.com/store/apps/details?id=com.hobbytwin.hobbytwin&pcampaignid=web_share",
      appStore: "https://apps.apple.com/in/app/hobbytwin-make-hobby-friends/id1488601826",
      icon: <FaMobileAlt />
    },
    {
      title: "Capri Loans",
      description: "Loan management app for consumer lending, featuring analytics, payment tracking, and secure customer flows.",
      googlePlay: "https://play.google.com/store/apps/details?id=com.capriloans.consumer&pcampaignid=web_share",
      appStore: "https://apps.apple.com/in/app/capri-loans/id6504343732",
      icon: <FaMobileAlt />
    },
    {
      title: "Enviro.H",
      description: "Environmental services app with tools for tracking and reporting eco-focused workflows.",
      googlePlay: "https://play.google.com/store/apps/details?id=com.enviro&pcampaignid=web_share",
      status: "Not live",
      icon: <FaMobileAlt />
    },
    {
      title: "AGL HRM",
      description: "Human resource management application for employee data, attendance, and workflow coordination.",
      googlePlay: "https://play.google.com/store/apps/details?id=com.adglobal.hrm&pcampaignid=web_share",
      status: "Not live",
      icon: <FaMobileAlt />
    },
    {
      title: "Mint360 LMS",
      description: "Learning management solution for training, course management, and performance tracking.",
      googlePlay: "https://play.google.com/store/apps/details?id=com.suzuki.salesmanager&pcampaignid=web_share",
      status: "Not live",
      icon: <FaMobileAlt />
    }
  ];

  const certificates: Certificate[] = [
    {
      title: "React JS Masterclass: Zero To Job Ready With 10 Projects",
      url: "https://ude.my/UC-db295489-b8c3-4dcb-8838-d4db6ce6cdfa"
    },
    {
      title: "The Complete React 19 Developer Course (incl. Next.js 16)",
      url: "https://ude.my/UC-26402593-b50c-430e-b20e-ef46fc3726f9"
    },
    {
      title: "Mastering TypeScript - 2026 Edition",
      url: "https://ude.my/UC-fa3d5c80-7199-47b3-a4cd-95b9207db813"
    },
    {
      title: "React Native - The Practical Guide",
      url: "https://ude.my/UC-23fa1308-63a7-4ad8-af00-0c408ca13a87"
    },
    {
      title: "Flutter & Dart - The Complete Guide",
      url: "https://ude.my/UC-969f6d8a-4ef1-45ca-b33b-4c6abf032bf8"
    },
    {
      title: "AI Engineer Agentic Track: The Complete Agent & MCP Course",
      url: "https://ude.my/UC-f02cc30c-c3c5-49b3-abdf-df347b3db5ec"
    },
    {
      title: "LangChain Agentic AI Engineering with LangChain & LangGraph",
      url: "https://ude.my/UC-c80ff3c8-aa85-4b35-9a55-223397267db5"
    },
    {
      title: "The Complete Prompt Engineering for AI Bootcamp (2026)",
      url: "https://ude.my/UC-0fae6b86-e76f-4f93-b39a-5d2b410eee3b"
    }
  ];

  return (
    <section className="projects">
      <motion.div 
        className="section-heading"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
      >
        <h2>Apps</h2>
        <div className="underline"></div>
      </motion.div>

      <div className="app-cards">
        {apps.map((app, index) => (
          <motion.div
            key={index}
            className="project-card app-card"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1, type: "spring", bounce: 0.3 }}
            whileHover={{
              scale: 1.05,
              rotate: 1,
              transition: { duration: 0.2 }
            }}
          >
            <div className="project-content app-card-content">
              <div className="app-card-header">
                <div className="app-icon">{app.icon}</div>
                <h3>{app.title}</h3>
              </div>
              <p>{app.description}</p>
              <div className="app-links">
                <a href={app.googlePlay} target="_blank" rel="noopener noreferrer">
                  Google Play
                </a>
                {app.appStore ? (
                  <a href={app.appStore} target="_blank" rel="noopener noreferrer">
                    App Store
                  </a>
                ) : (
                  <span className="app-not-live">App Store not live</span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <section id="certificates" className="certificate-section">
        <motion.div 
          className="certificate-heading"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
        >
          <h2>Certificates</h2>
        </motion.div>

        <div className="certificate-list">
          {certificates.map((certificate, index) => (
            <motion.a
              key={index}
              className="project-card certificate-item app-card"
              href={certificate.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.05, y: -4, transition: { duration: 0.2 } }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05, type: "spring", bounce: 0.3 }}
            >
              <div className="project-content certificate-content">
                <div className="app-card-header certificate-card-header">
                  <div className="app-icon">
                    <FaExternalLinkAlt />
                  </div>
                  <h3>{certificate.title}</h3>
                </div>
                <p className="certificate-description">
                  Click to view the certificate and credential details.
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Projects;
