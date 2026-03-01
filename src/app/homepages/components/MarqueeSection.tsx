"use client";

const words = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Figma",
  "UI Design",
  "Open Source",
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Figma",
  "UI Design",
  "Open Source",
];

export default function MarqueeSection() {
  return (
    <div
      className="py-8 overflow-hidden border-y"
      style={{
        borderColor: "var(--color-border)",
        background: "rgba(28,26,23,0.03)",
      }}
    >
      <div className="relative">
        <div
          className="animate-marquee flex items-center gap-10 whitespace-nowrap"
          style={{ width: "max-content" }}
        >
          {words?.map((word, i) => (
            <span
              key={`marquee-${i}`}
              className="flex items-center gap-10 text-sm font-semibold uppercase tracking-widest"
              style={{
                color:
                  i % 4 === 0
                    ? "var(--color-amber)"
                    : "rgba(28,26,23,0.25)",
                letterSpacing: "0.15em",
              }}
            >
              {word}
              <span
                className="inline-block w-1 h-1 rounded-full"
                style={{ background: "var(--color-border)" }}
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}