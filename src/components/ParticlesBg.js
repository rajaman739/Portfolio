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
        particles: {
          number: {
            value: 40,
          },
          color: {
            value: "#00ffff",
          },
          links: {
            enable: true,
            color: "#00ffff",
            distance: 120,
          },
          move: {
            enable: true,
            speed: 1,
          },
          size: {
            value: 2,
          },
        },
      }}
    />
  );
}

export default ParticlesBg;