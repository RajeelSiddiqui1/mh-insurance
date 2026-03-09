
"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { blogPosts } from "@/app/lib/blog-data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BlogListingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h1 className="text-accent font-black tracking-widest uppercase text-xs">Knowledge Center</h1>
            <h2 className="text-5xl font-black text-primary dark:text-white tracking-tighter">Insights for Your Security</h2>
            <p className="text-muted-foreground text-lg">Stay informed with the latest trends, safety tips, and financial planning advice from our experts.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link href={`/blog/${post.id}`} key={post.id} className="group">
                <Card className="rounded-[2.5rem] overflow-hidden border-2 border-transparent hover:border-accent/20 transition-all duration-500 hover:shadow-2xl h-full flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-6 left-6">
                      <Badge className="bg-accent text-white border-none px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-6 text-[10px] text-muted-foreground font-bold uppercase tracking-widest mb-4">
                      <span className="flex items-center gap-2"><Calendar className="w-3 h-3 text-accent" /> {post.date}</span>
                      <span className="flex items-center gap-2"><Clock className="w-3 h-3 text-accent" /> {post.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-black text-primary dark:text-white leading-tight mb-4 group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-8 flex-1 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-primary/5">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <User className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-xs font-bold text-primary/70">{post.author}</span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-accent group-hover:translate-x-2 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
