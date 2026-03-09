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
    id: "service-commercial",
    name: "Commercial",
    description: "Tailored protection for businesses, covering liabilities and property damage.",
    longDescription: "Our commercial insurance provides a solid foundation for your enterprise. We cover everything from public liability and professional indemnity to complex cargo and maritime risks. Our experts work with you to identify unique industry threats.",
    features: ["Property Damage Coverage", "Employee Liability", "Business Interruption", "Public Liability", "Professional Indemnity"],
    image: "https://picsum.photos/seed/commercial/600/400",
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    id: "service-home",
    name: "Home",
    description: "Complete coverage for your most valuable asset and personal belongings.",
    longDescription: "Your home is your sanctuary. Our policy protects against natural disasters, theft, and accidental damage. We also include personal liability coverage and emergency repair assistance to give you absolute peace of mind.",
    features: ["Structural Protection", "Fire & Flood Coverage", "Contents Insurance", "Temporary Accommodation", "24/7 Home Emergency Service"],
    image: "https://picsum.photos/seed/home/600/400",
    icon: <Home className="w-6 h-6" />,
  },
  {
    id: "service-business",
    name: "Business",
    description: "Comprehensive risk management for small to large enterprises.",
    longDescription: "Secure your business operations with our multi-peril policies. We cover assets, revenue, and key person insurance to ensure that your business stays resilient in any market condition.",
    features: ["Asset Protection", "Revenue Safeguard", "Key Person Insurance", "Liability Extensions", "Cyber Risk Coverage"],
    image: "https://picsum.photos/seed/business/600/400",
    icon: <Building2 className="w-6 h-6" />,
  },
  {
    id: "service-auto",
    name: "Auto",
    description: "Stay safe on the road with policies covering liability and collision.",
    longDescription: "Drive with total confidence. Our auto insurance offers comprehensive roadside assistance, accidental damage coverage, and zero-depreciation benefits. Whether it's your daily commute or a long-distance road trip, we've got you covered.",
    features: ["Accident Coverage", "24/7 Roadside Assistance", "Theft Protection", "Third-party Liability", "Personal Accident Cover"],
    image: "https://picsum.photos/seed/auto/600/400",
    icon: <Car className="w-6 h-6" />,
  },
  {
    id: "service-life",
    name: "Life",
    description: "Provide a secure future for your loved ones with flexible terms.",
    longDescription: "Life is unpredictable, but your family's financial future doesn't have to be. We offer term plans and whole life policies that guarantee stability for your heirs, including education funds for children and retirement planning.",
    features: ["Terminal Illness Benefit", "Critical Illness Cover", "Tax Savings", "Flexible Payout Options", "Child Education Support"],
    image: "https://picsum.photos/seed/life/600/400",
    icon: <Heart className="w-6 h-6" />,
  },
  {
    id: "service-health",
    name: "Health",
    description: "Access top-tier medical care from routine checkups to treatments.",
    longDescription: "Don't let medical bills drain your life savings. Our health plans cover hospitalization, daycare procedures, and maternity expenses at thousands of network hospitals worldwide. Includes preventative health checkups and specialist consults.",
    features: ["Cashless Hospitalization", "OPD Cover", "Maternity Benefits", "Free Health Checkups", "International Medical Coverage"],
    image: "https://picsum.photos/seed/health/600/400",
    icon: <Stethoscope className="w-6 h-6" />,
  },
  {
    id: "service-mortgage",
    name: "Mortgage",
    description: "Protect your property investment and mortgage repayments.",
    longDescription: "Ensure your home remains yours. Mortgage protection covers your loan repayments in case of critical illness, disability, or unemployment, giving your family a safety net during tough times.",
    features: ["Loan Protection", "Repayment Coverage", "Disability Benefits", "Critical Illness Add-on", "Peace of Mind"],
    image: "https://picsum.photos/seed/mortgage/600/400",
    icon: <Key className="w-6 h-6" />,
  },
  {
    id: "service-child",
    name: "Child",
    description: "Secure your child's future education and financial well-being.",
    longDescription: "Invest in your child's dreams. Our child plans provide a guaranteed corpus for higher education and marriage, with premium waiver benefits to ensure their future is protected even in your absence.",
    features: ["Education Fund", "Marriage Corpus", "Premium Waiver", "Guaranteed Payouts", "Growth Benefits"],
    image: "https://picsum.photos/seed/child/600/400",
    icon: <Baby className="w-6 h-6" />,
  },
  {
    id: "service-travel",
    name: "Travel",
    description: "Worry-free adventures with coverage for medical emergencies.",
    longDescription: "Travel the world without fear. We cover everything from passport loss and trip delays to emergency medical evacuations and lost baggage. Our 24/7 global concierge service is always just one call away.",
    features: ["Trip Cancellation Cover", "Medical Emergency Cover", "Loss of Baggage", "Personal Accident", "24/7 Global Concierge"],
    image: "https://picsum.photos/seed/travel/600/400",
    icon: <Plane className="w-6 h-6" />,
  },
];

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main>
        <Hero />

        {/* Services Section */}
        <section id="services" className="py-24 bg-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -ml-32 -mb-32" />
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-accent font-bold tracking-widest uppercase text-sm">Elite Protection</h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
                Comprehensive Coverage <br /> Built on Trust
              </h3>
              <p className="text-muted-foreground text-lg">
                Select a policy to view detailed benefits and AI-powered intelligence about your coverage options.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  id={service.id}
                  name={service.name}
                  description={service.description}
                  longDescription={service.longDescription}
                  features={service.features}
                  image={service.image}
                  icon={service.icon}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Trust Factors */}
        <section className="py-20 bg-primary text-primary-foreground border-y-4 border-accent">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-5xl font-extrabold text-accent">25+</div>
                <div className="text-primary-foreground/70 uppercase text-xs font-bold tracking-widest">Global Experience</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-extrabold text-accent">99.9%</div>
                <div className="text-primary-foreground/70 uppercase text-xs font-bold tracking-widest">Payout Accuracy</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-extrabold text-accent">5M+</div>
                <div className="text-primary-foreground/70 uppercase text-xs font-bold tracking-widest">Active Policies</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-extrabold text-accent">A+</div>
                <div className="text-primary-foreground/70 uppercase text-xs font-bold tracking-widest">Credit Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 hero-gradient">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-4xl mx-auto glass-card p-12 md:p-20 rounded-[3rem] space-y-8">
              <h3 className="text-4xl md:text-5xl font-bold text-primary">Ready to get the elite protection you deserve?</h3>
              <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
                Our AI-driven underwriting ensures you get the fastest quotes and most accurate premiums in the industry.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="name@business.com" 
                  className="w-full sm:w-auto flex-1 h-14 px-6 rounded-2xl border-2 bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                />
                <button className="w-full sm:w-auto bg-accent text-white px-10 h-14 rounded-2xl font-bold hover:scale-105 active:scale-95 shadow-xl shadow-accent/20 transition-all">
                  Get Free Quote
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}