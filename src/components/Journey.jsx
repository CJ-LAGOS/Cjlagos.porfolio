import { journey } from '../data'
import Section from './Section'

export default function Journey() {
  return (
    <Section id="journey" eyebrow="04 · Journey" title="Experience & education">
      <ol className="timeline">
        {journey.map((j) => (
          <li key={j.title} className="timeline__item reveal">
            <span className="timeline__period mono">{j.period}</span>
            <div>
              <h3>{j.title}</h3>
              <p className="timeline__place">{j.place}</p>
              <p>{j.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
