import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  FileText, 
  UserCheck, 
  Users, 
  ClipboardCheck,
  MessageCircle,
  ShieldCheck,
  Globe,
  Heart,
  Briefcase,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: FileText,
    title: "Contract Staffing",
    description: "Temporary IT professionals for fixed-duration projects",
    features: [
      "Experienced talent available to start within days",
      "Flexible workforce scaling - expand or contract as needed",
      "No benefits administration burden on your side",
      "Competitive contractor compensation ensures satisfaction and stability",
    ],
  },
  {
    icon: UserCheck,
    title: "Contract-to-Hire",
    description: "Trial period to evaluate skills, work habits, and cultural fit",
    features: [
      "No long-term commitment upfront",
      "De-risks permanent hiring decisions",
      "Seamless transition to full-time employment if needed",
      "Evaluate real performance, not just interview skills",
    ],
  },
  {
    icon: Users,
    title: "Direct Placement",
    description: "Permanent hires for your critical positions",
    features: [
      "One-time fee structure - no ongoing percentages",
      "Our vetting process identifies top-tier talent",
      "You retain control; contractors work directly with your team",
      "Long-term team building support",
    ],
  },
];

const vettingProcess = [
  {
    icon: ClipboardCheck,
    title: "Technical Screening",
    description: "Rigorous technical skill assessment and coding evaluation",
  },
  {
    icon: MessageCircle,
    title: "Communication Evaluation",
    description: "Remote-work readiness and English proficiency verification",
  },
  {
    icon: ShieldCheck,
    title: "Background Verification",
    description: "Reference checks and professional background screening",
  },
  {
    icon: Globe,
    title: "Availability Confirmation",
    description: "Time zone compatibility and schedule availability check",
  },
];

const whySouthAfrica = [
  {
    icon: MessageCircle,
    title: "English Primary Language",
    description: "Crystal clear communication with no language barriers",
  },
  {
    icon: Briefcase,
    title: "Professional Business Culture",
    description: "Aligned with European and US professional standards",
  },
  {
    icon: Star,
    title: "Exceptional Value",
    description: "Cost-effective talent without compromising quality",
  },
  {
    icon: Heart,
    title: "Strong Work Ethic",
    description: "Loyalty, dedication, and low turnover rates",
  },
  {
    icon: Globe,
    title: "Diverse Experience",
    description: "Broad exposure across industries and technologies",
  },
  {
    icon: Users,
    title: "Career Passion",
    description: "Enthusiasm for international career opportunities",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-[100px]" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-[120px]" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                IT Staffing Solutions for{" "}
                <span className="text-gradient">International Companies</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/70">
                Whether you need specialized expertise for a short-term project or 
                long-term team expansion, we connect you with South Africa's most 
                experienced IT professionals.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* Services Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Service <span className="text-gradient">Options</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                No middleman after placement — contractors work directly with your team
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6">
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vetting Process Section */}
        <section className="py-20 lg:py-28 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Our <span className="text-gradient">Vetting Process</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Every contractor goes through our comprehensive screening to ensure 
                you receive only the highest quality talent
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {vettingProcess.map((step, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-card border border-border"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why South African Talent */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Why <span className="text-gradient">South African</span> Talent?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  South Africa offers a unique combination of skills, culture, and 
                  value that makes it an ideal source of IT talent for international companies.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {whySouthAfrica.map((item, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-hero text-white">
                <Globe className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">Global Time Zone Advantage</h3>
                <p className="text-white/80 leading-relaxed">
                  South Africa's GMT+2 position offers unique flexibility—seamless overlap 
                  with European business hours, productive morning collaboration with the 
                  Americas, and afternoon alignment with Asia-Pacific markets.
                </p>
                <div className="mt-6 p-4 bg-white/10 rounded-lg">
                  <p className="font-semibold">Working hours overlap with:</p>
                  <ul className="mt-2 space-y-1 text-sm text-white/70">
                    <li>🇬🇧 UK & Europe: Full business day alignment</li>
                    <li>🇺🇸 US East Coast: Morning overlap (6+ hours)</li>
                    <li>🇭🇰 Hong Kong: Afternoon collaboration window</li>
                    <li>🇯🇵 Japan: Late afternoon alignment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Ready to Build Your Dream Team?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss your requirements and find the perfect IT professionals 
                for your projects.
              </p>
              <Link to="/contractors#contact">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-button px-8"
                >
                  Contact Us Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
