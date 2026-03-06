
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden hero-gradient">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Top Rated Insurance Provider
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                Protect What <br />
                <span className="text-primary italic">Matters</span> Most
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Commercial, Home, Auto, Life & More. We provide tailored insurance solutions to secure your future and assets.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold h-14 px-8 rounded-full transition-transform hover:scale-105 active:scale-95 text-lg">
                Get a Quote <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 rounded-full font-semibold text-lg">
                Our Coverage
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pt-4">
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-accent" /> Secure & Reliable
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-accent" /> 24/7 Expert Support
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-accent" /> Fast Claim Process
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block animate-fade-in [animation-delay:200ms]">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800 transform rotate-2 hover:rotate-0 transition-transform duration-700">
              <Image
                src="https://picsum.photos/seed/insurance-hero/800/600"
                alt="Happy family enjoying security"
                width={800}
                height={600}
                className="object-cover w-full h-full"
                data-ai-hint="family security"
                priority
              />
            </div>
            {/* Floating stats card */}
            <div className="absolute bottom-10 -left-6 bg-background p-4 rounded-2xl shadow-xl border animate-bounce-slow">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-bold">5★</span>
                </div>
                <div>
                  <div className="text-sm font-bold">10k+ Happy Clients</div>
                  <div className="text-[10px] text-muted-foreground">Trusted across the country</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
