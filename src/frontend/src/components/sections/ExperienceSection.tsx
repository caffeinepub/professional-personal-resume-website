import { Section } from '../layout/Section';
import { resumeData } from '../../resumeData';
import { Briefcase, MapPin } from 'lucide-react';

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      title="Work Experience"
      subtitle="My professional journey and key achievements"
      className="bg-muted/30"
    >
      <div className="max-w-4xl mx-auto space-y-8">
        {resumeData.experience.map((exp, index) => (
          <div
            key={index}
            className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-medium transition-shadow"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-card-foreground mb-2">
                  {exp.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                  <span className="text-border">•</span>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              <div className="text-sm font-medium text-muted-foreground bg-muted px-4 py-2 rounded-lg whitespace-nowrap">
                {exp.period}
              </div>
            </div>
            
            {exp.description && (
              <p className="text-card-foreground mb-4">{exp.description}</p>
            )}
            
            {exp.highlights.length > 0 && (
              <ul className="space-y-2">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex gap-3 text-muted-foreground">
                    <span className="text-primary mt-1.5 shrink-0">▸</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
