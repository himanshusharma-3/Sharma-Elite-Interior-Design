import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const WHATSAPP_LINK = "https://wa.me/917980080592?text=Hi%20Sharma%20Elite%2C%20I%20am%20interested%20in%20interior%20design%20services";

export function WhatsAppChat() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3">
      {open && (
        <div className="mb-2 rounded-2xl bg-card/90 backdrop-blur-md border border-gold/30 p-4 shadow-elegant w-64 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
              <MessageCircle className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <div className="text-sm font-medium">Sharma Elite</div>
              <div className="text-xs text-muted-foreground">Typically replies within minutes</div>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mb-3">
            Have questions about your interior project? Chat with us directly on WhatsApp.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-4 py-2.5 rounded-full bg-gradient-gold text-primary-foreground text-sm font-medium shadow-gold hover:scale-[1.02] transition-transform"
          >
            Start Chat on WhatsApp
          </a>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold hover:scale-110 transition-transform cursor-pointer"
        aria-label="Open WhatsApp chat"
      >
        {open ? (
          <span className="text-primary-foreground text-xl font-bold">×</span>
        ) : (
          <MessageCircle className="w-6 h-6 text-primary-foreground" />
        )}
      </button>
    </div>
  );
}
