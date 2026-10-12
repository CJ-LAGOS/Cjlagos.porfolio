import { useState } from 'react'
import { profile } from '../data'
import { Check, Copy, GitHub, LinkedIn, Mail } from './Icons'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact card reveal">
          <p className="eyebrow mono">05 · Contact</p>
          <h2>Let's work together.</h2>
          <p className="contact__lead">
            I'm actively looking for a junior front-end role. If you think I'd be a good fit for your team,
            I'd love to hear from you — I usually reply within a day.
          </p>

          <div className="contact__email">
            <a href={`mailto:${profile.email}`} className="btn btn--primary">
              <Mail /> {profile.email}
            </a>
            <button className="btn btn--ghost" onClick={copyEmail} aria-live="polite">
              {copied ? (
                <>
                  <Check /> Copied
                </>
              ) : (
                <>
                  <Copy /> Copy email
                </>
              )}
            </button>
          </div>

          <div className="contact__socials">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <LinkedIn /> LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <GitHub /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
