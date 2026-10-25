import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal>
      <div className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
        {eyebrow && (
          <div className={`flex items-center gap-3 mb-4 ${align === "center" ? "justify-center" : ""}`}>
            <span className="w-8 h-px bg-gold" />
            <span className="text-xs tracking-[0.3em] uppercase text-gold">{eyebrow}</span>
            <span className="w-8 h-px bg-gold" />
          </div>
        )}
        <h2 className="font-display text-4xl md:text-5xl text-balance">{title}</h2>
        {subtitle && <p className="mt-4 text-muted-foreground text-lg leading-relaxed">{subtitle}</p>}
      </div>
    </Reveal>
  );
}
