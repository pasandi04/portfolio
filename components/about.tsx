import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Heart } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>

        {/* Profile Image Section */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <div
              className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-xl border-4 border-primary/10
                          transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src="/profilePic3.jpeg?height=300&width=300"
                alt="Pasandi Ayodya"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 bg-primary text-primary-foreground rounded-full p-3 shadow-lg">
              <GraduationCap className="h-6 w-6" />
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h3 className="text-2xl font-semibold mb-4">Software Engineering Student</h3>
          <p className="text-lg mb-6">
            Hello! I'm Pasandi, a passionate Data Science and Software Engineering student with a keen interest in web development and
            user interface design. I enjoy creating elegant solutions to complex problems and am constantly learning new
            technologies to improve my skills.
          </p>
          <p className="text-muted-foreground">
            Currently pursuing my degree in Data Science and Software Engineering, I'm focused on building modern web applications and
            exploring the latest trends in technology.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <GraduationCap className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Education</h3>
                <p className="text-muted-foreground">
                  BSc in Data Science and Software Engineering
                  <br />
                  Sri Lanka Institue of Technology (SLIIT)
                  <br />
                  2024 - Present
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Heart className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Interests</h3>
                <p className="text-muted-foreground">
                  Web Development
                  <br />
                  UI/UX Design
                  <br />
                  Machine Learning
                  <br />
                  Quality Assuarance 
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
