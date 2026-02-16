export default function SkillCard({ skill }) {
  const IconComponent = skill.icon;

  return (
    <div className="flex flex-col items-center justify-center space-y-2 p-3 sm:p-4 ">
      <IconComponent
        className={`text-4xl sm:text-5xl md:text-6xl ${skill.color ?? "text-[#333333]"}`}
      />
      <span className="text-sm md:text-xl font-light font-montserrat text-center">
        {skill.name}
      </span>
    </div>
  );
}
