import SkillCard from "../molecules/SkillCard";
import Marquee from "react-fast-marquee";
import {SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiExpress, SiCplusplus , SiPython , SiHtml5 , SiCss3 , SiDotnet , SiNextdotjs , SiGithub, SiMysql , SiPostgresql, SiGit, SiTailwindcss} from "react-icons/si";

export default function SkillsMarquee() {
    
    const skills = [
    { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
    { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
    { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-[#3C873A]" },
    { name: "Express", icon: SiExpress, color: "text-[#4B5563]" }, // gris
    { name: "C++", icon: SiCplusplus, color: "text-[#00599C]" },
    { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
    { name: "HTML5", icon: SiHtml5, color: "text-[#E34F26]" },
    { name: "CSS3", icon: SiCss3, color: "text-[#1572B6]" },
    { name: ".NET", icon: SiDotnet, color: "text-[#512BD4]" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-black" },
    { name: "GitHub", icon: SiGithub, color: "text-black" },
    { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#336791]" },
    { name: "Git", icon: SiGit, color: "text-[#F05032]" },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "text-[#38BDF8]" },
    ];

    console.log("SKILLS CHECK:", skills);

    
    return (

        <section className="bg-[#D7D7D7]">
            <div className="flex justify-center items-center pt-20">
                <h1 className="inline-block px-11 py-4 border-8 border-black font-montserrat text-3xl font-semibold text-center">
                    SKILLS & TECHNOLOGIES
                </h1>
            </div>
            

            <Marquee speed={100} gradient={false} className="bg-[#D7D7D7] py-12">
                <div className="flex space-x-8">
                    {skills.map(s => {
                    return <SkillCard key={s.name} skill={s} className={s.color}/>;
                    })}
                </div>
            </Marquee>
       </section>
       
    );
}
