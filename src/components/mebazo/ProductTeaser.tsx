import { Reveal } from "./Reveal";

const silhouettes = [
  // serum bottle silhouette via gradient
  {
    label: "Serum",
    shape: "M50 8 L50 22 L42 28 L42 92 L58 92 L58 28 L50 22",
  },
  {
    label: "Cream",
    shape: "M22 30 L78 30 L78 88 Q78 92 74 92 L26 92 Q22 92 22 88 Z M30 30 L30 18 Q30 14 34 14 L66 14 Q70 14 70 18 L70 30",
  },
  {
    label: "Elixir",
    shape: "M50 6 L50 18 L40 26 L40 60 Q40 92 50 92 Q60 92 60 60 L60 26 L50 18",
  },
];

export function ProductTeaser() {
  return (
    <section className="relative border-t border-primary/10 py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-20 text-center">
            <p className="mb-4 text-[10px] uppercase tracking-[0.5em] text-primary/80">
              The Collection
            </p>
            <h2 className="font-serif text-4xl text-foreground sm:text-5xl md:text-6xl">
              Something extraordinary is almost here.
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {silhouettes.map((s, i) => (
            <Reveal key={s.label} delay={i * 150}>
              <div className="group relative aspect-[3/4] overflow-hidden border border-primary/15 bg-gradient-to-b from-card to-background">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.74_0.08_80/0.15),transparent_70%)]" />
                <svg
                  viewBox="0 0 100 100"
                  className="absolute inset-0 h-full w-full p-12 opacity-40 blur-[2px] transition-all duration-1000 group-hover:opacity-60 group-hover:blur-[1px]"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d={s.shape}
                    fill="none"
                    stroke="oklch(0.74 0.08 80 / 0.7)"
                    strokeWidth="0.5"
                  />
                  <path d={s.shape} fill="oklch(0.74 0.08 80 / 0.08)" />
                </svg>
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-6 py-5">
                  <span className="font-serif text-sm italic text-foreground/60">
                    No. 0{i + 1}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-primary/70">
                    Coming Soon
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={500}>
          <p className="mt-12 text-center text-xs uppercase tracking-[0.36em] text-muted-foreground/70">
            Full collection revealed at launch.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
