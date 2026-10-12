import { projects } from '../data'
import Section from './Section'
import { External, GitHub } from './Icons'

export default function Projects() {
  return (
    <Section id="projects" eyebrow="03 · Projects" title="Selected work">
      <div className="projects">
        {projects.map((p, i) => (
          <article key={p.title} className="card project reveal" style={{ '--d': `${i * 80}ms` }}>
            <div className="project__top">
              <span className={`status status--${p.status}`}>
                {{ live: 'Live', done: 'Completed', building: 'In progress' }[p.status]}
              </span>
              <div className="project__links">
                {p.code && (
                  <a href={p.code} target="_blank" rel="noreferrer" aria-label={`${p.title} source code`}>
                    <GitHub />
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" aria-label={`${p.title} live site`}>
                    <External />
                  </a>
                )}
              </div>
            </div>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <ul className="tags">
              {p.tech.map((t) => (
                <li key={t} className="mono">
                  {t}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
