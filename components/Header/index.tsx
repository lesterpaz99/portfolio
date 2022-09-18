export const Header = () => {
  return (
    <header className="w-full h-auto border-solid border-b-2 border-linesColor text-gray-400">
      <nav className="flex justify-between items-center">
        <div className="flex items-center">
          <p className="pr-40 pl-6 py-4 text-gray-300">obed-paz</p>
          <ul className="flex">
            <li className="px-6 py-4 border-x-2 border-solid border-linesColor hover:text-white hover:border-b-4 hover:border-b-accentColor hover:cursor-pointer">_hello</li>
            <li className="px-6 py-4 border-r-2 border-solid border-linesColor hover:text-white hover:border-b-4 hover:border-b-accentColor hover:cursor-pointer">_about-me</li>
            <li className="px-6 py-4 border-r-2 border-solid border-linesColor hover:text-white hover:border-b-4 hover:border-b-accentColor hover:cursor-pointer">_experience</li>
            <li className="px-6 py-4 border-r-2 border-solid border-linesColor hover:text-white hover:border-b-4 hover:border-b-accentColor hover:cursor-pointer">_projects</li>
          </ul>
        </div>
        <div className="px-6 py-4 border-l-2 border-solid border-linesColor hover:border-b-accentColor hover:border-b-4 hover:text-white hover:cursor-pointer">
          <p>_contact-me</p>
        </div>
      </nav>
    </header>
  )
}