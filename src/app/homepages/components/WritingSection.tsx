"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/AppIcon";

const posts = [
  {
    number: "01",
    title: "Por qué migré de Create React App a Next.js 15",
    excerpt:
      "El proceso completo: desde la decisión hasta el deploy. Lo que nadie te cuenta sobre la migración.",
    tag: "Next.js",
    date: "Feb 2026",
    readTime: "8 min",
    featured: true,
  },
  {
    number: "02",
    title: "TypeScript: los errores que me costaron 3 días de debugging",
    excerpt:
      "Casos reales donde los tipos genéricos me salvaron (y una vez me destruyeron) en producción.",
    tag: "TypeScript",
    date: "Ene 2026",
    readTime: "6 min",
    featured: false,
  },
  {
    number: "03",
    title: "Diseño de APIs REST que no te van a odiar tus colegas",
    excerpt:
      "Principios prácticos para estructurar endpoints, manejar errores y documentar sin morir en el intento.",
    tag: "Backend",
    date: "Ene 2026",
    readTime: "10 min",
    featured: false,
  },
  {
    number: "04",
    title: "Cómo construí un SaaS en 30 días (y lo que aprendí)",
    excerpt:
      "El stack, los atajos legítimos, los errores caros y si realmente vale la pena el enfoque de MVP rápido.",
    tag: "Indie Dev",
    date: "Dic 2025",
    readTime: "12 min",
    featured: false,
  },
  {
    number: "05",
    title: "Framer Motion: animaciones que no se sienten de plantilla",
    excerpt:
      "Técnicas avanzadas de easing, stagger y scroll-linked animations para elevar la UX de tus proyectos.",
    tag: "UI / Animaciones",
    date: "Nov 2025",
    readTime: "7 min",
    featured: false,
  },
];

export default function WritingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="writing" ref={sectionRef} className="py-28 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Header row */}
        <div
          className={`reveal ${!visible ? "hidden" : ""} flex flex-col md:flex-row justify-between items-end mb-16 gap-6`}
        >
          <div>
            <span
              className="text-xs font-semibold uppercase tracking-widest block mb-4"
              style={{ color: "var(--color-muted)", letterSpacing: "0.18em" }}
            >
              Escritura reciente
            </span>
            <h2
              className="font-serif leading-none"
              style={{
                fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
                letterSpacing: "-0.04em",
                lineHeight: "0.92",
              }}
            >
              Lo que{" "}
              <span
                className="italic font-light"
                style={{ color: "var(--color-amber)" }}
              >
                escribo.
              </span>
            </h2>
          </div>
          <div
            className={`reveal delay-2 ${!visible ? "hidden" : ""} flex gap-5 border-b pb-3`}
            style={{ borderColor: "var(--color-border)" }}
          >
            <button
              className="text-lg font-serif border-b-2 pb-1"
              style={{ borderColor: "var(--color-dark)" }}
            >
              Todos
            </button>
            <button
              className="text-lg font-serif pb-1 transition-opacity hover:opacity-100"
              style={{ opacity: 0.3 }}
            >
              Tutoriales
            </button>
            <button
              className="text-lg font-serif pb-1 transition-opacity hover:opacity-100"
              style={{ opacity: 0.3 }}
            >
              Reflexiones
            </button>
          </div>
        </div>

        {/* Posts list */}
        <ul className="space-y-0">
          {posts?.map((post, i) => (
            <li
              key={`post-${post?.number}`}
              className={`post-item reveal delay-${Math.min(i + 1, 4)} ${!visible ? "hidden" : ""} py-8 cursor-pointer`}
            >
              <a href="#" className="flex justify-between items-center w-full group">
                <div className="flex items-start gap-6 flex-1 min-w-0">
                  <span
                    className="post-number text-sm font-medium mt-1 shrink-0"
                    style={{ opacity: 0.25, color: "var(--color-dark)" }}
                  >
                    {post?.number}
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="tag-pill">{post?.tag}</span>
                      {post?.featured && (
                        <span
                          className="text-xs font-semibold"
                          style={{ color: "var(--color-amber)" }}
                        >
                          ★ Destacado
                        </span>
                      )}
                    </div>
                    <h3
                      className="font-serif text-2xl md:text-3xl mb-1 leading-tight"
                      style={{ letterSpacing: "-0.02em" }}
                    >
                      {post?.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed hidden md:block"
                      style={{ color: "var(--color-muted)" }}
                    >
                      {post?.excerpt}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 ml-6 shrink-0">
                  <div className="text-right hidden sm:block">
                    <p
                      className="text-xs font-medium"
                      style={{ color: "var(--color-muted)" }}
                    >
                      {post?.date}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "var(--color-muted)" }}
                    >
                      {post?.readTime}
                    </p>
                  </div>
                  <div
                    className="post-arrow w-9 h-9 rounded-full border flex items-center justify-center"
                    style={{ borderColor: "var(--color-border)" }}
                  >
                    <Icon name="ArrowUpRightIcon" size={16} />
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>

        {/* View all */}
        <div
          className={`reveal delay-4 ${!visible ? "hidden" : ""} pt-10 text-center`}
        >
          <a
            href="#"
            className="btn-outline-dark inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-sm font-semibold"
          >
            Ver todos los artículos
            <Icon name="ArrowRightIcon" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
