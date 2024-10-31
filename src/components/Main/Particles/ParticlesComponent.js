import React from "react";
import Particles from "react-tsparticles";
import particlesOptions from "./particlesOptions";

export const ParticlesComponent = () => {
  return (
    <Particles
      id="tsparticles"
      options={particlesOptions}
    />
  );
};