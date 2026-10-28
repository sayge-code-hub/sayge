import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Logo } from "@/components/Logo";
import {
  absoluteUrl,
  breadcrumbJsonLd,
  foundingDescription,
  foundingPath,
  foundingSubject,
  foundingTitle,
  ogImage,
  siteEmail,
  siteName,
  webPageJsonLd,
} from "@/lib/site";

const foundingMailto = `mailto:${siteEmail}?subject=${encodeURIComponent(foundingSubject)}&body=${encodeURIComponent("Hi Sayge,\n\nSomething I built, or a portfolio:\n\nA campaign or other idea:\n")}`;

const facts = [
  { label: "Starts", value: "15", unit: "December" },
  { label: "Duration", value: "5", unit: "months" },
  { label: "Team", value: "8", unit: "people" },
  { label: "Products", value: "2", unit: "Fintech and sustainability" },
];

const roles: { name: string; note?: string }[] = [
  { name: "Developers" },
  { name: "Designers" },
  { name: "Product enthusiasts" },
  {
    name: "Content",
    note: "Campaigns and the other creative work.",
  },
];

export const metadata: Metadata = {
  title: foundingTitle,
  description: foundingDescription,
  alternates: {
    canonical: absoluteUrl(foundingPath),
  },
  openGraph: {
    type: "website",
    url: absoluteUrl(foundingPath),
    siteName,
    title: foundingTitle,
    description: foundingDescription,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: foundingTitle,
    description: foundingDescription,
    images: [ogImage],
  },
};

