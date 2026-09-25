import { Mail, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navLinks, personal } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'
import { GitHubIcon, LinkedInIcon } from './icons/SocialIcons'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(navLinks.map((l) => l.id))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-[var(--color-border)] bg-[var(--color-surface)]/88 shadow-lg backdrop-blur-xl'
          : 'bg-[var(--color-surface)]/40 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
        <button
          type="button"
          onClick={() => scrollTo('hero')}
          className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-[var(--color-text)]"
        >
          Ambika<span className="text-[var(--color-accent)]">.</span>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => scrollTo(link.id)}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  active === link.id
                    ? 'bg-[var(--color-accent-soft)] text-[var(--color-accent-hover)]'
                    : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 text-[var(--color-text-muted)] transition hover:bg-[var(--color-surface-muted)] hover:text-[var(--color-text)]"
            aria-label="GitHub"
          >
            <GitHubIcon size={18} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 text-[var(--color-text-muted)] transition hover:bg-[var(--color-surface-muted)] hover:text-[var(--color-text)]"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={18} />
          </a>
          <a href={`mailto:${personal.email}`} className="btn-primary ml-1 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm">
            <Mail size={16} />
            Contact
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-[var(--color-text)] md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-b border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-5 pb-5 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => scrollTo(link.id)}
                  className="w-full rounded-lg px-3 py-3 text-left text-sm text-[var(--color-text-muted)] hover:bg-[var(--color-surface-muted)] hover:text-[var(--color-text)]"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
