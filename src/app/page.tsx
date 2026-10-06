import HeroForm from "@/components/HeroForm";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import WaitlistForm from "@/components/WaitlistForm";

const promises = [
  "Your shop and website, built for you",
  "A point of sale for cash, card and mobile payments",
  "A 30-day plan to your first paying customer",
];

const problems = [
  {
    title: "Too many tools",
    text: "A website builder, a POS, accounting software and marketing tools. Each one has its own login, bill and learning curve.",
  },
  {
    title: "Tools don't tell you what to do",
    text: "They give you software, not direction. Most new owners get stuck on the next step, not on the technology.",
  },
  {
    title: "Money problems show up late",
    text: "Unpaid invoices and thin margins are easy to miss until cash runs short. Many small businesses close because of cash flow, not a lack of customers.",
  },
];

const steps = [
  {
    n: "1",
    title: "Describe your business",
    text: "Type one sentence, like “I want to sell homemade cakes”. No forms, no templates to pick.",
  },
  {
    n: "2",
    title: "Origo sets it up",
    text: "It creates your shop, loads sensible products and prices into your POS, and writes your 30-day launch plan.",
  },
  {
    n: "3",
    title: "Make your first sale",
    text: "Follow the guided mission to your first paying customer, then let the AI coach help you keep growing.",
  },
];

const tools = [
  {
    name: "Shop & website",
    text: "A ready-to-sell site generated from your description. Edit anything with simple drag and drop.",
  },
  {
    name: "POS",
    text: "Sell in person or online. Cash, card and mobile payments, receipts and stock, working even when the internet drops.",
  },
  {
    name: "Money",
    text: "Invoices with payment links, automatic reminders, profit in plain language, and a cash-flow forecast that warns you early.",
  },
  {
    name: "Customers",
    text: "Remember every buyer, what they bought and when. Win back the ones who stopped coming.",
  },
  {
    name: "Academy",
    text: "Short, practical lessons (pricing, promotions, reading your profit) with a button that applies each one to your own business.",
  },
  {
    name: "AI coach",
    text: "A weekly brief based on your real numbers, with decisions you approve in one tap. It never moves money without your OK.",
  },
];

const comparison = [
  { row: "Setup", others: "You choose and connect several tools yourself", origo: "One sentence sets up shop, POS and plan" },
  { row: "Guidance", others: "Software only, you figure out what to do", origo: "A guided path from idea to first sale" },
  { row: "Your data", others: "Spread across separate apps", origo: "Sales, stock, customers and money in one place" },
  { row: "AI help", others: "Often an add-on, limited to one tool", origo: "Coach that sees the whole business" },
  { row: "Learning", others: "Find courses elsewhere", origo: "Short lessons built in, applied to your business" },
];

const plans = [
  {
    name: "Free",
    price: "$0",
    note: "To get started",
    items: ["Website and shop", "Basic POS", "First-sale mission"],
  },
  {
    name: "Starter",
    price: "$9",
    note: "per month",
    items: ["Everything in Free", "Invoicing and simple accounting", "Customer book", "Limited AI coach"],
    featured: true,
  },
  {
    name: "Growth",
    price: "$29",
    note: "per month",
    items: ["Everything in Starter", "Full AI coach and cash-flow forecast", "Marketing tools", "All Academy lessons"],
  },
];

