export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <a href="#" className="font-display text-2xl font-extrabold tracking-tight">
          Origo<span className="text-accent">.</span>
        </a>
        <div className="flex items-center gap-6 text-sm font-medium">
          <a href="#demo" className="hidden hover:underline sm:block">
            Demo
          </a>
          <a href="#pricing" className="hidden hover:underline sm:block">
            Pricing
          </a>
          <a
            href="#waitlist"
            className="rounded-full bg-foreground px-5 py-2 text-background transition hover:bg-accent hover:text-foreground"
          >
            Join waitlist
          </a>
        </div>
      </nav>
    </header>
  );
}
