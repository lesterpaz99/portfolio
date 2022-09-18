import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react"
import { Canvas, useLoader } from "@react-three/fiber"
import { Environment, OrbitControls, useGLTF } from "@react-three/drei"

export const Model = () => {
  // location of the 3D model
  const gltf = useLoader(GLTFLoader, "/hacker_mode.glb");
  return (
    <>
      {/* Use scale to control the size of the 3D model */}
      <primitive object={gltf.scene} scale={4} />
    </>
  );
};

useGLTF.preload('/hacker_mode.glb')