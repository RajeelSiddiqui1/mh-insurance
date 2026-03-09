
"use client";

import * as React from "react";
import { useParams } from "next/navigation";
import { services } from "@/app/lib/services-data";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Sparkles, Loader2, CheckCircle2, Shield, Info, ArrowLeft } from "lucide-react";
import { aiServiceSummary } from "@/ai/flows/ai-service-summary";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function ServiceDetailPage() {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);
  const [summary, setSummary] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchSummary = async () => {
      if (!service || loading || summary) return;
      setLoading(true);
      try {
        const result = await aiServiceSummary({
          serviceName: service.name,
          serviceDescription: service.description,
        });
        setSummary(result.summary);
      } catch (error) {
        console.error("Failed to fetch summary:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSummary();
  }, [service]);

  if (!service) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Service Not Found</h1>
            <Link href="/#services" className="text-accent hover:underline">Return to services</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/#services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Services
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8 animate-fade-in">
              <div className="relative h-[400px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800">
                <Image src={service.image} alt={service.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute bottom-8 left-8 flex items-center gap-4">
                  <div className="p-4 rounded-2xl bg-accent text-white shadow-2xl">
                    {service.icon}
                  </div>
                  <h1 className="text-4xl font-black text-white tracking-tighter">{service.name} Insurance</h1>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-2">
                  <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">Active Coverage</Badge>
                  <Badge className="bg-accent/10 text-accent border-accent/20">Elite Tier Protection</Badge>
                </div>
                <p className="text-xl leading-relaxed text-muted-foreground font-medium border-l-4 border-accent pl-6">
                  {service.longDescription}
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="font-black text-primary dark:text-white flex items-center gap-3 text-xs uppercase tracking-[0.2em]">
                  <Shield className="w-4 h-4 text-accent" /> Premium Benefits
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 rounded-3xl bg-primary/5 border border-primary/10 group hover:bg-white dark:hover:bg-slate-900 transition-all shadow-sm hover:shadow-xl">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> 
                      <span className="text-sm font-bold text-primary/80 dark:text-white/80">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8 sticky top-32 animate-fade-in [animation-delay:200ms]">
              <div className="p-10 rounded-[3rem] bg-accent/5 border border-accent/10 relative overflow-hidden group shadow-inner">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity">
                  <Sparkles className="w-24 h-24 text-accent" />
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-accent rounded-lg">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                  <span className="font-black text-[10px] uppercase tracking-widest text-accent">AI Policy Analysis</span>
                </div>
                {loading ? (
                  <div className="flex flex-col gap-4 py-4">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground animate-pulse font-bold">
                      <Loader2 className="w-4 h-4 animate-spin text-accent" /> Processing Policy...
                    </div>
                    <div className="h-2 w-full bg-accent/10 rounded-full animate-pulse" />
                    <div className="h-2 w-3/4 bg-accent/10 rounded-full animate-pulse" />
                  </div>
                ) : (
                  <p className="text-lg italic font-medium text-foreground/80 leading-relaxed relative z-10">
                    "{summary || "Our AI is currently simulating the best coverage scenarios for your profile..."}"
                  </p>
                )}
              </div>

              <div className="p-8 rounded-[2.5rem] bg-primary text-white space-y-6 shadow-2xl">
                <h3 className="text-2xl font-bold">Start Your Quote</h3>
                <p className="text-white/70 text-sm">Our advisors are ready to help you tailor the perfect plan for your needs.</p>
                <div className="space-y-4">
                  <Button className="w-full bg-accent text-white h-14 rounded-2xl font-black text-lg hover:scale-105 active:scale-95 transition-all">
                    Apply Now
                  </Button>
                  <Button variant="outline" className="w-full h-14 rounded-2xl border-white/20 bg-white/10 hover:bg-white hover:text-primary font-bold transition-all">
                    Schedule a Consultation
                  </Button>
                </div>
                <div className="flex items-start gap-4 pt-4 text-white/60">
                   <Info className="w-5 h-5 shrink-0" />
                   <p className="text-xs italic leading-relaxed">
                     Terms and conditions apply. All premium calculations are estimates based on standard risk assessments.
                   </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
