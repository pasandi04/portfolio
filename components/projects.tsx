import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A responsive and user-friendly supermarket website designed home page, about page, and branch details. Built using modern web technologies to provide a seamless online shopping experience.",
    image: "/wickrama.png",
    tags: ["React", "Node.js"],
    github: "https://github.com/pasandi04/wickrama_super",
    live: "https://wickramasuper.vercel.app",
  },
  {
    title: "Mood Universe (Spotify + Mood UI)",
    description: "🌌 Mood Universe – Multilingual Mood-Based Music App Mood Universe is a responsive frontend web app that delivers personalized music and quotes based on user mood and language. Supporting Sinhala, English, Tamil, and Hindi, it offers curated Spotify playlists and dynamic visuals for an immersive emotional experience.",
    image: "/mooduni.png",
    tags: ["React", "React useState", "Tailwind CSS", "Spotify playlist embeds"],
    github: "https://github.com/username/task-manager",
    live: "https://mooduniverse.vercel.app",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects, skills, and professional experience.",
    image: "/portfolioP.png",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    github: "https://github.com/pasandi04/portfolio",
    live: "https://pasandiayodya.vercel.app",
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
