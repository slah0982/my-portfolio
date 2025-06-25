
const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["JavaScript", "PHP", "Python", "Java"],
    color: "bg-blue-500"
  },
  {
    title: "Web Technologies",
    skills: ["HTML", "CSS", "React.js", "Next.js", "Node.js", "Express.js"],
    color: "bg-green-500"
  },
  {
    title: "Mobile Development",
    skills: ["React Native", "Flutter"],
    color: "bg-purple-500"
  },
  {
    title: "Desktop Development",
    skills: ["Electron.js"],
    color: "bg-orange-500"
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
    color: "bg-red-500"
  },
  {
    title: "Tools & Others",
    skills: ["Git", "GitHub", "VS Code", "REST APIs"],
    color: "bg-gray-500"
  }
];

export const SkillsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className={`w-4 h-4 rounded-full ${category.color}`} />
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-2 bg-muted rounded-lg text-sm font-medium hover:bg-muted/80 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
