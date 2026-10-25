import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2 } from "lucide-react";

const ADDRESS = "27/59 K L Goswami Sarani, Mahesh, Serampore, Hooghly, West Bengal 712202";
const PHONE = "+91 82829 40554";
const PHONE_HREF = "tel:+918282940554";
const SECONDARY_PHONE = "+91 98832 22328";
const SECONDARY_PHONE_HREF = "tel:+919883222328";
const EMAIL = "janardansharma88@gmail.com";
const EMAIL_HREF = "mailto:janardansharma88@gmail.com";
const WHATSAPP_NUMBER = "918282940554";
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Sharma%20Elite%2C%20I%20am%20interested%20in%20interior%20design%20services`;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sharma Elite Interior Studio" },
      { name: "description", content: "Book a free site visit or get in touch with Sharma Elite Interior Studio in Serampore, Hooghly. Call +91 82829 40554 or +91 98832 22328, or WhatsApp us." },
      { property: "og:title", content: "Contact — Sharma Elite Interior Studio" },
      { property: "og:description", content: "Free consultation & site visit. Call +91 82829 40554 or WhatsApp us." },
    ],
  }),
  component: ContactPage,
});

type FormState = {
  name: string;
  phone: string;
  email: string;
  property: string;
  city: string;
  budget: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  phone: "+91 ",
  email: "",
  property: "1 BHK",
  city: "",
  budget: "",
  message: "",
};

// Phone: must be "+91 " followed by exactly 10 digits (spaces allowed between)
const PHONE_REGEX = /^\+91[\s-]?(\d[\s-]?){10}$/;
// Email: must end with @gmail.com
const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@gmail\.com$/;

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const update = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
  };

  const validate = (): boolean => {
    const errs: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) errs.name = "Please enter your name";
    if (!PHONE_REGEX.test(form.phone.trim())) errs.phone = "Phone must be +91 followed by a 10-digit number";
    if (!EMAIL_REGEX.test(form.email.trim())) errs.email = "Email must end with @gmail.com";
    if (!form.message.trim()) errs.message = "Please tell us about your project";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const lines = [
      `Hi Sharma Elite, I'd like to enquire about interior design services.`,
      ``,
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      `*Email:* ${form.email}`,
      `*Property Type:* ${form.property}`,
      form.city ? `*City:* ${form.city}` : null,
      form.budget ? `*Approx. Budget:* ${form.budget}` : null,
      ``,
      `*Project Details:*`,
      form.message,
    ].filter(Boolean).join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <section className="container mx-auto px-6 py-24">
      <SectionHeading
        eyebrow="Contact"
        title="Tell us about your space."
        subtitle="Share a few details and we'll open WhatsApp with your message ready — just hit send to reach us instantly."
      />

      <div className="mt-16 grid lg:grid-cols-[1.4fr_1fr] gap-10">
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl gold-border bg-card/40 p-8 md:p-10"
        >
          {sent ? (
            <div className="text-center py-14">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-gold flex items-center justify-center mb-5 shadow-gold">
                <CheckCircle2 className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-3xl">WhatsApp opened</h3>
              <p className="text-muted-foreground mt-3 max-w-md mx-auto">
                Your message has been pre-filled in WhatsApp. Just press send to deliver it to us. We'll reply within minutes.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={() => { setSent(false); setForm(initialForm); setErrors({}); }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-gold text-primary-foreground text-sm font-medium shadow-gold hover:scale-[1.02] transition-transform cursor-pointer"
                >
                  Send another enquiry
                </button>
                <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold/40 text-foreground text-sm font-medium hover:bg-gold/10 transition-colors">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Full name" error={errors.name}>
                <input required className="input" placeholder="Your name" value={form.name} onChange={update("name")} maxLength={100} />
              </Field>
              <Field label="Phone" error={errors.phone} hint="Format: +91 9876543210">
                <input required type="tel" className="input" placeholder="+91 9876543210" value={form.phone} onChange={update("phone")} maxLength={20} />
              </Field>
              <Field label="Email" error={errors.email} hint="Must end with @gmail.com">
                <input required type="email" className="input" placeholder="you@gmail.com" value={form.email} onChange={update("email")} maxLength={255} />
              </Field>
              <Field label="Property type">
                <select className="input" value={form.property} onChange={update("property")}>
                  <option>1 BHK</option><option>2 BHK</option><option>3 BHK</option><option>4 BHK / Villa</option><option>Commercial</option>
                </select>
              </Field>
              <Field label="City">
                <input className="input" placeholder="Kolkata / Hooghly" value={form.city} onChange={update("city")} maxLength={80} />
              </Field>
              <Field label="Approx. budget">
                <input className="input" placeholder="₹ 5,00,000+" value={form.budget} onChange={update("budget")} maxLength={40} />
              </Field>
              <div className="md:col-span-2">
                <Field label="Tell us about your project" error={errors.message}>
                  <textarea rows={4} className="input resize-none" placeholder="What rooms, style, timeline…" value={form.message} onChange={update("message")} maxLength={1000} />
                </Field>
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-gold text-primary-foreground font-medium shadow-gold hover:scale-[1.01] transition-transform cursor-pointer">
                  <MessageCircle className="w-4 h-4" /> Send via WhatsApp
                </button>
                <p className="text-xs text-muted-foreground text-center mt-3">
                  Clicking will open WhatsApp with your details pre-filled. You only need to press send.
                </p>
              </div>
            </div>
          )}
          <style>{`
            .input { width:100%; padding: 0.875rem 1rem; border-radius: 0.75rem; background: oklch(0.22 0.05 260 / 0.6); border: 1px solid var(--border); color: var(--foreground); font-size: 0.875rem; outline:none; transition: border-color .2s; }
            .input:focus { border-color: var(--gold); }
            .input::placeholder { color: var(--muted-foreground); opacity: .7; }
          `}</style>
        </form>

        <div className="space-y-4">
          <ContactCard icon={Phone} title="Call us" value={PHONE} href={PHONE_HREF} />
          <ContactCard icon={Phone} title="Alternate number" value={SECONDARY_PHONE} href={SECONDARY_PHONE_HREF} />
          <ContactCard icon={MessageCircle} title="WhatsApp" value="Chat instantly" href={WHATSAPP_HREF} />
          <ContactCard icon={Mail} title="Email" value={EMAIL} href={EMAIL_HREF} />
          <ContactCard icon={MapPin} title="Studio" value={ADDRESS} />
          <div className="rounded-2xl gold-border bg-card/40 p-6">
            <div className="text-xs uppercase tracking-[0.25em] text-gold mb-2">Studio hours</div>
            <div className="text-sm space-y-1">
              <div className="flex justify-between"><span>Mon — Sat</span><span>10:00 — 19:00</span></div>
              <div className="flex justify-between text-muted-foreground"><span>Sunday</span><span>By appointment</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children, error, hint }: { label: string; children: React.ReactNode; error?: string; hint?: string }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.2em] text-gold mb-2">{label}</span>
      {children}
      {error ? (
        <span className="block text-xs text-destructive mt-1.5">{error}</span>
      ) : hint ? (
        <span className="block text-xs text-muted-foreground mt-1.5">{hint}</span>
      ) : null}
    </label>
  );
}

function ContactCard({ icon: Icon, title, value, href }: { icon: typeof Phone; title: string; value: string; href?: string }) {
  const inner = (
    <div className="rounded-2xl gold-border bg-card/40 p-5 flex items-center gap-4 hover:bg-card/70 transition-colors">
      <div className="w-11 h-11 rounded-xl bg-gradient-gold flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-primary-foreground" />
      </div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-[0.25em] text-gold">{title}</div>
        <div className="text-sm mt-0.5 break-words">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
      {inner}
    </a>
  ) : inner;
}
