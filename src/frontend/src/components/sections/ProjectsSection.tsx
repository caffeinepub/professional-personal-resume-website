import { Section } from '../layout/Section';
import { resumeData } from '../../resumeData';
import { ExternalLink, Code2 } from 'lucide-react';

export function ProjectsSection() {
  if (resumeData.projects.length === 0) {
    return null;
  }

  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="Some of my recent work and side projects"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resumeData.projects.map((project, index) => (
          <div
            key={index}
            className="bg-card border border-border rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Code2 className="h-5 w-5 text-primary" />
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                  aria-label="View project"
                >
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              )}
            </div>
            
            <h3 className="text-lg font-bold text-card-foreground mb-2">
              {project.title}
            </h3>
            
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-muted text-muted-foreground rounded-md text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
