import profileImage from "../../assets/images/personal.png";
import TextBlocks from "../atoms/TextBlocks";
import SocialLinks from "../molecules/SocialLinks";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-black min-h-screen pt-[72  px] overflow-hidden"
    >
      {/* ===== MOBILE (< lg) ===== */}
      {/* Fondo gris diagonal con transparencia */}
      <div className="absolute inset-x-0 bottom-0 h-[60vh] bg-gray-300 clip-mobile z-10 lg:hidden" />

      {/* Imagen: siempre pegada al fondo y cubriendo */}
      <div className="absolute inset-x-0 bottom-0 flex justify-center z-20 lg:hidden">
        <img
          src={profileImage}
          alt="Profile"
          className="object-cover h-[85vh] min-h-[500px]"
        />
      </div>

      {/* Texto + redes con capa oscura translúcida encima */}
      <div className="absolute inset-x-0 bottom-0 z-30 flex flex-col justify-end px-6 pb-12 lg:hidden">
        {/* capa degradada para contraste */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-[-1]" />

        {/* Bloque de texto */}
        <div className="max-w-[85%] text-white drop-shadow-md">
          <p className="text-sm font-semibold mb-1 ">Hi, I'm</p>
          <h1 className="text-3xl font-bold">Xavier Fernández</h1>
          <p className="text-xs text-black-200 font-medium mt-1 opacity-90">
            Full Stack Web Developer | Software Engineer Student
          </p>
        </div>

        {/* Íconos verticales */}
        <div className="absolute right-5 bottom-12 flex flex-col items-center gap-5">
          <SocialLinks vertical />
        </div>
      </div>

      {/* ===== DESKTOP (≥ lg) ===== */}
      <div className="hidden lg:flex lg:flex-row lg:min-h-screen">
        <div className="flex-1 bg-[#D7D7D7] clip-diagonal flex flex-col justify-center items-start px-16 z-10">
          <TextBlocks />
          <div className="my-6">
            <SocialLinks />
          </div>
        </div>

        <div className="flex-1 bg-black relative z-20 flex justify-center overflow-hidden">
          <img
            src={profileImage}
            alt="Profile"
            className="absolute bottom-0 object-contain h-screen"
          />
        </div>
      </div>
    </section>
  );
}
