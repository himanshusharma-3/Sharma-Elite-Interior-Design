import { Reveal } from "./Reveal";

const steps = [
  { n: "01", t: "Discover", d: "Free consultation & site visit. We listen to lifestyle, taste and budget." },
  { n: "02", t: "Design", d: "Mood boards, layouts and 3D visualisations until every corner feels right." },
  { n: "03", t: "Craft", d: "Workshop-built modules with premium hardware and tight on-site supervision." },
  { n: "04", t: "Handover", d: "Snag-free handover, styling and a written warranty that protects your investment." },
];

export function ProcessSteps() {
  return (
    <div className="grid md:grid-cols-4 gap-6">
      {steps.map((s, i) => (
        <Reveal key={s.n} delay={i * 0.08}>
          <div className="relative h-full rounded-2xl gold-border bg-card/40 p-7 hover:bg-card/70 transition-colors group">
            <div className="font-display text-5xl gold-text mb-4">{s.n}</div>
            <h4 className="text-xl mb-2">{s.t}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            <div className="absolute top-7 right-7 w-2 h-2 rounded-full bg-gold opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </Reveal>
      ))}
    </div>
  );
}
