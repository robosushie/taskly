import { Canvas } from "@react-three/fiber";
import Sphere from "./sphere";
import { PerspectiveCamera } from "@react-three/drei";

const Scene = () => {
  return (
    <Canvas className="w-full h-full">
      <PerspectiveCamera makeDefault position={[0, 0, 6]} />
      <Sphere position={[0, 0, 2]} scale={1} phaseShift={0} amplitude={0} />
      <Sphere
        position={[-1.5, -1, 2]}
        scale={0.3}
        phaseShift={90}
        amplitude={0.1}
      />
      <Sphere
        position={[1, 1.5, 2]}
        scale={0.2}
        phaseShift={180}
        amplitude={0.15}
      />
    </Canvas>
  );
};

export default Scene;
