const links = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#tools", label: "Tools" },
  { href: "#pricing", label: "Pricing" },
];

export default function Navbar() {
  return (
    <header className="border-b border-foreground/10">
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold tracking-tight">
          Origo<span className="text-emerald-600">.</span>
        </a>
        <ul className="hidden items-center gap-8 text-sm text-foreground/70 sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-foreground">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#waitlist"
          className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
        >
          Join waitlist
        </a>
      </nav>
    </header>
  );
}
