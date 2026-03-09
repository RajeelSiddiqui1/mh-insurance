
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { Footer } from "@/components/Footer";
import { services } from "@/app/lib/services-data";
import { blogPosts } from "@/app/lib/blog-data";
import { 
  ShieldCheck, 
  Zap, 
  Users, 
  Award,
  ArrowRight,
  Calendar,
  Clock
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main>
        <Hero />

        {/* Stats Section */}
        <section className="py-12 bg-primary relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: "Active Policies", val: "2.5M+", icon: <ShieldCheck className="w-5 h-5 text-accent" /> },
                { label: "Claims Paid", val: "$4.2B", icon: <Zap className="w-5 h-5 text-accent" /> },
                { label: "Expert Advisors", val: "15,000", icon: <Users className="w-5 h-5 text-accent" /> },
                { label: "Awards Won", val: "128", icon: <Award className="w-5 h-5 text-accent" /> }
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-4 text-white">
                  <div className="p-3 bg-white/10 rounded-2xl">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{stat.val}</div>
                    <div className="text-xs text-white/60 uppercase tracking-widest font-semibold">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -ml-48 -mb-48" />
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-accent font-bold tracking-[0.2em] uppercase text-xs">Our Expert Coverage</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary dark:text-white">
                Protection Designed <br /> For Every Chapter
              </h3>
              <p className="text-muted-foreground text-lg">
                From corporate giants to growing families, we provide the safety net you need to thrive with confidence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  id={service.id}
                  name={service.name}
                  description={service.description}
                  image={service.image}
                  icon={service.icon}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Blog Preview Section */}
        <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
              <div className="space-y-4 max-w-2xl">
                <h2 className="text-accent font-bold tracking-[0.2em] uppercase text-xs">Knowledge Center</h2>
                <h3 className="text-4xl font-extrabold text-primary dark:text-white">Latest from Our Experts</h3>
                <p className="text-muted-foreground text-lg">Explore our latest insights on risk management, financial safety, and industry innovation.</p>
              </div>
              <Link href="/blog">
                <Button variant="outline" className="rounded-full px-8 h-14 border-2 font-bold group">
                  View All Posts <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.slice(0, 3).map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`} className="group">
                   <Card className="rounded-[2.5rem] overflow-hidden border-none shadow-xl h-full flex flex-col group-hover:-translate-y-2 transition-transform duration-500">
                      <div className="relative h-56 overflow-hidden">
                        <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                      </div>
                      <CardContent className="p-8 flex-1 flex flex-col">
                        <div className="flex items-center gap-4 text-[10px] text-muted-foreground font-bold uppercase tracking-widest mb-4">
                          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                        </div>
                        <h4 className="text-xl font-bold text-primary dark:text-white group-hover:text-accent transition-colors line-clamp-2 mb-4">
                          {post.title}
                        </h4>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-6 flex-1">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest">
                          Read Full Article <ArrowRight className="w-4 h-4" />
                        </div>
                      </CardContent>
                   </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 hero-gradient">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-4xl mx-auto glass-card p-12 md:p-20 rounded-[3rem] space-y-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/5 to-primary/5 pointer-events-none" />
              <h3 className="text-4xl md:text-5xl font-extrabold text-primary dark:text-white relative z-10">
                Secure your future with <br className="hidden md:block" /> elite protection today.
              </h3>
              <p className="text-muted-foreground text-xl max-w-2xl mx-auto relative z-10">
                Join over 2.5 million policyholders who trust MH Insurance for their security and peace of mind.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto relative z-10">
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="w-full sm:w-auto flex-1 h-14 px-6 rounded-2xl border-2 bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                />
                <Button className="w-full sm:w-auto bg-primary text-white dark:bg-accent dark:text-white px-10 h-14 rounded-2xl font-bold hover:scale-105 active:scale-95 shadow-xl transition-all">
                  Get Free Quote
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
