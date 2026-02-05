import { useState } from 'react';
import { Section } from '../layout/Section';
import { resumeData } from '../../resumeData';
import { Mail, Check, Copy, Phone } from 'lucide-react';
import { SiLinkedin, SiGithub, SiX } from 'react-icons/si';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  linkedin: SiLinkedin,
  github: SiGithub,
  twitter: SiX
};

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(resumeData.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <Section
      id="contact"
      title="Get in Touch"
      subtitle="Feel free to reach out for collaborations or just a friendly chat"
      className="bg-muted/30"
    >
      <div className="max-w-2xl mx-auto">
        <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-soft">
          {/* Email */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
              Email Address
            </label>
            <div className="flex items-center gap-3">
              <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-muted rounded-lg">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span className="text-foreground font-medium">{resumeData.email}</span>
              </div>
              <button
                onClick={copyEmail}
                className="p-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
                aria-label="Copy email"
              >
                {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
              </button>
            </div>
            {copied && (
              <p className="text-sm text-primary mt-2 font-medium">
                Email copied to clipboard!
              </p>
            )}
          </div>

          {/* Phone */}
          {resumeData.phone && (
            <div className="mb-8">
              <label className="block text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                Phone Number
              </label>
              <div className="flex items-center gap-3 px-4 py-3 bg-muted rounded-lg">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <span className="text-foreground font-medium">{resumeData.phone}</span>
              </div>
            </div>
          )}

          {/* Social Links */}
          {resumeData.contactLinks.length > 0 && (
            <div>
              <label className="block text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                Connect With Me
              </label>
              <div className="flex flex-wrap gap-3">
                {resumeData.contactLinks.map((link, index) => {
                  const Icon = iconMap[link.icon];
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-3 bg-muted hover:bg-primary/10 text-foreground hover:text-primary rounded-lg transition-colors font-medium"
                    >
                      {Icon && <Icon className="h-5 w-5" />}
                      <span>{link.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
