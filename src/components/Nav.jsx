import { Sling as Hamburger } from 'hamburger-react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import ChrisIcon from '../assets/Chris-Icon-48.jpeg';

const Nav = ({ isMenuOpen, setIsMenuOpen, setDarkMode, darkMode }) => {
  return (
    <nav className="flex justify-between items-center p-4 md:py-7 bg-opacity-0 z-50 sticky top-0">
      {/* Logo */}
      <div className="text-lg font-bold text-purple-400 z-50">
        <img
          src={ChrisIcon}
          alt="Chris Logo image"
          className="w-10 h-10 md:w-14 md:h-14 lg:mt-3 mt-1 ml-2 rounded-full object-cover block"
        />
      </div>

      {/* Desktop Menu */}
      <div
        className={`md:flex gap-4 text-lg ${
          darkMode ? '' : 'text-black'
        } hidden`}
      >
        <div className="flex gap-6">
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

      {/* Mobile Hamburger */}
      <div className="md:hidden flex flex-row gap-5 z-50">
        <div className="pt-4">
          <DarkModeSwitch
            style={{ marginBottom: '1rem' }}
            checked={darkMode}
            onChange={setDarkMode}
            size={24}
          />
        </div>
        <div className="z-50">
          <Hamburger
            toggled={isMenuOpen}
            toggle={setIsMenuOpen}
            color={darkMode ? '#ffffff' : '#000000'}
          />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed top-0 left-0 w-full bg-fuchsia-950 text-yellow-50 transition-transform duration-300 ease-in-out transform z-40 ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ height: '40vh' }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-4">
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
