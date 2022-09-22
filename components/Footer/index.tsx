import Image from "next/future/image";

// hooks
import { useMediaQuery } from "../../hooks/useMediaQuery";

// icons - svg
import twitterIcon from '/public/svg/twitter-fill.svg';
import githubIcon from '/public/svg/github-fill.svg';
import linkedinIcon from '/public/svg/linkedin-box-fill.svg';
import instagramIcon from '/public/svg/instagram-fill.svg';

export const Footer = () => {
  const isMobile = useMediaQuery('(max-width: 428px)');

  if (isMobile) {
    return <footer className="w-full h-auto flex border-solid border-t-2 border-linesColor">
      <p className="w-[55%] px-4 py-3 border-r-2 border-solid border-linesColor">find me in:</p>
      <ul className="flex w-[45%] justify-between">
            <li className="p-3 border-r-2 border-solid border-linesColor w-1/3 grid place-items-center">
              <Image src={twitterIcon} alt='Twitter icon' />
            </li>
            <li className="p-3 border-r-2 border-solid border-linesColor w-1/3 grid place-items-center">
              <Image src={instagramIcon} alt='Instagram icon' />
            </li>
            <li className="p-3 border-r-2 border-solid border-linesColor w-1/3 grid place-items-center">
              <Image src={linkedinIcon} alt='LinkedIn icon' />
            </li>
          </ul>
    </footer>
  }

    return (
      <footer className="w-full h-auto fixed bottom-0 flex justify-between items-center border-solid border-t-2 border-linesColor">
        <div className="flex items-center">
          <p className="px-4 py-4 border-r-2 border-solid border-linesColor">find me in:</p>
          <ul className="flex">
            <li className="px-6 py-4 border-r-2 border-solid border-linesColor">
              <Image src={twitterIcon} alt='Twitter icon' />
            </li>
            <li className="px-6 py-4 border-r-2 border-solid border-linesColor">
              <Image src={instagramIcon} alt='Instagram icon' />
            </li>
            <li className="px-6 py-4 border-r-2 border-solid border-linesColor">
              <Image src={linkedinIcon} alt='LinkedIn icon' />
            </li>
          </ul>
        </div>
        <div className="flex px-6 py-4 border-l-2 border-solid border-linesColor">
          <span>
            @lesterpaz99
          </span>
          <Image src={githubIcon} alt='Github icon' />
        </div>
      </footer>
    )
}