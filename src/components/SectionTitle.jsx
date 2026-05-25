function SectionTitle({ label, title, titleAccent, accentPosition = 'end' }) {
  return (
    <header className="mb-10 max-sm:mb-8">
      {label && (
        <p className="m-0 font-sans text-[0.6875rem] font-medium tracking-[0.28em] text-accent uppercase">
          {label}
        </p>
      )}
      <h2 className="mt-3 font-display text-[clamp(2.5rem,6vw,3.75rem)] leading-[1.05] font-light tracking-tight text-heading">
        {accentPosition === 'start' && titleAccent && (
          <span className="pr-2 italic text-accent">{titleAccent}</span>
        )}
        <span>{title}</span>
        {accentPosition === 'end' && titleAccent && (
          <span className="pl-2 italic text-accent">{titleAccent}</span>
        )}
      </h2>
      <div
        className="mt-5 flex items-center gap-3"
        aria-hidden="true"
      >
        <span className="h-px w-12 bg-accent" />
        <span className="font-display text-lg text-accent/80">—</span>
        <span className="h-px max-w-24 flex-1 bg-line" />
      </div>
    </header>
  )
}

export default SectionTitle
