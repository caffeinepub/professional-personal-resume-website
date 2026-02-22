import { ArrowRight } from 'lucide-react';
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

      <div className="max-w-3xl mx-auto w-full">
        <div className="space-y-6 animate-fade-in flex flex-col items-center text-center">
          <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-tight">
            <span className="block text-foreground">Hi, I'm...</span>
            <span className="block gradient-text">{resumeData.name}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            Computer Science
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4 justify-center">
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
      </div>
    </section>
  );
}
