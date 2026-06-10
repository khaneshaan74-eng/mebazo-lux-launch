import { Reveal } from "./Reveal";

function ParticleField() {
  // Static positions so SSR + client match
  const particles = [
    { left: "12%", top: "22%", delay: "0s", cls: "" },
    { left: "78%", top: "30%", delay: "1.2s", cls: "alt" },
    { left: "25%", top: "70%", delay: "2.4s", cls: "" },
    { left: "65%", top: "78%", delay: "0.6s", cls: "alt" },
    { left: "45%", top: "18%", delay: "3.1s", cls: "" },
    { left: "88%", top: "60%", delay: "1.8s", cls: "alt" },
    { left: "8%", top: "55%", delay: "2.1s", cls: "" },
    { left: "55%", top: "42%", delay: "0.9s", cls: "alt" },
    { left: "35%", top: "85%", delay: "3.6s", cls: "" },
    { left: "72%", top: "12%", delay: "1.5s", cls: "alt" },
    { left: "18%", top: "38%", delay: "2.7s", cls: "" },
    { left: "92%", top: "82%", delay: "0.3s", cls: "alt" },
  ];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <span
          key={i}
          className={`particle ${p.cls}`}
          style={{ left: p.left, top: p.top, animationDelay: p.delay }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="gold-glow absolute inset-0" />
      <ParticleField />
      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,oklch(0.16_0_0/0.85)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-24 text-center">
        <Reveal>
          <div className="mb-6 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-primary/80">
            <span className="h-px w-8 bg-primary/60" />
            Launching Soon
            <span className="h-px w-8 bg-primary/60" />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h1
            className="logo-shimmer font-serif text-primary"
            style={{
              fontSize: "clamp(4rem, 14vw, 11rem)",
              lineHeight: 0.95,
              letterSpacing: "0.04em",
              fontWeight: 300,
            }}
          >
            MEBÁZO
          </h1>
        </Reveal>

        <Reveal delay={260}>
          <p className="mt-8 font-serif text-2xl italic text-foreground/90 sm:text-3xl">
            Luxury. Inclusive. Intelligent.
          </p>
        </Reveal>

        <Reveal delay={380}>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            AI-powered clean beauty — crafted for every skin, every ability, every story.
          </p>
        </Reveal>

        <Reveal delay={520}>
          <a
            href="#waitlist"
            className="btn-breathe group mt-12 inline-flex items-center justify-center border border-primary px-10 py-4 text-[11px] uppercase tracking-[0.32em] text-primary transition-all duration-500 hover:scale-[1.04] hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_40px_oklch(0.74_0.08_80/0.35)]"
          >
            Join the Waitlist
          </a>
        </Reveal>

        <Reveal delay={640}>
          <p className="mt-8 text-[10px] uppercase tracking-[0.36em] text-muted-foreground/70">
            Launching globally — India &nbsp;·&nbsp; UAE
          </p>
        </Reveal>
      </div>

      {/* Bottom scroll cue */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground/60">
        Scroll
      </div>
    </section>
  );
}
