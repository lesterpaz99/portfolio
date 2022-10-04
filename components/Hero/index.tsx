import TypewriterComponent from "typewriter-effect" 
import { useMediaQuery } from "../../hooks/useMediaQuery"

import { RenderModel } from "../RenderModel";
import bgBlur from '/public/images/backgroundblurs.png';

export const Hero = () => {
  const isMobile = useMediaQuery('(max-width: 428px)');

  return (
    <section className="w-full h-screen flex flex-wrap gap-2 justify-center items-center">
      <div className="grid place-content-center" style={{
          backgroundImage: `${isMobile ? `url(${bgBlur.src})` : 'none'}`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backdropFilter: isMobile ? 'blur(5px)' : 'none',
          paddingBlock: isMobile ? '4rem' : '0',
      }}>
        <p className="text-lg text-white filter brightness-125 px-6">Hi all, my name is</p>
        <h1 className="text-7xl text-white filter brightness-125 px-6">Obed Paz</h1>
        <p className="text-3xl mb-20 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-accentColor px-6">&gt; Front-end developer</p>

        {/* this is going to be typedWithCode automatically */}
        <code className="text-gray-400 px-6">
          <span>{'//'} Building things for the web</span>
          <div className="flex">{'//'}&nbsp;
            <TypewriterComponent 
              options={{
                strings: ['I code user interfaces', 'I turn ideas into reality'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p>
              <span className="text-secondaryColor">const</span>{' '}
              <span className="text-accentColor">githubProfile</span>{' = '}
              <span className="text-thirdColor">&ldquo;<a className="underline" href="https://github.com/lesterpaz99" target="_blank" rel="noopener noreferrer">https://github.com/lesterpaz99</a>&rdquo;</span>
            </p>
        </code>
      </div>
      {!isMobile && <RenderModel />}
    </section>
  )
}