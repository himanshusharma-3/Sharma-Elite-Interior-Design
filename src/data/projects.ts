import bedroomClassic from "@/assets/portfolio/bedroom-classic.png";
import kitchenBar from "@/assets/portfolio/kitchen-bar.png";
import poojaUnit from "@/assets/portfolio/pooja-unit.png";
import tvUnit from "@/assets/portfolio/tv-unit.png";
import livingRoom from "@/assets/portfolio/living-room.png";
import bedroomModern from "@/assets/portfolio/bedroom-modern.png";
import kitchenStools from "@/assets/portfolio/kitchen-stools.png";
import bedroomLuxe from "@/assets/portfolio/bedroom-luxe.png";
import balconyBar from "@/assets/portfolio/balcony-bar.png";

export type Project = {
  id: string;
  title: string;
  category: "Residential" | "Modular Kitchen" | "Commercial" | "Bespoke";
  location: string;
  image: string;
  span?: "wide" | "tall";
};

export const projects: Project[] = [
  { id: "p1", title: "Classic Mouldings Bedroom", category: "Residential", location: "Serampore", image: bedroomClassic, span: "tall" },
  { id: "p2", title: "Open Kitchen with Bar Counter", category: "Modular Kitchen", location: "Kolkata", image: kitchenBar, span: "wide" },
  { id: "p3", title: "Sanctum Pooja Unit", category: "Bespoke", location: "Hooghly", image: poojaUnit },
  { id: "p4", title: "Fluted Wood TV Wall", category: "Residential", location: "Salt Lake", image: tvUnit },
  { id: "p5", title: "Heritage Living Room", category: "Residential", location: "Serampore", image: livingRoom, span: "wide" },
  { id: "p6", title: "Tufted Grey Master Bedroom", category: "Residential", location: "New Town", image: bedroomModern },
  { id: "p7", title: "Compact Bar & Stool Counter", category: "Modular Kitchen", location: "Howrah", image: kitchenStools, span: "tall" },
  { id: "p8", title: "Diamond Tufted Headboard Suite", category: "Bespoke", location: "Behala", image: bedroomLuxe },
  { id: "p9", title: "Balcony Bar Lounge", category: "Commercial", location: "Park Street", image: balconyBar },
];
