import React, { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import PARTICLES_OPTIONS from "./options";
const AuthParticle = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);
  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {},
    []
  );
  return (
    <Particles
      init={particlesInit}
      loaded={particlesLoaded}
      options={PARTICLES_OPTIONS}
    />
  );
};

export default AuthParticle;
