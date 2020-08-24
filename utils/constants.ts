// https://github.com/matteobruni/tsparticles/wiki/tsParticles-Options
import {IParticlesParams} from 'react-tsparticles'
export const particlesOptions: IParticlesParams = {
    fpsLimit: 60,
    detectRetina: true,
    pauseOnBlur: true,
    particles: {
      size: {
        random: true,
        value: 1.5,
      },
      number: {
        value: 10
      },
      move: {
        direction: "none",
        enable: true,
        random: false,
        speed: 6,
        straight: false,
      },
    },
    interactivity: {
      detectsOn: "window",
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "trail",
        },
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
        trail: {
          delay: 0.1,
          quantity: 0.1
        },
        remove: {
          quantity: 50
        },
        push: {
          quantity: 15
        },
      },
    }
  };