
"use client";

import { useParams } from "next/navigation";
import { blogPosts } from "@/app/lib/blog-data";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Calendar, User, ArrowLeft, Clock, Share2, Bookmark } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function BlogPostDetailPage() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <h1 className="text-4xl font-bold">Post Not Found</h1>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
            <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors group mb-4">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Blog
            </Link>

            <div className="space-y-6">
              <Badge className="bg-accent/10 text-accent border-accent/20 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                {post.category}
              </Badge>
              <h1 className="text-5xl md:text-6xl font-black text-primary dark:text-white leading-[1.1] tracking-tighter">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-8 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border-2 border-white dark:border-slate-800">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">{post.author}</div>
                    <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Expert Advisor</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground border-l pl-8 h-10">
                  <Calendar className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium">{post.date}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground border-l pl-8 h-10">
                  <Clock className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium">{post.readTime}</span>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800">
              <Image src={post.image} alt={post.title} fill className="object-cover" />
            </div>

            <div className="grid lg:grid-cols-4 gap-12 items-start">
              <div className="lg:col-span-3 space-y-8">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  {post.content.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="text-xl text-muted-foreground leading-relaxed mb-6 font-medium">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-12 border-t border-primary/5">
                  <div className="flex gap-4">
                    <Button variant="outline" className="rounded-full gap-2 font-bold px-6">
                      <Share2 className="w-4 h-4" /> Share
                    </Button>
                    <Button variant="outline" className="rounded-full gap-2 font-bold px-6">
                      <Bookmark className="w-4 h-4" /> Save
                    </Button>
                  </div>
                  <Badge variant="secondary" className="bg-primary/5 text-primary border-none px-6 py-2 rounded-full">
                    #InsuranceInsights
                  </Badge>
                </div>
              </div>

              <div className="hidden lg:block space-y-8 sticky top-32">
                <div className="p-8 rounded-[2rem] bg-accent/5 border border-accent/10 space-y-6">
                  <h3 className="text-xl font-bold text-primary dark:text-white">Related Topics</h3>
                  <div className="space-y-4">
                    {["Policy Management", "Risk Assessment", "Future Trends"].map((tag) => (
                      <Link key={tag} href="#" className="block p-4 rounded-xl bg-white dark:bg-slate-900 border hover:border-accent transition-all text-sm font-bold text-muted-foreground hover:text-accent">
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="p-8 rounded-[2.5rem] bg-primary text-white text-center space-y-6">
                   <h4 className="text-xl font-bold">Secure Your Future</h4>
                   <p className="text-white/60 text-xs leading-relaxed">Join 2.5 million others in the elite protection circle.</p>
                   <Link href="/contact" className="block w-full">
                    <Button className="w-full bg-accent text-white h-12 rounded-xl font-bold">Get a Quote</Button>
                   </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