const faqs = [
  {
    q: "Is Origo available now?",
    a: "Not yet. We're building it step by step and opening to waitlist members first.",
  },
  {
    q: "Who is it for?",
    a: "First-time and small business owners anywhere in the world: shops, cafés, salons, online sellers, repair and service businesses.",
  },
  {
    q: "Will the AI spend my money or message my customers without asking?",
    a: "No. Anything involving money or customer contact needs your approval, and every action is logged.",
  },
  {
    q: "How will you make money?",
    a: "Mainly from a small fee on payments processed through Origo, plus optional paid plans. That's why the entry plan can be free or very cheap.",
  },
  {
    q: "Are the prices final?",
    a: "No. The prices above are our plan and may change before launch. Waitlist members will hear first.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <div className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-24">
          <p className="inline-block rounded-full bg-emerald-600/10 px-4 py-1 text-sm font-medium text-emerald-700">
            For first-time and small business owners, anywhere in the world
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            From idea to your first sale in 10 minutes.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/70">
            Tell Origo the business you want to start. It sets everything up,
            shows you what to do next, and then helps you run and grow it.
          </p>
          <ul className="mt-8 space-y-2 text-foreground/80">
            {promises.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-1 text-emerald-600">✓</span>
                {p}
              </li>
            ))}
          </ul>
          <HeroForm />
          <p className="mt-6 text-sm text-foreground/50">
            Origo is in development. Join the waitlist for early access.
          </p>
        </div>

        {/* Problem */}
        <Section
          eyebrow="The problem"
          title="Starting a business is hard. Not because of the tools."
        >
          <div className="grid gap-4 md:grid-cols-3">
            {problems.map((p) => (
              <div key={p.title} className="rounded-2xl border border-foreground/10 p-6">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-foreground/70">{p.text}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* How it works */}
        <Section
          id="how-it-works"
          eyebrow="How it works"
          title="Three steps from idea to first sale"
        >
          <ol className="grid gap-4 md:grid-cols-3">
            {steps.map((s) => (
              <li key={s.n} className="rounded-2xl border border-foreground/10 p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 font-bold text-white">
                  {s.n}
                </span>
                <h3 className="mt-4 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-foreground/70">{s.text}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* Tools */}
        <Section
          id="tools"
          eyebrow="What you get"
          title="Everything to run the business, in one place"
          intro="Because it's all connected, the AI coach sees your real sales, stock, customers and money, not just one slice of them."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((t) => (
              <div key={t.name} className="rounded-2xl border border-foreground/10 p-6">
                <h3 className="font-semibold">{t.name}</h3>
                <p className="mt-2 text-sm text-foreground/70">{t.text}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Comparison */}
        <Section
          eyebrow="A different approach"
          title="Origo vs. piecing tools together"
          intro="Website builders, POS systems and accounting apps are good at their own job. Origo is built around a different job: getting you from idea to a working, growing business."
        >
          <div className="overflow-x-auto rounded-2xl border border-foreground/10">
            <table className="w-full min-w-[34rem] text-left text-sm">
              <thead className="bg-foreground/5">
                <tr>
                  <th className="px-5 py-3 font-semibold"></th>
                  <th className="px-5 py-3 font-semibold">Separate tools</th>
                  <th className="px-5 py-3 font-semibold text-emerald-700">Origo</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((c) => (
                  <tr key={c.row} className="border-t border-foreground/10 align-top">
                    <td className="px-5 py-4 font-medium">{c.row}</td>
                    <td className="px-5 py-4 text-foreground/70">{c.others}</td>
                    <td className="px-5 py-4">{c.origo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* Pricing */}
        <Section
          id="pricing"
          eyebrow="Planned pricing"
          title="Start free. Pay as you grow."
          intro="These prices are our plan and may change before launch. We also earn a small fee on payments processed through Origo, which is how we keep entry prices low."
        >
          <div className="grid gap-4 md:grid-cols-3">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`rounded-2xl border p-6 ${
                  p.featured ? "border-emerald-600 ring-1 ring-emerald-600" : "border-foreground/10"
                }`}
              >
                <h3 className="font-semibold">{p.name}</h3>
                <p className="mt-3">
                  <span className="text-4xl font-bold">{p.price}</span>{" "}
                  <span className="text-sm text-foreground/60">{p.note}</span>
                </p>
                <ul className="mt-5 space-y-2 text-sm text-foreground/80">
                  {p.items.map((i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-emerald-600">✓</span>
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* FAQ */}
        <Section eyebrow="FAQ" title="Questions you might have">
          <div className="max-w-3xl divide-y divide-foreground/10 rounded-2xl border border-foreground/10">
            {faqs.map((f) => (
              <details key={f.q} className="group px-5 py-4">
                <summary className="cursor-pointer font-medium">{f.q}</summary>
                <p className="mt-2 text-sm text-foreground/70">{f.a}</p>
              </details>
            ))}
          </div>
        </Section>

        {/* Final CTA */}
        <section id="waitlist" className="scroll-mt-16 border-t border-foreground/10 px-6 py-20 text-center">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            Be first to start your business with Origo
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-foreground/70">
            Join the waitlist. We&apos;ll email you when it opens. No spam.
          </p>
          <div className="mt-8">
            <WaitlistForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-foreground/10 px-6 py-8 text-center text-sm text-foreground/50">
        © {new Date().getFullYear()} Origo. Early development, details may change.
      </footer>
    </>
  );
}
