import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Handle scroll visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      className={`py-12 px-4 border-t z-10 ${
        darkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-100 border-gray-300'
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        {/* Copyright Section */}
        <p
          className={`text-sm ${
            darkMode ? 'text-gray-400' : 'text-gray-700'
          } text-center`}
        >
          © {currentYear} Christian Chukwu. All rights reserved.
        </p>

        {/* Social Media Icons */}
        <div id="contact" className="flex gap-4">
          <a
            href="https://github.com/dkrizt/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-violet-500 transition duration-200"
          >
            <FontAwesomeIcon icon={faGithub} size="2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/christian-chukwu-2a4164211/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-500 transition duration-200"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
          </a>
          <a
            href="https://x.com/Donkrizt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-sky-500 transition duration-200"
          >
            <FontAwesomeIcon icon={faTwitter} size="2xl" />
          </a>
        </div>

        {/* Decorative Line */}
        <div
          className={` w-1/3 h-0.5 mt-2 ${
            darkMode ? 'bg-gray-700' : 'bg-gray-300'
          }`}
        ></div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-full shadow-lg hover:from-pink-500 hover:to-orange-500 transition-all duration-300 animate-bounce"
          aria-label="Scroll to top"
        >
          <FontAwesomeIcon icon={faArrowUp} size="lg" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
