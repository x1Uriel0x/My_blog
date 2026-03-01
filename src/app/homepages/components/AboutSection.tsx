"use client";

import { useEffect, useRef, useState } from "react";
import AppImage from "@/components/ui/AppImage";
import Icon from "@/components/ui/AppIcon";

const skills = [
{ name: "React / Next.js", level: 92, category: "Frontend" },
{ name: "TypeScript", level: 88, category: "Frontend" },
{ name: "Node.js / Express", level: 84, category: "Backend" },
{ name: "PostgreSQL / Prisma", level: 78, category: "Backend" },
{ name: "UI / Product Design", level: 80, category: "Design" },
{ name: "Escritura Técnica", level: 90, category: "Soft" }];


const stats = [
{ value: "1", label: "Años de experiencia" },

{ value: "4", label: "Proyectos entregados" },
{ value: "1", label: "Países de clientes" }];


export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [animated, setAnimated] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (!animated) setAnimated(true);
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, [animated]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-28 px-5"
      style={{ background: "var(--color-cream)" }}>
      
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div
          className={`reveal ${!visible ? "hidden" : ""} flex items-center gap-4 mb-16`}>
          
          <span
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--color-muted)", letterSpacing: "0.18em" }}>
            
            Sobre mí
          </span>
          <div
            className="flex-1 h-px max-w-16"
            style={{ background: "var(--color-border)" }} />
          
        </div>

        {/* Main grid — 60/40 asymmetric */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left — text */}
          <div className={`lg:col-span-7 reveal delay-1 ${!visible ? "hidden" : ""}`}>
            <h2
              className="font-serif mb-6 leading-tight"
              style={{
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                letterSpacing: "-0.03em",
                lineHeight: "1.08"
              }}>
              
              Construyo cosas en la web{" "}
              <span className="italic font-light" style={{ opacity: 0.55 }}>
                y escribo
              </span>{" "}
              sobre ello.
            </h2>
            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: "var(--color-muted)" }}>
              
              Soy desarrollador Full-Stack.
              Combino código bien estructurado con un ojo para el diseño y la
              comunicación clara. Este blog es mi cuaderno público: donde
              documento lo que aprendo, los errores que cometo y las soluciones
              que encuentro.
            </p>
            <p
              className="text-base leading-relaxed mb-10"
              style={{ color: "var(--color-muted)" }}>
            
              Me interesan las interfaces rápidas,la arquitectura limpia y hacer que las cosas difíciles sean fáciles
              de entender.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
              {stats?.map((stat) =>
              <div key={stat?.label}>
                  <div
                  className="text-3xl font-serif font-medium mb-1"
                  style={{ color: "var(--color-amber)" }}>
                  
                    {stat?.value}
                  </div>
                  <div
                  className="text-xs font-medium leading-tight"
                  style={{ color: "var(--color-muted)" }}>
                  
                    {stat?.label}
                  </div>
                </div>
              )}
            </div>

            {/* Download CV button */}
            <a
              href="#"
              className="btn-outline-dark inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-semibold">
              
              <Icon name="DocumentArrowDownIcon" size={18} />
              Descargar CV
            </a>
          </div>

          {/* Right — photo + skills */}
          <div className={`lg:col-span-5 reveal delay-2 ${!visible ? "hidden" : ""}`}>
            {/* Photo */}
            <div
              className="relative rounded-4xl overflow-hidden mb-8 shadow-card"
              style={{ height: "320px" }}>
              
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_16073ccd5-1766925322121.png"
                alt="Steven Flores, desarrollador Full-Stack, trabajando en su escritorio con múltiples pantallas"
                fill
                className="object-cover" />
              
              <div
                className="absolute inset-0"
                style={{
                  background:
                  "linear-gradient(to top, rgba(28,26,23,0.3) 0%, transparent 60%)"
                }} />
              
              <div className="absolute bottom-4 left-4">
                <span
                  className="text-sm font-semibold text-white"
                  style={{ textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}>
                  
                  
                </span>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              {skills?.map((skill, i) =>
              <div key={skill?.name}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span
                    className="text-sm font-medium"
                    style={{ color: "var(--color-dark)" }}>
                    
                      {skill?.name}
                    </span>
                    <span
                    className="text-xs font-semibold"
                    style={{ color: "var(--color-muted)" }}>
                    
                      {skill?.level}%
                    </span>
                  </div>
                  <div
                  className="h-1.5 rounded-full overflow-hidden"
                  style={{ background: "rgba(28,26,23,0.08)" }}>
                  
                    <div
                    className="h-full rounded-full skill-bar-fill"
                    style={{
                      width: animated ? `${skill?.level}%` : "0%",
                      background:
                      i % 3 === 0 ?
                      "linear-gradient(90deg, #C17A2A, #E8A84A)" :
                      i % 3 === 1 ?
                      "var(--color-dark)" :
                      "var(--color-sage)",
                      transitionDelay: `${i * 0.1}s`
                    }} />
                  
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}
