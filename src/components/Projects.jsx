import { portfolio } from '../data/portfolio'
import SectionTitle from './SectionTitle'

function Projects() {
  return (
    <section id="projects" className="border-b border-line py-20 max-sm:py-14">
      <SectionTitle
        label="03 — Trabajo"
        title="Proyectos"
        titleAccent="selectos"
      />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
        {portfolio.projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col gap-3 rounded-xl border border-line bg-surface p-5 text-left shadow-(--shadow-card)"
          >
            <h3 className="text-lg">{project.title}</h3>
            <p className="flex-1 leading-relaxed">{project.description}</p>
            <ul className="flex list-none flex-wrap gap-2 p-0">
              {project.tech.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-accent-soft px-2.5 py-1 text-[0.8125rem] font-medium text-accent"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex gap-4 text-[0.9375rem] font-semibold">
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                Live demo
              </a>
              <a href={project.repoUrl} target="_blank" rel="noreferrer">
                Code
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
