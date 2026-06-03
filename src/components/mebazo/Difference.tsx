import { Leaf, Eye, Gem } from "lucide-react";
import { Reveal } from "./Reveal";

const cards = [
  {
    icon: Leaf,
    title: "Clean Intelligence",
    body: "Clinically tested, organic formulations powered by AI-driven skin diagnostics.",
  },
  {
    icon: Eye,
    title: "Inclusive by Design",
    body: "Voice-enabled, screen-reader optimised, virtual try-on for every ability and skin tone.",
  },
  {
    icon: Gem,
    title: "Luxury Without Compromise",
    body: "Dermatologist co-developed. Premium ingredients. Accessible price architecture.",
  },
];

export function Difference() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-20 text-center">
            <p className="mb-4 text-[10px] uppercase tracking-[0.5em] text-primary/80">
              The MEBÁZO Difference
            </p>
            <h2 className="font-serif text-4xl text-foreground sm:text-5xl md:text-6xl">
              A new standard for beauty.
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 140}>
              <div className="group relative h-full border border-primary/15 bg-card p-10 transition-all duration-700 hover:border-primary/50">
                <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-full border border-primary/40">
                  <c.icon className="h-6 w-6 text-primary" strokeWidth={1.25} />
                </div>
                <h3 className="font-serif text-2xl text-foreground">{c.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                <div className="mt-8 h-px w-12 bg-primary/40 transition-all duration-700 group-hover:w-24" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
