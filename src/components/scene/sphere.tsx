import { useFrame } from "@react-three/fiber";
import { vertexShader, fragmentShader } from "@lib/shader";
import React, { useRef } from "react";

// Default settings
const settings = {
  speed: 0.2,
  density: 1.5,
  strength: 0.2,
  frequency: 3.0,
  amplitude: 6.0,
  intensity: 7.0,
  wireframe: false,
};

const Sphere: React.FC<{
  position: any;
  scale: any;
  phaseShift: any;
  amplitude: any;
}> = ({ position, scale, phaseShift, amplitude }) => {
  const meshRef: any = useRef();

  const uniforms = {
    uTime: { value: 0 },
    uSpeed: { value: settings.speed },
    uNoiseDensity: { value: settings.density },
    uNoiseStrength: { value: settings.strength },
    uFrequency: { value: settings.frequency },
    uAmplitude: { value: settings.amplitude },
    uIntensity: { value: settings.intensity },
  };

  useFrame(({ clock }) => {
    if (!meshRef) {
      return;
    }
    const current = meshRef.current.material.uniforms;

    current.uTime.value = clock.getElapsedTime();
    current.uSpeed.value = settings.speed;
    current.uNoiseDensity.value = settings.density;
    current.uNoiseStrength.value = settings.strength;
    current.uFrequency.value = settings.frequency;
    current.uAmplitude.value = settings.amplitude;
    current.uIntensity.value = settings.intensity;

    meshRef.current.position.y =
      position[1] +
      amplitude *
        Math.sin(clock.getElapsedTime() + (phaseShift * Math.PI) / 180);
  });

  return (
    <mesh ref={meshRef} position={position} scale={[scale, scale, scale]}>
      <icosahedronGeometry attach="geometry" args={[1, 64]} />
      <shaderMaterial
        attach="material"
        {...{ vertexShader, fragmentShader, uniforms }}
      />
    </mesh>
  );
};

export default Sphere;
