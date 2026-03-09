
"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in">
            <h1 className="text-accent font-black tracking-widest uppercase text-xs">Get In Touch</h1>
            <h2 className="text-5xl font-black text-primary dark:text-white tracking-tighter">How Can We Help?</h2>
            <p className="text-muted-foreground text-lg">Whether you have a question about a policy or need help with a claim, our team is here for you 24/7.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info Side */}
            <div className="space-y-8 animate-fade-in">
              {[
                { icon: <Phone className="w-6 h-6" />, title: "Call Us", detail: "+1 (555) 123-4567", desc: "Available 24/7 for urgent claims." },
                { icon: <Mail className="w-6 h-6" />, title: "Email Us", detail: "support@mhinsurance.com", desc: "We usually respond within 2 hours." },
                { icon: <MapPin className="w-6 h-6" />, title: "Visit Us", detail: "123 Security Ave, NY", desc: "Financial District, New York." },
                { icon: <Clock className="w-6 h-6" />, title: "Office Hours", detail: "Mon - Fri, 9am - 6pm", desc: "Weekends by appointment only." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-[2rem] bg-primary/5 border border-primary/10 hover:border-accent/30 transition-all group">
                   <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 text-accent shadow-sm group-hover:bg-accent group-hover:text-white transition-all">
                      {item.icon}
                   </div>
                   <div className="space-y-1">
                      <h4 className="font-bold text-primary dark:text-white">{item.title}</h4>
                      <p className="text-lg font-black text-foreground">{item.detail}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                   </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 animate-fade-in [animation-delay:200ms]">
              <Card className="rounded-[3rem] overflow-hidden border-none shadow-2xl glass-card p-8 md:p-12">
                <CardContent className="p-0 space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-2">Full Name</label>
                      <Input placeholder="John Doe" className="h-14 rounded-2xl bg-background/50 border-2 focus:border-accent transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-2">Email Address</label>
                      <Input placeholder="john@company.com" className="h-14 rounded-2xl bg-background/50 border-2 focus:border-accent transition-all" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-2">Phone Number</label>
                      <Input placeholder="+1 (555) 000-0000" className="h-14 rounded-2xl bg-background/50 border-2 focus:border-accent transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-2">Interest</label>
                      <select className="w-full h-14 rounded-2xl bg-background/50 border-2 focus:border-accent transition-all px-4 text-sm font-medium outline-none">
                        <option>Commercial Insurance</option>
                        <option>Personal Home/Auto</option>
                        <option>Life & Health</option>
                        <option>General Inquiry</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-2">Your Message</label>
                    <Textarea placeholder="How can we help you today?" className="min-h-[150px] rounded-[2rem] bg-background/50 border-2 focus:border-accent transition-all p-6" />
                  </div>
                  <Button className="w-full bg-primary dark:bg-accent text-white h-16 rounded-2xl font-black text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-xl">
                    Send Message <Send className="ml-2 w-5 h-5" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
