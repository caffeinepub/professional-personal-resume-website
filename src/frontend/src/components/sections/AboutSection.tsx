import { Section } from '../layout/Section';
import { resumeData } from '../../resumeData';
import { MapPin, Mail, Phone } from 'lucide-react';

export function AboutSection() {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Get to know more about my background and expertise"
    >
      <div className="max-w-3xl mx-auto">
        <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-soft">
          {resumeData.summary && (
            <>
              <p className="text-lg leading-relaxed text-card-foreground">
                {resumeData.summary}
              </p>
              <div className="mt-8 pt-8 border-t border-border">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2 flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Location
                    </h3>
                    <p className="text-foreground font-medium">{resumeData.location}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2 flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email
                    </h3>
                    <p className="text-foreground font-medium">{resumeData.email}</p>
                  </div>
                  {resumeData.phone && (
                    <div>
                      <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2 flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        Phone
                      </h3>
                      <p className="text-foreground font-medium">{resumeData.phone}</p>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
          {!resumeData.summary && (
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2 flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Location
                </h3>
                <p className="text-foreground font-medium">{resumeData.location}</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2 flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email
                </h3>
                <p className="text-foreground font-medium">{resumeData.email}</p>
              </div>
              {resumeData.phone && (
                <div>
                  <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2 flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Phone
                  </h3>
                  <p className="text-foreground font-medium">{resumeData.phone}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
