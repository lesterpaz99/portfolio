export const Header = () => {
  return (
    <header className="w-full h-auto flex justify-between items-center border-solid border-b-2 border-linesColor">
      <div className="flex items-center">
        <p className="pr-40 pl-6">obed-paz</p>
        <ul className="flex">
          <li className="px-6 py-4 border-x-2 border-solid border-linesColor">_hello</li>
          <li className="px-6 py-4 border-r-2 border-solid border-linesColor">_about-me</li>
          <li className="px-6 py-4 border-r-2 border-solid border-linesColor">_experience</li>
          <li className="px-6 py-4 border-r-2 border-solid border-linesColor">_projects</li>
        </ul>
      </div>
      <div className="px-6 py-4 border-l-2 border-solid border-linesColor">
        <p>_contact-me</p>
      </div>
    </header>
  )
}