const links = [
  "Engineered high-performance backend systems optimized for scale.",
  "Delivered modern and intuitive frontend solutions using Next.js.",
  "Improved deployment pipelines with CI/CD automation and containerization.",
  "Maintained system reliability through advanced monitoring and troubleshooting.",
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