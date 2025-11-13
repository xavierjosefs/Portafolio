export default function Button({ children, href, className = "", target, rel }) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className=""
    >
      {children}
    </a>
  );
}