export default function FoundingPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          name: foundingTitle,
          description: foundingDescription,
          path: foundingPath,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Founding batch", path: foundingPath },
        ])}
      />
      <a
        href="#founding-main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white focus:outline focus:outline-2 focus:outline-offset-3 focus:outline-brand"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-50 border-b border-line bg-background">
        <div className="mx-auto flex h-[80px] max-w-[1180px] items-center justify-between gap-4 px-5 sm:px-6">
          <Link href="/" aria-label="Sayge home" className="min-w-0">
            <Logo />
          </Link>
          <a href={foundingMailto} className="hero-cta-primary shrink-0">
            Email us
            <span className="sr-only"> at {siteEmail}</span>
          </a>
        </div>
      </header>
      <main id="founding-main" className="overflow-x-clip">
        <section aria-labelledby="founding-heading" className="founding-hero text-white">
          <div className="relative mx-auto max-w-[1180px] px-5 pt-14 pb-16 sm:px-6 md:pt-20 md:pb-24">
            <p
              aria-hidden="true"
              className="pointer-events-none absolute -top-6 right-0 font-display text-[clamp(7rem,28vw,16rem)] leading-none tracking-[-0.06em] text-white/[0.06] select-none"
            >
              08
            </p>
            <div className="relative grid items-end gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(17rem,0.75fr)] lg:gap-16">
              <div>
                <p className="founding-rise text-[12px] tracking-[0.22em] text-white/75 uppercase">
                  Founding batch
                </p>
                <h1 id="founding-heading" className="founding-display founding-rise mt-5">
                  <span className="block">The first</span>
                  <span className="block">eight.</span>
                </h1>
                <p
                  className="founding-rise mt-6 max-w-[36ch] text-[17px] leading-7 text-white/80 md:text-lg md:leading-8"
                  style={{ animationDelay: "0.08s" }}
                >
                  An internship for a new vertical at Sayge. Five months, starting 15 December.
                  You come in as a founding member and build it from scratch.
                </p>
                <div className="founding-rise mt-8" style={{ animationDelay: "0.16s" }}>
                  <a href={foundingMailto} className="hero-cta-primary hero-cta-on-ink">
                    Email {siteEmail}
                  </a>
                </div>
              </div>

              <dl className="founding-rise grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/15" style={{ animationDelay: "0.12s" }}>
                {facts.map((fact) => (
                  <div key={fact.label} className="min-w-0 bg-[#111111] px-4 py-5 sm:px-5 sm:py-6">
                    <dt className="text-[11px] tracking-[0.18em] text-white/65 uppercase">
                      {fact.label}
                    </dt>
                    <dd className="mt-3">
                      <span className="block font-display text-[clamp(2.4rem,6vw,3.4rem)] leading-none tracking-[-0.04em]">
                        {fact.value}
                      </span>
                      <span className="mt-2 block text-[14px] leading-5 text-white/75">
                        {fact.unit}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section aria-labelledby="seats-heading" className="border-b border-line">
          <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-6 md:py-24">
            <div className="max-w-[40rem]">
              <p className="text-[12px] tracking-[0.22em] text-muted uppercase">The seats</p>
              <h2 id="seats-heading" className="section-title mt-4">
                <span className="block">Four kinds of people.</span>
                <span className="block">One team.</span>
              </h2>
              <p className="mt-5 max-w-[42ch] text-[17px] leading-7 text-muted">
                Developers, designers, product enthusiasts, and creative callouts such as content.
              </p>
            </div>
            <ul className="mt-12 grid gap-x-10 sm:grid-cols-2">
              {roles.map((role, index) => (
                <li key={role.name} className="min-w-0 border-t border-line py-6 md:py-8">
                  <p className="text-[12px] tracking-[0.16em] text-muted tabular-nums">
                    0{index + 1}
                  </p>
                  <p className="mt-3 font-display text-[clamp(1.8rem,3vw,2.6rem)] leading-none tracking-[-0.03em]">
                    {role.name}
                  </p>
                  {role.note ? (
                    <p className="mt-3 max-w-[28ch] text-[15px] leading-6 text-muted">{role.note}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="work-heading" className="border-b border-line">
          <div className="mx-auto grid max-w-[1180px] gap-12 px-5 py-16 sm:px-6 md:py-24 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
            <div>
              <p className="text-[12px] tracking-[0.22em] text-muted uppercase">The work</p>
              <h2 id="work-heading" className="section-title mt-4">
                Two products. From zero.
              </h2>
            </div>
            <div className="min-w-0">
              <div className="grid gap-8 sm:grid-cols-2">
                <article className="min-w-0 border-t border-line pt-5">
                  <h3 className="font-display text-[clamp(1.8rem,3vw,2.5rem)] leading-none tracking-[-0.03em]">
                    Fintech
                  </h3>
                </article>
                <article className="min-w-0 border-t border-line pt-5">
                  <h3 className="font-display text-[clamp(1.8rem,3vw,2.5rem)] leading-none tracking-[-0.03em]">
                    Sustainability
                  </h3>
                </article>
              </div>
              <p className="mt-10 max-w-[46ch] text-[17px] leading-7 text-foreground">
                You will work on a fintech product and a sustainability product. More details
                after you join. This is a new vertical under Sayge, and the people in it are
                its founding members. It grows from scratch.
              </p>
            </div>
          </div>
        </section>

        <section id="write" aria-labelledby="write-heading" className="founding-close scroll-mt-24 text-white">
          <div className="mx-auto grid max-w-[1180px] gap-10 px-5 py-16 sm:px-6 md:py-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-20">
            <div className="min-w-0">
              <p className="text-[12px] tracking-[0.22em] text-white/65 uppercase">The note</p>
              <h2 id="write-heading" className="section-title mt-4 text-white">
                Tell us what you made.
              </h2>
              <p className="mt-5 max-w-[40ch] text-[17px] leading-7 text-white/80">
                Email{" "}
                <a
                  href={foundingMailto}
                  className="underline decoration-white/40 underline-offset-4 transition hover:decoration-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand"
                >
                  {siteEmail}
                </a>
                . Use the subject line. Include something you have built, a portfolio, or a
                campaign or other crazy idea you have in mind.
              </p>
            </div>
            <div className="min-w-0 rounded-2xl border border-white/15 bg-white/[0.04] p-6 sm:p-8">
              <p className="text-[11px] tracking-[0.18em] text-white/65 uppercase">
                Suggested subject
              </p>
              <p className="mt-3 font-display text-[clamp(1.7rem,4vw,2.4rem)] leading-tight tracking-[-0.03em] text-balance break-words">
                {foundingSubject}
              </p>
              <a href={foundingMailto} className="hero-cta-primary hero-cta-on-ink mt-8">
                Email {siteEmail}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
