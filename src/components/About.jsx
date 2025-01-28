import React from 'react';

const About = ({ darkMode }) => {
  return (
    <div id="about" className="flex flex-col gap-16 w-full my-16 z-10">
      {/* Header Section */}
      <div className="text-center">
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-bold  text-gray-100 mb-4 ${
            darkMode ? 'text-gray-100' : 'text-gray-800'
          }`}
        >
          More About Me
        </h2>
      </div>

      {/* Section 1: Journey and Background */}
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="flex gap-6 sm:gap-8">
          <p className="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">
            01
          </p>
          <div
            className={`flex flex-col gap-6 sm:gap-8 ${
              darkMode ? 'text-gray-100' : 'text-gray-800'
            }`}
          >
            <h3 className="text-2xl sm:text-3xl md:text-5xl">
              From Aircraft Engineering to Software Development
            </h3>
            <p>
              With a degree in Computer Science, my early career took flight in
              the Air Force, where I served not only as a combatant but also as
              an Aircraft and Armament Engineer. After retiring from military
              service, I fully embraced my passion for technology by
              transitioning into a career as a Full Stack Developer. Over the
              years, I’ve refined my skills through freelance projects and have
              developed a keen desire to work collaboratively within a focused
              team setting. This unique journey has instilled in me a strong
              sense of discipline, attention to detail, and problem-solving
              skills.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2: Collaboration and Communication */}
      <div
        className={`flex flex-col lg:flex-row gap-20 ${
          darkMode ? 'text-gray-100' : 'text-gray-800'
        }`}
      >
        <div className="flex gap-6 sm:gap-8">
          <p className="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">
            02
          </p>
          <div className="flex flex-col gap-6 sm:gap-8">
            <h3 className="text-2xl sm:text-3xl md:text-5xl">
              Teamwork and Communication at the Core
            </h3>
            <p>
              Having worked in both high-pressure military environments and
              dynamic software projects, I’ve learned the value of teamwork and
              effective communication. Whether coordinating within a development
              team or interacting with stakeholders, I ensure clarity,
              transparency, and collaboration at every step. My ability to work
              within structured teams is bolstered by my commitment to mutual
              growth and delivering high-quality solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: Focus and Quality */}
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="flex gap-6 sm:gap-8">
          <p className="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">
            03
          </p>
          <div
            className={`flex flex-col gap-6 sm:gap-8 ${
              darkMode ? 'text-gray-100' : 'text-gray-800'
            }`}
          >
            <h3 className="text-2xl sm:text-3xl md:text-5xl">
              Crafting Clean, Quality Code
            </h3>
            <p>
              While I am skilled as a Full Stack Developer, I prefer to focus
              deeply on either the frontend or backend of a project for greater
              efficiency and detail. My passion lies in writing clean,
              standards-compliant, and maintainable code that prioritizes
              functionality and user experience. With a sharp eye for quality, I
              aim to bring innovative solutions to life and leave a lasting
              impact on every project I undertake.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
