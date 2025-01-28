import React from 'react';
import { motion } from 'framer-motion';
import {
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiReact,
  SiApollographql,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiFramer,
  SiDocker,
} from 'react-icons/si';

const Tools = () => {
  const tools = [
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-600" /> },
    { name: 'Express.js', icon: <SiExpress className="text-gray-400" /> },
    { name: 'React.js', icon: <SiReact className="text-cyan-400" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-gray-300" /> },
    { name: 'Tailwind', icon: <SiTailwindcss className="text-cyan-400" /> },
    {
      name: 'Apollographql',
      icon: <SiApollographql className="text-pink-500" />,
    },
    { name: 'Node.js', icon: <SiNodedotjs className="text-green-600" /> },
    { name: 'Framer Motion', icon: <SiFramer className="text-yellow-400" /> },
    { name: 'Docker', icon: <SiDocker className="text-blue-400" /> },
  ];

  return (
    <>
      <div className="text-center mt-8">
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: -10, opacity: 1 }}
          whileInView={{ y: 0, opacity: 1, scale: 1.1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-violet-500 to-pink-400 bg-clip-text text-transparent"
        >
          A peep at some of my tools
        </motion.h2>
      </div>

      <div className="text-center px-6 py-10 my-3 rounded-xl shadow-lg border-violet-700- z-10">
        <div className="grid grid-cols-2 m2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 rounded-lg shadow-md hover:scale-125 transition-transform duration-200"
            >
              <div className="text-4xl mb-2">{tool.icon}</div>
              <p className="text-lg font-medium">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

//bg-white dark:bg-gray-800
export default Tools;
