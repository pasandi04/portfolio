import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with product listings, shopping cart, and payment integration.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/username/ecommerce",
    live: "https://ecommerce-demo.com",
  },
  {
    title: "Task Management App",
    description: "A productivity app for managing tasks, projects, and deadlines with team collaboration features.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React", "Firebase", "Tailwind CSS", "Redux"],
    github: "https://github.com/username/task-manager",
    live: "https://task-manager-demo.com",
  },
  {
    title: "Weather Dashboard",
    description: "A weather application that displays current conditions and forecasts for locations worldwide.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["JavaScript", "OpenWeather API", "Chart.js", "CSS"],
    github: "https://github.com/username/weather-app",
    live: "https://weather-app-demo.com",
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media platforms with data visualization and reporting features.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React", "D3.js", "Express", "PostgreSQL"],
    github: "https://github.com/username/social-dashboard",
    live: "https://social-dashboard-demo.com",
  },
  {
    title: "Recipe Finder",
    description: "A web application for discovering recipes based on available ingredients and dietary preferences.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React", "Node.js", "MongoDB", "Spoonacular API"],
    github: "https://github.com/username/recipe-finder",
    live: "https://recipe-finder-demo.com",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects, skills, and professional experience.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    github: "https://github.com/username/portfolio",
    live: "https://portfolio-demo.com",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden flex flex-col h-full">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>

              <CardHeader className="pb-2">
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </CardHeader>

              <CardContent className="pb-2 flex-grow">
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="pt-2">
                <div className="flex gap-3 w-full">
                  <Button variant="outline" size="sm" className="flex-1 gap-2" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1 gap-2" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
