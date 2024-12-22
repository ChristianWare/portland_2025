import AboutSection from "@/components/AboutSection/AboutSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import Footer from "@/components/Footer/Footer";
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
    <main style={{ backgroundColor: "#475e3c" }}>
      <Nav />
      <Hero />
      <AboutSection />
      <PostHero />
      <PostHeroii />
      <ProjectSection />
      <SkillsSection />
      <Process />
      <WorkSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
