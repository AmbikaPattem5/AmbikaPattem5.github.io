import { ExternalLink } from 'lucide-react'

export function HeroShowcase() {
  const src = `${import.meta.env.BASE_URL}foodhub-preview.png`

  return (
    <div className="animate-fade-up-delay-2 relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
      <div className="animate-float project-showcase">
        <div className="project-showcase-inner">
          <div className="browser-chrome">
            <span className="browser-dot bg-[#ff5f57]" />
            <span className="browser-dot bg-[#febc2e]" />
            <span className="browser-dot bg-[#28c840]" />
            <span className="ml-2 truncate text-xs text-[var(--color-text-muted)]">foodhub — live project</span>
          </div>
          <div className="project-image-wrap">
            <img src={src} alt="FoodHub project preview" />
          </div>
          <div className="flex items-center justify-between gap-3 border-t border-[var(--color-border)] p-4">
            <div>
              <p className="text-sm font-semibold text-[var(--color-text)]">FoodHub</p>
              <p className="text-xs text-[var(--color-text-muted)]">Restaurant ordering SPA</p>
            </div>
            <a
              href="https://ambikapattem5.github.io/foodhub/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs"
            >
              Live demo
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-4 -left-4 hidden surface-card rounded-xl px-4 py-3 md:block">
        <p className="text-2xl font-bold text-[var(--color-accent)]">2+</p>
        <p className="text-xs text-[var(--color-text-muted)]">Years experience</p>
      </div>

      <div className="absolute -top-3 -right-2 hidden surface-card rounded-xl px-4 py-3 md:block">
        <p className="text-xs font-semibold text-[var(--color-text)]">React · TypeScript</p>
        <p className="text-xs text-[var(--color-text-muted)]">Frontend focus</p>
      </div>
    </div>
  )
}
