

export default function Slogan() {
  return (
    <section id="slogan" className="bg-[#1D1D1D] text-white ">
        <div className="ml-20 pt-12 pb-9">
            <h1 className="font-montserrat text-3xl font-bold tracking-widest mb-7">My Work Philosophy</h1>
            Transforming ideas into scalable, high-quality web applications.

            <p className="mt-4 text-white leading-relaxed font-sans"> I believe in building clean, modern, and human-centered solutions. My approach combines minimalist design, solid performance, and a smooth user experience. </p> 
            <ul className="mt-6 space-y-2 text-white font-sans"> 
                <li>✔ Clean, organized, and maintainable code</li> 
                <li>✔ Modern and fully responsive interfaces</li> 
                <li>✔ Strong focus on user experience</li> 
                <li>✔ Continuous improvement and attention to detail</li> 
            </ul> 
            <a href="#projects" className="font-sans inline-block mt-8 border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition duration-700"> See my projects → </a>
        </div>
    </section>
  )
}

