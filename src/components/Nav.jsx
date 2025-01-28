import { Sling as Hamburger } from 'hamburger-react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import ChrisIcon from '../assets/Chris-Icon-48.jpeg';

const Nav = ({ isMenuOpen, setIsMenuOpen, setDarkMode, darkMode }) => {
  return (
    <nav className="flex justify-between items-center p-4 md:py-7 bg-opacity-0 z-100 sticky top-0">
      <div className="text-lg font-bold text-purple-400">
        <img
          src={ChrisIcon}
          alt="Chris Logo image"
          className="w-12 h-12 lg:w-14 lg:h-14  mt-4 ml-2 rounded-full object-cover block"
        />
      </div>

      <div className={`md:flex gap-4 text-lg ${darkMode ? '' : 'text-black'}`}>
        <div className="hidden md:flex gap-6">
          <div className="pt-4">
            <DarkModeSwitch
              className="hover:text-yellow-400"
              style={{ marginBottom: '1rem' }}
              checked={darkMode}
              onChange={setDarkMode}
              size={24}
            />
          </div>
          <a
            href="#projects"
            className="hover:text-purple-400 cursor-pointer pt-4"
          >
            Projects
          </a>
          <a
            href="#about"
            className="hover:text-purple-400 cursor-pointer pt-4"
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:text-purple-400 cursor-pointer pt-4"
          >
            Contact
          </a>
        </div>
      </div>

      <div className="md:hidden flex flex-row gap-5">
        <div className="pt-4 z-30">
          <DarkModeSwitch
            style={{ marginBottom: '1rem' }}
            checked={darkMode}
            onChange={setDarkMode}
            size={24}
          />
        </div>
        <div className={`z-30 ${darkMode ? '' : 'text-black'}`}>
          <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-0 left-0 w-full bg-fuchsia-950 text-yellow-50 transition-transform duration-300 ease-in-out transform z-20 ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ height: '30vh' }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-4 z-20">
          <a
            href="#projects"
            className="hover:text-purple-400 cursor-pointer text-lg font-bold"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#about"
            className="hover:text-purple-400 cursor-pointer text-lg font-bold"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:text-purple-400 cursor-pointer text-lg font-bold"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
