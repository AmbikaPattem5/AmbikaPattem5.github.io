import { personal } from '../data/portfolio'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--color-border)] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-[var(--color-text-muted)] md:flex-row lg:px-8">
        <p>
          © {year} {personal.name}. Built with React, TypeScript & Tailwind CSS.
        </p>
        <p>{personal.location}</p>
      </div>
    </footer>
  )
}
