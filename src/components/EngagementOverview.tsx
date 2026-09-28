import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Logo } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import {
  caseStudyPath,
  type EngagementOverview as EngagementOverviewContent,
  workPath,
} from "@/lib/work";

const bodyClass =
  "max-w-[48ch] text-[16px] leading-7 text-muted md:text-[17px] md:leading-8";
const inkLink =
  "text-[15px] tracking-tight text-white underline-offset-[5px] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[var(--brand)]";

export function EngagementOverview({
  study,
}: {
  study: EngagementOverviewContent;
}) {
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
          Selected work / Pandora Analytics
        </p>
        <div className="mt-8 grid items-end gap-12 md:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] md:gap-20">
          <h1
            id="work-heading"
            className="page-display min-w-0 max-w-[14ch] text-foreground"
          >
            {study.title}
          </h1>
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
            <p className="mt-6 text-[12px] tracking-[0.14em] text-muted uppercase">
              Client
            </p>
            <p className="mt-1 text-[15px] tracking-tight">{study.client}</p>
            <p className="mt-5 text-[12px] tracking-[0.14em] text-muted uppercase">
              Products
            </p>
            <p className="mt-1 text-[15px] tracking-tight">
              ToolKitX · Pets.Software
            </p>
          </div>
        </div>
      </section>

      <section aria-label={study.lede} className="border-t border-line">
        <div className="mx-auto grid max-w-[1180px] gap-10 px-6 py-16 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-20 md:py-24">
          <Reveal>
            <p className="max-w-[18ch] font-display text-[clamp(1.7rem,3vw,2.4rem)] leading-snug tracking-tight">
              {study.lede}
            </p>
          </Reveal>
          <Reveal delayMs={80}>
            <div className={`space-y-6 ${bodyClass}`}>
              {study.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="tree-heading" className="border-t border-line">
        <div className="mx-auto max-w-[1180px] px-6 py-16 md:py-24">
          <Reveal>
            <h2 id="tree-heading" className="section-title max-w-[14ch]">
              One client. Two products.
            </h2>
          </Reveal>
          <Reveal className="mt-14">
            <figure className="min-w-0 border border-line">
              <figcaption className="sr-only">{study.treeSummary}</figcaption>
              <div className="border-b border-line px-6 py-8 md:px-10 md:py-10">
                <p className="text-[12px] tracking-[0.18em] text-muted uppercase">
                  Client / engagement
                </p>
                <p className="mt-3 font-display text-[clamp(1.8rem,3vw,2.6rem)] tracking-tight">
                  {study.client}
                </p>
              </div>
              <ul className="grid min-w-0 md:grid-cols-2">
                {study.products.map((product, i) => (
                  <li
                    key={product.slug}
                    className={`min-w-0 border-line px-6 py-8 md:px-10 md:py-10 ${
                      i === 1 ? "border-t md:border-t-0 md:border-l" : ""
                    }`}
                  >
                    <Link
                      href={caseStudyPath(product.slug)}
                      className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[6px] focus-visible:outline-[var(--brand)]"
                    >
                      <p className="text-[12px] tracking-[0.16em] text-brand uppercase">
                        Product
                      </p>
                      <p className="mt-3 font-display text-[28px] tracking-tight transition-colors group-hover:text-brand md:text-[32px]">
                        {product.product}
                      </p>
                      <p className="mt-4 text-[13px] tracking-[0.08em] text-muted uppercase">
                        {product.kindLabel}
                      </p>
                      <p className="mt-2 text-[16px] tracking-tight">
                        {product.line}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </figure>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="overview-cta-heading" className="bg-ink text-white">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-8 px-6 py-20 md:flex-row md:items-end md:justify-between md:py-28">
          <Reveal>
            <h2
              id="overview-cta-heading"
              className="section-title max-w-[16ch] text-white"
            >
              The approach had to follow the problem.
            </h2>
            <p className="mt-8 text-[12px] tracking-[0.18em] text-white/50 uppercase">
              Pandora Analytics × Sayge
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
                    className="h-7 w-auto max-h-7 max-w-[180px] object-contain"
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
          </Reveal>
          <div className="flex flex-col items-start gap-6">
            <Link href="/contact" className="hero-cta-primary hero-cta-on-ink">
              Start a conversation
              <span aria-hidden="true">→</span>
            </Link>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              <li>
                <Link href={workPath} className={inkLink}>
                  Selected work
                </Link>
              </li>
              {study.relatedLinks
                .filter((link) => link.href !== workPath)
                .map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={inkLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
