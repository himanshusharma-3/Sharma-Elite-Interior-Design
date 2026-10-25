import { motion } from "framer-motion";

const items = [
  { name: "Riya & Arnab", role: "3BHK · New Town", quote: "Sharma Elite turned our empty flat into a magazine cover. The detailing on the TV wall is unreal." },
  { name: "Soumitra Ghosh", role: "Boutique Office · Park Street", quote: "Delivered on time, on budget. Janardan ji personally supervised every milestone." },
  { name: "Megha Kapoor", role: "2BHK · Salt Lake", quote: "The modular kitchen is everything we dreamed of. Hardware feels premium even after a year." },
  { name: "Anirban Sen", role: "Villa · Serampore", quote: "Beautiful craftsmanship and a team that genuinely cares. Worth every rupee." },
  { name: "Pooja Mehta", role: "1BHK · Howrah", quote: "Tight budget, huge transformation. They made small feel grand." },
];

export function TestimonialMarquee() {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
      <motion.div
        className="flex gap-5 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        {row.map((t, i) => (
          <div key={i} className="w-[360px] rounded-2xl gold-border bg-card/50 p-7 shrink-0">
            <div className="text-gold font-display text-3xl leading-none mb-3">"</div>
            <p className="text-foreground/90 leading-relaxed text-sm">{t.quote}</p>
            <div className="mt-5 pt-4 border-t border-border/60">
              <div className="font-medium">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
