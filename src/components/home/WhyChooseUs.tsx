import { Clock, Users, ShieldCheck, Zap, HeartHandshake, Settings } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "European Time Zone Alignment",
    description: "GMT+2 overlaps perfectly with UK and European business hours for real-time collaboration.",
  },
  {
    icon: Users,
    title: "Decades of Experience",
    description: "Deep talent networks and industry expertise built over 20+ years of IT recruitment.",
  },
  {
    icon: ShieldCheck,
    title: "Thoroughly Vetted Talent",
    description: "All contractors screened for technical skills, communication, and remote-work readiness.",
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Pre-screened candidates ready to deploy within 24-72 hours of engagement.",
  },
  {
    icon: HeartHandshake,
    title: "Contractor Advocacy",
    description: "We support and represent both contractors and clients throughout the engagement.",
  },
  {
    icon: Settings,
    title: "Flexible Engagement",
    description: "Contract, contract-to-hire, and direct placement options available to suit your needs.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose <span className="text-gradient">Sterling Talent</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            We bridge the gap between world-class South African IT professionals 
            and international companies seeking exceptional talent.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
