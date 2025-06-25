
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Booking Website",
    description: "Booking platform like Booking.com website.",
    technologies: ["React.js", "Tailwind.css"],
    link: "https://simple-booking-platform.netlify.app",
    github: "https://github.com/slah0982/Booking-platform",
    gradient: "from-blue-500 to-purple-600"
  },
  {
    title: "E-commerce Platform",
    description: "Arabic-enabled store for selling electronics with full admin and bilingual support.",
    technologies: ["React", "Vite", "Node.js", "Express", "SQLite"],
    link: "https://stupendous-otter-6f45f1.netlify.app",
    github: null,
    gradient: "from-green-500 to-teal-600"
  },
  {
    title: "POS System",
    description: "Modular retail POS app with inventory and sales tracking.",
    technologies: ["React", "TypeScript", "IndexedDB"],
    link: "https://ar-pos-system.netlify.app",
    github: null,
    gradient: "from-orange-500 to-red-600"
  },
  {
    title: "QR Code Generator",
    description: "Tool for creating stylish, branded QR codes.",
    technologies: ["React", "qrcode.react", "HTML Canvas", "CSS"],
    link: "https://s-qr-code-generator.netlify.app",
    github: "https://github.com/slah0982/QR-Code-Generator",
    gradient: "from-purple-500 to-pink-600"
  }
];

export const ProjectsSection = () => {
  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className={`h-2 w-full bg-gradient-to-r ${project.gradient} rounded-t-lg -mt-6 -mx-6 mb-4`} />
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button asChild className="flex-1">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </a>
                  </Button>
                  {project.github && (
                    <Button asChild variant="outline" className="flex-1">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
