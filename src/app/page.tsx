import AboutSection from "@/components/AboutSection/AboutSection";
import Hero from "@/components/Hero/Hero";
import Nav from "@/components/Nav/Nav";
import PostHero from "@/components/PostHero/PostHero";
import PostHeroii from "@/components/PostHeroii/PostHeroii";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <PostHero />
      <PostHeroii />
      <AboutSection />
    </main>
  );
}
