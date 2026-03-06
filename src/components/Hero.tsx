"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Star } from "lucide-react";
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
    title: "Protect Your Family's Future",
    subtitle: "Comprehensive Life & Health Insurance",
    description: "Get the peace of mind you deserve with our tailored family protection plans.",
    image: "https://picsum.photos/seed/family-home/1200/800",
    hint: "family security"
  },
  {
    title: "Secure Your Business Assets",
    subtitle: "Commercial & Liability Coverage",
    description: "Protect your enterprise from unforeseen risks with our expert industrial solutions.",
    image: "https://picsum.photos/seed/business-office/1200/800",
    hint: "business building"
  },
  {
    title: "Drive with Total Confidence",
    subtitle: "Premium Auto & Travel Insurance",
    description: "Whether it's your daily commute or a global adventure, we've got you covered.",
    image: "https://picsum.photos/seed/luxury-car/1200/800",
    hint: "premium car"
  }
];

export function Hero() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="relative w-full overflow-hidden hero-gradient">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[80vh] min-h-[600px] w-full flex items-center">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover opacity-20 dark:opacity-10"
                    priority={index === 0}
                    data-ai-hint={slide.hint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
                </div>

                <div className="container relative z-10 mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8 animate-fade-in">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-bold border border-accent/20">
                      <Star className="w-4 h-4 fill-accent" />
                      {slide.subtitle}
                    </div>
                    
                    <div className="space-y-4">
                      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-primary">
                        {slide.title.split(' ').map((word, i) => (
                          <span key={i} className={i === 2 ? "text-accent block italic" : ""}>{word} </span>
                        ))}
                      </h1>
                      <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                        {slide.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold h-14 px-8 rounded-full shadow-lg hover:shadow-primary/25 transition-all">
                        Get Instant Quote <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                      <Button size="lg" variant="outline" className="h-14 px-8 rounded-full border-2 font-bold hover:bg-accent/5">
                        Consult an Expert
                      </Button>
                    </div>

                    <div className="flex items-center gap-6 pt-4 text-sm font-semibold text-primary/70">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-accent" /> Guaranteed Safety
                      </div>
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-accent" /> 24/7 Rapid Response
                      </div>
                    </div>
                  </div>

                  <div className="hidden lg:block relative animate-float">
                    <div className="relative rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] border-8 border-white/50 backdrop-blur-sm">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        width={600}
                        height={700}
                        className="object-cover h-[500px] w-full"
                        data-ai-hint={slide.hint}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-8 right-24 flex gap-4">
          <CarouselPrevious className="static translate-y-0 h-12 w-12 border-2" />
          <CarouselNext className="static translate-y-0 h-12 w-12 border-2" />
        </div>
      </Carousel>
    </section>
  );
}