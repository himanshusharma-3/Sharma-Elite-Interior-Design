import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/site/SectionHeading";

const categories = ["All", "Residential", "Modular Kitchen", "Commercial", "Bespoke"] as const;

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Sharma Elite Interior Studio" },
      { name: "description", content: "Selected residential, modular kitchen, bespoke and commercial interior projects across Kolkata & Hooghly." },
      { property: "og:title", content: "Portfolio — Sharma Elite Interior Studio" },
      { property: "og:description", content: "A gallery of recently completed interiors." },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const filtered = cat === "All" ? projects : projects.filter((p) => p.category === cat);

  return (
    <section className="container mx-auto px-6 py-24">
      <SectionHeading eyebrow="Portfolio" title="Recently designed & delivered." subtitle="Browse a curated selection of our work. Each project is built to last — and to age beautifully." />

      <div className="flex flex-wrap gap-2 mt-12 mb-10">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`px-5 py-2 rounded-full text-sm border transition-all ${
              cat === c ? "bg-gradient-gold text-primary-foreground border-transparent shadow-gold" : "border-border text-muted-foreground hover:text-foreground hover:border-gold/50"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className={`group relative rounded-2xl overflow-hidden gold-border ${p.span === "wide" ? "lg:col-span-2" : ""} ${p.span === "tall" ? "row-span-2" : ""}`}
              style={{ aspectRatio: p.span === "wide" ? "16/9" : p.span === "tall" ? "3/4" : "4/5" }}
            >
              <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/20 to-transparent opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-2">{p.category}</div>
                <h4 className="font-display text-xl">{p.title}</h4>
                <p className="text-xs text-muted-foreground mt-1">{p.location}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
