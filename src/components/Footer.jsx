import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

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
    </footer>
  );
};

export default Footer;
