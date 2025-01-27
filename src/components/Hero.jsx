import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { TypeAnimation } from 'react-type-animation';
import ChrisImage from '../assets/Chris-Image.png';

const Hero = ({ darkMode }) => {
  return (
    <div className="flex lg:flex-row flex-col gap-4 px-6 md:mt-8 z-10 text-wrap">
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
            className={`lg:w-7/12 mt-10 sm:text-base lg:text-2xl flex-wrap leading-8 font-roboto my-5 ${
              darkMode ? 'text-white' : 'text-black'
            }`}
          >
            My most used tech stacks includes JavaScript (React, Nodejs and
            Nextjs), TailwindCSS, Express.js & PostgreSQL or Firebase/Firestore!
          </p>
          <motion.button
            className="bg-gradient-to-r from-violet-500 to-pink-500 hover:from-pink-500 hover:to-orange-500 transition duration-300 rounded-full w-44 h-12 px-5 py-2 text-white font-semibold flex items-center gap-2"
            initial={{ x: 100, opacity: 0 }} // Start off-screen to the left
            animate={{ x: 0, opacity: 1 }} // Animate to the normal position
            // exit={{ x: -50 }} // Optional exit animation (if needed)
            transition={{
              // repeat: Infinity,
              // repeatType: 'reverse', // Makes the animation retrace
              duration: 0.8, // A slightly longer duration for smoothness
            }}
          >
            Get in touch{' '}
            <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
      <motion.div
        className="w-auto px-0 relative flex justify-center items-center"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileInView={{ scale: 1.2 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={ChrisImage}
          alt="Christian Chukwu"
          className="my-8 rounded-full object-contain shadow-lg block"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
