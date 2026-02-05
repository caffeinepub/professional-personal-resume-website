import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { EducationSection } from './components/sections/EducationSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ContactSection } from './components/sections/ContactSection';
import { TopNav } from './components/layout/TopNav';
import { Footer } from './components/layout/Footer';
import { resumeData } from './resumeData';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        {resumeData.projects.length > 0 && <ProjectsSection />}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
