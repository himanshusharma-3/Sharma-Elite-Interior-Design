import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Sparkles } from "lucide-react";

const BHK = [
  { key: "1bhk", label: "1 BHK", base: 350000 },
  { key: "2bhk", label: "2 BHK", base: 600000 },
  { key: "3bhk", label: "3 BHK", base: 950000 },
  { key: "4bhk", label: "4 BHK / Villa", base: 1500000 },
];
const TIER = [
  { key: "essential", label: "Essential", mult: 1, note: "Curated essentials" },
  { key: "premium", label: "Premium", mult: 1.55, note: "Designer finishes" },
  { key: "luxury", label: "Luxury", mult: 2.2, note: "Bespoke & couture" },
];
const SCOPE = [
  { key: "kitchen", label: "Modular Kitchen", add: 120000 },
  { key: "wardrobes", label: "Wardrobes", add: 90000 },
  { key: "false-ceiling", label: "False Ceiling", add: 75000 },
  { key: "tv", label: "TV / Wall Unit", add: 60000 },
  { key: "pooja", label: "Pooja Unit", add: 45000 },
  { key: "lighting", label: "Designer Lighting", add: 40000 },
];

const fmt = (n: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);

export function BudgetEstimator() {
  const [bhk, setBhk] = useState(BHK[1].key);
  const [tier, setTier] = useState(TIER[1].key);
  const [scope, setScope] = useState<string[]>(["kitchen", "wardrobes"]);

  const total = useMemo(() => {
    const b = BHK.find((x) => x.key === bhk)!;
    const t = TIER.find((x) => x.key === tier)!;
    const add = SCOPE.filter((s) => scope.includes(s.key)).reduce((a, s) => a + s.add, 0);
    return Math.round((b.base + add) * t.mult);
  }, [bhk, tier, scope]);

  const toggle = (k: string) =>
    setScope((s) => (s.includes(k) ? s.filter((x) => x !== k) : [...s, k]));

  return (
    <div className="rounded-3xl gold-border bg-card/60 backdrop-blur p-8 md:p-10 shadow-elegant">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center">
          <Calculator className="w-5 h-5 text-primary-foreground" />
        </div>
        <div>
          <h3 className="font-display text-2xl">Budget Estimator</h3>
          <p className="text-xs text-muted-foreground">Indicative pricing in seconds</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Group label="Home Size">
            <div className="grid grid-cols-2 gap-2">
              {BHK.map((b) => (
                <Chip key={b.key} active={bhk === b.key} onClick={() => setBhk(b.key)}>{b.label}</Chip>
              ))}
            </div>
          </Group>

          <Group label="Finish Tier">
            <div className="grid grid-cols-3 gap-2">
              {TIER.map((t) => (
                <Chip key={t.key} active={tier === t.key} onClick={() => setTier(t.key)}>{t.label}</Chip>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              {TIER.find((t) => t.key === tier)?.note}
            </p>
          </Group>

          <Group label="Add Scope">
            <div className="flex flex-wrap gap-2">
              {SCOPE.map((s) => (
                <Chip key={s.key} small active={scope.includes(s.key)} onClick={() => toggle(s.key)}>{s.label}</Chip>
              ))}
            </div>
          </Group>
        </div>

        <div className="rounded-2xl bg-gradient-navy p-8 flex flex-col justify-between gold-border relative overflow-hidden">
          <div className="shimmer absolute inset-0 opacity-30" />
          <div className="relative">
            <div className="text-xs tracking-[0.25em] uppercase text-gold mb-2">Estimated Investment</div>
            <motion.div
              key={total}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-5xl md:text-6xl gold-text"
            >
              {fmt(total)}
            </motion.div>
            <p className="text-sm text-muted-foreground mt-3">
              Indicative range. Final quote after free site visit & detailed measurement.
            </p>
          </div>
          <a
            href="/contact"
            className="relative mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-gold text-primary-foreground font-medium shadow-gold hover:scale-[1.02] transition-transform"
          >
            <Sparkles className="w-4 h-4" /> Book Free Site Visit
          </a>
        </div>
      </div>
    </div>
  );
}

function Group({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-xs tracking-[0.2em] uppercase text-gold mb-3">{label}</div>
      {children}
    </div>
  );
}

function Chip({ active, onClick, children, small }: { active: boolean; onClick: () => void; children: React.ReactNode; small?: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`${small ? "px-3 py-1.5 text-xs" : "px-4 py-2.5 text-sm"} rounded-full border transition-all ${
        active
          ? "bg-gradient-gold border-transparent text-primary-foreground shadow-gold"
          : "border-border text-muted-foreground hover:border-gold/50 hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}
