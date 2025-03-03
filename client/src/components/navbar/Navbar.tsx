import  { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import DownloadButton from "../shared/DownloadButton";
import "./Navbar.css";
import logo from "../../assets/react.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (id: string) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" onClick={() => handleNavigation('home')} style={{ cursor: 'pointer' }} />
      </div>

      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li><span onClick={() => handleNavigation('home')}>Home</span></li>
        <li><span onClick={() => handleNavigation('about')}>About</span></li>
        <li><span onClick={() => handleNavigation('projects')}>Projects</span></li>
        <li><span onClick={() => handleNavigation('services')}>Services</span></li>
        <li><span onClick={() => handleNavigation('contact')}>Contact</span></li>
      </ul>

      <div className="nav-center">
        <DownloadButton className="nav-download" />
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
