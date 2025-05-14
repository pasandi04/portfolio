"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon, MenuIcon, XIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { scrollToSection } from "@/lib/smooth-scroll"

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const sections = navItems.map((item) => item.id)
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (id: string) => {
    scrollToSection(id)
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="font-bold text-xl">
          <span className="text-primary">Pasandi</span> Ayodya
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === item.id ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </Button>
          )}

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <nav className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.id ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
