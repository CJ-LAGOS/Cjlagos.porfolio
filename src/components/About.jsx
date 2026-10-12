import { about } from '../data'
import Section from './Section'

export default function About() {
  return (
    <Section id="about" eyebrow="01 · About" title="A little about me">
      <div className="about">
        <div className="about__text reveal">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <dl className="about__facts reveal">
          {about.facts.map((f) => (
            <div key={f.label} className="fact">
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
