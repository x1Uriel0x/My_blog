"use client";
import { useEffect, useRef, useState } from "react";
import AppImage from "@/components/ui/AppImage";
import Icon from "@/components/ui/AppIcon";

const projects = [
{
  id: "proj-devflow",
  title: "DevFlow",
  description:
  "Plataforma de gestión de tareas para equipos de desarrollo. Kanban + sprints + métricas de velocidad.",
  tag: "SaaS",
  tech: ["Next.js", "Prisma", "TypeScript"],
  image:
  "https://img.rocket.new/generatedImages/rocket_gen_img_1c3a7a3bc-1764648271797.png",
  imageAlt:
  "Dashboard de software de gestión de proyectos con gráficas de progreso y tablero kanban",
  size: "large",
  color: "#C17A2A"
},
{
  id: "proj-lexica",
  title: "Léxica",
  description: "Generador de contenido técnico con IA para developers.",
  tag: "AI Tool",
  tech: ["React", "OpenAI", "Node.js"],
  image:
  "https://img.rocket.new/generatedImages/rocket_gen_img_1b6d7e10c-1768220361868.png",
  imageAlt:
  "Interfaz de herramienta de escritura con inteligencia artificial mostrando texto generado",
  size: "small",
  color: "#7A8C75"
},
{
  id: "proj-fintrack",
  title: "FinTrack",
  description: "Dashboard de finanzas personales con visualizaciones interactivas.",
  tag: "Open Source",
  tech: ["React", "Recharts", "Supabase"],
  image:
  "https://img.rocket.new/generatedImages/rocket_gen_img_1b8576979-1772315738601.png",
  imageAlt:
  "Gráficas de finanzas personales con barras de gastos mensuales y línea de ahorro",
  size: "small",
  color: "#1C1A17"
},
{
  id: "proj-portafolio-ux",
  title: "UX Case Studies",
  description:
  "Colección de 6 casos de estudio de rediseño de productos reales con antes/después documentado.",
  tag: "Diseño",
  tech: ["Figma", "Framer", "Research"],
  image:
  "https://img.rocket.new/generatedImages/rocket_gen_img_1ada15363-1772315739113.png",
  imageAlt:
  "Wireframes y prototipos de diseño UI en pantallas múltiples sobre fondo oscuro",
  size: "medium",
  color: "#C17A2A"
}];


export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-28 px-5"
      style={{ background: "var(--color-cream)" }}>
      
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`reveal ${!visible ? "hidden" : ""} flex items-center justify-between mb-16 flex-wrap gap-6`}>
          
          <div>
            <span
              className="text-xs font-semibold uppercase tracking-widest block mb-4"
              style={{ color: "var(--color-muted)", letterSpacing: "0.18em" }}>
              
              Proyectos seleccionados
            </span>
            <h2
              className="font-serif leading-none"
              style={{
                fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
                letterSpacing: "-0.04em",
                lineHeight: "0.92"
              }}>
              
              Lo que{" "}
              <span
                className="italic font-light"
                style={{ opacity: 0.5 }}>
                
                construyo.
              </span>
            </h2>
          </div>
          <a
            href="#"
            className={`reveal delay-2 ${!visible ? "hidden" : ""} btn-outline-dark inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium`}>
            
            Ver todos
            <Icon name="ArrowRightIcon" size={14} />
          </a>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Large card */}
          <div
            className={`md:col-span-7 reveal delay-1 ${!visible ? "hidden" : ""}`}>
            
            <ProjectCard project={projects[0]} aspectClass="h-72 md:h-96" />
          </div>

          {/* Small cards stacked */}
          <div
            className={`md:col-span-5 flex flex-col gap-5 reveal delay-2 ${!visible ? "hidden" : ""}`}>
            
            <ProjectCard project={projects[1]} aspectClass="h-44" />
            <ProjectCard project={projects[2]} aspectClass="h-44" />
          </div>

          {/* Medium card full width on mobile */}
          <div
            className={`md:col-span-12 reveal delay-3 ${!visible ? "hidden" : ""}`}>
            
            <ProjectCard project={projects[3]} aspectClass="h-64" wide />
          </div>
        </div>
      </div>
    </section>);

}

function ProjectCard({
  project,
  aspectClass,
  wide = false




}: {project: (typeof projects)[0];aspectClass: string;wide?: boolean;}) {
  return (
    <div
      className={`project-card rounded-4xl overflow-hidden relative ${aspectClass} group border`}
      style={{ borderColor: "rgba(28,26,23,0.07)" }}>
      
      <AppImage
        src={project.image}
        alt={project.imageAlt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105" />
      
      {/* Gradient overlay always */}
      <div
        className="absolute inset-0"
        style={{
          background:
          "linear-gradient(to top, rgba(28,26,23,0.85) 0%, rgba(28,26,23,0.2) 50%, transparent 100%)"
        }} />
      
      {/* Hover overlay */}
      <div
        className="card-overlay absolute inset-0"
        style={{ background: "rgba(28,26,23,0.15)" }} />
      

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <span
            className="tag-pill"
            style={{
              background: "rgba(247,244,238,0.15)",
              color: "rgba(247,244,238,0.9)",
              borderColor: "rgba(247,244,238,0.2)"
            }}>
            
            {project.tag}
          </span>
          <a
            href="#"
            className="w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
            style={{ background: "rgba(247,244,238,0.2)", color: "#F7F4EE" }}
            aria-label={`Ver proyecto ${project.title}`}>
            
            <Icon name="ArrowUpRightIcon" size={16} />
          </a>
        </div>

        <div>
          <h3
            className="font-serif text-white mb-1"
            style={{
              fontSize: wide ? "clamp(1.5rem, 3vw, 2.2rem)" : "1.5rem",
              letterSpacing: "-0.02em"
            }}>
            
            {project.title}
          </h3>
          <p
            className="text-sm leading-relaxed mb-3 max-w-md"
            style={{ color: "rgba(247,244,238,0.7)" }}>
            
            {project.description}
          </p>
          <div className="flex gap-2 flex-wrap">
            {project.tech.map((t) =>
            <span
              key={`${project.id}-${t}`}
              className="text-xs font-medium px-2.5 py-1 rounded-full"
              style={{
                background: "rgba(247,244,238,0.12)",
                color: "rgba(247,244,238,0.75)",
                border: "1px solid rgba(247,244,238,0.15)"
              }}>
              
                {t}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>);

}