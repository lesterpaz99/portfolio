import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { Model } from '../../Hacker_mode';

export const RenderModel = () => {
  return <Canvas
  camera={{ position: [2, 0, 12], fov: 12 }}
  style={{
     backgroundImage: 'linear-gradient(rgb(17, 24, 39), rgb(75, 85, 99))',
     width: '50vw',
     height: '50vh',
  }}
>
  {/* <ambientLight intensity={0.1} />
  <ambientLight intensity={0.1} />
  <directionalLight intensity={0.1} /> */}
  <Suspense fallback={'Loading...'}>
     <Model />
      <Environment preset="night" />
  </Suspense>
  <OrbitControls autoRotate />
</Canvas>
}