type ExternalProductCtaProps = {
  heading: string;
  paragraphs: string[];
  ctaLabel?: string;
  href?: string;
  note?: string;
  tone?: "light" | "ink";
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function ExternalProductCta({
  heading,
  paragraphs,
  ctaLabel,
  href,
  note,
  tone = "light",
  secondaryLabel,
  secondaryHref,
}: ExternalProductCtaProps) {
  const onInk = tone === "ink";

  return (
    <section
      aria-labelledby="live-product-heading"
      className={onInk ? "bg-ink text-white" : "border-t border-line"}
    >
      <div className="mx-auto grid max-w-[1180px] gap-10 px-6 py-16 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:items-end md:gap-20 md:py-24">
        <div>
          <h2
            id="live-product-heading"
            className={`section-title max-w-[14ch] ${onInk ? "text-white" : ""}`}
          >
            {heading}
          </h2>
        </div>
        <div>
          <div
            className={`max-w-[48ch] space-y-5 text-[16px] leading-7 md:text-[17px] md:leading-8 ${onInk ? "text-white/55" : "text-muted"}`}
          >
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {note ? <p>{note}</p> : null}
          </div>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
            {href && ctaLabel ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`hero-cta-primary ${onInk ? "hero-cta-on-ink" : ""}`}
              >
                {ctaLabel}
                <span aria-hidden="true">↗</span>
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            ) : null}
            {secondaryHref && secondaryLabel ? (
              <a
                href={secondaryHref}
                className={`hero-cta-secondary ${onInk ? "hero-cta-secondary-on-ink" : ""}`}
              >
                {secondaryLabel}
                <span aria-hidden="true">↓</span>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

