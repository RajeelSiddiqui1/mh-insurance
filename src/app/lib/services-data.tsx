
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

export interface Service {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  features: string[];
  image: string;
  icon: React.ReactNode;
  delay: number;
}

export const services: Service[] = [
  {
    id: "commercial",
    name: "Commercial",
    description: "Tailored protection for businesses, covering liabilities, property damage, and specialized industry risks.",
    longDescription: "Our commercial insurance provides a solid foundation for your enterprise. We cover everything from public liability and professional indemnity to complex cargo and maritime risks. Our experts work with you to identify unique industry threats and mitigate potential losses before they happen. Whether you manage a small warehouse or a global logistics firm, our policy adapts to your specific operational needs.",
    features: ["Property Damage Coverage", "Employee Liability", "Business Interruption", "Public Liability", "Professional Indemnity", "Cargo & Logistics Protection"],
    image: "/assets/commerical.jpg",
    icon: <Briefcase className="w-6 h-6" />,
    delay: 0,
  },
  {
    id: "home",
    name: "Home",
    description: "Complete coverage for your most valuable asset, including structural protection and personal belongings.",
    longDescription: "Your home is more than just a building; it's your sanctuary. Our policy protects against natural disasters, theft, and accidental damage. We also include personal liability coverage and 24/7 emergency repair assistance to give you absolute peace of mind. We cover expensive electronics, jewelry, and structural integrity, ensuring that rebuilding costs are fully accounted for in the event of a total loss.",
    features: ["Structural Protection", "Fire & Flood Coverage", "Contents Insurance", "Temporary Accommodation", "24/7 Home Emergency Service", "Valuables Protection"],
    image: "/assets/home.jpg",
    icon: <Home className="w-6 h-6" />,
    delay: 100,
  },
  {
    id: "business",
    name: "Business",
    description: "Comprehensive risk management for small to medium enterprises, ensuring continuity and growth.",
    longDescription: "Secure your business operations with our multi-peril policies. We cover assets, revenue, and key person insurance to ensure that your business stays resilient in any market condition. Our cyber risk coverage protects you against data breaches, while our legal expense support ensures you have the best representation during disputes. We focus on business continuity so you can focus on growth.",
    features: ["Asset Protection", "Revenue Safeguard", "Key Person Insurance", "Liability Extensions", "Cyber Risk Coverage", "Legal Expense Support"],
    image: "/assets/bussiness.jpg",
    icon: <Building2 className="w-6 h-6" />,
    delay: 200,
  },
  {
    id: "auto",
    name: "Auto",
    description: "Stay safe on the road with policies covering liability, collision, and comprehensive roadside assistance.",
    longDescription: "Drive with total confidence. Our auto insurance offers comprehensive roadside assistance, accidental damage coverage, and zero-depreciation benefits. We provide new-for-old car replacement for vehicles under two years old and include personal accident cover for all passengers. Our claims process is streamlined with cashless repairs at over 5,000 network garages nationwide.",
    features: ["Accident Coverage", "24/7 Roadside Assistance", "Theft Protection", "Third-party Liability", "Personal Accident Cover", "New-for-Old Car Replacement"],
    image: "/assets/car.jpg",
    icon: <Car className="w-6 h-6" />,
    delay: 300,
  },
  {
    id: "life",
    name: "Life",
    description: "Provide a secure future for your loved ones with flexible terms and reliable payout guarantees.",
    longDescription: "Life is unpredictable, but your family's financial future doesn't have to be. We offer term plans and whole life policies that guarantee stability for your heirs. Our plans include terminal illness benefits that provide an early payout to assist with medical costs, and flexible options for child education funds to ensure their dreams are never sidelined.",
    features: ["Terminal Illness Benefit", "Critical Illness Cover", "Tax Savings", "Flexible Payout Options", "Child Education Support", "Whole Life Maturity Benefits"],
    image: "/assets/life.jpg",
    icon: <Heart className="w-6 h-6" />,
    delay: 400,
  },
  {
    id: "health",
    name: "Health",
    description: "Access top-tier medical care without financial stress, from routine checkups to specialized treatments.",
    longDescription: "Our health plans cover hospitalization, daycare procedures, and maternity expenses at thousands of network hospitals worldwide. Includes preventative health checkups and specialist consults via our mobile app. We offer a unique 'No-Claim Bonus' that increases your coverage amount for every year you stay healthy, ensuring you have more protection when you actually need it.",
    features: ["Cashless Hospitalization", "OPD Cover", "Maternity Benefits", "Free Health Checkups", "International Medical Coverage", "No-Claim Bonuses"],
    image: "/assets/health.jpg",
    icon: <Stethoscope className="w-6 h-6" />,
    delay: 500,
  },
  {
    id: "mortgage",
    name: "Mortgage",
    description: "Protect your home loan repayments against life's uncertainties, ensuring your family stays in their home.",
    longDescription: "Mortgage protection covers your loan repayments in case of critical illness, disability, or involuntary unemployment. We offer decreasing term options that align with your remaining loan balance, keeping your premiums affordable. It's the ultimate protection for your biggest investment, ensuring that your home remains a legacy for your children.",
    features: ["Loan Protection", "Repayment Coverage", "Disability Benefits", "Critical Illness Add-on", "Unemployment Cover", "Decreasing Term Options"],
    image: "/assets/mortgage.jpg",
    icon: <Key className="w-6 h-6" />,
    delay: 600,
  },
  {
    id: "child",
    name: "Child",
    description: "Secure your child's future education and well-being with specialized savings and protection plans.",
    longDescription: "Invest in your child's dreams. Our child plans provide a guaranteed corpus for higher education and marriage, with premium waiver benefits to ensure their future is protected even in your absence. These plans grow with your child, offering milestone payouts that help manage expenses during their crucial developmental years.",
    features: ["Education Fund", "Marriage Corpus", "Premium Waiver", "Guaranteed Payouts", "Growth Benefits", "Life Cover for Parent"],
    image: "/assets/children.jpg",
    icon: <Baby className="w-6 h-6" />,
    delay: 700,
  },
  {
    id: "travel",
    name: "Travel",
    description: "Worry-free adventures with coverage for medical emergencies, trip cancellations, and lost luggage.",
    longDescription: "Travel the world without fear. We cover everything from passport loss and trip delays to emergency medical evacuations and lost baggage. Our 24/7 global concierge service is always just one call away, providing assistance with translations, legal referrals, and emergency cash advances regardless of your location.",
    features: ["Trip Cancellation Cover", "Medical Emergency Cover", "Loss of Baggage", "Personal Accident", "24/7 Global Concierge", "Delayed Flight Compensation"],
    image: "/assets/travel.jpg",
    icon: <Plane className="w-6 h-6" />,
    delay: 800,
  },
];
