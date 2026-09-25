import { experience } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading eyebrow="Experience" title="Professional journey" description="Enterprise frontend work and continuous hands-on React development." />

        <div className="relative space-y-8 before:absolute before:top-2 before:bottom-2 before:left-[7px] before:w-1 before:rounded-full before:bg-gradient-to-b before:from-indigo-500 before:via-violet-500 before:to-orange-500 md:before:left-[11px]">
          {experience.map((job) => (
            <article key={`${job.company}-${job.period}`} className="reveal relative pl-8 md:pl-12">
              <span className="absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-surface)] md:left-1" />
              <div className="surface-card rounded-2xl p-6 md:p-8">
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--color-text)]">{job.role}</h3>
                    <p className="text-[var(--color-accent)]">
                      {job.company} · {job.location}
                    </p>
                  </div>
                  <p className="shrink-0 text-sm text-[var(--color-text-muted)]">{job.period}</p>
                </div>
                <ul className="mt-5 space-y-2">
                  {job.highlights.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                      <span className="text-[var(--color-highlight)]">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
