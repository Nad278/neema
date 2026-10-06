// Illustrative previews of planned screens. All names and numbers are sample data.

export function Window({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-foreground/20 bg-background">
      <div className="flex items-center gap-2 border-b border-foreground/15 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/25" />
        <span className="ml-3 text-xs font-medium text-foreground/50">{title}</span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

export function Phone({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-[18.5rem] rounded-[2.75rem] border-[10px] border-foreground bg-background shadow-2xl shadow-foreground/20">
      <div className="mx-auto mt-2 h-5 w-24 rounded-full bg-foreground" />
      <div className="h-[30rem] overflow-hidden px-4 pb-4 pt-3">{children}</div>
    </div>
  );
}
