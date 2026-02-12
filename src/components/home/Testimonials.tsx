import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Sterling Talent understands the art of talent acquisition. During critical hiring phases, I've been consistently impressed by their ability to identify top-tier talent while ensuring a perfect cultural fit. They deliver outstanding service with a personal touch, making the entire process seamless for both hiring managers and candidates. If you're looking for a recruitment partner that prioritises quality and results, Sterling Talent is the real deal.",
    author: "JB",
    role: "CTO",
    company: "Codesearch",
  },
  {
    quote: "We've worked with several staffing agencies, but Sterling Talent's vetting process is unmatched. They provide contractors that exceed expectations.",
    author: "Sarah van der Berg",
    role: "Engineering Manager",
    company: "DataFlow Solutions",
  },
  {
    quote: "The rapid deployment was crucial for our project timeline. Within 48 hours, we had a senior developer onboarded and contributing to our codebase.",
    author: "Michael Kowalski",
    role: "Head of Product",
    company: "FinTech Innovations",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it — hear from companies we've helped
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 lg:p-8 rounded-2xl bg-card border border-border hover:shadow-card transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                ))}
              </div>

              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-primary/20 mb-4" />

              {/* Quote Text */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
