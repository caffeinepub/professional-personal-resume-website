import { Section } from '../layout/Section';
import { resumeData } from '../../resumeData';

export function SkillsSection() {
  const skills = resumeData.skills;

  // Special handling for single category with multiple skills
  if (skills.length === 1 && skills[0].skills.length > 4) {
    const singleCategory = skills[0];
    const leftSkills = [
      "Microsoft Excel & Spreadsheets",
      "Microsoft Office Suite",
      "Basic SQL (coursework exposure)",
      "Data organization and accuracy"
    ];
    const rightSkills = singleCategory.skills.filter(skill => !leftSkills.includes(skill));

    return (
      <Section
        id="skills"
        title="Skills & Technologies"
        subtitle="Tools and technologies I work with"
        className="bg-muted/30"
      >
        <div className="max-w-4xl mx-auto">
          {/* Single large card */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-soft">
            {/* Centered title in the middle */}
            <div className="flex items-center justify-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-card-foreground">
                Technical & Professional Skills
              </h3>
            </div>

            {/* Two subsections at the bottom */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left subsection - first 4 specified skills */}
              <div>
                <div className="flex flex-wrap gap-2">
                  {leftSkills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right subsection - remaining skills */}
              <div>
                <div className="flex flex-wrap gap-2">
                  {rightSkills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    );
  }

  // Default handling for multiple categories
  const leftColumnSkills = skills.slice(0, 4);
  const rightColumnSkills = skills.slice(4);

  return (
    <Section
      id="skills"
      title="Skills & Technologies"
      subtitle="Tools and technologies I work with"
      className="bg-muted/30"
    >
      <div className="max-w-4xl mx-auto">
        {skills.length > 4 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left column - first 4 categories */}
            <div className="flex flex-col gap-6">
              {leftColumnSkills.map((skillCategory, index) => (
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

            {/* Right column - remaining categories */}
            <div className="flex flex-col gap-6">
              {rightColumnSkills.map((skillCategory, index) => (
                <div
                  key={index + 4}
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
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skillCategory, index) => (
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
        )}
      </div>
    </Section>
  );
}
