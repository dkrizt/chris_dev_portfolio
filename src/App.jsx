import { useEffect, useState } from 'react';
import './index.css';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim'; // Slim version to reduce bundle size
import particlesConfig from './particlesConfig';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Tools from './components/Tools';
import About from './components/About';

function App() {
  const [darkMode, setDarkMode] = useState(true); // Dark mode state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [particlesInit, setParticlesInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setParticlesInit(true);
    });
  }, []);

  return (
    <div className={` ${darkMode ? 'dark' : ''}`}>
      {/* Background particles */}
      {particlesInit && (
        <Particles
          id="tsparticles"
          options={particlesConfig(darkMode)}
          className=" mr-10"
        />
      )}

      {/* Main App Structure */}
      <div className="min-h-screen flex flex-col lg:px-32 md:px-24 sm:px-10 text-gray-100 z-0">
        <Nav
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          setDarkMode={setDarkMode}
          darkMode={darkMode}
        />
        <Hero darkMode={darkMode} />
        <Projects />
        <About darkMode={darkMode} />
        <Tools />
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;
