"use client";

import * as React from "react";
import { Sparkles, Loader2, ArrowRight, CheckCircle2, Shield } from "lucide-react";
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
        <Card className="group cursor-pointer border-2 border-transparent hover:border-accent/20 transition-all duration-300 hover:shadow-2xl dark:bg-slate-800 overflow-hidden relative rounded-2xl">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="h-48 relative overflow-hidden">
            <Image 
              src={image} 
              alt={name} 
              fill 
              className="object-cover group-hover:scale-110 transition-transform duration-500" 
              data-ai-hint={name.toLowerCase()}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <div className="p-2 rounded-lg bg-accent/20 backdrop-blur-md border border-white/20 inline-block mb-2">
                {icon}
              </div>
              <h4 className="text-lg font-bold">{name}</h4>
            </div>
          </div>

          <CardContent className="pt-4">
            <p className="text-muted-foreground text-sm line-clamp-2 mb-4 leading-relaxed">
              {description}
            </p>
            
            <div className="flex items-center justify-between">
               <Badge variant="outline" className="text-[10px] group-hover:bg-accent group-hover:text-white transition-colors">
                 View Details
               </Badge>
               <ArrowRight className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>

      <DialogContent className="max-w-2xl rounded-[2.5rem] overflow-hidden p-0 border-none shadow-2xl">
        <ScrollArea className="max-h-[85vh] w-full">
          <div className="relative h-64 w-full">
            <Image src={image} alt={name} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
          </div>
          
          <div className="p-8 md:p-10 space-y-8">
            <DialogHeader className="text-left">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3.5 rounded-2xl bg-primary text-white shadow-lg shadow-primary/20">
                  {icon}
                </div>
                <div>
                  <DialogTitle className="text-3xl font-extrabold tracking-tight">{name} Insurance</DialogTitle>
                  <Badge className="bg-accent/10 text-accent border-accent/20 mt-1">Premium Plan</Badge>
                </div>
              </div>
              <DialogDescription className="text-lg leading-relaxed text-foreground/80 font-medium">
                {longDescription || description}
              </DialogDescription>
            </DialogHeader>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-5">
                <h5 className="font-bold text-primary flex items-center gap-2 text-sm uppercase tracking-wider">
                  <Shield className="w-4 h-4 text-accent" /> Key Coverage Benefits
                </h5>
                <ul className="grid gap-3">
                  {(features || ["24/7 Claim Support", "Flexible Premiums", "Global Coverage", "Expert Consultation"]).map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground group">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 group-hover:scale-110 transition-transform" /> 
                      <span className="group-hover:text-foreground transition-colors">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-[2rem] bg-accent/5 border border-accent/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 opacity-10">
                   <Sparkles className="w-12 h-12 text-accent" />
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="font-bold text-xs uppercase tracking-widest text-accent">AI Smart Analysis</span>
                </div>
                {loading ? (
                  <div className="flex flex-col gap-3 py-4">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground animate-pulse">
                      <Loader2 className="w-4 h-4 animate-spin text-accent" /> Generating intelligent summary...
                    </div>
                    <div className="h-2 w-full bg-accent/10 rounded-full animate-pulse" />
                    <div className="h-2 w-2/3 bg-accent/10 rounded-full animate-pulse" />
                  </div>
                ) : (
                  <p className="text-sm italic text-foreground/90 leading-relaxed relative z-10">
                    "{summary || "Our AI is analyzing your specific coverage options to provide a tailored summary..."}"
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 pb-2">
              <Button className="flex-1 bg-accent hover:bg-accent/90 text-white font-bold h-14 rounded-2xl shadow-xl shadow-accent/20 transition-all hover:scale-[1.02] active:scale-95">
                Begin Application
              </Button>
              <Button variant="outline" className="flex-1 h-14 rounded-2xl border-2 font-bold hover:bg-accent/5 transition-all">
                Download Terms (PDF)
              </Button>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}