export function SaasifyHero() {
  return (
    <section id="hero" className="sf-hero sf-hero-home">
      <div className="sf-hero-copy">
        <h1 className="hero-line sf-hero-script">
          <span>All your daily work,</span>
          <span>
            in <span className="sf-hero-highlight">one place.</span>
          </span>
        </h1>
        <p className="hero-line sf-hero-script-sub">
          Simple to run, and priced for a small team.
        </p>
        <div className="hero-line sf-hero-actions">
          <a href="#modules" className="sf-hero-cta">
            See the modules
          </a>
          <a href="#reach-out" className="sf-hero-cta-quiet">
            Let’s start
          </a>
          <p className="sf-hero-note">
            <svg viewBox="0 0 74 42" aria-hidden="true">
              <path d="M68 8C46 6 28 16 14 32" />
              <path d="M22 24l-10 10 12 1" />
            </svg>
            <span>
              ₹49 or $9
              <br />
              a month, to start
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
