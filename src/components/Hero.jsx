import { profile } from '../data'
import { Arrow, Download, GitHub, LinkedIn, Mail } from './Icons'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__inner">
        <div className={`hero__grid ${profile.photo ? 'has-photo' : ''}`}>
          <div className="hero__text">
            {profile.openToWork && (
              <p className="badge hero__badge">
                <span className="pulse" /> Open to junior front-end roles
              </p>
            )}

            <h1 className="hero__title">
              Hi, I'm {profile.firstName}.
              <br />
              <span className="gradient-text">{profile.headline}</span>
            </h1>

            <p className="hero__intro">{profile.intro}</p>

            <div className="hero__cta">
              <a href="#projects" className="btn btn--primary">
                View my work <Arrow />
              </a>
              {profile.resume ? (
                <a href={profile.resume} className="btn btn--ghost" download>
                  Download résumé <Download />
                </a>
              ) : (
                <a href="#contact" className="btn btn--ghost">
                  Get in touch
                </a>
              )}
            </div>
          </div>

          {profile.photo && (
            <div className="hero__photo">
              <div className="hero__frame">
                <img src={profile.photo} alt={`Photo of ${profile.name}`} width="600" height="600" />
              </div>
            </div>
          )}
        </div>

        <div className="hero__meta">
          <span className="mono">{profile.role}</span>
          <span className="dot" />
          <span className="mono">{profile.location}</span>
          <div className="hero__socials">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GitHub />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedIn />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <Mail />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
