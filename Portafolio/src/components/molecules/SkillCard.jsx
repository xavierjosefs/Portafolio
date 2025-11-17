export default function SkillCard({ skill }) {
  const IconComponent = skill.icon;

  return (
    <div className="flex flex-col items-center justify-center space-y-2 p-4 ">
      <IconComponent
        className={`text-6xl ${skill.color ?? "text-[#333333]"}`}
      />
      <span className="text-lg font-medium font-sans">{skill.name}</span>
    </div>
  );
}
