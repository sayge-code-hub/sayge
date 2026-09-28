import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ExternalProductCta } from "@/components/ExternalProductCta";
import { Logo } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { WorkFlow } from "@/components/WorkFlow";
import {
  type InHouseProduct as InHouseProductContent,
  workPath,
} from "@/lib/work";

const bodyClass =
  "max-w-[48ch] text-[16px] leading-7 text-muted md:text-[17px] md:leading-8";
const inkLink =
  "text-[15px] tracking-tight text-white underline-offset-[5px] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[var(--brand)]";
const textLink =
  "text-foreground underline-offset-[5px] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[var(--brand)]";

export function InHouseProduct({ study }: { study: InHouseProductContent }) {
  const tryLabel = study.productCtaLabel ?? `Try ${study.product}`;

  return (
    <article>
      <section
        aria-labelledby="work-heading"
        className="mx-auto max-w-[1180px] px-6 pb-20 pt-12 md:pb-28 md:pt-16"
      >
        <Breadcrumb
          current={study.product}
          parents={[
            { name: "Home", href: "/" },
            { name: "Selected Work", href: workPath },
          ]}
        />
        <p className="mt-14 text-[12px] tracking-[0.18em] text-muted uppercase">
          {study.eyebrow}
        </p>
        <div className="mt-8 grid items-start gap-12 md:mt-10 md:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] md:gap-20">
          <div className="min-w-0">
            <p className="font-display text-[28px] leading-tight tracking-tight md:text-[32px]">
              {study.product}
            </p>
            <h1
              id="work-heading"
              className="page-display mt-4 min-w-0 max-w-[16ch] text-foreground"
            >
              {study.title}
            </h1>
            <p className={`mt-8 ${bodyClass}`}>{study.heroSupport}</p>
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
              {study.productUrl ? (
                <a
                  href={study.productUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-cta-primary"
                >
                  {tryLabel}
                  <span aria-hidden="true">↗</span>
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              ) : null}
              <a href="#how-we-built-it" className="hero-cta-secondary">
                How we built it
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
          <div className="min-w-0 md:justify-self-end md:text-right">
            {study.logo ? (
              <div className="inline-block max-w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={study.logo.src}
                  alt={study.logo.alt}
                  width={study.logo.width}
                  height={study.logo.height}
                  className="h-8 w-auto max-h-8 max-w-[220px] object-contain object-left md:h-10 md:max-h-10 md:object-right"
                />
              </div>
            ) : null}
            <p className="mt-6 text-[12px] tracking-[0.14em] text-muted uppercase">
              Type
            </p>
            <p className="mt-1 text-[15px] tracking-tight text-foreground">
              In-house product
            </p>
            <p className="mt-5 text-[12px] tracking-[0.14em] text-muted uppercase">
              By
            </p>
            <p className="mt-1 text-[15px] tracking-tight text-foreground">
              Sayge
            </p>
          </div>
        </div>
      </section>

      <ExternalProductCta
        heading={study.live.heading}
        paragraphs={study.live.paragraphs}
        note={study.live.note}
        ctaLabel={study.productUrl ? study.live.ctaLabel ?? tryLabel : undefined}
        href={study.productUrl}
        secondaryLabel={study.live.secondaryLabel}
        secondaryHref={study.live.secondaryHref}
      />

      <section
        aria-labelledby="why-heading"
        id="how-we-built-it"
        className="border-t border-line"
      >
        <div className="mx-auto grid max-w-[1180px] gap-10 px-6 py-16 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-20 md:py-24">
          <Reveal>
            <p className="text-[12px] tracking-[0.18em] text-brand uppercase">
              Why we built it
            </p>
            <h2 id="why-heading" className="section-title mt-4 max-w-[14ch]">
              {study.why.lede}
            </h2>
          </Reveal>
          <Reveal delayMs={80}>
            <div className={`space-y-6 ${bodyClass}`}>
              {study.why.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section
        aria-labelledby="problem-heading"
        className="border-t border-line"
      >
        <div className="mx-auto max-w-[1180px] px-6 py-16 md:py-24">
          <Reveal>
            <h2 id="problem-heading" className="section-title max-w-[16ch]">
              {study.problem.heading}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-20">
            <Reveal>
              <div className={`space-y-6 ${bodyClass}`}>
                {study.problem.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
            {study.problem.bullets ? (
              <Reveal delayMs={80}>
                <ul className="border-t border-line">
                  {study.problem.bullets.map((item) => (
                    <li
                      key={item}
                      className="border-b border-line py-3 text-[16px] leading-7 tracking-tight"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ) : null}
          </div>
        </div>
      </section>

      <section aria-labelledby="idea-heading" className="border-t border-line">
        <div className="mx-auto grid max-w-[1180px] gap-10 px-6 py-16 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-20 md:py-24">
          <Reveal>
            <h2 id="idea-heading" className="section-title max-w-[12ch]">
              {study.idea.heading}
            </h2>
          </Reveal>
          <Reveal delayMs={80}>
            <div className={`space-y-6 ${bodyClass}`}>
              {study.idea.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section
        aria-labelledby="experience-heading"
        className="border-t border-line"
      >
        <div className="mx-auto max-w-[1180px] px-6 py-16 md:py-24">
          <Reveal>
            <h2 id="experience-heading" className="section-title max-w-[14ch]">
              {study.experience.heading}
            </h2>
          </Reveal>
          <Reveal className="mt-12">
            <div className={`space-y-6 ${bodyClass}`}>
              {study.experience.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
          {study.workflow ? (
            <Reveal className="mt-16">
              <WorkFlow
                steps={study.workflow.steps}
                summary={study.workflow.summary}
              />
            </Reveal>
          ) : null}
        </div>
      </section>

      {study.roles ? (
        <section aria-labelledby="roles-heading" className="border-t border-line">
          <div className="mx-auto max-w-[1180px] px-6 py-16 md:py-24">
            <Reveal>
              <h2 id="roles-heading" className="section-title max-w-[14ch]">
                {study.roles.heading}
              </h2>
              <p className={`mt-8 ${bodyClass}`}>{study.roles.intro}</p>
            </Reveal>
            <ol className="mt-14 divide-y divide-line border-y border-line">
              {study.roles.items.map((item, i) => (
                <li key={item.title} className="py-8 md:py-10">
                  <div className="grid min-w-0 gap-3 md:grid-cols-[4.5rem_minmax(0,0.42fr)_minmax(0,1fr)] md:items-baseline md:gap-12">
                    <p className="font-display text-[28px] leading-none tracking-tight text-brand">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="text-[22px] tracking-tight md:text-[26px]">
                      {item.title}
                    </h3>
                    <p className="max-w-[46ch] text-[15px] leading-7 text-muted md:text-[16px] md:leading-8">
                      {item.copy}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      {study.feature ? (
        <section
          aria-labelledby="feature-heading"
          className="border-t border-line"
        >
          <div className="mx-auto grid max-w-[1180px] gap-10 px-6 py-16 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-20 md:py-24">
            <Reveal>
              <h2 id="feature-heading" className="section-title max-w-[14ch]">
                {study.feature.heading}
              </h2>
            </Reveal>
            <Reveal delayMs={80}>
              <div className={`space-y-6 ${bodyClass}`}>
                {study.feature.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      {study.quizzes ? (
        <section
          aria-labelledby="quizzes-heading"
          className="border-t border-line"
        >
          <div className="mx-auto max-w-[1180px] px-6 py-16 md:py-24">
            <Reveal>
              <h2 id="quizzes-heading" className="section-title max-w-[16ch]">
                {study.quizzes.heading}
              </h2>
            </Reveal>
            <div className={`mt-12 space-y-6 ${bodyClass}`}>
              {study.quizzes.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {study.quizzes.steps ? (
              <Reveal className="mt-16">
                <WorkFlow
                  steps={study.quizzes.steps}
                  summary="Quiz flow: author or reuse, publish, student attempt, outcome."
                />
              </Reveal>
            ) : null}
          </div>
        </section>
      ) : null}

      <section
        aria-labelledby="engineering-heading"
        className="border-t border-line"
      >
        <div className="mx-auto grid max-w-[1180px] gap-12 px-6 py-16 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-20 md:py-24">
          <Reveal>
            <h2 id="engineering-heading" className="section-title max-w-[12ch]">
              {study.engineering.heading}
            </h2>
            <div className={`mt-8 space-y-6 ${bodyClass}`}>
              {study.engineering.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delayMs={80}>
            <ul className="border-t border-line">
              {study.engineering.bullets.map((item) => (
                <li
                  key={item}
                  className="border-b border-line py-3 text-[16px] leading-7 tracking-tight"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section aria-label={study.pauseQuote} className="border-t border-line">
        <div className="mx-auto max-w-[1180px] px-6 py-20 md:py-28">
          <blockquote>
            <p className="font-display mx-auto max-w-[20ch] text-center text-[clamp(1.75rem,3.8vw,3.1rem)] leading-[1.12] tracking-tight">
              {study.pauseQuote}
            </p>
          </blockquote>
        </div>
      </section>

      <section
        aria-labelledby="learnings-heading"
        className="border-t border-line"
      >
        <div className="mx-auto max-w-[1180px] px-6 py-16 md:py-24">
          <Reveal>
            <h2 id="learnings-heading" className="section-title max-w-[16ch]">
              {study.learnings.heading}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-20">
            <div className={`space-y-6 ${bodyClass}`}>
              {study.learnings.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ul className="border-t border-line">
              {study.learnings.points.map((item) => (
                <li
                  key={item}
                  className="border-b border-line py-3 text-[16px] leading-7 tracking-tight"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="commercial-heading"
        className="border-t border-line"
      >
        <div className="mx-auto grid max-w-[1180px] gap-10 px-6 py-16 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-20 md:py-24">
          <Reveal>
            <h2 id="commercial-heading" className="section-title max-w-[14ch]">
              {study.commercial.heading}
            </h2>
          </Reveal>
          <Reveal delayMs={80}>
            <div className={`space-y-6 ${bodyClass}`}>
              {study.commercial.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p>
                <Link href="/services/custom-software-development" className={textLink}>
                  Custom software development
                </Link>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {study.midCta && study.productUrl ? (
        <ExternalProductCta
          heading={study.midCta.heading}
          paragraphs={[study.midCta.copy]}
          ctaLabel={study.midCta.ctaLabel}
          href={study.productUrl}
        />
      ) : null}

      <section aria-labelledby="glance-heading" className="border-t border-line">
        <div className="mx-auto max-w-[1180px] px-6 py-16 md:py-24">
          <h2 id="glance-heading" className="section-title">
            At a glance.
          </h2>
          <dl className="mt-12 divide-y divide-line border-y border-line">
            {study.facts.map((fact) => (
              <div
                key={`${fact.label}-${fact.value}`}
                className="grid gap-2 py-5 md:grid-cols-[minmax(0,0.38fr)_minmax(0,1fr)] md:gap-12 md:py-6"
              >
                <dt className="text-[12px] tracking-[0.14em] text-muted uppercase">
                  {fact.label}
                </dt>
                <dd className="min-w-0 text-[16px] leading-7 tracking-tight md:text-[17px]">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {study.stack || study.technologies.length > 0 ? (
        <section aria-labelledby="tech-heading" className="border-t border-line">
          <div className="mx-auto max-w-[1180px] px-6 py-16 md:py-24">
            <h2 id="tech-heading" className="section-title">
              Technology.
            </h2>
            {study.stack ? (
              <dl className="mt-12 divide-y divide-line border-y border-line">
                {study.stack.map((item) => (
                  <div
                    key={item.label}
                    className="grid gap-2 py-5 md:grid-cols-[minmax(0,0.38fr)_minmax(0,1fr)] md:items-baseline md:gap-12 md:py-6"
                  >
                    <dt className="text-[12px] tracking-[0.14em] text-muted uppercase">
                      {item.label}
                    </dt>
                    <dd className="min-w-0 text-[16px] tracking-tight md:text-[17px]">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : (
              <ul className="mt-12 flex min-w-0 flex-wrap gap-x-8 gap-y-3 border-t border-line pt-6">
                {study.technologies.map((tech) => (
                  <li key={tech} className="text-[16px] tracking-tight md:text-[17px]">
                    {tech}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ) : null}

      <section aria-labelledby="work-cta-heading" className="bg-ink text-white">
        <div className="mx-auto max-w-[1180px] px-6 py-20 md:py-28">
          <h2
            id="work-cta-heading"
            className="section-title max-w-[16ch] text-white"
          >
            {study.closing.heading}
          </h2>
          <p className="mt-12 text-[12px] tracking-[0.18em] text-white/50 uppercase">
            {study.closing.lockup}
          </p>
          <div className="mt-6 flex min-w-0 flex-wrap items-center gap-5">
            {study.logo ? (
              <div className="inline-block bg-white px-3 py-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={study.logo.src}
                  alt=""
                  width={study.logo.width}
                  height={study.logo.height}
                  className="h-7 w-auto max-h-7 max-w-[180px] object-contain object-left md:h-8 md:max-h-8"
                />
              </div>
            ) : null}
            <span aria-hidden="true" className="text-white/40">
              ×
            </span>
            <span className="text-white">
              <Logo />
            </span>
          </div>
          <div className="mt-10 max-w-[48ch] space-y-5 text-[16px] leading-7 text-white/55 md:text-[17px] md:leading-8">
            {study.closing.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
            <Link
              href={study.closing.ctaHref}
              className="hero-cta-primary hero-cta-on-ink"
            >
              {study.closing.ctaLabel}
              <span aria-hidden="true">→</span>
            </Link>
            {study.productUrl ? (
              <a
                href={study.productUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta-secondary hero-cta-secondary-on-ink"
              >
                {tryLabel}
                <span aria-hidden="true">↗</span>
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            ) : study.closing.secondaryCta ? (
              study.closing.secondaryCta.external ? (
                <a
                  href={study.closing.secondaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-cta-secondary hero-cta-secondary-on-ink"
                >
                  {study.closing.secondaryCta.label}
                  <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <Link
                  href={study.closing.secondaryCta.href}
                  className="hero-cta-secondary hero-cta-secondary-on-ink"
                >
                  {study.closing.secondaryCta.label}
                  <span aria-hidden="true">→</span>
                </Link>
              )
            ) : null}
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link href={workPath} className={inkLink}>
                Selected work
              </Link>
            </li>
            {study.relatedLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={inkLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
