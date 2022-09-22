import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { Model } from '../../Hacker_mode';

import bgBlur from '/public/images/backgroundblurs.png';

export const RenderModel = () => {
	return <Canvas
				camera={{ position: [2, -4, 10], fov: 12 }}
				style={{
					backgroundImage: 'url(' + bgBlur.src + ')',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backdropFilter: 'blur(5px)',
					width: '50vw',
					height: '80vh',
					cursor: 'grab',
				}}
				className='active:cursor-grabbing'
			>
				<ambientLight intensity={0.1} />
				<ambientLight intensity={0.1} />
				<directionalLight intensity={0.1} />
				<Suspense fallback={'Loading...'}>
					<Model />
					<Environment preset='forest' />
				</Suspense>
				<OrbitControls autoRotate enableDamping />
			</Canvas>
};
