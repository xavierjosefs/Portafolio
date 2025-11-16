import Areas from "../molecules/Areas";

export default function AboutMe() {
  return (
    <section id="about-me" className="bg-[#D7D7D7] pt-20">
        <div className="flex justify-center">
            <h1 className="inline-block px-11 py-4 border-8 border-black font-montserrat text-3xl font-semibold">ABOUT ME</h1>
        </div>
        <div className="space-y-4 leading-relaxed pt-12 max-w-5xl mx-auto">
            <p>
                I’m Xavier Fernández, a Software Engineering student and Full-Stack Developer with a stronger focus on backend development using Node.js and Express. I enjoy building clean, efficient, and scalable server-side solutions that integrate seamlessly with modern front-end interfaces.
            </p>

            <p>
                I’m passionate about understanding how systems work, structuring well-organized architectures, and writing maintainable code that grows safely over time. On the front end, I combine minimalistic design principles with responsive and accessible UI development to deliver intuitive user experiences.
            </p>

            <p>
                I approach every project with precision, clarity, and a commitment to continuous improvement always aiming for clean code, solid performance, and solutions that genuinely help people. As I continue to grow, I’m focused on deepening my backend expertise, exploring modern technologies, and building meaningful applications that reflect quality and purpose.
            </p>
        </div>


        <Areas />

    </section>
  )
}

