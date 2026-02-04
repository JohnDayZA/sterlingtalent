import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/sterling-talent-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Sterling Talent" className="h-14 w-14 object-contain brightness-0 invert" />
              <span className="text-xl font-semibold tracking-wider" style={{ fontFamily: "'Cinzel', serif" }}>Sterling Talent</span>
            </Link>
            <p className="text-background/70 mb-6 max-w-md">
              Connecting world-class South African IT talent with European and international 
              companies. Decades of experience, seamless collaboration, exceptional results.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-background/70 hover:text-background transition-colors">
                Home
              </Link>
              <Link to="/services" className="text-background/70 hover:text-background transition-colors">
                Services
              </Link>
              <Link to="/contractors" className="text-background/70 hover:text-background transition-colors">
                For Contractors
              </Link>
              <Link to="/contractors#contact" className="text-background/70 hover:text-background transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:info@sterlingtalent.io"
                className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
              >
                <Mail className="h-4 w-4" />
                info@sterlingtalent.io
              </a>
              <a
                href="https://wa.me/27000000000"
                className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
              >
                <Phone className="h-4 w-4" />
                WhatsApp Available
              </a>
              <div className="flex items-start gap-2 text-background/70">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>South Africa (GMT+2)</span>
              </div>
            </div>
            <Link to="/contractors#contact" className="inline-block mt-6">
              <Button 
                variant="outline" 
                className="border-background/30 text-background hover:bg-background hover:text-foreground"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Sterling Talent. All rights reserved.
          </p>
          <p className="text-background/50 text-sm">
            www.sterlingtalent.io
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
