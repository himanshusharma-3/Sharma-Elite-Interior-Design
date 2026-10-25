import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect } from "react";
import livingRoom from "@/assets/portfolio/living-room.png";
import bedroomLuxe from "@/assets/portfolio/bedroom-luxe.png";
import kitchenBar from "@/assets/portfolio/kitchen-bar.png";
import bedroomModern from "@/assets/portfolio/bedroom-modern.png";

const cards = [
  { src: livingRoom, x: -180, y: -40, z: 0, r: -8, label: "Living" },
  { src: bedroomLuxe, x: 0, y: 0, z: 60, r: 0, label: "Bedroom" },
  { src: kitchenBar, x: 200, y: -30, z: 20, r: 7, label: "Kitchen" },
  { src: bedroomModern, x: 80, y: 130, z: 30, r: -4, label: "Modern" },
];

export function HeroScene() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [12, -12]), { stiffness: 80, damping: 14 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-18, 18]), { stiffness: 80, damping: 14 });

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      mx.set(e.clientX / w - 0.5);
      my.set(e.clientY / h - 0.5);
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [mx, my]);

  return (
    <div className="relative w-full h-[520px] perspective-1000 hidden lg:block">
      <motion.div className="relative w-full h-full preserve-3d" style={{ rotateX: rx, rotateY: ry }}>
        {cards.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80, rotateZ: c.r - 20 }}
            animate={{ opacity: 1, y: c.y, rotateZ: c.r }}
            transition={{ delay: 0.2 + i * 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-1/2 left-1/2 w-72 h-96 rounded-2xl overflow-hidden shadow-elegant gold-border preserve-3d"
            style={{ x: c.x - 144, translateZ: c.z, transformStyle: "preserve-3d" }}
          >
            <img src={c.src} alt={c.label} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span className="text-xs tracking-[0.25em] uppercase text-gold">{c.label}</span>
              <span className="w-8 h-px bg-gold" />
            </div>
          </motion.div>
        ))}

        {/* Floating gold ring */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[440px] h-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/30"
          style={{ translateZ: -120 }}
          animate={{ rotateZ: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/10"
          style={{ translateZ: -200 }}
          animate={{ rotateZ: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </div>
  );
}
