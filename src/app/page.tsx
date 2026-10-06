import ControlCenter from "@/components/ControlCenter";
import ExistingPreview from "@/components/ExistingPreview";
import Hero from "@/components/Hero";
import { Phone } from "@/components/Mockups";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import WaitlistForm from "@/components/WaitlistForm";

const marquee = [
  "Cafés", "Hotels", "Shops", "Salons", "Bakeries", "Clinics",
  "Restaurants", "Barbers", "Boutiques", "Guesthouses", "Repair shops", "Online stores",
];

const steps = [
  ["1", "Say it", "Type the business you want. One sentence."],
  ["2", "Get it", "Origo builds your shop, your till and a 30-day plan."],
  ["3", "Sell it", "Take your first payment and follow the plan."],
];

const tiles = [
  { name: "Shop", text: "A website that sells for you.", span: "sm:col-span-2", style: "bg-paper" },
  { name: "Till", text: "Take cash, card and mobile payments.", span: "", style: "bg-foreground text-background" },
  { name: "Bookings", text: "Rooms, tables and appointments.", span: "", style: "bg-accent" },
  { name: "Money", text: "See your profit and who owes you.", span: "", style: "bg-paper" },
  { name: "Customers", text: "Know who comes back.", span: "", style: "bg-paper" },
  { name: "Coach", text: "AI tips every week. You approve.", span: "sm:col-span-2", style: "bg-foreground text-background" },
];

const plans = [
  { name: "Free", price: "$0", items: ["Website", "Basic till"] },
  { name: "Starter", price: "$9", items: ["Invoices", "Customers", "Coach (lite)"], featured: true },
  { name: "Growth", price: "$29", items: ["Full coach", "Marketing", "Lessons"] },
];

const dark = { "--background": "#14110f", "--foreground": "#f4efe6" } as React.CSSProperties;

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        {/* Marquee */}
        <div className="overflow-hidden border-y border-foreground py-4" aria-hidden>
          <div className="marquee font-display text-xl font-extrabold tracking-tight sm:text-2xl">
            {[...marquee, ...marquee].map((m, i) => (
              <span key={i} className="mx-6 whitespace-nowrap">
                {m} <span className="text-accent">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* How */}
        <section className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-3">
            {steps.map(([n, t, d], i) => (
              <Reveal key={n} delay={i * 120}>
                <p className="font-display text-5xl font-extrabold leading-none text-accent">{n}</p>
                <h2 className="mt-3 text-2xl font-extrabold tracking-tight">{t}</h2>
                <p className="mt-2 max-w-xs text-foreground/60">{d}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Demo */}
        <section
          id="demo"
          style={dark}
          className="scroll-mt-16 bg-background py-20 text-foreground"
        >
          <div className="mx-auto w-full max-w-6xl px-6">
            <Reveal>
              <h2 className="text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-[1] tracking-[-0.02em]">
                Try it.
              </h2>
              <p className="mt-3 max-w-xl text-lg text-foreground/60">Tap anything. This is how you would run a shop, a hotel or a salon from one screen.</p>
            </Reveal>
            <Reveal delay={120} className="mt-10">
              <ControlCenter />
            </Reveal>
          </div>
        </section>

        {/* Existing */}
        <section className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
          <Reveal>
            <h2 className="text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-[1] tracking-[-0.02em]">
              Already open?
              <br />
              <span className="text-accent">Go online.</span>
            </h2>
            <p className="mt-5 max-w-sm text-lg text-foreground/70">
              Add your menu, rooms or prices. Origo does the rest.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Phone>
              <ExistingPreview />
            </Phone>
          </Reveal>
        </section>

        {/* Everything */}
        <section className="mx-auto w-full max-w-6xl px-6 pb-20">
          <Reveal>
            <h2 className="text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-[1] tracking-[-0.02em]">
              One app.
              <br />
              Everything.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-4">
            {tiles.map((t, i) => (
              <Reveal key={t.name} delay={i * 80} className={t.span}>
                <div className={`flex h-36 flex-col justify-between rounded-2xl p-5 ${t.style}`}>
                  <h3 className="text-2xl font-extrabold tracking-tight">{t.name}</h3>
                  <p className="text-sm opacity-75">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="mx-auto w-full max-w-6xl scroll-mt-16 px-6 pb-20">
          <Reveal>
            <h2 className="text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-[1] tracking-[-0.02em]">
              Start free.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {plans.map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <div className={`border-t-2 pt-5 ${p.featured ? "border-accent" : "border-foreground"}`}>
                  <p className="text-sm font-semibold tracking-widest uppercase">{p.name}</p>
                  <p className="font-display text-5xl font-extrabold leading-none tracking-tight">
                    {p.price}
                    {p.price !== "$0" && <span className="text-base font-medium text-foreground/50">/mo</span>}
                  </p>
                  <ul className="mt-4 space-y-1 text-foreground/70">
                    {p.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-sm text-foreground/50">Planned prices. May change.</p>
        </section>

        {/* CTA */}
        <section
          id="waitlist"
          style={dark}
          className="scroll-mt-16 bg-background px-6 py-20 text-center text-foreground"
        >
          <Reveal>
            <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[0.95] tracking-[-0.03em]">
              Be first<span className="text-accent">.</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/60">Join the waitlist and we will email you when Origo opens.</p>
            <div className="mt-8">
              <WaitlistForm />
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="px-6 py-6 text-center text-xs text-foreground/50">
        © {new Date().getFullYear()} Origo · In development
      </footer>
    </>
  );
}
