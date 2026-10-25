import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { Award, Heart, Hammer, Eye } from "lucide-react";
import founderImg from "@/assets/founder.png";


export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sharma Elite Interior Studio" },
      { name: "description", content: "Founded by Janardan Lal Sharma, Sharma Elite Interior Studio has been crafting elegant interiors in Kolkata & Hooghly since 2024." },
      { property: "og:title", content: "About — Sharma Elite Interior Studio" },
      { property: "og:description", content: "Meet the studio behind 80+ beautifully built homes." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Heart, t: "People first", d: "Every brief starts by listening — to your life, your taste, your budget." },
  { icon: Hammer, t: "Built in-house", d: "Our own workshop and craftspeople. No telephone-game with vendors." },
  { icon: Eye, t: "Detail obsessed", d: "From hinge selection to crown moulding, the details are the design." },
  { icon: Award, t: "Quietly proud", d: "Warranties in writing. Honest pricing. The work speaks for itself." },
];

function AboutPage() {
  return (
    <>
      <section className="container mx-auto px-6 py-24">
        <SectionHeading
          eyebrow="Our story"
          title="A studio built on craft, honesty & a love for beautiful homes."
          subtitle="What began in 2024 as a single workshop in Serampore is today a full-service interior studio trusted by 80+ families and businesses across Kolkata & Hooghly."
        />
      </section>

      <section className="container mx-auto px-6 pb-28 grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden gold-border shadow-elegant group">
            <img
              src={founderImg}
              alt="Janardan Lal Sharma — Founder of Sharma Elite Interior Studio"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <div className="text-[10px] tracking-[0.4em] uppercase text-gold mb-2">Founder</div>
              <div className="font-display text-3xl text-foreground">Janardan Lal Sharma</div>
              <div className="text-sm text-muted-foreground mt-1">Sharma Elite Interior Studio</div>
            </div>
            <div className="absolute inset-0 [background-image:radial-gradient(circle_at_30%_30%,oklch(0.78_0.13_80/0.15),transparent_60%)] pointer-events-none" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-gold mb-3">A note from the founder</div>
            <h3 className="font-display text-3xl md:text-4xl">"A home should feel like the truest version of you."</h3>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I founded Sharma Elite Interior Studio with a simple belief — that great design shouldn't be a luxury for the few. In a short but remarkable journey, our team has poured itself into building homes and spaces where families gather, businesses grow, and life happens.
              </p>
              <p>
                We're proud to be a homegrown studio from Serampore, serving Kolkata and Hooghly with the same care we'd give our own homes. If you've found your way here, we'd love to design yours.
              </p>
            </div>
            <div className="mt-8 font-display text-xl gold-text">— Janardan Lal Sharma</div>
          </div>
        </Reveal>
      </section>

      <section className="container mx-auto px-6 pb-28">
        <SectionHeading eyebrow="What we stand for" title="Four values, every project." />
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => (
            <Reveal key={v.t} delay={i * 0.06}>
              <div className="h-full rounded-2xl gold-border bg-card/40 p-7">
                <div className="w-11 h-11 rounded-xl bg-gradient-gold flex items-center justify-center mb-5 shadow-gold">
                  <v.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h4 className="text-lg mb-2">{v.t}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 pb-28">
        <div className="rounded-3xl bg-gradient-navy gold-border p-12 text-center">
          <h2 className="font-display text-3xl md:text-5xl">Let's design something <span className="gold-text">unforgettable.</span></h2>
          <Link to="/contact" className="mt-8 inline-flex px-8 py-3.5 rounded-full bg-gradient-gold text-primary-foreground font-medium shadow-gold hover:scale-[1.03] transition-transform">
            Start a project
          </Link>
        </div>
      </section>
    </>
  );
}
