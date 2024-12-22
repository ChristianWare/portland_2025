import AboutSection from "@/components/AboutSection/AboutSection";
import Hero from "@/components/Hero/Hero";
import Nav from "@/components/Nav/Nav";
import PostHero from "@/components/PostHero/PostHero";
import PostHeroii from "@/components/PostHeroii/PostHeroii";
import Process from "@/components/Process/Process";
import SkillsSection from "@/components/SkillsSection/SkillsSection";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <PostHero />
      <PostHeroii />
      <AboutSection />
      <SkillsSection />
      <Process />
    </main>
  );
}
