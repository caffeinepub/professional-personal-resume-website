import { Section } from '../layout/Section';
import { resumeData } from '../../resumeData';
import { GraduationCap, MapPin } from 'lucide-react';

export function EducationSection() {
  return (
    <Section
      id="education"
      title="Education"
      subtitle="Academic background and certifications"
    >
      <div className="max-w-4xl mx-auto space-y-6">
        {resumeData.education.map((edu, index) => (
          <div
            key={index}
            className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-medium transition-shadow"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-muted-foreground font-medium">
                      {edu.institution}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <MapPin className="h-4 w-4" />
                  <span>{edu.location}</span>
                </div>
                
                {edu.details && (
                  <p className="text-muted-foreground">{edu.details}</p>
                )}
              </div>
              
              <div className="text-sm font-medium text-muted-foreground bg-muted px-4 py-2 rounded-lg whitespace-nowrap self-start">
                {edu.period}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
