
"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

export function ServiceCard({ id, name, description, image, icon }: ServiceCardProps) {
  return (
    <Link href={`/services/${id}`}>
      <Card className="group cursor-pointer border-2 border-transparent hover:border-accent/20 transition-all duration-500 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] dark:bg-slate-900/40 overflow-hidden relative rounded-[2rem] h-full">
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

        <CardContent className="pt-6 pb-8 flex flex-col justify-between">
          <p className="text-muted-foreground text-sm line-clamp-2 mb-6 leading-relaxed">
            {description}
          </p>
          
          <div className="flex items-center justify-between mt-auto">
             <Badge variant="secondary" className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all border-none">
               Learn More
             </Badge>
             <div className="w-8 h-8 rounded-full bg-accent/5 flex items-center justify-center group-hover:bg-accent transition-all">
                <ArrowRight className="w-4 h-4 text-accent group-hover:text-white transition-all" />
             </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
