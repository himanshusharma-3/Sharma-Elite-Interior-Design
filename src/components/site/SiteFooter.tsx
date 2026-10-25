import { Link } from "@tanstack/react-router";
import { MapPin, Mail, Phone } from "lucide-react";
import { useState, useEffect } from "react";

const ADDRESS = "27/59 K L Goswami Sarani, Mahesh, Serampore, Hooghly, West Bengal 712202";
const PHONE = "+91 79800 80592";
const PHONE_HREF = "tel:+917980080592";
const EMAIL = "janardansharma88@gmail.com";
const EMAIL_HREF = "mailto:janardansharma88@gmail.com";
const WHATSAPP_HREF = "https://wa.me/917980080592?text=Hi%20Sharma%20Elite%2C%20I%20am%20interested%20in%20interior%20design%20services";

export function SiteFooter() {
  const [year, setYear] = useState<string>("");
  useEffect(() => {
    setYear(String(new Date().getFullYear()));
  }, []);

  return (
    <footer className="bg-navy-deep border-t border-border mt-32">
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-md bg-gradient-gold flex items-center justify-center font-display font-bold text-primary-foreground">S</div>
            <div>
              <div className="font-display text-foreground">Sharma Elite</div>
              <div className="text-[10px] tracking-[0.3em] text-gold uppercase">Interior Studio</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Crafting elegant interiors across Kolkata & Hooghly since 2024. Founded by Janardan Lal Sharma.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gold mb-4 tracking-wider uppercase">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-gold">Portfolio</Link></li>
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gold mb-4 tracking-wider uppercase">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" />
              <span>{ADDRESS}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gold shrink-0" />
              <a href={PHONE_HREF} className="hover:text-gold">{PHONE}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gold shrink-0" />
              <a href={EMAIL_HREF} className="hover:text-gold">{EMAIL}</a>
            </li>
          </ul>
        </div>

      </div>
      <div className="border-t border-border/60">
        <div className="container mx-auto px-6 py-5 text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
          <span>{year ? `© ${year} Sharma Elite Interior Studio. All rights reserved.` : "© Sharma Elite Interior Studio. All rights reserved."}</span>
          <span>Designed with craft & care.</span>
        </div>
      </div>
    </footer>
  );
}

