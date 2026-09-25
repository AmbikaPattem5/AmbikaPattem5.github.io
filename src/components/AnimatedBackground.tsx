export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[var(--color-surface)]" aria-hidden>
      <div className="animate-mesh glow-orb absolute -top-[15%] left-[5%] h-[480px] w-[480px] rounded-full bg-[#0ea5e9]" />
      <div
        className="animate-mesh glow-orb absolute top-[35%] -right-[8%] h-[420px] w-[420px] rounded-full bg-[#7c3aed]"
        style={{ animationDelay: '-8s' }}
      />
      <div
        className="animate-mesh glow-orb absolute -bottom-[10%] left-[40%] h-[360px] w-[360px] rounded-full bg-[#14b8a6]"
        style={{ animationDelay: '-14s' }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-surface)_70%)]" />
    </div>
  )
}
