const particlesConfig = (darkMode) => ({
  background: {
    color: {
      value: darkMode ? '#0d0d0d' : '#F7F3F7', // Change background based on mode
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push',
      },
      onHover: {
        enable: true,
        mode: 'connect', // Connect particles on hover
      },
    },
    modes: {
      push: {
        quantity: 4,
      },
      connect: {
        distance: 150,
        links: {
          opacity: 0.5,
        },
      },
    },
  },
  particles: {
    color: {
      value: darkMode ? '#E4DFEC' : '#000000', // Particle color
    },
    links: {
      color: darkMode ? '#E4DFEC' : '#000000',
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
    },
    number: {
      density: {
        enable: true,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
});

export default particlesConfig;
