import { skills } from '../data'
import Section from './Section'

export default function Skills() {
  return (
    <Section id="skills" eyebrow="02 · Skills" title="What I work with">
      <div className="skills">
        {skills.map((s, i) => (
          <div key={s.group} className="card skills__group reveal" style={{ '--d': `${i * 70}ms` }}>
            <h3>{s.group}</h3>
            <ul className="chips">
              {s.items.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
