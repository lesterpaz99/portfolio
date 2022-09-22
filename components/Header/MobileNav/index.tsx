import { Footer } from "../../Footer";

export const MobileNav = () => {
	return (
		<nav className="w-full h-screen bg-primaryColor">
			<ul>
				<li className='p-4 border-b-2 border-solid border-linesColor active:text-white active:border-b-2 active:border-b-accentColor active:cursor-pointer'>
					_hello
				</li>
				<li className='p-4 border-b-2 border-solid border-linesColor active:text-white active:border-b-2 active:border-b-accentColor active:cursor-pointer'>
					_about-me
				</li>
				<li className='p-4 border-b-2 border-solid border-linesColor active:text-white active:border-b-2 active:border-b-accentColor active:cursor-pointer'>
					_experience
				</li>
				<li className='p-4 border-b-2 border-solid border-linesColor active:text-white active:border-b-2 active:border-b-accentColor active:cursor-pointer'>
					_projects
				</li>
			</ul>
      <div className="fixed bottom-0 left-0 right-0">
        <Footer />
      </div>
		</nav>
	);
};