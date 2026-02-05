import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, subtitle, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`section-container ${className}`}>
      {(title || subtitle) && (
        <div className="mb-12 text-center">
          {title && (
            <h2 className="section-heading inline-block">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-lg text-muted-foreground mt-3 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
