import { useState } from 'react'
import { portfolio } from '../data/portfolio'
import SectionTitle from './SectionTitle'

function shuffleSkills(skills) {
  const shuffled = [...skills]
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

function Skills() {
  const [skills] = useState(() => shuffleSkills(portfolio.skills))

  return (
    <section id="skills" className="border-b border-line py-20 max-sm:py-14">
      <SectionTitle label="04 — Stack" title="Habilidades" titleAccent="técnicas" />
      <ul className="flex list-none flex-wrap gap-2.5 p-0">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-lg border border-line bg-surface px-4 py-2 font-medium text-heading"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
