import { Section } from '../layout/Section';
import { resumeData } from '../../resumeData';

export function SkillsSection() {
  return (
    <Section
      id="skills"
      title="Skills & Technologies"
      subtitle="Tools and technologies I work with"
      className="bg-muted/30"
    >
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        {resumeData.skills.map((skillCategory, index) => (
          <div
            key={index}
            className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-soft"
          >
            <h3 className="text-lg font-bold text-card-foreground mb-4">
              {skillCategory.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillCategory.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
