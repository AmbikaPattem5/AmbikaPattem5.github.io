import { ArrowDown, MapPin, Sparkles } from 'lucide-react'
import { personal } from '../data/portfolio'
import { HeroShowcase } from './HeroShowcase'

const stats = ['React.js', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'REST APIs']

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <div>
          <div className="animate-fade-up stat-pill mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm">
            <Sparkles size={14} className="text-[var(--color-accent)]" />
            {personal.availability}
          </div>

          <p className="animate-fade-up-delay-1 mb-3 text-sm font-medium tracking-[0.2em] text-[var(--color-accent)] uppercase">
            Hi, I&apos;m Ambika
          </p>

          <h1 className="animate-fade-up-delay-2 font-[family-name:var(--font-display)] text-4xl leading-tight font-semibold tracking-tight md:text-6xl md:leading-[1.08]">
            <span className="gradient-text">{personal.name.split(' ')[0]}</span>{' '}
            <span className="text-[var(--color-text)]">Pattem</span>
          </h1>

          <p className="animate-fade-up-delay-3 mt-4 text-xl text-[var(--color-text-muted)] md:text-2xl">{personal.title}</p>

          <p className="animate-fade-up-delay-3 mt-6 max-w-xl text-base leading-relaxed text-[var(--color-text-muted)] md:text-lg">
            {personal.tagline}
          </p>

          <div className="animate-fade-up-delay-3 mt-6 flex flex-wrap gap-2">
            {stats.map((item) => (
              <span key={item} className="chip-accent rounded-full px-3 py-1 text-xs font-medium">
                {item}
              </span>
            ))}
          </div>

          <div className="animate-fade-up-delay-3 mt-6 flex flex-wrap items-center gap-4 text-sm text-[var(--color-text-muted)]">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={16} className="text-[var(--color-highlight)]" />
              {personal.location}
            </span>
            <span className="hidden h-4 w-px bg-[var(--color-border)] sm:block" />
            <span>2+ years · Ex-Infor</span>
          </div>

          <div className="animate-fade-up-delay-3 mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm">
              View featured work
            </a>
            <a href={`mailto:${personal.email}`} className="btn-ghost inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium">
              Get in touch
            </a>
          </div>
        </div>

        <HeroShowcase />
      </div>

      <div className="relative mx-auto mt-14 hidden max-w-6xl px-5 md:block lg:px-8">
        <a
          href="#about"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition hover:text-[var(--color-accent)]"
        >
          Scroll to explore
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  )
}
