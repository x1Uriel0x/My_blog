import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import WritingSection from "./components/WritingSection";
import ProjectsSection from "./components/ProjectsSection";
import MarqueeSection from "./components/MarqueeSection";
import ContactSection from "./components/ContactSection";

export const metadata: Metadata = {
  title: "Steven Flores — Full-Stack Developer & Blogger",
  description:
    "Blog personal de Steven Flores. Full-Stack Developer. Escribo sobre React, Next.js, TypeScript y construcción de productos digitales.",
  keywords: [
    "full stack developer",
    "blog técnico",
    "React",
    "Next.js",
    "TypeScript",
    "Bogotá",
  ],
  authors: [{ name: "Steven Flores" }],
  openGraph: {
    title: "Steven Flores — Full-Stack Developer & Blogger",
    description:
      "Blog personal de Steven Flores. Full-Stack Developer en Bogotá.",
    type: "website",
  },
};

export default function Homepage() {
  return (
    <main
      style={{
        background: "var(--color-bg)",
        color: "var(--color-dark)",
        fontFamily: "var(--font-sans)",
      }}
    >
      <Header />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <WritingSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
