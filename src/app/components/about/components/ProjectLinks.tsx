const links = [
  "I'm currently improving my Golang skills on new projects.",
  <>
    Currently working on projects{' '}
    <a href="https://github.com/karadyauran/ai-developer-light" className="text-blue-400 hover:text-blue-300 transition-colors">
      ai-dev
    </a>
    {' '}and{' '}
    <a href="https://github.com/karadyauran/keep-git" className="text-blue-400 hover:text-blue-300 transition-colors">
      keep-git
    </a>
  </>,
  <>Reach me by email: <a href="mailto:alex.karadyaur@outlook.com" className="text-blue-400 hover:text-blue-300 transition-colors">alex.karadyaur@outlook.com</a></>
];

export const ProjectLinks = () => (
  <ul className="list-none space-y-3 mt-6">
    {links.map((item, i) => (
      <li key={i} className="flex items-center text-neutral-300">
        <span className="text-blue-400 mr-2">▹</span> {item}
      </li>
    ))}
  </ul>
);