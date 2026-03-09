
"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ShieldCheck, Award, Users, Globe, History, Heart, Sparkles, Building2, Landmark } from "lucide-react";
import Image from "next/image";

const team = [
  {
    name: "Marcus Holloway",
    role: "Founder & CEO",
    image: "https://picsum.photos/seed/ceo/400/400",
    bio: "25+ years in global insurance strategy and risk management.",
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Claims",
    image: "https://picsum.photos/seed/claims-head/400/400",
    bio: "Expert in rapid claim resolution and client advocacy workflows.",
  },
  {
    name: "David Chen",
    role: "Director of Risk",
    image: "https://picsum.photos/seed/risk-director/400/400",
    bio: "Specialist in commercial and maritime risk assessment.",
  },
  {
    name: "Sophia Williams",
    role: "Chief AI Officer",
    image: "https://picsum.photos/seed/ai-officer/400/400",
    bio: "Pioneering the future of AI-driven predictive policy analysis.",
  }
];

const storyRows = [
  {
    title: "A Legacy of Trust",
    subtitle: "OUR FOUNDATION",
    description: "Founded in 1998 in the heart of the financial district, MH Insurance was built on a single principle: absolute transparency. For over two decades, we have stood as a pillar of stability for millions of families and businesses. Our journey began with a small team of three advisors and has grown into a global powerhouse, yet our commitment to individual client care remains unchanged.",
    icon: <Landmark className="w-6 h-6 text-accent" />,
    image: "https://picsum.photos/seed/about-legacy/800/600",
    imageHint: "historical building"
  },
  {
    title: "Innovating for the Future",
    subtitle: "NEXT-GEN PROTECTION",
    description: "We don't just follow trends; we set them. By integrating cutting-edge AI and machine learning into our risk assessment models, we provide coverage that is more precise, more affordable, and faster than ever before. Our digital-first approach ensures that filing a claim or updating a policy is a matter of seconds, not days, putting the power of protection directly in your hands.",
    icon: <Sparkles className="w-6 h-6 text-accent" />,
    image: "https://picsum.photos/seed/about-tech/800/600",
    imageHint: "digital technology"
  },
  {
    title: "Global Strength, Local Presence",
    subtitle: "WORLDWIDE REACH",
    description: "With offices in over 40 countries and a network of 15,000 expert advisors, we provide world-class protection with a neighborly touch. Whether you are insuring a small retail shop in a local town or a multi-national logistics fleet crossing the Atlantic, we have the specialized knowledge and resources to be right where you need us, exactly when you need us.",
    icon: <Globe className="w-6 h-6 text-accent" />,
    image: "https://picsum.photos/seed/about-global/800/600",
    imageHint: "global network"
  },
  {
    title: "Beyond the Policy",
    subtitle: "OUR PROMISE",
    description: "To us, you are never just a policy number. We are deeply committed to social responsibility and community empowerment. A significant portion of every premium is reinvested into local disaster relief and financial literacy programs. We believe that a secure society is a prosperous one, and we work tirelessly to build a safer future for the next generation.",
    icon: <Heart className="w-6 h-6 text-accent" />,
    image: "https://picsum.photos/seed/about-community/800/600",
    imageHint: "community help"
  }
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 pt-32">
        {/* About Hero */}
        <section className="container mx-auto px-4 md:px-6 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-bold tracking-widest uppercase border border-accent/20">
                <History className="w-4 h-4" /> Established 1998
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-primary dark:text-white leading-tight">
                Our Legacy is <br /> <span className="text-accent italic">Your Security.</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                For over two decades, MH Insurance has been at the forefront of providing elite protection. We believe that insurance should be more than just a policy; it should be a promise.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="space-y-2">
                  <div className="text-4xl font-black text-primary dark:text-white">2.5M+</div>
                  <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Active Policies</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-black text-primary dark:text-white">$4.2B+</div>
                  <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Claims Paid</div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in [animation-delay:200ms]">
               <div className="absolute -inset-4 bg-accent/20 rounded-[4rem] blur-3xl opacity-30" />
               <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800">
                  <Image src="https://picsum.photos/seed/about-main/800/600" width={800} height={600} alt="Our HQ" className="object-cover h-[500px]" />
               </div>
            </div>
          </div>
        </section>

        {/* Alternating Story Rows */}
        <section className="py-24 space-y-24 bg-slate-50 dark:bg-slate-900/50">
          {storyRows.map((row, index) => (
            <div key={index} className="container mx-auto px-4 md:px-6">
              <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`space-y-6 ${index % 2 !== 0 ? 'lg:order-last' : ''}`}>
                  <div className="inline-flex items-center gap-3 text-accent font-black text-xs tracking-[0.2em] uppercase">
                    {row.icon} {row.subtitle}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-primary dark:text-white tracking-tighter">
                    {row.title}
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                    {row.description}
                  </p>
                </div>
                <div className="relative">
                   <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-2xl" />
                   <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 aspect-[4/3]">
                      <Image 
                        src={row.image} 
                        fill 
                        alt={row.title} 
                        className="object-cover hover:scale-105 transition-transform duration-700" 
                        data-ai-hint={row.imageHint}
                      />
                   </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Team Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto mb-20 space-y-4">
              <h2 className="text-accent font-black tracking-widest uppercase text-xs">Meet The Leaders</h2>
              <h3 className="text-4xl md:text-5xl font-black text-primary dark:text-white tracking-tighter">Expertise You Can Trust</h3>
              <p className="text-muted-foreground text-lg">Guided by a diverse team of industry veterans and innovators.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, i) => (
                <div key={i} className="group relative">
                  <div className="relative h-[450px] rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white dark:border-slate-800 transition-transform group-hover:-translate-y-2">
                    <Image src={member.image} alt={member.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                    <div className="absolute bottom-8 left-8 right-8 text-left text-white translate-y-4 group-hover:translate-y-0 transition-transform">
                      <h4 className="text-2xl font-bold mb-1">{member.name}</h4>
                      <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">{member.role}</p>
                      <p className="text-sm text-white/70 line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity leading-relaxed">{member.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
