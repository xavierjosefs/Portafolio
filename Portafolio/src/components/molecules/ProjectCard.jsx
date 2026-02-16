export default function ProjectCard({ project }) {
  return (
    <div className="relative md:w-96 rounded-xl overflow-hidden shadow-md group cursor-pointer">

      {/* Imagen */}
      <img
        src={project.img}
        alt={project.title}
        className="w-full h-56 object-cover transition duration-500 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="
        absolute inset-0 bg-black/60 opacity-0
        group-hover:opacity-100 transition duration-500 
        flex flex-col justify-center items-center text-white p-6 text-center
      ">
        <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
        <p className="text-sm mb-4">{project.text}</p>

        <div className="flex space-x-3">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              className="px-4 py-2 bg-white text-black rounded-md font-semibold hover:bg-gray-200"
            >
              Live Demo
            </a>
          )}

          {project.code && (
            <a
              href={project.code}
              target="_blank"
              className="px-4 py-2 bg-transparent border border-white rounded-md font-semibold hover:bg-white hover:text-black"
            >
              Code
            </a>
          )}
        </div>
      </div>

    </div>
  );
}
