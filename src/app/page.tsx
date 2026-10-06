const modules = [
  { name: "Shop & website", text: "Generated from one sentence, ready to sell." },
  { name: "POS", text: "Take cash, card and mobile payments, online or offline." },
  { name: "Money", text: "Invoices, profit and cash-flow warnings in plain language." },
  { name: "Customers", text: "Remember every buyer and bring them back." },
  { name: "Academy", text: "Short lessons that apply themselves to your business." },
  { name: "AI coach", text: "A weekly brief with decisions you approve in one tap." },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-16">
      <p className="text-sm font-semibold tracking-widest text-emerald-600 uppercase">
        Origo
      </p>
      <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
        From idea to first sale in 10 minutes.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-foreground/70">
        Tell us the business you want to start. Origo builds the shop, sets up
        the POS, writes your 30-day plan, and then helps you run it.
      </p>

      <form className="mt-10 flex max-w-2xl flex-col gap-3 sm:flex-row">
        <input
          type="text"
          placeholder="e.g. I want to sell homemade snacks"
          className="flex-1 rounded-xl border border-foreground/20 bg-transparent px-4 py-3 outline-none focus:border-emerald-600"
        />
        <button
          type="button"
          className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700"
        >
          Start my business
        </button>
      </form>

      <section className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((m) => (
          <div key={m.name} className="rounded-2xl border border-foreground/10 p-5">
            <h2 className="font-semibold">{m.name}</h2>
            <p className="mt-1 text-sm text-foreground/70">{m.text}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
