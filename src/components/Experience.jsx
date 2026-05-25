import { portfolio } from '../data/portfolio'
import SectionTitle from './SectionTitle'

function ExperienceCard({
  title,
  company,
  period,
  description,
  highlights,
  large = false,
}) {
  return (
    <article
      className={`flex flex-col gap-4 rounded-xl border border-line bg-surface text-left shadow-(--shadow-card) ${
        large ? 'gap-6 p-8 md:p-10' : 'h-full p-5 md:p-6'
      }`}
    >
      <div
        className={`flex flex-col gap-2 ${large ? 'md:flex-row md:items-end md:justify-between md:gap-6' : ''}`}
      >
        <div className="flex flex-col gap-1">
          <h3
            className={`font-display font-light tracking-tight text-heading ${
              large ? 'text-[clamp(1.75rem,4vw,2.5rem)]' : 'text-xl'
            }`}
          >
            {title}
          </h3>
          {company && (
            <p
              className={`m-0 font-sans text-heading ${
                large ? 'text-lg font-medium' : 'text-[0.9375rem] font-medium'
              }`}
            >
              {company}
            </p>
          )}
        </div>
        {period && (
          <p className="m-0 shrink-0 font-sans text-xs font-medium tracking-[0.12em] text-accent uppercase">
            {period}
          </p>
        )}
      </div>

      <p
        className={`m-0 leading-relaxed text-muted ${
          large ? 'max-w-3xl text-[1.0625rem] leading-[1.85]' : 'flex-1 text-[0.9375rem] leading-[1.75]'
        }`}
      >
        {description}
      </p>

      {highlights?.length > 0 && (
        <ul className="flex list-none flex-wrap gap-2 p-0">
          {highlights.map((item) => (
            <li
              key={item}
              className="rounded-full bg-accent-soft px-3 py-1 font-sans text-[0.8125rem] font-medium text-accent"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}

function Experience() {
  const { sectionLabel, title, titleAccent, description, highlights, featured, roles } =
    portfolio.experience

  return (
    <section id="experience" className="border-b border-line py-20 max-sm:py-14">
      <SectionTitle
        label={sectionLabel}
        title={title}
        titleAccent={titleAccent}
      />

      <div className="mb-10 max-w-3xl max-sm:mb-8">
        <p className="m-0 text-[1.0625rem] leading-[1.85] text-muted">{description}</p>
        {highlights?.length > 0 && (
          <ul className="mt-5 flex list-none flex-wrap gap-2 p-0">
            {highlights.map((item) => (
              <li
                key={item}
                className="rounded-full bg-accent-soft px-3 py-1 font-sans text-[0.8125rem] font-medium text-accent"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex flex-col gap-5">
        <ExperienceCard {...featured} large />

        <div className="grid gap-5 md:grid-cols-3">
          {roles.map((role, index) => (
            <ExperienceCard key={`${role.title}-${index}`} {...role} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
