import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { EngagementModel } from "@/components/EngagementModel";
import { Logo } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { type StaffingCaseStudy, workPath } from "@/lib/work";

const bodyClass =
  "max-w-[48ch] text-[16px] leading-7 text-muted md:text-[17px] md:leading-8";

export function CaseStudy({ study }: { study: StaffingCaseStudy }) {
  return (
    <article>
      <section
        aria-labelledby="work-heading"
        className="mx-auto max-w-[1180px] px-6 pb-20 pt-12 md:pb-28 md:pt-16"
      >
        <Breadcrumb
          current={study.client}
          parents={[
            { name: "Home", href: "/" },
            { name: "Selected Work", href: workPath },
          ]}
        />
        <p className="mt-14 text-[12px] tracking-[0.18em] text-muted uppercase">
          Selected work
          <span aria-hidden="true" className="mx-2 text-line">
            /
          </span>
          <span className="text-brand">{study.number}</span>
        </p>
        <div className="mt-8 grid items-end gap-12 md:mt-10 md:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] md:gap-20">
          <h1
            id="work-heading"
            className="page-display min-w-0 max-w-[14ch] text-foreground"
          >
            {study.title}
          </h1>
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
            <p className="mt-6 text-[15px] tracking-tight text-foreground">
              {study.client}
            </p>
            <p className="mt-2 text-[13px] leading-6 text-muted md:ml-auto md:max-w-[28rem]">
              {study.categories.join(" · ")}
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="relationship-heading"
        className="border-t border-line"
      >
        <div className="mx-auto grid max-w-[1180px] gap-10 px-6 py-16 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-20 md:py-24">
          <Reveal>
            <h2 id="relationship-heading" className="section-title max-w-[12ch]">
              {study.relationship.heading}
            </h2>
          </Reveal>
          <Reveal delayMs={80}>
            <p className="max-w-[34ch] font-display text-[24px] leading-snug tracking-tight md:text-[28px]">
              {study.relationship.lede}
            </p>
            <div className={`mt-8 space-y-6 ${bodyClass}`}>
              {study.relationship.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="pace-heading" className="border-t border-line">
        <div className="mx-auto max-w-[1180px] px-6 py-16 md:py-24">
          <Reveal>
            <h2 id="pace-heading" className="section-title max-w-[16ch]">
              {study.keepingPace.heading}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-12 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-20">
            <Reveal>
              <p className="max-w-[26ch] font-display text-[24px] leading-snug tracking-tight md:text-[28px]">
                {study.keepingPace.lede}
              </p>
            </Reveal>
            <Reveal delayMs={80}>
              <div className={`space-y-6 ${bodyClass}`}>
                {study.keepingPace.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <p className={`mt-10 ${bodyClass}`}>{study.keepingPace.closing}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section aria-labelledby="role-heading" className="border-t border-line">
        <div className="mx-auto max-w-[1180px] px-6 py-16 md:py-24">
          <Reveal>
            <h2 id="role-heading" className="section-title max-w-[16ch]">
              {study.role.heading}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-20">
            <Reveal>
              <p className="max-w-[36ch] font-display text-[24px] leading-snug tracking-tight md:text-[28px]">
                {study.role.lede}
              </p>
              <div className={`mt-8 space-y-5 ${bodyClass}`}>
                {study.role.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <ul className="mt-3 space-y-2">
                {study.role.bullets.map((item) => (
                  <li
                    key={item}
                    className="text-[16px] leading-7 tracking-tight text-foreground md:text-[17px]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delayMs={90}>
              <blockquote className="border-l-2 border-brand pl-5 md:pl-7">
                <p className="font-display text-[clamp(1.35rem,2.4vw,1.85rem)] leading-snug tracking-tight text-foreground">
                  {study.role.pullQuote}
                </p>
              </blockquote>
            </Reveal>
          </div>
          {study.engagementModel ? (
            <Reveal className="mt-16 md:mt-20">
              <EngagementModel {...study.engagementModel} />
            </Reveal>
          ) : null}
        </div>
      </section>

      <section
        aria-labelledby="process-heading"
        className="border-t border-line"
      >
        <div className="mx-auto max-w-[1180px] px-6 py-16 md:py-24">
          <Reveal>
            <h2 id="process-heading" className="section-title max-w-[14ch]">
              {study.process.heading}
            </h2>
          </Reveal>
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
        </div>
      </section>

      {study.pauseQuote ? (
        <section aria-label={study.pauseQuote} className="border-t border-line">
          <div className="mx-auto max-w-[1180px] px-6 py-20 md:py-28">
            <Reveal>
              <blockquote>
                <p className="font-display mx-auto max-w-[18ch] text-center text-[clamp(1.85rem,4.2vw,3.4rem)] leading-[1.12] tracking-tight text-foreground">
                  {study.pauseQuote}
                </p>
              </blockquote>
            </Reveal>
          </div>
        </section>
      ) : null}

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
                    <p className="font-display text-[28px] leading-none tracking-tight text-brand md:text-[32px]">
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

      <section
        aria-labelledby="partnership-heading"
        className="border-t border-line"
      >
        <div className="mx-auto grid max-w-[1180px] gap-12 px-6 py-16 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:gap-20 md:py-24">
          <Reveal>
            <h2
              id="partnership-heading"
              className="section-title max-w-[16ch]"
            >
              {study.partnership.heading}
            </h2>
          </Reveal>
          <Reveal delayMs={80}>
            <p className="max-w-[40ch] font-display text-[24px] leading-snug tracking-tight md:text-[28px]">
              {study.partnership.lede}
            </p>
            <ul className="mt-8 space-y-3">
              {study.partnership.points.map((point) => (
                <li
                  key={point}
                  className="max-w-[48ch] text-[16px] leading-7 text-muted md:text-[17px] md:leading-8"
                >
                  {point}
                </li>
              ))}
            </ul>
            {study.partnership.note ? (
              <p className={`mt-8 ${bodyClass}`}>{study.partnership.note}</p>
            ) : null}
            <blockquote className="mt-12 border-l-2 border-brand pl-5 md:pl-7">
              <p className="font-display text-[clamp(1.35rem,2.4vw,1.85rem)] leading-snug tracking-tight text-foreground">
                {study.partnership.statement}
              </p>
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section
        aria-labelledby="learnings-heading"
        className="border-t border-line"
      >
        <div className="mx-auto max-w-[1180px] px-6 py-16 md:py-24">
          <Reveal>
            <h2 id="learnings-heading" className="section-title max-w-[14ch]">
              {study.learnings.heading}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
            <Reveal>
              <p className="max-w-[32ch] font-display text-[24px] leading-snug tracking-tight md:text-[28px]">
                {study.learnings.lede}
              </p>
              <div className={`mt-8 space-y-5 ${bodyClass}`}>
                {study.learnings.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delayMs={90}>
              <blockquote className="border-l-2 border-brand pl-5 md:pl-7">
                <p className="font-display text-[clamp(1.45rem,2.6vw,2rem)] leading-snug tracking-tight text-foreground">
                  {study.learnings.pullQuote}
                </p>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

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

      <section aria-labelledby="tech-heading" className="border-t border-line">
        <div className="mx-auto grid max-w-[1180px] gap-10 px-6 py-16 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-end md:gap-20 md:py-24">
          <Reveal>
            <h2 id="tech-heading" className="section-title">
              Technology.
            </h2>
          </Reveal>
          <Reveal delayMs={70}>
            <ul className="flex min-w-0 flex-wrap gap-x-8 gap-y-3 border-t border-line pt-6">
              {study.technologies.map((tech) => (
                <li
                  key={tech}
                  className="text-[16px] tracking-tight md:text-[17px]"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section
        aria-labelledby="work-cta-heading"
        className="bg-ink text-white"
      >
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
            <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-10">
              <Link
                href={study.closing.ctaHref}
                className="hero-cta-primary hero-cta-on-ink"
              >
                {study.closing.ctaLabel}
                <span aria-hidden="true">→</span>
              </Link>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                <li>
                  <Link
                    href={workPath}
                    className="text-[15px] tracking-tight text-white underline-offset-[5px] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[var(--brand)]"
                  >
                    Selected work
                  </Link>
                </li>
                {study.relatedLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[15px] tracking-tight text-white underline-offset-[5px] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[var(--brand)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </article>
  );
}
