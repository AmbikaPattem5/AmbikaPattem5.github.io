import type { CSSProperties } from 'react'
import { skillGroups } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

const accentBars = ['from-sky-400 to-indigo-500', 'from-violet-400 to-purple-500', 'from-teal-400 to-cyan-500', 'from-orange-400 to-rose-500']

export function Skills() {
  return (
    <section id="skills" className="section-alt scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Tech stack & tooling"
          description="Technologies I use to build maintainable, responsive frontend applications."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <article
              key={group.title}
              className="reveal card-hover surface-card overflow-hidden rounded-2xl"
              style={{ '--reveal-delay': `${i * 80}ms` } as CSSProperties}
            >
              <div className={`h-1 bg-gradient-to-r ${accentBars[i % accentBars.length]}`} />
              <div className="p-6">
                <h3 className="mb-4 text-sm font-semibold text-[var(--color-accent-hover)]">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="chip rounded-full px-3 py-1 text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
