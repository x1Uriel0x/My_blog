"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/AppIcon";
import AppImage from "@/components/ui/AppImage";

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to email service (e.g., Resend, SendGrid) or form backend
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-28 px-5 dark-section-glow rounded-[3rem] mx-4 md:mx-6 mb-24 overflow-hidden relative"
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(193,122,42,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div
              className={`reveal ${!visible ? "hidden" : ""} flex items-center gap-3 mb-8`}
            >
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "rgba(193,122,42,0.8)", letterSpacing: "0.18em" }}
              >
                Contacto
              </span>
            </div>
            <h2
              className={`reveal delay-1 ${!visible ? "hidden" : ""} font-serif text-white leading-tight mb-6`}
              style={{
                fontSize: "clamp(2.5rem, 5vw, 3.8rem)",
                letterSpacing: "-0.03em",
                lineHeight: "1.05",
              }}
            >
              Construyamos algo{" "}
              <span
                className="italic font-light"
                style={{ opacity: 0.5 }}
              >
                juntos.
              </span>
            </h2>
            <p
              className={`reveal delay-2 ${!visible ? "hidden" : ""} text-base leading-relaxed mb-10`}
              style={{ color: "rgba(253,251,247,0.55)" }}
            >
              ¿Tienes un proyecto interesante, una oportunidad laboral o
              simplemente quieres hablar sobre tecnología? Escríbeme, suelo
              responder en menos de 24 horas.
            </p>

            {/* Contact links */}
            <div
              className={`reveal delay-3 ${!visible ? "hidden" : ""} space-y-4`}
            >
              <a
                href="mailto:hola@stevenflores.dev"
                className="flex items-center gap-4 group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(193,122,42,0.15)" }}
                >
                  <Icon
                    name="EnvelopeIcon"
                    size={18}
                    style={{ color: "#C17A2A" }}
                  />
                </div>
                <span
                  className="text-sm font-medium group-hover:text-white transition-colors"
                  style={{ color: "rgba(253,251,247,0.6)" }}
                >
                  Fsteven320@gmail.com
                </span>
              </a>
              <a
                href="www.linkedin.com/in/stevęn-floręs-03469b329"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(253,251,247,0.07)" }}
                >
                  <Icon
                    name="LinkIcon"
                    size={18}
                    style={{ color: "rgba(253,251,247,0.5)" }}
                  />
                </div>
                <span
                  className="text-sm font-medium group-hover:text-white transition-colors"
                  style={{ color: "rgba(253,251,247,0.6)" }}
                >
                  www.linkedin.com/in/stevęn-floręs-03469b329
                </span>
              </a>
              <a
                href="https://github.com/x1Uriel0x"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(253,251,247,0.07)" }}
                >
                  <Icon
                    name="CodeBracketIcon"
                    size={18}
                    style={{ color: "rgba(253,251,247,0.5)" }}
                  />
                </div>
                <span
                  className="text-sm font-medium group-hover:text-white transition-colors"
                  style={{ color: "rgba(253,251,247,0.6)" }}
                >
                  github.com/x1Uriel0x
                </span>
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className={`reveal delay-2 ${!visible ? "hidden" : ""}`}>
            {submitted ? (
              <div
                className="rounded-3xl p-10 text-center"
                style={{ background: "rgba(253,251,247,0.06)", border: "1px solid rgba(253,251,247,0.1)" }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: "rgba(193,122,42,0.15)" }}
                >
                  <Icon name="CheckIcon" size={24} style={{ color: "#C17A2A" }} />
                </div>
                <h3
                  className="font-serif text-white text-2xl mb-2"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  ¡Mensaje enviado!
                </h3>
                <p style={{ color: "rgba(253,251,247,0.5)" }} className="text-sm">
                  Te respondo pronto. Gracias por escribir.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl p-8 space-y-5"
                style={{
                  background: "rgba(253,251,247,0.05)",
                  border: "1px solid rgba(253,251,247,0.09)",
                }}
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold mb-2 uppercase tracking-widest"
                    style={{ color: "rgba(253,251,247,0.4)", letterSpacing: "0.12em" }}
                  >
                    Nombre
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 rounded-xl text-sm font-medium outline-none transition-all focus:ring-2"
                    style={{
                      background: "rgba(253,251,247,0.07)",
                      border: "1px solid rgba(253,251,247,0.1)",
                      color: "#FDFBF7",
                      caretColor: "#C17A2A",
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold mb-2 uppercase tracking-widest"
                    style={{ color: "rgba(253,251,247,0.4)", letterSpacing: "0.12em" }}
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 rounded-xl text-sm font-medium outline-none transition-all focus:ring-2"
                    style={{
                      background: "rgba(253,251,247,0.07)",
                      border: "1px solid rgba(253,251,247,0.1)",
                      color: "#FDFBF7",
                      caretColor: "#C17A2A",
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold mb-2 uppercase tracking-widest"
                    style={{ color: "rgba(253,251,247,0.4)", letterSpacing: "0.12em" }}
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Cuéntame sobre tu proyecto o propuesta..."
                    className="w-full px-4 py-3 rounded-xl text-sm font-medium outline-none transition-all focus:ring-2 resize-none"
                    style={{
                      background: "rgba(253,251,247,0.07)",
                      border: "1px solid rgba(253,251,247,0.1)",
                      color: "#FDFBF7",
                      caretColor: "#C17A2A",
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    background: "linear-gradient(135deg, #C17A2A, #E8A84A)",
                    color: "#1C1A17",
                    boxShadow: "0 8px 32px rgba(193,122,42,0.3)",
                  }}
                >
                  Enviar mensaje
                  <Icon name="PaperAirplaneIcon" size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
    