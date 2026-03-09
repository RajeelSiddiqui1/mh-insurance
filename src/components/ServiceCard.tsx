"use client";

import * as React from "react";
import { Sparkles, Loader2, ArrowRight, CheckCircle2, Shield, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { aiServiceSummary } from "@/ai/flows/ai-service-summary";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { Button } from "./ui/button";

interface ServiceCardProps {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  features?: string[];
  image: string;
  icon: React.ReactNode;
  delay?: number;
}

export function ServiceCard({ id, name, description, longDescription, features, image, icon, delay = 0 }: ServiceCardProps) {
  const [summary, setSummary] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  const fetchSummary = async () => {
    if (summary || loading) return;
    setLoading(true);
    try {
      const result = await aiServiceSummary({
        serviceName: name,
        serviceDescription: description,
      });
      setSummary(result.summary);
    } catch (error) {
      console.error("Failed to fetch summary:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog onOpenChange={(open) => open && fetchSummary()}>
      <DialogTrigger asChild>
        <Card className="group cursor-pointer border-2 border-transparent hover:border-accent/20 transition-all duration-500 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] dark:bg-slate-900/40 overflow-hidden relative rounded-[2rem]">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="h-56 relative overflow-hidden">
            <Image 
              src={image} 
              alt={name} 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700" 
              data-ai-hint={name.toLowerCase()}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
            <div className="absolute bottom-6 left-6 text-white transform group-hover:-translate-y-1 transition-transform">
              <div className="p-3 rounded-2xl bg-accent text-white shadow-xl shadow-accent/20 inline-block mb-3">
                {icon}
              </div>
              <h4 className="text-2xl font-black tracking-tight">{name}</h4>
            </div>
          </div>

          <CardContent className="pt-6 pb-8">
            <p className="text-muted-foreground text-sm line-clamp-2 mb-6 leading-relaxed">
              {description}
            </p>
            
            <div className="flex items-center justify-between">
               <Badge variant="secondary" className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all">
                 Review Details
               </Badge>
               <div className="w-8 h-8 rounded-full bg-accent/5 flex items-center justify-center group-hover:bg-accent transition-all">
                  <ArrowRight className="w-4 h-4 text-accent group-hover:text-white transition-all" />
               </div>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>

      <DialogContent className="max-w-3xl rounded-[3rem] overflow-hidden p-0 border-none shadow-2xl glass-card">
        <ScrollArea className="max-h-[90vh] w-full">
          <div className="relative h-72 w-full">
            <Image src={image} alt={name} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
            <div className="absolute bottom-10 left-10 flex items-center gap-6">
               <div className="p-5 rounded-3xl bg-primary text-white shadow-2xl shadow-primary/30">
                  {icon}
               </div>
               <div>
                  <h2 className="text-4xl font-black text-primary dark:text-white tracking-tighter">{name} Insurance</h2>
                  <div className="flex gap-2 mt-2">
                    <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">Active Coverage</Badge>
                    <Badge className="bg-accent/10 text-accent border-accent/20">Elite Tier</Badge>
                  </div>
               </div>
            </div>
          </div>
          
          <div className="p-10 md:p-12 space-y-10">
            <DialogHeader className="text-left space-y-4">
              <DialogDescription className="text-xl leading-relaxed text-foreground/80 font-medium border-l-4 border-accent pl-6">
                {longDescription || description}
              </DialogDescription>
            </DialogHeader>

            <div className="grid md:grid-cols-5 gap-10">
              <div className="md:col-span-3 space-y-8">
                <div className="space-y-6">
                  <h5 className="font-black text-primary dark:text-white flex items-center gap-3 text-xs uppercase tracking-[0.2em]">
                    <Shield className="w-4 h-4 text-accent" /> Premium Benefits
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {(features || ["24/7 Claim Support", "Global Network", "Expert Guidance", "Custom Premiums"]).map((f, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-background border border-border group hover:border-accent/30 transition-all">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> 
                        <span className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 space-y-6">
                <div className="p-8 rounded-[2.5rem] bg-accent/5 border border-accent/10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                     <Sparkles className="w-16 h-16 text-accent" />
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
                    <p className="text-sm italic font-medium text-foreground/80 leading-relaxed relative z-10">
                      "{summary || "Our AI is currently simulating the best coverage scenarios for your profile..."}"
                    </p>
                  )}
                </div>

                <div className="p-6 rounded-3xl bg-primary/5 flex items-start gap-4 border border-primary/10">
                   <Info className="w-5 h-5 text-primary shrink-0 mt-1" />
                   <p className="text-xs text-muted-foreground leading-relaxed">
                     Terms and conditions apply. All premium calculations are estimates based on standard risk assessments.
                   </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button className="flex-1 bg-primary dark:bg-accent text-white font-black h-16 rounded-[1.5rem] shadow-2xl hover:scale-[1.02] active:scale-95 transition-all text-lg">
                Begin Free Application
              </Button>
              <Button variant="outline" className="flex-1 h-16 rounded-[1.5rem] border-2 font-bold hover:bg-accent/5 text-lg transition-all">
                Policy Document (PDF)
              </Button>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}