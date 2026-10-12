export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <header className="section__head reveal">
          <p className="eyebrow mono">{eyebrow}</p>
          <h2>{title}</h2>
        </header>
        {children}
      </div>
    </section>
  )
}
