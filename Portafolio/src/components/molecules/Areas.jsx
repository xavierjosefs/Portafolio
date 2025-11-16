import AreaCard from "../atoms/AreaCard"
import diseno from "../../assets/images/diseno.png"
import dev from "../../assets/images/dev.png"
import maintence from "../../assets/images/maintence.png"


export default function Areas() {
  return (
    <div className="pt-10 md:pt-16">
      <div className="flex flex-col justify-center items-center lg:flex-row lg:gap-32">
        <AreaCard title="DESIGN" img={diseno} text="I design clean, modern and user-focused interfaces that balance aesthetics and functionality."/>
        <AreaCard title="DEVELOPMENT" img={dev} text="I build fast, scalable applications using Node.js and Express, focused on clean architecture and reliable API integrations."/>
      </div>

      <div className="flex justify-center md:pt-10">
        <AreaCard title="MAINTENANCE" img={maintence} text="I maintain applications with updates, security patches, and performance improvements so your systems stay stable and reliable over time."/>
      </div>
    </div>
    
    
      
  )
}
