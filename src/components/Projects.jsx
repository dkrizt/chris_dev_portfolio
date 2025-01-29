import React from 'react';

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: '01 | SOCIAL MEDIA APP',
      description:
        'A fun and interactive social media platform designed for sharing posts and connecting with friends. Built with TypeScript, Next.js, and MongoDB for seamless performance.',
      image: '/assets/images/retweet.png',
      livePreview: 'https://retweet-frontend.vercel.app/',
      github: 'https://github.com/somkenemuscle/Retweet-backend',
      techStack: [
        'typescript',
        'nextjs',
        'tailwindcss',
        'nodejs',
        'express',
        'mongodb',
      ],
    },
    {
      id: 2,
      title: '02 | TASK MANAGEMENT TOOL',
      description:
        'A simple and effective task management application to organize and prioritize tasks efficiently. Built with React, Node.js, and PostgreSQL.',
      image: '/assets/images/taskmanager.png',
      livePreview: 'https://taskmanager.vercel.app/',
      github: 'https://github.com/username/taskmanager',
      techStack: [
        'react',
        'nodejs',
        'tailwindcss',
        'postgresql',
        'express',
        'docker',
      ],
    },
    {
      id: 3,
      title: '03 | E-COMMERCE PLATFORM',
      description:
        'An elegant e-commerce platform to explore products, add to cart, and manage orders seamlessly. Built with Next.js, Prisma, and Stripe integration.',
      image: '/assets/images/ecommerce.png',
      livePreview: 'https://ecommerce.vercel.app/',
      github: 'https://github.com/username/ecommerce-platform',
      techStack: ['nextjs', 'prisma', 'stripe', 'tailwindcss', 'typescript'],
    },
  ];

  return (
    <div
      id="projects"
      className="px-6 py-12 my-6 mt-16 bg-gray-100 dark:bg-gray-900 text-center rounded-xl shadow-lg z-10"
    >
      <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-orange-100 to-pink-400 bg-clip-text text-transparent mb-6">
        Projects Engaged In Previously
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="bg-gray-200 dark:bg-gray-800 p-6 rounded-md shadow-lg flex flex-col items-start"
          >
            {/* Header Section */}
            <div className="flex items-center justify-between w-full mb-4">
              <span className="text-gray-400 tracking-widest text-sm font-light">
                {project.title}
              </span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={project.github}
                className="text-pink-300 hover:text-cyan-200 transition-all duration-300"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 15 15"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 border border-neutral-700 rounded-full"
                >
                  <path
                    d="M7.5 0.25C3.496 0.25 0.25 3.496 0.25 7.5c0 3.202 2.078 5.92 4.959 6.879.363.067.495-.157.495-.349v-1.233c-2.017.438-2.443-1.032-2.443-1.032-.33-.838-.805-1.061-.805-1.061-.658-.449.05-.457.05-.457.728.051 1.111.747 1.111.747.647 1.108 1.698.788 2.111.603.066-.468.253-.787.46-.968C4.567 10.521 2.875 9.899 2.875 7.121c0-.792.282-1.439.746-1.946-.074-.183-.322-.92.073-1.918 0 0 .609-.195 1.994.742.578-.16 1.199-.24 1.816-.243.617.003 1.237.083 1.816.243 1.385-.937 1.993-.742 1.993-.742.396.998.147 1.735.073 1.918.464.507.746 1.154.746 1.946 0 2.785-1.695 3.398-3.31 3.577.26.224.492.666.492 1.343v1.739c0 .194.13.416.497.345C12.673 13.42 14.75 10.703 14.75 7.5 14.75 3.496 11.504.25 7.5.25z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>

            {/* Project Image */}
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="w-full h-64 object-cover rounded-md mb-4"
            />

            {/* Project Description */}
            <p className="text-gray-400 text-sm tracking-wide mb-4">
              {project.description}
            </p>

            {/* Tech Stack */}
            <ul className="flex gap-2 mb-4">
              {project.techStack.map((tech, index) => (
                <li key={index}>
                  <img
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`}
                    alt={`${tech} logo`}
                    className="w-7 h-7"
                  />
                </li>
              ))}
            </ul>

            {/* Live Preview */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={project.livePreview}
              className="text-gray-300 hover:underline tracking-wide"
            >
              🌍 Live Preview →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
