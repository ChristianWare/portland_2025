import Hero from "@/components/Hero/Hero";
import Nav from "@/components/Nav/Nav";
import PostHero from "@/components/PostHero/PostHero";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <PostHero />
    </main>
  );
}
