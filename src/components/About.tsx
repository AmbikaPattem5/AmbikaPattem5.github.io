import { focusAreas, summary } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="About"
          title="Turning requirements into polished interfaces"
          description="Focused on the full frontend workflow—from design-minded components to production-ready deployments."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="reveal lg:col-span-3">
            <p className="text-lg leading-relaxed text-[var(--color-text-muted)]">{summary}</p>
            <p className="mt-4 leading-relaxed text-[var(--color-text-muted)]">
              After professional experience at Infor and Ajackus, I&apos;ve been building practical React applications and
              strengthening TypeScript, Redux Toolkit, and frontend architecture through hands-on projects.
            </p>
          </div>

          <div className="reveal lg:col-span-2">
            <div className="surface-card-glow rounded-2xl p-6">
              <h3 className="mb-4 text-sm font-semibold tracking-wide text-[var(--color-text)] uppercase">Current focus</h3>
              <ul className="space-y-3">
                {focusAreas.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
