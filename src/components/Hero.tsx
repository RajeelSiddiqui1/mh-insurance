"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Star, Activity, Briefcase, Heart } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

const heroSlides = [
  {
    title: "rajeel siddiqui",
    subtitle: "Elite Family Protection",
    description: "Tailored life and health solutions designed for the ones you love most.",
    image: "/assets/children.jpg",
    icon: <Heart className="w-6 h-6" />,
    hint: "happy family"
  },
  {
    title: "Secure Your Global Enterprise",
    subtitle: "Corporate Risk Management",
    description: "Expert industrial coverage that keeps your business moving forward in a changing world.",
    image: "/assets/health.jpg",
    icon: <Briefcase className="w-6 h-6" />,
    hint: "modern skyscraper"
  },
  {
    title: "Innovating Health & Wellness",
    subtitle: "Next-Gen Medical Care",
    description: "Access premium healthcare networks and digital wellness tools globally.",
    image: "/assets/life.jpg",
    icon: <Activity className="w-6 h-6" />,
    hint: "medical facility"
  }
];

export function Hero() {
  const plugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true })
  );

  return (
    <section className="relative w-full overflow-hidden hero-gradient pt-20">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[85vh] min-h-[700px] w-full flex items-center">
                {/* Background Layer */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover opacity-10 dark:opacity-20"
                    priority={index === 0}
                    data-ai-hint={slide.hint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background/95 lg:bg-gradient-to-r lg:from-background lg:via-background/80 lg:to-transparent" />
                </div>

                <div className="container relative z-10 mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8 animate-fade-in text-center lg:text-left">
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase border border-accent/20">
                      <Star className="w-4 h-4 fill-accent" />
                      {slide.subtitle}
                    </div>
                    
                    <div className="space-y-4">
                      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] text-primary dark:text-white">
                        {slide.title.split(' ').map((word, i) => (
                          <span key={i} className={i === 2 ? "text-accent block" : ""}>{word} </span>
                        ))}
                      </h1>
                      <p className="text-xl text-muted-foreground max-w-lg leading-relaxed mx-auto lg:mx-0">
                        {slide.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                      <Button size="lg" className="bg-primary dark:bg-accent hover:scale-105 transition-transform text-white font-bold h-16 px-10 rounded-2xl shadow-2xl">
                        Get Your Free Quote <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                      <div className="flex -space-x-3 overflow-hidden">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="inline-block h-10 w-10 rounded-full ring-2 ring-background bg-slate-200 dark:bg-slate-800">
                             <Image src={`https://picsum.photos/seed/user-${i}/100/100`} width={40} height={40} alt="user" className="rounded-full" />
                          </div>
                        ))}
                        <div className="flex items-center justify-center h-10 px-3 rounded-full bg-accent/20 text-accent text-[10px] font-bold border border-accent/20">
                          +10k
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-6">
                      <div className="flex items-center gap-2 text-sm font-bold text-primary/70 dark:text-white/70">
                        <ShieldCheck className="w-5 h-5 text-accent" /> A+ Rating
                      </div>
                      <div className="flex items-center gap-2 text-sm font-bold text-primary/70 dark:text-white/70">
                        <ShieldCheck className="w-5 h-5 text-accent" /> Fast Payouts
                      </div>
                    </div>
                  </div>

                  <div className="hidden lg:block relative group">
                    <div className="absolute -inset-4 bg-accent/20 rounded-[4rem] blur-3xl opacity-30 group-hover:opacity-50 transition-opacity" />
                    <div className="relative rounded-[3.5rem] overflow-hidden shadow-[0_48px_80px_-16px_rgba(0,0,0,0.4)] border-8 border-white/50 dark:border-slate-800/50 backdrop-blur-md animate-float">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        width={700}
                        height={800}
                        className="object-cover h-[550px] w-full"
                        data-ai-hint={slide.hint}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-60" />
                      <div className="absolute bottom-8 left-8 right-8 p-6 glass-card rounded-3xl">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-accent text-white rounded-2xl">
                             {slide.icon}
                          </div>
                          <div>
                            <div className="font-black text-white">Guaranteed Payout</div>
                            <div className="text-xs text-white/70">Secure, Simple, Transparent</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-12 right-24 flex gap-4">
          <CarouselPrevious className="static translate-y-0 h-14 w-14 rounded-2xl border-2 hover:bg-accent/10" />
          <CarouselNext className="static translate-y-0 h-14 w-14 rounded-2xl border-2 hover:bg-accent/10" />
        </div>
      </Carousel>
    </section>
  );
}