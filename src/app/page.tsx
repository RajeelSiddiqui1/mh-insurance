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
  Plane,
  ShieldCheck,
  Zap,
  Users,
  Award
} from "lucide-react";

const services = [
  {
    id: "service-commercial",
    name: "Commercial",
    description: "Tailored protection for businesses, covering liabilities, property damage, and specialized industry risks.",
    longDescription: "Our commercial insurance provides a solid foundation for your enterprise. We cover everything from public liability and professional indemnity to complex cargo and maritime risks. Our experts work with you to identify unique industry threats and mitigate potential losses before they happen.",
    features: ["Property Damage Coverage", "Employee Liability", "Business Interruption", "Public Liability", "Professional Indemnity", "Cargo & Logistics Protection"],
    image: "https://picsum.photos/seed/commercial/800/600",
    icon: <Briefcase className="w-6 h-6" />,
    delay: 0,
  },
  {
    id: "service-home",
    name: "Home",
    description: "Complete coverage for your most valuable asset, including structural protection and personal belongings.",
    longDescription: "Your home is more than just a building; it's your sanctuary. Our policy protects against natural disasters, theft, and accidental damage. We also include personal liability coverage and 24/7 emergency repair assistance to give you absolute peace of mind regardless of the season.",
    features: ["Structural Protection", "Fire & Flood Coverage", "Contents Insurance", "Temporary Accommodation", "24/7 Home Emergency Service", "Valuables Protection"],
    image: "https://picsum.photos/seed/home/800/600",
    icon: <Home className="w-6 h-6" />,
    delay: 100,
  },
  {
    id: "service-business",
    name: "Business",
    description: "Comprehensive risk management for small to medium enterprises, ensuring continuity and growth.",
    longDescription: "Secure your business operations with our multi-peril policies. We cover assets, revenue, and key person insurance to ensure that your business stays resilient in any market condition. Whether you're a startup or an established firm, we have the right fit.",
    features: ["Asset Protection", "Revenue Safeguard", "Key Person Insurance", "Liability Extensions", "Cyber Risk Coverage", "Legal Expense Support"],
    image: "https://picsum.photos/seed/business/800/600",
    icon: <Building2 className="w-6 h-6" />,
    delay: 200,
  },
  {
    id: "service-auto",
    name: "Auto",
    description: "Stay safe on the road with policies covering liability, collision, and comprehensive roadside assistance.",
    longDescription: "Drive with total confidence. Our auto insurance offers comprehensive roadside assistance, accidental damage coverage, and zero-depreciation benefits. Whether it's your daily commute or a long-distance road trip, our global network ensures help is always just a call away.",
    features: ["Accident Coverage", "24/7 Roadside Assistance", "Theft Protection", "Third-party Liability", "Personal Accident Cover", "New-for-Old Car Replacement"],
    image: "https://picsum.photos/seed/auto/800/600",
    icon: <Car className="w-6 h-6" />,
    delay: 300,
  },
  {
    id: "service-life",
    name: "Life",
    description: "Provide a secure future for your loved ones with flexible terms and reliable payout guarantees.",
    longDescription: "Life is unpredictable, but your family's financial future doesn't have to be. We offer term plans and whole life policies that guarantee stability for your heirs, including education funds for children and retirement planning. Secure your legacy today.",
    features: ["Terminal Illness Benefit", "Critical Illness Cover", "Tax Savings", "Flexible Payout Options", "Child Education Support", "Whole Life Maturity Benefits"],
    image: "https://picsum.photos/seed/life/800/600",
    icon: <Heart className="w-6 h-6" />,
    delay: 400,
  },
  {
    id: "service-health",
    name: "Health",
    description: "Access top-tier medical care without financial stress, from routine checkups to specialized treatments.",
    longDescription: "Don't let medical bills drain your life savings. Our health plans cover hospitalization, daycare procedures, and maternity expenses at thousands of network hospitals worldwide. Includes preventative health checkups and specialist consults via our mobile app.",
    features: ["Cashless Hospitalization", "OPD Cover", "Maternity Benefits", "Free Health Checkups", "International Medical Coverage", "No-Claim Bonuses"],
    image: "https://picsum.photos/seed/health/800/600",
    icon: <Stethoscope className="w-6 h-6" />,
    delay: 500,
  },
  {
    id: "service-mortgage",
    name: "Mortgage",
    description: "Protect your home loan repayments against life's uncertainties, ensuring your family stays in their home.",
    longDescription: "Ensure your home remains yours. Mortgage protection covers your loan repayments in case of critical illness, disability, or involuntary unemployment, giving your family a safety net during tough times. It's the ultimate protection for your biggest investment.",
    features: ["Loan Protection", "Repayment Coverage", "Disability Benefits", "Critical Illness Add-on", "Unemployment Cover", "Decreasing Term Options"],
    image: "https://picsum.photos/seed/mortgage/800/600",
    icon: <Key className="w-6 h-6" />,
    delay: 600,
  },
  {
    id: "service-child",
    name: "Child",
    description: "Secure your child's future education and well-being with specialized savings and protection plans.",
    longDescription: "Invest in your child's dreams. Our child plans provide a guaranteed corpus for higher education and marriage, with premium waiver benefits to ensure their future is protected even in your absence. Start saving today for a brighter tomorrow.",
    features: ["Education Fund", "Marriage Corpus", "Premium Waiver", "Guaranteed Payouts", "Growth Benefits", "Life Cover for Parent"],
    image: "https://picsum.photos/seed/child/800/600",
    icon: <Baby className="w-6 h-6" />,
    delay: 700,
  },
  {
    id: "service-travel",
    name: "Travel",
    description: "Worry-free adventures with coverage for medical emergencies, trip cancellations, and lost luggage.",
    longDescription: "Travel the world without fear. We cover everything from passport loss and trip delays to emergency medical evacuations and lost baggage. Our 24/7 global concierge service is always just one call away, no matter which timezone you're in.",
    features: ["Trip Cancellation Cover", "Medical Emergency Cover", "Loss of Baggage", "Personal Accident", "24/7 Global Concierge", "Delayed Flight Compensation"],
    image: "https://picsum.photos/seed/travel/800/600",
    icon: <Plane className="w-6 h-6" />,
    delay: 800,
  },
];

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main>
        <Hero />

        {/* Stats Section */}
        <section className="py-12 bg-primary relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: "Active Policies", val: "2.5M+", icon: <ShieldCheck className="w-5 h-5 text-accent" /> },
                { label: "Claims Paid", val: "$4.2B", icon: <Zap className="w-5 h-5 text-accent" /> },
                { label: "Expert Advisors", val: "15,000", icon: <Users className="w-5 h-5 text-accent" /> },
                { label: "Awards Won", val: "128", icon: <Award className="w-5 h-5 text-accent" /> }
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-4 text-white">
                  <div className="p-3 bg-white/10 rounded-2xl">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{stat.val}</div>
                    <div className="text-xs text-white/60 uppercase tracking-widest font-semibold">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -ml-48 -mb-48" />
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-accent font-bold tracking-[0.2em] uppercase text-xs">Our Expert Coverage</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary dark:text-white">
                Protection Designed <br /> For Every Chapter
              </h3>
              <p className="text-muted-foreground text-lg">
                From corporate giants to growing families, we provide the safety net you need to thrive with confidence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  id={service.id}
                  name={service.name}
                  description={service.description}
                  longDescription={service.longDescription}
                  features={service.features}
                  image={service.image}
                  icon={service.icon}
                  delay={service.delay}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 hero-gradient">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-4xl mx-auto glass-card p-12 md:p-20 rounded-[3rem] space-y-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/5 to-primary/5 pointer-events-none" />
              <h3 className="text-4xl md:text-5xl font-extrabold text-primary dark:text-white relative z-10">
                Secure your future with <br className="hidden md:block" /> elite protection today.
              </h3>
              <p className="text-muted-foreground text-xl max-w-2xl mx-auto relative z-10">
                Join over 2 million policyholders who trust MH Insurance for their security and peace of mind.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto relative z-10">
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="w-full sm:w-auto flex-1 h-14 px-6 rounded-2xl border-2 bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                />
                <button className="w-full sm:w-auto bg-primary text-white dark:bg-accent dark:text-white px-10 h-14 rounded-2xl font-bold hover:scale-105 active:scale-95 shadow-xl transition-all">
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