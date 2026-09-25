import type { CSSProperties } from 'react'
import { ExternalLink } from 'lucide-react'
import { projects } from '../data/portfolio'
import { GitHubIcon } from './icons/SocialIcons'
import { SectionHeading } from './SectionHeading'

function ProjectPreview({ image, name }: { image: string; name: string }) {
  const src = `${import.meta.env.BASE_URL}${image}`

  return (
    <div className="project-showcase reveal lg:col-span-5" style={{ '--reveal-delay': '120ms' } as CSSProperties}>
      <div className="project-showcase-inner scan-effect">
        <div className="browser-chrome">
          <span className="browser-dot bg-[#ff5f57]" />
          <span className="browser-dot bg-[#febc2e]" />
          <span className="browser-dot bg-[#28c840]" />
          <span className="ml-2 truncate text-xs text-[var(--color-text-muted)]">ambikapattem5.github.io/foodhub</span>
        </div>
        <a
          href="https://ambikapattem5.github.io/foodhub/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-image-wrap block"
          aria-label={`${name} live preview`}
        >
          <img src={src} alt={`${name} — restaurant ordering app homepage screenshot`} loading="lazy" />
        </a>
      </div>
    </div>
  )
}

export function Projects() {
  const featured = projects.filter((p) => p.featured)

  return (
    <section id="projects" className="section-alt scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Featured work"
          description="End-to-end frontend projects demonstrating component design, routing, styling, and deployment."
        />

        <div className="grid gap-10">
          {featured.map((project) => (
            <article
              key={project.name}
              className="reveal surface-card grid gap-8 overflow-hidden rounded-3xl p-6 md:p-8 lg:grid-cols-12 lg:gap-10"
            >
              {project.previewImage && <ProjectPreview image={project.previewImage} name={project.name} />}

              <div className="flex flex-col justify-between lg:col-span-7">
                <div>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#fb923c44] bg-[#fb923c18] px-3 py-1 text-xs font-medium text-[#fdba74]">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#fb923c] opacity-50" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#fb923c]" />
                    </span>
                    Live on GitHub Pages
                  </div>

                  <h3 className="font-[family-name:var(--font-display)] text-3xl font-semibold md:text-4xl">
                    <span className="gradient-text">{project.name}</span>
                  </h3>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">Restaurant ordering · Single-page application</p>

                  <p className="mt-5 leading-relaxed text-[var(--color-text-muted)]">{project.description}</p>

                  <h4 className="mt-8 mb-3 text-xs font-semibold tracking-wider text-[var(--color-text)] uppercase">Highlights</h4>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {project.features.map((f, i) => (
                      <li
                        key={f}
                        className="reveal flex gap-2 text-sm text-[var(--color-text-muted)]"
                        style={{ '--reveal-delay': `${180 + i * 60}ms` } as CSSProperties}
                      >
                        <span className="text-[var(--color-accent)]">▹</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="chip-accent rounded-full px-3 py-1 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm"
                  >
                    <ExternalLink size={16} />
                    Live demo
                  </a>
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm font-medium text-[var(--color-text)]"
                  >
                    <GitHubIcon size={16} />
                    Source code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
