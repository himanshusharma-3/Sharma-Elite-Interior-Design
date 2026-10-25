import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const PHONE = "+91 79800 80592";
const PHONE_HREF = "tel:+917980080592";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[oklch(0.18_0.04_260/0.75)] border-b border-border/50">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-md bg-gradient-gold flex items-center justify-center font-display font-bold text-primary-foreground shadow-gold">
            S
          </div>
          <div className="leading-tight">
            <div className="font-display text-base text-foreground">Sharma Elite</div>
            <div className="text-[10px] tracking-[0.3em] text-gold uppercase">Interior Studio</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-muted-foreground hover:text-gold transition-colors relative"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <a
          href={PHONE_HREF}
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-gold text-primary-foreground text-sm font-medium shadow-gold hover:scale-105 transition-transform"
        >
          <Phone className="w-4 h-4" /> Free Consultation
        </a>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-navy-deep">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="text-sm py-2 text-muted-foreground hover:text-gold">
                {n.label}
              </Link>
            ))}
            <a href={PHONE_HREF} className="mt-2 px-4 py-2 rounded-full bg-gradient-gold text-primary-foreground text-sm font-medium text-center">
              Call {PHONE}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

