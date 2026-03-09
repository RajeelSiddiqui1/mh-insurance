
import Link from "next/link";
import { ShieldCheck, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-primary">
                MH <span className="text-accent">Insurance</span>
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Securing futures since 1998. We are committed to providing reliable, transparent, and comprehensive insurance solutions for every stage of your life and business.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="p-2 bg-background rounded-full hover:text-accent border shadow-sm transition-all hover:scale-110">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href="#" className="p-2 bg-background rounded-full hover:text-accent border shadow-sm transition-all hover:scale-110">
                <Twitter className="w-4 h-4" />
              </Link>
              <Link href="#" className="p-2 bg-background rounded-full hover:text-accent border shadow-sm transition-all hover:scale-110">
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link href="#" className="p-2 bg-background rounded-full hover:text-accent border shadow-sm transition-all hover:scale-110">
                <Instagram className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/#services" },
                { name: "About Us", href: "/about" },
                { name: "Blog", href: "/blog" },
                { name: "Contact", href: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-4">
              {["Commercial", "Home & Auto", "Life Insurance", "Business", "Health Plans", "Travel Coverage"].map((link) => (
                <li key={link}>
                  <Link href="/#services" className="text-muted-foreground hover:text-accent transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span>123 Security Avenue, Financial District, New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span>support@mhinsurance.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} MH Insurance. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-accent">Privacy Policy</Link>
            <Link href="#" className="hover:text-accent">Terms of Service</Link>
            <Link href="#" className="hover:text-accent">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
