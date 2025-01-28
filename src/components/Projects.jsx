import React from 'react';

const Projects = () => {
  return (
    <div
      id="projects"
      className="sticky top-0 px-6 py-12 my-6 mt-16 bg-gray-100 dark:bg-gray-900 text-center rounded-xl shadow-lg opacity-90 border-violet-700- z-10"
    >
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-100 to-pink-400 bg-clip-text text-transparent mb-6">
        Projects Engaged in previously
      </h1>
      <div className="grid grid-col lg:grid-cols-3 gap-6 h-auto p-5 rounded-lg">
        <div className="bg-gray-200 p-4 rounded-md w-full h-96">
          <p className="text-slate-900 font-semibold">Project 1</p>
        </div>
        <div className=" bg-gray-200 p-4 rounded-md w-full h-96">
          <p className="text-slate-900 font-semibold">Project 2</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-md w-full h-96">
          <p className="text-slate-900 font-semibold">Project 3</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
