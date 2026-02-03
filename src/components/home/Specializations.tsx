import { 
  Cloud, 
  Code, 
  Database, 
  Shield, 
  Server, 
  GitBranch, 
  Layers, 
  Users 
} from "lucide-react";

const specializations = [
  { icon: GitBranch, name: "DevOps Engineers" },
  { icon: Cloud, name: "Cloud Solutions Architects" },
  { icon: Code, name: "Senior Software Engineers" },
  { icon: Layers, name: "Full-Stack Developers" },
  { icon: Server, name: "Network Administrators" },
  { icon: Shield, name: "Cybersecurity Specialists" },
  { icon: Users, name: "IT Project Managers" },
  { icon: Database, name: "Database Administrators" },
];

const Specializations = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured <span className="text-gradient">Specializations</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We connect you with experienced professionals across all major IT disciplines
          </p>
        </div>

        {/* Specializations Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {specializations.map((spec, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <spec.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-semibold text-foreground text-sm lg:text-base">
                {spec.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specializations;
