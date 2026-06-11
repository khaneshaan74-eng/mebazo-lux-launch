import { Instagram, Linkedin, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-primary/15 py-16">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p
          className="font-serif text-3xl text-primary"
          style={{ letterSpacing: "0.18em", fontWeight: 300 }}
        >
          MEBÁZO
        </p>
        <p className="mt-3 font-serif text-sm italic text-muted-foreground">
          Beauty Without Boundaries.
        </p>

        <div className="mt-8 flex justify-center gap-6">
          {[
            { Icon: Instagram, label: "Instagram", href: "#" },
            { Icon: Linkedin, label: "LinkedIn", href: "#" },
            { Icon: MessageCircle, label: "WhatsApp", href: "#" },
          ].map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/25 text-foreground/70 transition-all duration-500 hover:scale-110 hover:border-primary hover:text-primary hover:shadow-[0_0_20px_oklch(0.74_0.08_80/0.4)]"
            >
              <Icon className="h-4 w-4" strokeWidth={1.4} />
            </a>
          ))}
        </div>

        <p className="mt-10 text-[10px] uppercase tracking-[0.4em] text-muted-foreground/60">
          © 2026 MEBÁZO. All rights reserved. &nbsp;·&nbsp; India &nbsp;|&nbsp; UAE &nbsp;|&nbsp; Global
        </p>
      </div>
    </footer>
  );
}
