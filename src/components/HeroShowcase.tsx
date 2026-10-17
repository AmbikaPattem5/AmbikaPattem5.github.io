import { useState, useEffect } from 'react'
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import { projects } from '../data/portfolio'
import { GitHubIcon } from './icons/SocialIcons'

export function HeroShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const activeProject = projects[currentIndex] ?? projects[0]
  const displayUrl = activeProject.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')
  const src = `${import.meta.env.BASE_URL}${activeProject.previewImage}`

  // Automatically cycle through projects every 5 seconds, pausing on hover
  useEffect(() => {
    if (isPaused || projects.length <= 1) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isPaused])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  return (
    <div
      className="animate-fade-up-delay-2 relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Project Switcher Navigation */}
      <div className="mb-3 flex items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-1 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-1">
          {projects.map((proj, idx) => (
            <button
              key={proj.name}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`cursor-pointer rounded-full px-3 py-1 text-xs font-medium transition-all ${
                idx === currentIndex
                  ? 'bg-[var(--color-accent)] text-white shadow-sm'
                  : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
              }`}
            >
              {proj.name}
            </button>
          ))}
        </div>

        {/* Previous / Next buttons & counter */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous project"
            className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-elevated)] text-[var(--color-text-muted)] transition hover:border-[#475569] hover:text-[var(--color-text)]"
          >
            <ChevronLeft size={14} />
          </button>
          <span className="font-mono text-xs text-[var(--color-text-muted)]">
            {currentIndex + 1}/{projects.length}
          </span>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next project"
            className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-elevated)] text-[var(--color-text-muted)] transition hover:border-[#475569] hover:text-[var(--color-text)]"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* Main Preview Card with Window Frame */}
      <div className="relative">
        <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] shadow-2xl transition-all duration-300 hover:border-[#475569]">
          <div className="browser-chrome">
            <span className="browser-dot bg-[#ff5f57]" />
            <span className="browser-dot bg-[#febc2e]" />
            <span className="browser-dot bg-[#28c840]" />
            <span className="ml-2 truncate text-xs text-[var(--color-text-muted)]">{displayUrl}</span>
          </div>

          <a
            href={activeProject.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-image-wrap block aspect-[16/10] overflow-hidden bg-[var(--color-surface-muted)]"
            aria-label={`${activeProject.name} live preview`}
          >
            <img
              key={activeProject.name}
              src={src}
              alt={`${activeProject.name} project preview`}
              className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
            />
          </a>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--color-border)] p-4 md:pl-22">
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-[var(--color-text)]">{activeProject.name}</p>
              {activeProject.subtitle && (
                <p className="truncate text-xs text-[var(--color-text-muted)]">{activeProject.subtitle}</p>
              )}
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <a
                href={activeProject.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] px-3 py-1.5 text-xs font-medium text-[var(--color-text)] hover:text-white"
              >
                <GitHubIcon size={12} />
                Code
              </a>
              <a
                href={activeProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium"
              >
                Live demo
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Experience Floating Badge (positioned with clearance so it never covers text) */}
        <div className="surface-card absolute -bottom-4 -left-3 hidden rounded-xl px-3.5 py-2 shadow-lg md:block">
          <p className="text-xl font-bold leading-none text-[var(--color-accent)]">2+</p>
          <p className="mt-0.5 text-[11px] text-[var(--color-text-muted)]">Years exp.</p>
        </div>

        {/* Focus Floating Badge */}
        <div className="surface-card absolute -top-3 -right-2 hidden rounded-xl px-3.5 py-2 shadow-lg md:block">
          <p className="text-xs font-semibold text-[var(--color-text)]">React · TypeScript</p>
          <p className="text-[11px] text-[var(--color-text-muted)]">Frontend focus</p>
        </div>
      </div>
    </div>
  )
}
