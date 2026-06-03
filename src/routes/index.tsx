import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/mebazo/Hero";
import { Recognition } from "@/components/mebazo/Recognition";
import { Difference } from "@/components/mebazo/Difference";
import { ProductTeaser } from "@/components/mebazo/ProductTeaser";
import { Founder } from "@/components/mebazo/Founder";
import { Waitlist } from "@/components/mebazo/Waitlist";
import { Footer } from "@/components/mebazo/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MEBÁZO — Luxury. Inclusive. Intelligent." },
      {
        name: "description",
        content:
          "MEBÁZO is AI-powered inclusive luxury clean beauty. Launching globally in India and UAE. Join the waitlist for early access.",
      },
      { property: "og:title", content: "MEBÁZO — Luxury. Inclusive. Intelligent." },
      {
        property: "og:description",
        content:
          "AI-powered clean beauty — crafted for every skin, every ability, every story. Launching soon.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Recognition />
      <Difference />
      <ProductTeaser />
      <Founder />
      <Waitlist />
      <Footer />
    </main>
  );
}
