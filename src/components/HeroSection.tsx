
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Salah Al-maghrby
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
            Software Developer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Highly skilled and motivated software engineer with 4+ years of experience 
            in modern web and app development. Passionate about building scalable, 
            user-friendly applications.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild variant="outline" size="lg">
            <a href="https://github.com/slah0982" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="https://linkedin.com/in/صلاح-خيري-95899b324" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="mailto:slah0982@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Email
            </a>
          </Button>
          <Button asChild  size="lg">
            <a target="_blank" href="https://docs.google.com/document/d/1RZkiY2Z_MixBSZtib2X500KlCryxygU_BnXJ0M_rGRA/">
            <Download className="mr-2 h-5 w-5" />
            Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
