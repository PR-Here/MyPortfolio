import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import About from '../pages/about';
import Home from '../pages/home';
import Portfolio from '../pages/portfolio';
import Contact from '../pages/contact';
import { Services } from '../pages/service';

const App = () => {

  
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
            <section id="projects">
              <Portfolio />
            </section>
            <section id="services"> 
              <Services />
            </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
