import { createFileRoute, Link } from "@tanstack/react-router";
import { services } from "@/data/services";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Sharma Elite Interior Studio" },
      { name: "description", content: "Modular kitchens, bedrooms, living rooms, commercial interiors and bespoke detailing across Kolkata & Hooghly." },
      { property: "og:title", content: "Services — Sharma Elite Interior Studio" },
      { property: "og:description", content: "A complete studio: design, manufacture and installation under one roof." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="container mx-auto px-6 py-24">
        <SectionHeading
          eyebrow="Services"
          title="Everything your space needs — under one roof."
          subtitle="From a single TV wall to a full home turnkey, our in-house design and execution team delivers without subcontracting the work that matters."
        />
      </section>

      <section className="container mx-auto px-6 pb-28 space-y-6">
        {services.map((s, i) => (
          <Reveal key={s.slug} delay={i * 0.05}>
            <article className="grid md:grid-cols-[1fr_1.4fr] gap-6 rounded-3xl gold-border bg-card/40 p-8 md:p-12 hover:bg-card/70 transition-colors">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-gold flex items-center justify-center shadow-gold mb-6">
                  <s.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-xs uppercase tracking-[0.25em] text-gold mb-2">{s.tagline}</div>
                <h2 className="font-display text-3xl md:text-4xl">{s.title}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{s.description}</p>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-gold hover:gap-3 transition-all">
                  Enquire about this service <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid sm:grid-cols-2 gap-3 content-start">
                {s.features.map((f) => (
                  <div key={f} className="flex items-start gap-3 p-4 rounded-xl bg-navy/40 border border-border/60">
                    <Check className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                    <span className="text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </>
  );
}
