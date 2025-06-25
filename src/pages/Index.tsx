
import { ThemeToggle } from "@/components/ThemeToggle";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { EducationSection } from "@/components/EducationSection";
import { ContactSection } from "@/components/ContactSection";
import { ScrollToTop } from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ThemeToggle />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      <ScrollToTop />
      
      <footer className="py-8 px-4 bg-muted/40 text-center">
        <p className="text-muted-foreground">
          © 2024 Salah Al-maghrby. Built with React & Tailwind CSS.
        </p>
      </footer>
    </div>
  );
};

export default Index;
