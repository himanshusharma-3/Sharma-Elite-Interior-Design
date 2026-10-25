import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Award, Hammer, Star } from "lucide-react";
import { HeroScene } from "@/components/site/HeroScene";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { BudgetEstimator } from "@/components/site/BudgetEstimator";
import { ProcessSteps } from "@/components/site/ProcessSteps";
import { TestimonialMarquee } from "@/components/site/TestimonialMarquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sharma Elite Interior Studio — Elegant Interiors in Kolkata & Hooghly" },
      { name: "description", content: "Award-winning interior design in Serampore, Hooghly & Kolkata. Modular kitchens, bedrooms, living rooms, and commercial interiors by Janardan Lal Sharma." },
      { property: "og:title", content: "Sharma Elite Interior Studio" },
      { property: "og:description", content: "Elegant, affordable interiors across Kolkata & Hooghly." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Marquee />
      <ServicesPreview />
      <PortfolioPreview />
      <EstimatorSection />
      <ProcessSection />
      <Testimonials />
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(oklch(0.9_0.1_85)_1px,transparent_1px),linear-gradient(90deg,oklch(0.9_0.1_85)_1px,transparent_1px)] [background-size:60px_60px]" />
      <div className="container mx-auto px-6 pt-24 pb-32 grid lg:grid-cols-2 gap-12 items-center relative">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-gold" />
            <span className="text-xs tracking-[0.3em] uppercase text-gold">Est. 2024 · Serampore</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl leading-[1.05] text-balance"
          >
            Interiors crafted for <span className="gold-text">a lifetime of moments.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl"
          >
            Sharma Elite Interior Studio designs and builds elegant, livable spaces across Kolkata & Hooghly — from intimate 1BHK homes to boutique commercial interiors.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="mt-10 flex flex-wrap gap-4">
            <Link to="/contact" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-gold text-primary-foreground font-medium shadow-gold hover:scale-[1.03] transition-transform">
              Book Free Site Visit <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/portfolio" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-gold/40 text-foreground hover:bg-gold/10 transition-colors">
              Explore Portfolio
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { v: "80+", l: "Projects Delivered" },
              { v: "1+", l: "Year of Craft" },
              { v: "20yr", l: "Written Warranty" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl gold-text">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <HeroScene />
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Modular Kitchens", "False Ceilings", "Wardrobes", "TV Units", "Pooja Units", "Commercial", "Bespoke Furniture", "Wall Panelling"];
  return (
    <div className="border-y border-border/60 bg-navy-deep py-6 overflow-hidden">
      <motion.div className="flex gap-12 w-max" animate={{ x: ["0%", "-50%"] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
        {[...items, ...items, ...items].map((t, i) => (
          <div key={i} className="flex items-center gap-12 text-gold/80 font-display text-2xl">
            <span>{t}</span>
            <Star className="w-3 h-3 fill-gold text-gold" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function ServicesPreview() {
  return (
    <section className="py-28 container mx-auto px-6">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
        <SectionHeading eyebrow="What we do" title="A complete studio under one roof." subtitle="From the first sketch to the last finishing nail — design, manufacture and installation, all by our in-house team." />
        <Link to="/services" className="text-sm text-gold hover:underline">All services →</Link>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.slice(0, 6).map((s, i) => (
          <Reveal key={s.slug} delay={i * 0.05}>
            <div className="group h-full rounded-2xl gold-border bg-card/40 p-8 hover:bg-card/80 transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center mb-5 shadow-gold">
                <s.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-xl mb-1">{s.title}</h3>
              <div className="text-xs uppercase tracking-[0.2em] text-gold mb-3">{s.tagline}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function PortfolioPreview() {
  const show = projects.slice(0, 6);
  return (
    <section className="py-28 bg-navy-deep">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <SectionHeading eyebrow="Recent work" title="Selected projects." subtitle="A glimpse into homes and spaces we've recently brought to life." />
          <Link to="/portfolio" className="text-sm text-gold hover:underline">View full portfolio →</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {show.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.06}>
              <div className="group relative aspect-[4/5] rounded-2xl overflow-hidden gold-border">
                <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-2">{p.category}</div>
                  <h4 className="text-lg font-display">{p.title}</h4>
                  <p className="text-xs text-muted-foreground">{p.location}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function EstimatorSection() {
  return (
    <section className="py-28 container mx-auto px-6">
      <div className="text-center mb-12">
        <SectionHeading align="center" eyebrow="Plan your investment" title="Get an indicative budget in 30 seconds." />
      </div>
      <BudgetEstimator />
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="py-28 container mx-auto px-6">
      <div className="mb-14">
        <SectionHeading eyebrow="How we work" title="A process refined over a decade." />
      </div>
      <ProcessSteps />

      <div className="mt-16 grid md:grid-cols-3 gap-5">
        {[
          { icon: ShieldCheck, t: "20-Year Written Warranty", d: "On modular hardware and workmanship — in writing." },
          { icon: Hammer, t: "In-House Workshop", d: "Tight quality control. No subcontracting of core builds." },
          { icon: Award, t: "Transparent Pricing", d: "Clear scope, clear costs. No surprises after move-in." },
        ].map((b, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className="rounded-2xl gold-border bg-card/40 p-7 flex gap-4 items-start">
              <div className="w-11 h-11 rounded-xl bg-gradient-gold flex items-center justify-center shrink-0">
                <b.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h4 className="text-lg mb-1">{b.t}</h4>
                <p className="text-sm text-muted-foreground">{b.d}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-28">
      <div className="container mx-auto px-6 mb-14">
        <SectionHeading align="center" eyebrow="Words from our clients" title="Trusted by 80+ families & businesses." />
      </div>
      <TestimonialMarquee />
    </section>
  );
}

function CTA() {
  return (
    <section className="container mx-auto px-6 pb-12">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-navy gold-border p-12 md:p-20 text-center">
        <div className="absolute inset-0 opacity-30 shimmer" />
        <div className="relative">
          <Reveal>
            <h2 className="font-display text-4xl md:text-6xl text-balance">
              Ready to design <span className="gold-text">your forever home?</span>
            </h2>
            <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
              Book a free, no-obligation site visit with our design team. We'll handle measurements, mood boards and a transparent quote.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-gold text-primary-foreground font-medium shadow-gold hover:scale-[1.03] transition-transform">
              Book Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
