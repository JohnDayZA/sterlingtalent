import { Link } from "react-router-dom";
import { ArrowRight, Clock, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8">
            <Clock className="h-4 w-4" />
            <span className="text-sm font-medium">GMT+2 | Perfect European Time Zone Alignment</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Premium IT Contractors from{" "}
            <span className="text-gradient">South Africa</span>, Ready for Europe
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Access experienced, vetted IT professionals aligned with your time zones. 
            Same expertise as US/UK talent, seamless European collaboration.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/contractors#contact">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-button w-full sm:w-auto px-8"
              >
                Find Your Contractor
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10 w-full sm:w-auto px-8"
              >
                Our Services
              </Button>
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <Shield className="h-8 w-8 text-primary" />
              <div className="text-left">
                <p className="text-2xl font-bold text-white">Top 3%</p>
                <p className="text-sm text-white/60">Vetted Talent</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <Zap className="h-8 w-8 text-secondary" />
              <div className="text-left">
                <p className="text-2xl font-bold text-white">24-72hrs</p>
                <p className="text-sm text-white/60">Deployment</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <Clock className="h-8 w-8 text-accent" />
              <div className="text-left">
                <p className="text-2xl font-bold text-white">20+ Years</p>
                <p className="text-sm text-white/60">Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
