
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { Footer } from "@/components/Footer";
import { 
  Briefcase, 
  Home, 
  Building2, 
  Car, 
  Heart, 
  Stethoscope, 
  Key, 
  Baby, 
  Plane 
} from "lucide-react";

const services = [
  {
    name: "Commercial",
    description: "Tailored protection for businesses, covering liabilities, property damage, and specialized industry risks.",
    icon: Briefcase,
  },
  {
    name: "Home",
    description: "Complete coverage for your most valuable asset, including structural protection and personal belongings.",
    icon: Home,
  },
  {
    name: "Business",
    description: "Comprehensive risk management for small to medium enterprises, ensuring continuity and growth.",
    icon: Building2,
  },
  {
    name: "Auto",
    description: "Stay safe on the road with policies covering liability, collision, and comprehensive roadside assistance.",
    icon: Car,
  },
  {
    name: "Life",
    description: "Provide a secure future for your loved ones with flexible terms and reliable payout guarantees.",
    icon: Heart,
  },
  {
    name: "Health",
    description: "Access top-tier medical care without financial stress, from routine checkups to specialized treatments.",
    icon: Stethoscope,
  },
  {
    name: "Mortgage",
    description: "Protect your home loan repayments against life's uncertainties, ensuring your family stays in their home.",
    icon: Key,
  },
  {
    name: "Child",
    description: "Secure your child's future education and well-being with specialized savings and protection plans.",
    icon: Baby,
  },
  {
    name: "Travel",
    description: "Worry-free adventures with coverage for medical emergencies, trip cancellations, and lost luggage.",
    icon: Plane,
  },
];

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main>
        <Hero />

        {/* Services Section */}
        <section id="services" className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-accent font-bold tracking-widest uppercase text-sm">Our Coverage</h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
                Comprehensive Protection <br /> for Every Need
              </h3>
              <p className="text-muted-foreground text-lg">
                Explore our wide range of insurance products designed to provide peace of mind and financial stability for you, your family, and your business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.name}
                  name={service.name}
                  description={service.description}
                  icon={<service.icon className="w-6 h-6" />}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold">25+</div>
                <div className="text-primary-foreground/70 uppercase text-xs font-semibold tracking-wider">Years Experience</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold">98%</div>
                <div className="text-primary-foreground/70 uppercase text-xs font-semibold tracking-wider">Claim Success</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold">120k</div>
                <div className="text-primary-foreground/70 uppercase text-xs font-semibold tracking-wider">Policy Holders</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold">24/7</div>
                <div className="text-primary-foreground/70 uppercase text-xs font-semibold tracking-wider">Expert Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-accent/5">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-2xl mx-auto space-y-8 bg-background p-10 md:p-16 rounded-[2.5rem] shadow-2xl border border-accent/10">
              <h3 className="text-3xl md:text-4xl font-bold">Ready to secure your future?</h3>
              <p className="text-muted-foreground">
                Join thousands of satisfied customers who trust MH Insurance for their safety. Get a personalized quote in minutes.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full sm:w-auto flex-1 h-14 px-6 rounded-full border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
                <button className="w-full sm:w-auto bg-accent text-white px-8 h-14 rounded-full font-bold hover:scale-105 transition-transform">
                  Get Started Free
                </button>
              </div>
              <p className="text-xs text-muted-foreground">No credit card required. Cancel anytime.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
