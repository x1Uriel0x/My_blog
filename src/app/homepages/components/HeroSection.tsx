"use client";

import { useEffect, useRef, useState } from "react";

import Icon from "@/components/ui/AppIcon";
import AppImage from "@/components/ui/AppImage";

export default function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 px-5 overflow-hidden">
      
      {/* Background ambient blobs */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true">
        
        <div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background:
            "radial-gradient(circle, rgba(193,122,42,0.15) 0%, transparent 70%)",
            transform: mounted ? `translateY(${scrollY * 0.08}px)` : undefined
          }} />
        
        <div
          className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background:
            "radial-gradient(circle, rgba(122,140,117,0.18) 0%, transparent 70%)",
            transform: mounted ? `translateY(${scrollY * 0.05}px)` : undefined
          }} />
        
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Status badge */}
        <div className="flex justify-center mb-8">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-medium animate-fadein-up"
            style={{
              borderColor: "rgba(193,122,42,0.25)",
              background: "rgba(193,122,42,0.07)",
              color: "#C17A2A",
              animationDelay: "0.1s"
            }}>
            
            <span
              className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse-dot"
              style={{ backgroundColor: "#C17A2A" }} />
            
            <span>Disponible para nuevas oportunidades</span>
          </div>
        </div>

        {/* Massive headline */}
        <div className="text-center mb-6">
          <h1
            className="font-serif leading-none tracking-tight mb-2 animate-fadein-up"
            style={{
              fontSize: "clamp(4rem, 12vw, 10rem)",
              letterSpacing: "-0.04em",
              lineHeight: "0.88",
              animationDelay: "0.2s"
            }}>
            
            <span className="block text-dark">Steven</span>
            <span
              className="block italic font-light text-outline-dark"
              style={{ opacity: 0.55 }}>
              
              Flores
            </span>
          </h1>
        </div>

        {/* Role + description row */}
        <div
          className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 animate-fadein-up"
          style={{ animationDelay: "0.35s" }}>
          
          <div className="flex items-center gap-3">
            <span
              className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{
                background: "rgba(28,26,23,0.07)",
                color: "var(--color-dark-muted)",
                letterSpacing: "0.12em"
              }}>
              
              Full-Stack Developer
            </span>
            <span
              className="hidden md:block w-px h-4"
              style={{ background: "var(--color-border)" }} />
            
            <span
              className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{
                background: "rgba(28,26,23,0.07)",
                color: "var(--color-dark-muted)",
                letterSpacing: "0.12em"
              }}>
              
              Escritor & Blogger
            </span>
          </div>
          <p
            className="text-center md:text-left max-w-sm text-base leading-relaxed"
            style={{ color: "var(--color-muted)" }}>
            
            Construyo productos digitales con código limpio y escribo sobre lo
            que aprendo en el camino.
          </p>
        </div>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fadein-up"
          style={{ animationDelay: "0.5s" }}>
          
          <a
            href="#writing"
            className="btn-primary-dark flex items-center gap-3 px-7 py-3.5 rounded-full text-base font-semibold">
            
            Leer el Blog
            <Icon name="ArrowDownIcon" size={18} />
          </a>
          <a
            href="#contact"
            className="btn-outline-dark flex items-center gap-3 px-7 py-3.5 rounded-full text-base font-medium">
            
            Contactar
            <Icon name="EnvelopeIcon" size={18} />
          </a>
        </div>

        {/* Hero image + floating cards */}
        <div
          className="relative w-full max-w-4xl mx-auto animate-fadein-up"
          style={{ animationDelay: "0.65s" }}>
          
          {/* Main image */}
          <div
            className="relative rounded-5xl overflow-hidden shadow-deep border"
            style={{
              borderColor: "rgba(255,255,255,0.6)",
              height: "clamp(280px, 45vw, 520px)"
            }}>
            
            <div
              ref={parallaxRef}
              className="absolute inset-0 w-full"
              style={{
                height: "120%",
                top: "-10%",
                transform: mounted ?
                `translateY(${scrollY * 0.04}px)` :
                undefined
              }}>
              
              <AppImage
                src="https://images.unsplash.com/photo-1588341721966-6b674b8c5dc7"
                alt="Developer workspace with laptop, code on screen, clean desk setup"
                fill
                className="object-cover"
                priority />
              
            </div>
            <div
              className="absolute inset-0"
              style={{
                background:
                "linear-gradient(to top, rgba(247,244,238,0.85) 0%, rgba(247,244,238,0.15) 40%, transparent 70%)"
              }} />
            
          </div>

          {/* Floating card — stats */}
          <div
            className="glass-card absolute -left-6 md:-left-12 bottom-12 p-5 rounded-3xl shadow-glass hidden sm:block animate-float-slow"
            style={{ maxWidth: "200px" }}>
            
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--color-muted)", letterSpacing: "0.1em" }}>
              
              Este año
            </p>
            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span
                  className="text-3xl font-serif font-medium"
                  style={{ color: "var(--color-dark)" }}>
                  
                 
                </span>
                <span
                  className="text-xs font-medium"
                  style={{ color: "var(--color-muted)" }}>
                  
                 
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span
                  className="text-3xl font-serif font-medium"
                  style={{ color: "var(--color-amber)" }}>
                  
                  3
                </span>
                <span
                  className="text-xs font-medium"
                  style={{ color: "var(--color-muted)" }}>
                  
                  proyectos
                </span>
              </div>
            </div>
          </div>

          {/* Floating card — current status */}
          <div
            className="glass-card absolute -right-4 md:-right-10 top-10 p-4 rounded-2xl shadow-glass hidden md:flex items-center gap-3 animate-float-medium"
            style={{ animationDelay: "1.5s" }}>
            
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: "rgba(193,122,42,0.12)" }}>
              
              <Icon name="CodeBracketIcon" size={18} className="text-amber" style={{ color: "#C17A2A" }} />
            </div>
            <div>
              <p
                className="text-xs font-semibold"
                style={{ color: "var(--color-dark)" }}>
                
                Trabajando en
              </p>
              <p
                className="text-xs"
                style={{ color: "var(--color-muted)" }}>
                
                Next.js 15 + AI
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs font-medium tracking-widest uppercase" style={{ fontSize: "10px" }}>
          Scroll
        </span>
        <div className="animate-scroll-bounce">
          <Icon name="ChevronDownIcon" size={16} />
        </div>
      </div>
    </section>);

}