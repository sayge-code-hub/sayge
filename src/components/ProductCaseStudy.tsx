import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CaseStudyScreens } from "@/components/CaseStudyScreens";
import { ExternalProductCta } from "@/components/ExternalProductCta";
import { Logo } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { WorkFlow } from "@/components/WorkFlow";
import { WorkLoop } from "@/components/WorkLoop";
import {
  caseStudyPath,
  type ProductCaseStudy as ProductCaseStudyContent,
  workPath,
} from "@/lib/work";

const bodyClass =
  "max-w-[48ch] text-[16px] leading-7 text-muted md:text-[17px] md:leading-8";
const inkLink =
  "text-[15px] tracking-tight text-white underline-offset-[5px] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[var(--brand)]";

export function ProductCaseStudy({
  study,
}: {
  study: ProductCaseStudyContent;
}) {
  const breadcrumbParents = [
    { name: "Home", href: "/" },
    { name: "Selected Work", href: workPath },
    ...(study.parent
      ? [{ name: study.parent.name, href: caseStudyPath(study.parent.slug) }]
      : []),
  ];
  const breadcrumbCurrent = study.parent ? study.product : study.client;

  return (
    <article>
      <section
        aria-labelledby="work-heading"
        className="mx-auto max-w-[1180px] px-6 pb-20 pt-12 md:pb-28 md:pt-16"
      >
        <Breadcrumb current={breadcrumbCurrent} parents={breadcrumbParents} />
        <p className="mt-14 text-[12px] tracking-[0.18em] text-muted uppercase">
          {study.eyebrow}
        </p>
        <div className="mt-8 grid items-start gap-12 md:mt-10 md:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] md:gap-20">
          <div className="min-w-0">
            <h1
              id="work-heading"
              className="page-display min-w-0 max-w-[16ch] text-foreground"
            >
              {study.title}
            </h1>
            {study.heroSupport ? (
              <p className={`mt-8 ${bodyClass}`}>{study.heroSupport}</p>
            ) : null}
          </div>
          <div className="min-w-0 md:justify-self-end md:text-right">
            {study.clientLogo ? (
              <div className="inline-block max-w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={study.clientLogo.src}
                  alt={study.clientLogo.alt}
                  width={study.clientLogo.width}
                  height={study.clientLogo.height}
                  className="h-8 w-auto max-h-8 max-w-[220px] object-contain object-left md:h-10 md:max-h-10 md:object-right"
                />
              </div>
            ) : null}
            {study.heroFacts ? (
              <dl className="mt-6 space-y-5">
                {study.heroFacts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-[12px] tracking-[0.14em] text-muted uppercase">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 text-[15px] tracking-tight text-foreground">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : (
              <>
                <p className="mt-6 text-[12px] tracking-[0.14em] text-muted uppercase">
                  Client
                </p>
                <p className="mt-1 text-[15px] tracking-tight text-foreground">
                  {study.client}
                </p>
                {study.hideProduct ? null : (
                  <>
                    <p className="mt-5 text-[12px] tracking-[0.14em] text-muted uppercase">
                      Product
                    </p>
                    <p className="mt-1 font-display text-[28px] leading-tight tracking-tight">
                      {study.product}
                    </p>
                  </>
                )}
              </>
            )}
            {study.heroSupport ? null : (
              <p className="mt-4 text-[13px] leading-6 text-muted md:ml-auto md:max-w-[28rem]">
                {study.categories.join(" · ")}
              </p>
            )}
            {study.liveProduct ? (
              <p className="mt-6">
                <a
                  href={study.liveProduct.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 text-[15px] tracking-tight text-foreground underline-offset-[5px] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[var(--brand)]"
                >
                  {study.liveProduct.ctaLabel}
                  <span aria-hidden="true">↗</span>
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </p>
            ) : null}
          </div>
        </div>
      </section>

      <section aria-label={study.opening.lede} className="border-t border-line">
        <div className="mx-auto grid max-w-[1180px] gap-10 px-6 py-16 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-20 md:py-24">
          <Reveal>
            <p className="max-w-[16ch] font-display text-[clamp(1.7rem,3vw,2.4rem)] leading-snug tracking-tight">
              {study.opening.lede}
            </p>
          </Reveal>
          <Reveal delayMs={80}>
            <div className={`space-y-6 ${bodyClass}`}>
              {study.opening.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {study.liveProduct ? (
        <ExternalProductCta
          heading={study.liveProduct.heading}
          paragraphs={study.liveProduct.paragraphs}
          ctaLabel={study.liveProduct.ctaLabel}
          href={study.liveProduct.href}
          note={study.liveProduct.note}
        />
      ) : null}

      <section
        aria-labelledby="context-heading"
        className="border-t border-line"
      >
        <div className="mx-auto grid max-w-[1180px] gap-10 px-6 py-16 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-20 md:py-24">
          <Reveal>
            <h2 id="context-heading" className="section-title max-w-[14ch]">
              {study.context.heading}
            </h2>
          </Reveal>
          <Reveal delayMs={80}>
            <div className={`space-y-6 ${bodyClass}`}>
              {study.context.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {study.context.points ? (
              <ul className="mt-8 border-t border-line">
                {study.context.points.map((item) => (
                  <li
                    key={item}
                    className="border-b border-line py-3 text-[16px] leading-7 tracking-tight"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </Reveal>
        </div>
      </section>

      <section
        aria-labelledby="challenge-heading"
        className="border-t border-line"
      >
        <div className="mx-auto max-w-[1180px] px-6 py-16 md:py-24">
          <Reveal>
            <h2 id="challenge-heading" className="section-title max-w-[16ch]">
              {study.challenge.heading}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-20">
            <Reveal>
              <div className={`space-y-6 ${bodyClass}`}>
                {study.challenge.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delayMs={80}>
              <ul className="border-t border-line">
                {study.challenge.bullets.map((item) => (
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
          {study.flow ? (
            <Reveal className="mt-16 md:mt-20">
              <WorkFlow steps={study.flow.steps} summary={study.flow.summary} />
            </Reveal>
          ) : null}
        </div>
      </section>

      <section aria-labelledby="work-body-heading" className="border-t border-line">
        <div className="mx-auto max-w-[1180px] px-6 py-16 md:py-24">
          <Reveal>
            <h2 id="work-body-heading" className="section-title max-w-[16ch]">
              {study.work.heading}
            </h2>
          </Reveal>
          <div
            className={
              study.work.bullets.length > 0
                ? "mt-12 grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-20"
                : "mt-12"
            }
          >
            <Reveal>
              <div className={`space-y-6 ${bodyClass}`}>
                {study.work.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
            {study.work.bullets.length > 0 ? (
              <Reveal delayMs={80}>
                <ul className="space-y-2">
                  {study.work.bullets.map((item) => (
                    <li
                      key={item}
                      className="text-[16px] leading-7 tracking-tight md:text-[17px]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ) : null}
          </div>
          {study.process ? (
            <ol className="case-study-process mt-14">
              {study.process.steps.map((step, i) => (
                <li key={step.n} className="case-study-process-step">
                  <Reveal delayMs={i * 50}>
                    <p className="text-[12px] tracking-[0.18em] text-brand">
                      {step.n}
                    </p>
                    <h3 className="mt-3 text-[20px] tracking-tight md:text-[22px]">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-[36ch] text-[14px] leading-6 text-muted md:text-[15px] md:leading-7">
                      {step.copy}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ol>
          ) : null}
          {study.journey ? (
            <Reveal className="mt-16 md:mt-20">
              <WorkFlow
                steps={study.journey.steps}
                summary={study.journey.summary}
              />
            </Reveal>
          ) : null}
          {study.loop ? (
            <Reveal className="mt-16 md:mt-20">
              <WorkLoop
                kicker={study.loop.kicker}
                summary={study.loop.summary}
                steps={study.loop.steps}
              />
            </Reveal>
          ) : null}
          {study.stats ? (
            <dl className="mt-16 grid gap-0 border-y border-line sm:grid-cols-2">
              {study.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-line py-8 sm:px-8 sm:first:pl-0 sm:last:pr-0 sm:odd:border-r"
                >
                  <dt className="text-[12px] tracking-[0.14em] text-muted uppercase">
                    {stat.label}
                  </dt>
                  <dd className="mt-3 font-display text-[clamp(2rem,4vw,3.2rem)] leading-none tracking-tight">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>
      </section>

      {study.depth ? (
        <section
          aria-labelledby="depth-heading"
          className="border-t border-line"
        >
          <div className="mx-auto grid max-w-[1180px] gap-12 px-6 py-16 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-20 md:py-24">
            <Reveal>
              <h2 id="depth-heading" className="section-title max-w-[14ch]">
                {study.depth.heading}
              </h2>
              <div className={`mt-8 space-y-6 ${bodyClass}`}>
                {study.depth.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delayMs={80}>
              <ul className="border-t border-line">
                {study.depth.bullets.map((item) => (
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
      ) : null}

      <section aria-label={study.pauseQuote} className="border-t border-line">
        <div className="mx-auto max-w-[1180px] px-6 py-20 md:py-28">
          <Reveal>
            <blockquote>
              {study.pauseQuoteKicker ? (
                <p className="mb-8 text-center text-[12px] tracking-[0.18em] text-muted uppercase">
                  {study.pauseQuoteKicker}
                </p>
              ) : null}
              <p className="font-display mx-auto max-w-[20ch] text-center text-[clamp(1.75rem,3.8vw,3.1rem)] leading-[1.12] tracking-tight">
                {study.pauseQuote}
              </p>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {study.capabilities ? (
        <section
          aria-labelledby="capabilities-heading"
          className="border-t border-line"
        >
          <div className="mx-auto max-w-[1180px] px-6 py-16 md:py-24">
            <Reveal>
              <h2 id="capabilities-heading" className="section-title max-w-[16ch]">
                {study.capabilities.heading}
              </h2>
              {study.capabilities.intro ? (
                <p className={`mt-8 ${bodyClass}`}>{study.capabilities.intro}</p>
              ) : null}
            </Reveal>
            <ol className="mt-14 divide-y divide-line border-y border-line">
              {study.capabilities.items.map((item, i) => (
                <li key={item.title} className="py-8 md:py-10">
                  <Reveal delayMs={i * 40}>
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
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      {study.pickup ? (
        <section
          aria-labelledby="pickup-heading"
          className="border-t border-line"
        >
          <div className="mx-auto max-w-[1180px] px-6 py-16 md:py-24">
            <Reveal>
              <h2 id="pickup-heading" className="section-title max-w-[16ch]">
                {study.pickup.heading}
              </h2>
              <p className={`mt-8 ${bodyClass}`}>{study.pickup.intro}</p>
            </Reveal>
            <ol className="work-pickup mt-14">
              {study.pickup.steps.map((step, i) => (
                <li key={step.n} className="work-pickup-step">
                  <Reveal delayMs={i * 40}>
                    <p className="text-[12px] tracking-[0.18em] text-brand">
                      {step.n}
                    </p>
                    <h3 className="mt-3 text-[20px] tracking-tight md:text-[22px]">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-[32ch] text-[14px] leading-6 text-muted md:text-[15px] md:leading-7">
                      {step.copy}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      {study.screens && study.screens.items.length > 0 ? (
        <CaseStudyScreens
          heading={study.screens.heading}
          intro={study.screens.intro}
          items={study.screens.items}
        />
      ) : null}

      {study.contributions ? (
        <section
          aria-labelledby="contributes-heading"
          className="border-t border-line"
        >
          <div className="mx-auto max-w-[1180px] px-6 py-16 md:py-24">
            <Reveal>
              <h2 id="contributes-heading" className="section-title max-w-[12ch]">
                {study.contributions.heading}
              </h2>
            </Reveal>
            <ol className="mt-14 divide-y divide-line border-y border-line">
              {study.contributions.items.map((item, i) => (
                <li key={item.title} className="py-8 md:py-10">
                  <Reveal delayMs={i * 40}>
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
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      {study.delivery ? (
        <section
          aria-labelledby="delivery-heading"
          className="border-t border-line"
        >
          <div className="mx-auto grid max-w-[1180px] gap-10 px-6 py-16 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-20 md:py-24">
            <Reveal>
              <h2 id="delivery-heading" className="section-title max-w-[12ch]">
                {study.delivery.heading}
              </h2>
            </Reveal>
            <Reveal delayMs={80}>
              <div className={`space-y-6 ${bodyClass}`}>
                {study.delivery.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      {study.outcome.paragraphs.length > 0 ? (
        <section aria-labelledby="outcome-heading" className="border-t border-line">
          <div className="mx-auto grid max-w-[1180px] gap-10 px-6 py-16 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-20 md:py-24">
            <Reveal>
              <h2 id="outcome-heading" className="section-title max-w-[16ch]">
                {study.outcome.heading ?? "The outcome."}
              </h2>
            </Reveal>
            <Reveal delayMs={80}>
              <div className={`space-y-6 ${bodyClass}`}>
                {study.outcome.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      <section aria-labelledby="glance-heading" className="border-t border-line">
        <div className="mx-auto max-w-[1180px] px-6 py-16 md:py-24">
          <Reveal>
            <h2 id="glance-heading" className="section-title">
              At a glance.
            </h2>
          </Reveal>
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
          <Reveal>
            <h2 id="tech-heading" className="section-title">
              Technology.
            </h2>
          </Reveal>
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
          <Reveal>
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
              {study.clientLogo ? (
                <div className="inline-block bg-white px-3 py-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={study.clientLogo.src}
                    alt=""
                    width={study.clientLogo.width}
                    height={study.clientLogo.height}
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
              {study.closing.secondaryCta ? (
                study.closing.secondaryCta.external ? (
                  <a
                    href={study.closing.secondaryCta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-cta-secondary hero-cta-secondary-on-ink"
                  >
                    {study.closing.secondaryCta.label}
                    <span aria-hidden="true">↗</span>
                    <span className="sr-only">(opens in a new tab)</span>
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
          </Reveal>
        </div>
      </section>
    </article>
  );
}
