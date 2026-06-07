import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function ParticlesBg() {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },

        background: {
          color: "#000000",
        },

        fpsLimit: 60,

        particles: {
          number: {
            value: 25,
          },

          color: {
            value: "#22d3ee",
          },

          links: {
            enable: true,
            color: "#22d3ee",
            distance: 150,
            opacity: 0.15,
            width: 1,
          },

          move: {
            enable: true,
            speed: 0.5,
          },

          opacity: {
            value: 0.3,
          },

          size: {
            value: {
              min: 1,
              max: 3,
            },
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
          },

          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.4,
              },
            },
          },
        },

        detectRetina: true,
      }}
    />
  );
}

export default ParticlesBg;