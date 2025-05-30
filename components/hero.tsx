"use client"

import { Button } from "@/components/ui/button"
import { TypeAnimation } from "react-type-animation"
import { ArrowDown, Download, Mail } from "lucide-react"
import { scrollToSection } from "@/lib/smooth-scroll"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Pasandi Ayodya</h1>

          <div className="text-xl md:text-2xl font-medium text-muted-foreground mb-8 h-12">
            <TypeAnimation
              sequence={["Software Engineering ", 1000, "Frontend Developer", 1000, "UI/UX Enthusiast", 1000]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
            />
          </div>

          <p className="text-lg max-w-2xl mb-8">
            Building modern web applications with a focus on user experience and clean code. Passionate about creating
            intuitive interfaces and solving complex problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4"> 
          <a href="/GHPAyodyaResume.pdf" download className="w-full sm:w-auto">
            <Button className="gap-2">
              <Download size={18} />
              Download CV
            </Button>
            </a>
            
            <Button variant="outline" className="gap-2" onClick={() => scrollToSection("contact")}>
              <Mail size={18} />
              Contact Me
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute bottom-8 animate-bounce"
            onClick={() => scrollToSection("about")}
            aria-label="Scroll down"
          >
            <ArrowDown size={24} />
          </Button>
        </div>
      </div>
    </section>
  )
}
