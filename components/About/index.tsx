import Image from 'next/future/image';
import { useMediaQuery } from '../../hooks/useMediaQuery';

import meAvatar from '/public/images/Me-Avatar.png';

export const About = () => {
	const isMobile = useMediaQuery('(max-width: 428px)');

	return (
		<section className='w-full h-screen grid place-items-center max-w-screen-lg mx-auto'>
			<div>
				<h2>aboutMe()</h2>
				<div>
					<div className={`flex gap-8  ${isMobile ? 'flex-col' : ''}`}>
						<div className='relative'>
							<Image
								src={meAvatar}
								alt='Me avatar 3D'
								width={280}
								height={300}
							/>
						</div>
						<p>
							Hello! 👋 My name is Obed and I&quot;m a software engineer, my
							main focus is the Frontend (but occasionally I do some backend
							stuff). I enjoy creating things that live on the internet, and my
							goal is to always build products that provide pixel-perfect,
							performant experiences.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
