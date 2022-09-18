import Image from "next/future/image";

import twitterIcon from '/public/svg/twitter-fill.svg';
import githubIcon from '/public/svg/github-fill.svg';
import linkedinIcon from '/public/svg/linkedin-box-fill.svg';
import instagramIcon from '/public/svg/instagram-fill.svg';

export const Footer = () => {
  return (
    <footer className="w-full h-auto fixed bottom-0 flex justify-between items-center border-solid border-t-2 border-linesColor">
      <div className="flex items-center">
        <p className="px-4 py-2">find me in:</p>
        <ul className="flex">
          <li className="px-6 py-4 border-x-2 border-solid border-linesColor">
            <Image src={twitterIcon} alt='Twitter icon' />
          </li>
          <li className="px-6 py-4 border-x-2 border-solid border-linesColor">
            <Image src={instagramIcon} alt='Instagram icon' />
          </li>
          <li className="px-6 py-4 border-x-2 border-solid border-linesColor">
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