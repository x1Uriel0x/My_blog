import AppLogo from "@/components/ui/AppLogo";
import Icon from "@/components/ui/AppIcon";

export default function Footer() {
  const year = 2026;

  return (
    <footer
      className="pt-8 pb-10 px-5 border-t"
      style={{ borderColor: "var(--color-border)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo + copyright */}
          <div className="flex items-center gap-3">
            <AppLogo size={28} />
            <span
              className="text-sm font-medium"
              style={{ color: "var(--color-muted)" }}
            >
              © {year} Sebastián Morales
            </span>
          </div>

          {/* Links */}
          <div
            className="flex items-center gap-6 text-sm font-medium"
            style={{ color: "var(--color-muted)" }}
          >
            <a href="#" className="hover:text-dark transition-colors" style={{ color: "inherit" }}>
              Privacidad
            </a>
            <a href="#" className="hover:text-dark transition-colors" style={{ color: "inherit" }}>
              Términos
            </a>
            <a href="#" className="hover:text-dark transition-colors" style={{ color: "inherit" }}>
              RSS
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/sebastianmorales"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border flex items-center justify-center transition-all hover:scale-110"
              style={{
                borderColor: "var(--color-border)",
                color: "var(--color-muted)",
              }}
              aria-label="GitHub de Sebastián Morales"
            >
              <Icon name="CodeBracketIcon" size={15} />
            </a>
            <a
              href="https://linkedin.com/in/sebastianmorales"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border flex items-center justify-center transition-all hover:scale-110"
              style={{
                borderColor: "var(--color-border)",
                color: "var(--color-muted)",
              }}
              aria-label="LinkedIn de Sebastián Morales"
            >
              <Icon name="LinkIcon" size={15} />
            </a>
            <a
              href="https://twitter.com/sebastianmorales"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border flex items-center justify-center transition-all hover:scale-110"
              style={{
                borderColor: "var(--color-border)",
                color: "var(--color-muted)",
              }}
              aria-label="Twitter de Sebastián Morales"
            >
              <Icon name="ChatBubbleLeftIcon" size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
