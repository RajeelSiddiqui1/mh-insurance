
"use client";

import * as React from "react";
import { Sparkles, Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { aiServiceSummary } from "@/ai/flows/ai-service-summary";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  name: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

export function ServiceCard({ name, description, icon, delay = 0 }: ServiceCardProps) {
  const [summary, setSummary] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

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
    <Card 
      className="group service-card-hover border-none shadow-sm dark:bg-slate-800 overflow-hidden relative"
      onMouseEnter={() => {
        setIsHovered(true);
        fetchSummary();
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-accent scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />
      
      <CardHeader className="pb-2">
        <div className="mb-4 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
        <CardTitle className="text-xl font-bold flex items-center gap-2">
          {name}
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="min-h-[60px] relative">
          {loading ? (
            <div className="flex items-center gap-2 text-xs text-accent animate-pulse mt-2">
              <Loader2 className="w-3 h-3 animate-spin" />
              AI generating summary...
            </div>
          ) : summary ? (
            <div className={cn(
              "p-3 rounded-lg bg-accent/5 border border-accent/10 text-xs italic text-foreground/80 transition-all duration-500 transform",
              isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            )}>
              <div className="flex items-center gap-1 mb-1 font-semibold text-accent not-italic">
                <Sparkles className="w-3 h-3" /> AI Summary
              </div>
              "{summary}"
            </div>
          ) : (
             <Badge variant="outline" className="text-[10px] opacity-50 group-hover:opacity-100 transition-opacity">
               Hover to learn more
             </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
