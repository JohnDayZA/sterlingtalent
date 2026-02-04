import { Users, Handshake, Heart, Building2 } from "lucide-react";

const OurApproach = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content - Philosophy */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Quality Over <span className="text-gradient">Quantity</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              We take a personalized approach to recruitment, choosing to present fewer, 
              exceptionally qualified candidates rather than overwhelming you with options. 
              Before we ever share a CV, we invest time understanding each professional's 
              unique strengths, technical capabilities, and areas for growth.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              This thoughtful matching process—built on strong, personal relationships 
              between our consultants, candidates, and clients—leads to placements that 
              truly succeed and endure.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 border border-border">
                <Users className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">Deep Candidate Understanding</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 border border-border">
                <Handshake className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">Personal Relationships</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 border border-border">
                <Heart className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">Transparent Communication</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 border border-border">
                <Building2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">Long-term Partnerships</span>
              </div>
            </div>
          </div>

          {/* Right Content - Experience */}
          <div className="p-8 lg:p-10 rounded-2xl bg-gradient-hero text-white">
            <h3 className="text-2xl font-bold mb-6">
              Built on Decades of Industry Leadership
            </h3>
            <p className="text-white/80 leading-relaxed mb-6">
              Our founding team brings experience from across the recruitment landscape—having 
              worked at, founded, built, and successfully exited over 10 recruitment companies. 
              This depth of experience has taught us one fundamental truth: <span className="text-white font-semibold">it's all about relationships.</span>
            </p>
            <p className="text-white/80 leading-relaxed mb-8">
              We believe in openness, transparency, and building partnerships that transcend 
              any single company or engagement. Our clients and contractors become part of an 
              enduring network, supported by consultants who genuinely care about their success.
            </p>
            <div className="flex items-center gap-4 pt-6 border-t border-white/20">
              <div className="text-center">
                <p className="text-3xl font-bold text-white">10+</p>
                <p className="text-sm text-white/60">Companies Founded</p>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <p className="text-3xl font-bold text-white">20+</p>
                <p className="text-sm text-white/60">Years Combined</p>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="text-sm text-white/60">Relationship Focused</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
