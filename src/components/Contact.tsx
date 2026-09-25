import { Mail, Phone } from 'lucide-react'
import { personal } from '../data/portfolio'
import { GitHubIcon, LinkedInIcon } from './icons/SocialIcons'
import { SectionHeading } from './SectionHeading'

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="surface-card-glow rounded-3xl p-8 md:p-12">
          <SectionHeading
            eyebrow="Contact"
            title="Let's connect"
            description="Interested in React or Frontend Developer roles, or want to collaborate? I'd love to hear from you."
          />

          <div className="reveal grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <a href={`mailto:${personal.email}`} className="group card-hover surface-card rounded-2xl p-6">
              <Mail className="text-[var(--color-accent)]" size={22} />
              <p className="mt-4 text-sm text-[var(--color-text-muted)]">Email</p>
              <p className="mt-1 text-sm font-medium break-all group-hover:text-[var(--color-accent-hover)]">{personal.email}</p>
            </a>

            <a href={`tel:${personal.phone.replace(/\s/g, '')}`} className="group card-hover surface-card rounded-2xl p-6">
              <Phone className="text-[var(--color-accent-secondary)]" size={22} />
              <p className="mt-4 text-sm text-[var(--color-text-muted)]">Phone</p>
              <p className="mt-1 text-sm font-medium group-hover:text-[var(--color-accent-hover)]">{personal.phone}</p>
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group card-hover surface-card rounded-2xl p-6"
            >
              <LinkedInIcon className="text-[var(--color-accent)]" size={22} />
              <p className="mt-4 text-sm text-[var(--color-text-muted)]">LinkedIn</p>
              <p className="mt-1 text-sm font-medium group-hover:text-[var(--color-accent-hover)]">/in/ambikapattem</p>
            </a>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group card-hover surface-card rounded-2xl p-6"
            >
              <GitHubIcon className="text-[var(--color-text)]" size={22} />
              <p className="mt-4 text-sm text-[var(--color-text-muted)]">GitHub</p>
              <p className="mt-1 text-sm font-medium group-hover:text-[var(--color-accent-hover)]">@ambikapattem5</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
