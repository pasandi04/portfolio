"use client"

export default function Skills() {
  const skills = [
    {
      name: "HTML",
      icon: "/assets/skills/html.png",
    },
    {
      name: "CSS",
      icon: "/assets/skills/css.svg",
    },
    {
      name: "JavaScript",
      icon: "/assets/skills/javascript.png",
    },
    {
      name: "React",
      icon: "/assets/skills/react.png",
    },
    {
      name: "Tailwind",
      icon: "/assets/skills/tailwind.png",
    },
    {
      name: "Node.js",
      icon: "/assets/skills/nodejs.png",
    },
    {
      name: "MongoDB",
      icon: "/assets/skills/mongodb.png",
    },
    {
      name: "Python",
      icon: "/assets/skills/python.png",
    },
    {
      name: "Java",
      icon: "/assets/skills/java.png.webp",
    },
    {
      name: "C",
      icon: "/assets/skills/c.png",
    },
    {
      name: "C++",
      icon: "/assets/skills/c++.png",
    },
    {
      name: "php",
      icon: "/assets/skills/php.png",
    },
    {
      name: "mysql",
      icon: "/assets/skills/mysql.svg",
    },
    {
      name: "jquery",
      icon: "/assets/skills/jquery.png",
    },
    {
      name: ".Net",
      icon: "/assets/skills/images.png",
    },
  ]

  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-card border rounded-lg p-6 flex flex-col items-center justify-center
                        transition-all duration-300 hover:scale-105 hover:shadow-lg
                        cursor-pointer"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <img
                  src={skill.icon || `/placeholder.svg?height=48&width=48&text=${skill.name}`}
                  alt={`${skill.name} logo`}
                  className="w-12 h-12 object-contain"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    e.currentTarget.src = `/placeholder.svg?height=48&width=48&text=${skill.name}`
                  }}
                />
              </div>
              <h3 className="text-center font-medium">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
