import { GraduationCap } from 'lucide-react'
import { education } from '../data/portfolio'

export function Education() {
  return (
    <section className="border-t border-[var(--color-border)] py-16">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="reveal surface-card flex flex-col gap-4 rounded-2xl p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-[var(--color-text)]">{education.degree}</h3>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">{education.school}</p>
            </div>
          </div>
          <p className="text-sm text-[var(--color-text-muted)]">{education.period}</p>
        </div>
      </div>
    </section>
  )
}
