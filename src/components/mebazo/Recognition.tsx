import { Reveal } from "./Reveal";

const logos = ["VOGUE", "FORBES", "ELLE", "HARPER'S", "GQ"];

export function Recognition() {
  return (
    <section className="relative border-y border-primary/10 bg-background py-16">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-center text-[10px] uppercase tracking-[0.5em] text-muted-foreground/70">
            Recognition &amp; Partnerships
          </p>
        </Reveal>
        <Reveal delay={150}>
          <ul className="mt-10 grid grid-cols-2 items-center gap-x-8 gap-y-8 sm:grid-cols-3 md:grid-cols-5">
            {logos.map((l) => (
              <li
                key={l}
                className="text-center font-serif text-xl italic text-foreground/25 transition-colors duration-500 hover:text-primary/60"
                style={{ letterSpacing: "0.18em" }}
              >
                {l}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
