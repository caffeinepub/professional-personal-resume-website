import { ArrowRight, MapPin } from 'lucide-react';
import { resumeData } from '../../resumeData';

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              {resumeData.location}
            </div>
            
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-tight">
              Hi, I'm{' '}
              <span className="gradient-text">
                {resumeData.name}
              </span>
            </h1>
            
            {resumeData.headline && (
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                {resumeData.headline}
              </p>
            )}
            
            {resumeData.summary && (
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                {resumeData.summary}
              </p>
            )}
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={scrollToContact}
                className="group px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all shadow-soft hover:shadow-medium flex items-center gap-2"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <img
                src="/assets/generated/headshot-illustration.dim_800x800.png"
                alt={resumeData.name}
                className="relative w-full h-auto rounded-3xl shadow-medium"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
