import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"

export const Model = () => {
  // location of the 3D model
  const { scene, nodes, animations, materials } = useLoader(GLTFLoader, "/tech_hologram.glb");
  return (
    <>
      {/* Use scale to control the size of the 3D model */}
      <primitive object={scene} scale={2} />
    </>
  );
};

useGLTF.preload('/tech_hologram.glb')