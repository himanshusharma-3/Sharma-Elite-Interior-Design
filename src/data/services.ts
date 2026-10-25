import { Sofa, ChefHat, BedDouble, Building2, Hammer, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  features: string[];
};

export const services: Service[] = [
  {
    slug: "living-rooms",
    title: "Living Room Design",
    tagline: "Where stories gather",
    description: "Statement TV walls, mouldings, lighting layers and curated furniture composed for everyday elegance.",
    icon: Sofa,
    features: ["Custom TV & wall units", "False ceiling & cove lighting", "Wall panelling & textures", "Bespoke furniture"],
  },
  {
    slug: "modular-kitchens",
    title: "Modular Kitchens",
    tagline: "Engineered for the way you cook",
    description: "Ergonomic layouts, premium hardware and finishes that age beautifully — from compact galleys to open islands.",
    icon: ChefHat,
    features: ["U / L / Island layouts", "Hettich & Hafele hardware", "Quartz & granite counters", "Tall units & breakfast bars"],
  },
  {
    slug: "bedrooms",
    title: "Bedroom Interiors",
    tagline: "A quiet luxury to come home to",
    description: "Wardrobes, headboards, lighting and finishes tailored to deliver sanctuary in every square foot.",
    icon: BedDouble,
    features: ["Tufted headboards", "Sliding & openable wardrobes", "Dresser & vanity", "Wall art & mouldings"],
  },
  {
    slug: "commercial",
    title: "Commercial Spaces",
    tagline: "Brand-forward, function-first",
    description: "Offices, retail and hospitality interiors that reflect your brand and respect your timeline.",
    icon: Building2,
    features: ["Office cabins & workstations", "Retail & showroom design", "Cafe & lounge interiors", "Brand-led graphics"],
  },
  {
    slug: "renovation",
    title: "Renovation & Civil",
    tagline: "Beautiful, end-to-end",
    description: "False ceilings, flooring, electrical, plumbing, painting — a single accountable partner for it all.",
    icon: Hammer,
    features: ["POP & gypsum ceilings", "Flooring & tiling", "Electrical & plumbing", "Painting & polish"],
  },
  {
    slug: "bespoke",
    title: "Bespoke Detailing",
    tagline: "The details people remember",
    description: "Pooja units, bar counters, fluted panels, brass inlays and statement art walls — designed only for you.",
    icon: Sparkles,
    features: ["Pooja units", "Bar counters", "Fluted wood walls", "Brass & gold inlays"],
  },
];
