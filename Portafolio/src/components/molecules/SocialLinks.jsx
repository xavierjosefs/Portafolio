import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import IconButton from "../atoms/IconButtons";

export default function SocialLinks({ vertical = false }) {
  return (
    <div className={`flex ${vertical ? "flex-col gap-5" : "flex-row gap-5"}`}>
      <IconButton
        icon={FaEnvelope}
        href="mailto:xavierfernandezsantana@gmail.com"
        aria-label="Email"
      />
      <IconButton
        icon={FaGithub}
        href="https://github.com/xavierjosefs"
        aria-label="GitHub"
      />
      <IconButton
        icon={FaLinkedin}
        href="https://www.linkedin.com/in/xavier-jos%C3%A9-fern%C3%A1ndez-santana-47418a356/"
        aria-label="LinkedIn"
      />
    </div>
  );
}
