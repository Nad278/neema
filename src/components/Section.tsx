export default function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl scroll-mt-16 px-6 py-16 sm:py-20">
      {eyebrow && (
        <p className="text-sm font-semibold tracking-widest text-emerald-600 uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 max-w-2xl text-lg text-foreground/70">{intro}</p>}
      <div className="mt-10">{children}</div>
    </section>
  );
}
