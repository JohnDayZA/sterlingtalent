import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  ArrowRight, 
  Globe, 
  Heart, 
  DollarSign, 
  HeadphonesIcon,
  Briefcase,
  Send,
  CheckCircle,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";

const contractorBenefits = [
  {
    icon: Globe,
    title: "Premium International Opportunities",
    description: "Access to established international companies with exciting projects",
  },
  {
    icon: Briefcase,
    title: "We Handle the Hard Work",
    description: "No cold applications or resume spam — we connect you directly",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "Advocacy and assistance throughout your career journey",
  },
  {
    icon: DollarSign,
    title: "Competitive Compensation",
    description: "International rates in USD/EUR while working from South Africa",
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "Work remotely from South Africa for global clients",
  },
  {
    icon: CheckCircle,
    title: "No Upfront Fees",
    description: "We're paid by our clients when you succeed — never by you",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Submit Your Profile",
    description: "Share your skills, experience, and career goals with us",
  },
  {
    step: "02",
    title: "Get Matched",
    description: "We match you with opportunities aligned with your expertise",
  },
  {
    step: "03",
    title: "Interview Directly",
    description: "Meet with clients directly while we handle the logistics",
  },
  {
    step: "04",
    title: "Get Placed",
    description: "Start working on projects you're passionate about",
  },
  {
    step: "05",
    title: "Ongoing Support",
    description: "We support you throughout your engagement — you're never alone",
  },
];

const Contractors = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyOrSpecialization: "",
    message: "",
    inquiryType: "contractor",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (location.hash === "#contact") {
      setTimeout(() => {
        const element = document.getElementById("contact");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Thank you for your inquiry! We'll be in touch soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      companyOrSpecialization: "",
      message: "",
      inquiryType: "contractor",
    });
    setIsSubmitting(false);
  };

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
                Advance Your Career with{" "}
                <span className="text-gradient">International Opportunities</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/70">
                Join Sterling Talent and work with established international companies 
                while enjoying the freedom of remote work from South Africa.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* Benefits Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Why Work With <span className="text-gradient">Us</span>?
              </h2>
              <p className="text-lg text-muted-foreground">
                We're committed to your success and provide the support you need to thrive
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {contractorBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 lg:py-28 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                How It <span className="text-gradient">Works</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Our streamlined process gets you matched with opportunities quickly
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {howItWorks.map((step, index) => (
                  <div
                    key={index}
                    className="flex gap-6 items-start p-6 rounded-xl bg-card border border-border"
                  >
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center">
                      <span className="text-white font-bold">{step.step}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-1">
                        {step.title}
                      </h4>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 lg:py-28 bg-background scroll-mt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left Side - Contact Info */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Get in <span className="text-gradient">Touch</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Whether you're a company looking to hire or a contractor seeking 
                  opportunities, we'd love to hear from you.
                </p>

                <div className="space-y-6 mb-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a 
                        href="mailto:info@sterlingtalent.io" 
                        className="font-medium text-foreground hover:text-primary transition-colors"
                      >
                        info@sterlingtalent.io
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">WhatsApp</p>
                      <p className="font-medium text-foreground">Available for inquiries</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium text-foreground">South Africa (GMT+2)</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-muted/50 border border-border">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">For Contractors:</strong> Looking to 
                    join our network? Submit your profile and we'll match you with exciting 
                    international opportunities.
                  </p>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div className="p-8 rounded-2xl bg-card border border-border shadow-card">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="mt-1"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="mt-1"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="mt-1"
                      placeholder="+27 ..."
                    />
                  </div>

                  <div>
                    <Label>I am... *</Label>
                    <RadioGroup
                      value={formData.inquiryType}
                      onValueChange={(value) =>
                        setFormData({ ...formData, inquiryType: value })
                      }
                      className="mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="client" id="client" />
                        <Label htmlFor="client" className="font-normal cursor-pointer">
                          Looking to hire IT talent
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="contractor" id="contractor" />
                        <Label htmlFor="contractor" className="font-normal cursor-pointer">
                          A contractor seeking opportunities
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="companyOrSpecialization">
                      {formData.inquiryType === "client"
                        ? "Company / Role"
                        : "Specialization"}
                    </Label>
                    <Input
                      id="companyOrSpecialization"
                      value={formData.companyOrSpecialization}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          companyOrSpecialization: e.target.value,
                        })
                      }
                      className="mt-1"
                      placeholder={
                        formData.inquiryType === "client"
                          ? "TechCorp / CTO"
                          : "Full-Stack Developer"
                      }
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      className="mt-1 min-h-[120px]"
                      placeholder="Tell us about your requirements or experience..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CTA for Contractors */}
        <section className="py-20 lg:py-28 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 right-20 w-64 h-64 bg-primary rounded-full blur-[100px]" />
            <div className="absolute bottom-10 left-20 w-80 h-80 bg-accent rounded-full blur-[120px]" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Take the Next Step?
              </h2>
              <p className="text-lg text-white/70 mb-8">
                Join our network of exceptional IT professionals and access premium 
                international opportunities.
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-button px-8"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Apply as a Contractor
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contractors;
