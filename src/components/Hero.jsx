import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { TypeAnimation } from 'react-type-animation';
import ChrisImage from '../assets/Chris-Image.png';

const Hero = ({ darkMode }) => {
  return (
    <div className="flex lg:flex-row flex-col gap-4 px-6 md:mt-8 z-10 text-wrap relative">
      <div className="lg:w-9/12 my-14 leading-10 w-full">
        <div className="flex flex-col gap-6">
          <p
            className={`font-poppins font-bold text-3xl my-2 lg:text-6xl md:text-5xl text-white-400 ${
              darkMode ? 'text-white' : 'text-black'
            }`}
          >
            Hi! I'm{' '}
            <span
              role="img"
              aria-label="waving hand"
              className="inline-block text-4xl animate-wave"
            >
              👋
            </span>
          </p>
          <TypeAnimation
            sequence={[
              'Christian Chukwu', // First text
              2000, // Pause for 2 seconds
              'A Full Stack Developer', // Second text
              2000, // Pause for 2 seconds
              'Coding Enthusiast', // Third text
              2000,
              'React & Node.js Developer', // Fourth text
              2000,
            ]}
            speed={50} // Speed of typing
            wrapper="span"
            cursor={true}
            repeat={Infinity} // Repeat animation infinitely
            className="bg-gradient-to-r from-violet-500 via-pink-500 to-orange-500 bg-clip-text text-transparent font-poppins font-bold text-3xl lg:text-6xl md:text-5xl"
          />
          <p
            className={`lg:w-7/12 mt-10 sm:text-base lg:text-2xl flex-wrap leading-4 md:leading-8 font-roboto my-2 md:my-5 ${
              darkMode ? 'text-white' : 'text-black'
            }`}
          >
            It would be an honor to collaborate with you and your team on your
            next big software development project. I’m excited to contribute my
            skills, add value, and embrace opportunities to learn and grow!
          </p>
          <motion.a
            href="mailto:donkrizt@gmail.com?subject=Let's Connect&body=Hi Christian,"
            className="bg-gradient-to-r from-violet-500 to-pink-500 hover:from-pink-500 hover:to-orange-500 transition duration-300 rounded-full w-40 h-8 px-4 py-2 md:w-44 md:h-12 md:px-5 md:py-2  text-white font-semibold flex items-center gap-2"
            initial={{ y: 100, opacity: 0.5 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.3,
            }}
          >
            Get in touch{' '}
            <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
      <motion.div
        className=" mx-auto w-52 h-96 md:w-auto px-0 relative flex "
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileInView={{ scale: 1.1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={ChrisImage}
          alt="Christian Chukwu"
          className="my-8 rounded-full object-contain shadow-lg block justify-center items-center"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
