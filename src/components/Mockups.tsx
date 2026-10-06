// Illustrative previews of planned screens. All names and numbers are sample data.

function Window({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-foreground/15 bg-background shadow-xl shadow-emerald-900/5">
      <div className="flex items-center gap-2 border-b border-foreground/10 bg-foreground/[0.04] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
        <span className="ml-3 text-xs font-medium text-foreground/50">{title}</span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

export function WizardPreview() {
  const products = [
    ["Vanilla celebration cake", "$28"],
    ["Chocolate cupcakes (6)", "$12"],
    ["Custom birthday cake", "$45"],
  ];
  const plan = [
    "Week 1: Photograph 3 products, set your prices",
    "Week 2: Share your shop link with 20 people you know",
    "Week 3: Run a first-order discount",
    "Week 4: Ask your first customers for reviews",
  ];
  return (
    <Window title="Setup Wizard">
      <p className="text-xs font-medium text-foreground/50">You typed</p>
      <p className="mt-1 rounded-lg bg-foreground/[0.05] px-3 py-2 text-sm">
        I want to sell homemade cakes
      </p>

      <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-emerald-600">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        Origo set this up for you
      </div>

      <div className="mt-3 rounded-xl border border-foreground/10 p-3">
        <p className="text-xs text-foreground/50">Shop name suggestion</p>
        <p className="font-bold">Sweet Crumbs Bakery</p>
        <ul className="mt-3 divide-y divide-foreground/10 text-sm">
          {products.map(([n, p]) => (
            <li key={n} className="flex justify-between py-1.5">
              <span>{n}</span>
              <span className="font-semibold">{p}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-3 rounded-xl border border-foreground/10 p-3">
        <p className="text-xs font-semibold text-foreground/50">Your 30-day plan</p>
        <ul className="mt-2 space-y-1.5 text-sm">
          {plan.map((p) => (
            <li key={p} className="flex gap-2">
              <span className="text-emerald-600">✓</span>
              {p}
            </li>
          ))}
        </ul>
      </div>
    </Window>
  );
}

export function PosPreview() {
  const items = [
    ["Vanilla celebration cake", "1", "$28.00"],
    ["Chocolate cupcakes (6)", "2", "$24.00"],
  ];
  return (
    <Window title="POS">
      <ul className="divide-y divide-foreground/10 text-sm">
        {items.map(([n, q, p]) => (
          <li key={n} className="flex items-center justify-between py-2">
            <span>
              {n} <span className="text-foreground/50">×{q}</span>
            </span>
            <span className="font-semibold">{p}</span>
          </li>
        ))}
      </ul>
      <div className="mt-3 flex items-center justify-between border-t border-foreground/10 pt-3">
        <span className="text-sm text-foreground/60">Total</span>
        <span className="text-2xl font-extrabold">$52.00</span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs font-semibold">
        <span className="rounded-lg bg-emerald-600 py-2 text-white">Card</span>
        <span className="rounded-lg border border-foreground/15 py-2">Cash</span>
        <span className="rounded-lg border border-foreground/15 py-2">Mobile</span>
      </div>
      <p className="mt-3 text-xs text-foreground/50">Stock updates automatically after each sale.</p>
    </Window>
  );
}

export function CoachPreview() {
  return (
    <Window title="Your weekly brief">
      <p className="text-xs font-medium text-foreground/50">AI coach · Monday</p>
      <div className="mt-3 space-y-3 text-sm">
        <div className="rounded-xl border border-foreground/10 p-3">
          <p className="font-semibold">Your top seller has your lowest margin</p>
          <p className="mt-1 text-foreground/70">
            Custom birthday cakes sell best but earn the least per order. Raising the price by 8%
            would add about $40 a week at your current volume.
          </p>
          <div className="mt-3 flex gap-2 text-xs font-semibold">
            <span className="rounded-lg bg-emerald-600 px-3 py-1.5 text-white">Approve</span>
            <span className="rounded-lg border border-foreground/15 px-3 py-1.5">Not now</span>
          </div>
        </div>
        <div className="rounded-xl border border-foreground/10 p-3">
          <p className="font-semibold">2 invoices are overdue</p>
          <p className="mt-1 text-foreground/70">Send a friendly reminder to both customers?</p>
          <div className="mt-3 flex gap-2 text-xs font-semibold">
            <span className="rounded-lg bg-emerald-600 px-3 py-1.5 text-white">Send reminders</span>
            <span className="rounded-lg border border-foreground/15 px-3 py-1.5">Review first</span>
          </div>
        </div>
      </div>
    </Window>
  );
}
