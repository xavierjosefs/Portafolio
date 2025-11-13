export default function NavLinks({ direction = "row", onItemClick }) {
  const links = [
    { label: "About me", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
  ];

  const baseUl =
    direction === "col"
      ? "flex flex-col items-center gap-6 px-6 py-6"
      : "flex items-center gap-8 px-2 py-2 my-2 mr-10 xl:mr-28 xl:gap-16";

  return (
    <ul className={baseUl}>
      {links.map((l) => (
        <li key={l.href}>
          <a
            href={l.href}
            className="block py-2"
            onClick={onItemClick}
          >
            {l.label}
          </a>
        </li>
      ))}

      <li>
        <a
          href="#contact"
          className="border border-white bg-white text-black rounded-full px-3 py-1"
          onClick={onItemClick}
        >
          Contact Me
        </a>
      </li>
    </ul>
  );
}
