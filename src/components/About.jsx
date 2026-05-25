import { portfolio } from '../data/portfolio'
import SectionTitle from './SectionTitle'

function About() {
  const { sectionLabel, title, titleAccent, lead, paragraphs, location } =
    portfolio.about

  return (
    <section id="about" className="border-b border-line py-20 max-sm:py-14">
      <SectionTitle
        label={sectionLabel}
        title={title}
        titleAccent={titleAccent}
      />

      <div className="grid items-start gap-10 md:grid-cols-2 md:gap-16 lg:gap-20">
        <blockquote className="m-0 border-none p-0">
          <p className="font-display text-[clamp(1.5rem,3.5vw,2.125rem)] leading-snug font-light italic text-heading">
            {lead}
          </p>
        </blockquote>

        <div className="flex flex-col gap-6">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="m-0 text-[1.0625rem] leading-[1.85] text-muted"
            >
              {paragraph}
            </p>
          ))}

          {location && (
            <p className="m-0 pt-2 font-sans text-sm tracking-wide text-muted">
              <span className="text-accent">↗</span>{' '}
              <span className="border-b border-line/80 pb-0.5">{location}</span>
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export default About
