// Projects.jsx
import ProjectCard from "../molecules/ProjectCard";
import fastNotes from "../../assets/images/fast-notes.jpg";
import permicloud from "../../assets/images/permicloud.png";


export default function Projects() {
  const projects = [
        {
            title: "QuickNote",
            text: "QuickNote is a fast and reliable cloud-based note app with secure login, OTP recovery, instant syncing, and a clean, responsive UI. Built with React, Node.js, and Supabase for a smooth, modern experience.",
            img: fastNotes,
            demo: "https://fast-notes-psi.vercel.app/",
            code: "https://github.com/xavierjosefs/NotePad"
        },
        {
          title: "Permicloud",
          text: "Full-stack web application to digitize and automate the request, review, and approval workflow for controlled products certificates and permits, featuring role-based access control, full traceability, and document management.",
          img: permicloud, 
          demo: "",
          code: "https://github.com/xavierjosefs/sgc-productos-controlados"
        }
        
    ];


  return (
    <section id="projects" className="bg-[#D7D7D7] py-16">
      <div className="text-center mb-10">
        <h1 className="inline-block text-center border-4 border-black md:border-8 px-6 py-3 text-2xl md:text-3xl font-montserrat font-semibold">
          PROJECTS
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}
