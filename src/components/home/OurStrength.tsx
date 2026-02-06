import { Award, Network, Target, Rocket, HeadphonesIcon } from "lucide-react";

const strengths = [
  {
    icon: Award,
    title: "20+ Years of Expertise",
    description: "Two decades of IT contractor recruitment experience in international markets.",
  },
  {
    icon: Network,
    title: "Direct Relationships",
    description: "Personal connections with experienced professionals across multiple specializations.",
  },
  {
    icon: Target,
    title: "Top 3% Talent",
    description: "Expert vetting process ensures we represent only the highest caliber contractors.",
  },
  {
    icon: Rocket,
    title: "Rapid Deployment",
    description: "We try to get your team member onboarded and productive within days, not weeks.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "Ongoing assistance throughout the entire engagement lifecycle.",
  },
];

const OurStrengths = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Our <span className="text-gradient">Strengths</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Sterling Talent has built its reputation on excellence, reliability, and genuine 
              partnerships. We understand both sides of the hiring equation and work to create 
              successful, long-lasting placements.
            </p>
            <div className="space-y-6">
              {strengths.map((strength, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <strength.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {strength.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {strength.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            <div className="p-6 lg:p-8 rounded-2xl bg-card border border-border text-center">
              <p className="text-4xl lg:text-5xl font-bold text-gradient mb-2">20+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="p-6 lg:p-8 rounded-2xl bg-card border border-border text-center">
              <p className="text-4xl lg:text-5xl font-bold text-gradient mb-2">500+</p>
              <p className="text-sm text-muted-foreground">Placements Made</p>
            </div>
            <div className="p-6 lg:p-8 rounded-2xl bg-card border border-border text-center">
              <p className="text-4xl lg:text-5xl font-bold text-gradient mb-2">98%</p>
              <p className="text-sm text-muted-foreground">Client Satisfaction</p>
            </div>
            <div className="p-6 lg:p-8 rounded-2xl bg-card border border-border text-center">
              <p className="text-4xl lg:text-5xl font-bold text-gradient mb-2">Top 3%</p>
              <p className="text-sm text-muted-foreground">Talent Selected</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStrengths;
