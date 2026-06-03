import { Reveal } from "./Reveal";

export function Founder() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="relative border border-primary/20 bg-card p-10 sm:p-16 md:p-20">
            <span
              aria-hidden
              className="absolute left-6 top-0 font-serif text-primary/40 sm:left-10"
              style={{ fontSize: "9rem", lineHeight: 1 }}
            >
              &ldquo;
            </span>

            <blockquote className="relative">
              <p
                className="font-serif italic text-foreground"
                style={{
                  fontSize: "clamp(1.5rem, 3.4vw, 2.5rem)",
                  lineHeight: 1.35,
                }}
              >
                MEBÁZO was built for the person the beauty industry forgot —
                and for everyone who deserves more.
              </p>
            </blockquote>

            <div className="mt-12 flex items-center gap-5">
              <div className="relative h-14 w-14 overflow-hidden rounded-full border border-primary/40 bg-gradient-to-br from-primary/30 to-background">
                <div className="absolute inset-0 flex items-center justify-center font-serif text-base text-primary">
                  EQ
                </div>
              </div>
              <div>
                <p className="font-serif text-lg text-foreground">Ehsaan Quresshi</p>
                <p className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground/80">
                  Founder &amp; CEO
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
