
"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ShieldCheck, Award, Users, Globe, History, Heart } from "lucide-react";
import Image from "next/image";

const team = [
  {
    name: "Marcus Holloway",
    role: "Founder & CEO",
    image: "https://picsum.photos/seed/ceo/400/400",
    bio: "25+ years in global insurance strategy.",
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Claims",
    image: "https://picsum.photos/seed/claims-head/400/400",
    bio: "Expert in rapid claim resolution and client advocacy.",
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
    bio: "Pioneering the future of AI-driven policy analysis.",
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
                For over two decades, MH Insurance has been at the forefront of providing elite protection. We believe that insurance should be more than just a policy; it should be a promise of stability and a foundation for your dreams.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="space-y-2">
                  <div className="text-4xl font-black text-primary dark:text-white">2.5M+</div>
                  <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Active Policies</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-black text-primary dark:text-white">$4.2B</div>
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

        {/* Mission & Values */}
        <section className="bg-primary py-24 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
              <h2 className="text-accent font-black tracking-widest uppercase text-xs">Our North Star</h2>
              <h3 className="text-4xl md:text-5xl font-black">Values That Define Us</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { icon: <ShieldCheck className="w-8 h-8" />, title: "Absolute Trust", desc: "Transparency is our baseline. We build relationships on honesty and clear communication." },
                { icon: <Globe className="w-8 h-8" />, title: "Global Vision", desc: "Local expertise with a global network to protect you wherever life takes you." },
                { icon: <Heart className="w-8 h-8" />, title: "Client Advocacy", desc: "We don't just sell policies; we stand by your side during the most difficult moments." }
              ].map((v, i) => (
                <div key={i} className="space-y-6 p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                  <div className="p-4 rounded-2xl bg-accent text-white inline-block shadow-lg">
                    {v.icon}
                  </div>
                  <h4 className="text-2xl font-bold">{v.title}</h4>
                  <p className="text-white/60 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto mb-20 space-y-4">
              <h2 className="text-accent font-black tracking-widest uppercase text-xs">Meet The Leaders</h2>
              <h3 className="text-4xl md:text-5xl font-black text-primary dark:text-white">Expertise You Can Trust</h3>
              <p className="text-muted-foreground text-lg">Guided by a diverse team of industry veterans and innovators.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, i) => (
                <div key={i} className="group relative">
                  <div className="relative h-96 rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white dark:border-slate-800 transition-transform group-hover:-translate-y-2">
                    <Image src={member.image} alt={member.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                    <div className="absolute bottom-6 left-6 right-6 text-left text-white translate-y-4 group-hover:translate-y-0 transition-transform">
                      <h4 className="text-xl font-bold">{member.name}</h4>
                      <p className="text-accent text-xs font-bold uppercase tracking-widest mb-2">{member.role}</p>
                      <p className="text-xs text-white/70 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity">{member.bio}</p>
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
