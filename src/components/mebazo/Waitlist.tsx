import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Reveal } from "./Reveal";

const schema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email")
    .email("Please enter a valid email")
    .max(255),
});

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const r = schema.safeParse({ email });
    if (!r.success) {
      setError(r.error.issues[0]?.message ?? "Invalid email");
      setStatus("error");
      return;
    }
    setError(null);
    setStatus("success");
  }

  return (
    <section id="waitlist" className="relative border-t border-primary/10 py-32">
      <div className="gold-glow absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <Reveal>
          <p className="mb-4 text-[10px] uppercase tracking-[0.5em] text-primary/80">
            The Waitlist
          </p>
          <h2 className="font-serif text-5xl text-foreground sm:text-6xl">
            Be First. Be MEBÁZO.
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            Early access. Exclusive launch offers. Invitations to our Mumbai launch event.
          </p>
        </Reveal>

        <Reveal delay={280}>
          {status === "success" ? (
            <div className="mx-auto mt-12 max-w-md border border-primary/40 bg-card p-8">
              <p className="font-serif text-2xl italic text-primary">Welcome.</p>
              <p className="mt-3 text-sm text-muted-foreground">
                You're on the list. We'll be in touch soon.
              </p>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mx-auto mt-12 flex max-w-md flex-col gap-3 sm:flex-row"
              noValidate
            >
              <input
                type="email"
                inputMode="email"
                autoComplete="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                placeholder="your@email.com"
                aria-label="Email address"
                className="flex-1 border border-primary/30 bg-transparent px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
              />
              <button
                type="submit"
                className="btn-breathe border border-primary bg-primary px-6 py-4 text-[11px] uppercase tracking-[0.28em] text-primary-foreground transition-all duration-500 hover:scale-[1.04] hover:bg-transparent hover:text-primary hover:shadow-[0_0_40px_oklch(0.74_0.08_80/0.35)]"
              >
                Reserve My Spot
              </button>
            </form>
          )}
          {error && status === "error" && (
            <p className="mt-3 text-xs text-destructive">{error}</p>
          )}
        </Reveal>

        <Reveal delay={420}>
          <p className="mt-8 text-[11px] italic text-muted-foreground/70">
            No spam. Unsubscribe anytime. We respect your inbox like we respect your skin.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
