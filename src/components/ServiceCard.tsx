"use client";

import * as React from "react";
import { Sparkles, Loader2, ArrowRight, CheckCircle2, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { aiServiceSummary } from "@/ai/flows/ai-service-summary";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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

      <DialogContent className="max-w-2xl rounded-3xl overflow-hidden p-0 border-none">
        <div className="relative h-64">
          <Image src={image} alt={name} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        </div>
        <div className="p-8 space-y-6">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-3 rounded-xl bg-primary text-white">
                {icon}
              </div>
              <DialogTitle className="text-3xl font-bold">{name} Insurance</DialogTitle>
            </div>
            <DialogDescription className="text-lg leading-relaxed pt-2">
              {longDescription || description}
            </DialogDescription>
          </DialogHeader>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h5 className="font-bold text-primary flex items-center gap-2">
                <Shield className="w-4 h-4 text-accent" /> Key Benefits
              </h5>
              <ul className="space-y-2">
                {(features || ["24/7 Claim Support", "Flexible Premiums", "Global Coverage"]).map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-500" /> {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-accent/5 border border-accent/10">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="font-bold text-sm">AI Intelligent Analysis</span>
              </div>
              {loading ? (
                <div className="flex items-center gap-2 text-sm text-muted-foreground animate-pulse">
                  <Loader2 className="w-3 h-3 animate-spin" /> Analyzing coverage...
                </div>
              ) : (
                <p className="text-sm italic text-foreground/80 leading-relaxed">
                  "{summary || "Loading intelligent summary..."}"
                </p>
              )}
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <Button className="flex-1 bg-accent hover:bg-accent/90 text-white font-bold h-12 rounded-xl">
              Apply Now
            </Button>
            <Button variant="outline" className="flex-1 h-12 rounded-xl">
              Download Policy PDF
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
