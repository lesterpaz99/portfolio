import Image from 'next/future/image';
import { useState } from 'react';
import { useRouter } from 'next/router';

// svg - images
import burgerIcon from '/public/svg/burger_menu.svg';
import closeIcon from '/public/svg/close_menu.svg';

// hooks
import { useMediaQuery } from '../../hooks/useMediaQuery';

// components
import { MobileNav } from './MobileNav';

export const Header = () => {
	const [openMenu, setOpenMenu] = useState<boolean>(false);
	const isMobile = useMediaQuery('(max-width: 428px)');

	const router = useRouter();
	const isHome = router.pathname === '/';

	const toggleOpenMenu = () => setOpenMenu(!openMenu);

	if (isMobile) {
		return (
			<>
			<header className='w-full h-auto bg-primaryColor border-solid border-b-2 border-linesColor text-textColor fixed top-0 z-10 flex justify-between items-center px-4 py-5 backdrop-blur-3xl'>
				<p className='font-medium text-base text-textColor'>
					obed-paz
				</p>
				<button onClick={toggleOpenMenu}>
					<Image src={openMenu ? closeIcon : burgerIcon} alt='Burger menu' />
				</button>
			</header>
			{openMenu && <MobileNav />}
			</>
		);
	}

	return (
		<header className='w-full h-auto border-solid border-b-2 border-linesColor text-textColor fixed top-0 z-10'>
			<nav className='flex justify-between items-center'>
				<div className='flex items-center'>
					<p className='pr-40 pl-6 py-4 text-textColor'>obed-paz</p>
					<ul className='flex'>
						<li className={`px-6 py-4 border-x-2 border-solid border-linesColor hover:text-white hover:border-b-2 hover:border-b-accentColor hover:cursor-pointer ${isHome && 'text-white border-b-2 border-b-accentColor'}`}>
							_hello
						</li>
						<li className='px-6 py-4 border-r-2 border-solid border-linesColor hover:text-white hover:border-b-2 hover:border-b-accentColor hover:cursor-pointer'>
							_about-me
						</li>
						<li className='px-6 py-4 border-r-2 border-solid border-linesColor hover:text-white hover:border-b-2 hover:border-b-accentColor hover:cursor-pointer'>
							_experience
						</li>
						<li className='px-6 py-4 border-r-2 border-solid border-linesColor hover:text-white hover:border-b-2 hover:border-b-accentColor hover:cursor-pointer'>
							_projects
						</li>
					</ul>
				</div>
				<div className='px-6 py-4 border-l-2 border-solid border-linesColor hover:border-b-accentColor hover:border-b-2 hover:text-white hover:cursor-pointer'>
					<p>_contact-me</p>
				</div>
			</nav>
		</header>
	);
};
