import { Instagram, Facebook, Linkedin, Github } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: "Instagram",
      icon: <Instagram className="h-5 w-5" />,
      url: "https://www.instagram.com/ayodyaaa/profilecard/?igsh=MWt6aGs3MjF6emJ4Yg%3D%3D",
    },
    {
      name: "Facebook",
      icon: <Facebook className="h-5 w-5" />,
      url: "https://www.facebook.com/people/Pasandi-Ayodya/pfbid0nPJigUniDjjGrLYkjgMTLEKMFqCFC41gVzL3n9mfaimP8hkQxM96yhe9A6RZrqkPl/?mibextid=wwXIfr&rdid=ny4lmH0fMiw97ftR&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FS81kKscYQtBh8v3Y%2F%3Fmibextid%3DwwXIfr",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://www.linkedin.com/in/pasandi-ayodya-85750132b/",
    },
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/pasandi04",
    },
  ]

  return (
    <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-6">
            <p className="font-medium text-xl text-white">Pasandi Ayodya</p>
          </div>

          <div className="flex space-x-5 mb-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="hover:text-white transition-all duration-300 hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm">© {currentYear} Pasandi Ayodya. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
