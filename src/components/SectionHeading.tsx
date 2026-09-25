type Props = {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <div className="reveal mb-12 max-w-2xl">
      <div className="section-heading-bar" />
      <p className="mb-2 text-sm font-semibold tracking-widest text-[var(--color-accent)] uppercase">{eyebrow}</p>
      <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--color-text)] md:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 leading-relaxed text-[var(--color-text-muted)]">{description}</p>}
    </div>
  )
}
