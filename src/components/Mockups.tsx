// Illustrative previews of planned screens. All names and numbers are sample data.

export function Window({ title, children }: { title: string; children: React.ReactNode }) {
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
