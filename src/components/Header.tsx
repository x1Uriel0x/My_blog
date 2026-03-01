"use client";

import { useState, useEffect } from "react";
import AppLogo from "@/components/ui/AppLogo";

const navLinks = [
  { label: "Sobre mí", href: "#about" },
  { label: "Blog", href: "#writing" },
  { label: "Proyectos", href: "#projects" },
  { label: "Contacto", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-4xl px-2 py-2 flex items-center justify-between nav-pill rounded-full transition-all duration-500"
      style={{
        boxShadow: scrolled
          ? "0 8px 40px rgba(28,26,23,0.12), 0 1px 0 rgba(255,255,255,0.6) inset"
          : "0 4px 20px rgba(28,26,23,0.06)",
      }}
      aria-label="Navegación principal"
    >
      {/* Logo */}
      <div className="flex items-center gap-2 pl-3">
        <AppLogo size={32} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} />
        <span
          className="font-serif font-medium text-base hidden sm:block"
          style={{ letterSpacing: "-0.02em", color: "var(--color-dark)" }}
        >
          Steven
        </span>
      </div>
      {/* Nav links — desktop */}
      <div className="hidden md:flex items-center gap-7">
        {navLinks?.map((link) => (
          <a
            key={link?.href}
            href={link?.href}
            className="text-sm font-medium transition-opacity hover:opacity-100"
            style={{ color: "var(--color-dark)", opacity: 0.55 }}
          >
            {link?.label}
          </a>
        ))}
      </div>
      {/* CTA */}
      <a
        href="#contact"
        className="btn-primary-dark px-5 py-2.5 rounded-full text-sm font-semibold"
      >
        Hablemos
      </a>
    </nav>
  );
}
