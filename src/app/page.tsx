import AboutSection from "@/components/AboutSection/AboutSection";
import Hero from "@/components/Hero/Hero";
import Nav from "@/components/Nav/Nav";
import PostHero from "@/components/PostHero/PostHero";
import PostHeroii from "@/components/PostHeroii/PostHeroii";
import Process from "@/components/Process/Process";
import ProjectSection from "@/components/ProjectSection/ProjectSection";
import SkillsSection from "@/components/SkillsSection/SkillsSection";
import WorkSection from "@/components/WorkSection/WorkSection";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <AboutSection />
      <PostHero />
      <PostHeroii />
      <ProjectSection />
      <SkillsSection />
      <Process />
      <WorkSection />
    </main>
  );
}
