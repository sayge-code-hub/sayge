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

const foundingMailto = `mailto:${siteEmail}?subject=${encodeURIComponent(foundingSubject)}&body=${encodeURIComponent("Hello,\n\nSomething I have built, or a portfolio:\n\nA campaign or other idea I have in mind:\n")}`;

const facts = [
  { label: "Starts", value: "15 December" },
  { label: "Duration", value: "5 months" },
  { label: "Team", value: "8 people" },
  { label: "Products", value: "Fintech and sustainability" },
];

const roles = ["Developers", "Designers", "Product enthusiasts", "Content"];

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
    <div className="founding-shell">
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
      <div className="founding-aurora" aria-hidden="true" />
      <div className="founding-grain" aria-hidden="true" />
      <a
        href="#founding-main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white focus:outline focus:outline-2 focus:outline-offset-3 focus:outline-brand"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f3ec]/80 backdrop-blur-md">
        <div className="mx-auto flex h-[80px] max-w-[820px] items-center justify-between gap-4 px-5 sm:px-6">
          <Link href="/" aria-label="Sayge home" className="min-w-0">
            <Logo />
          </Link>
          <a
            href={foundingMailto}
            className="shrink-0 text-[14px] text-foreground underline decoration-black/25 underline-offset-4 transition hover:decoration-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand"
          >
            {siteEmail}
          </a>
        </div>
      </header>
      <main id="founding-main" aria-labelledby="founding-heading" className="overflow-x-clip">
        <article className="mx-auto max-w-[1080px] px-5 pt-12 pb-20 sm:px-6 md:pt-16 md:pb-28">
          <header className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(16rem,0.75fr)] lg:gap-16">
            <div className="min-w-0">
              <p className="text-[12px] tracking-[0.18em] text-muted uppercase">
                Founding batch · Sayge
              </p>
              <h1 id="founding-heading" className="founding-title mt-4">
                <span className="block">Not a typical</span>
                <span className="block">internship.</span>
              </h1>
              <p className="mt-6 max-w-[38ch] text-[17px] leading-8 text-foreground/80 md:text-lg">
                A new vertical under Sayge. It starts 15 December, runs five months, and the team
                is eight. You join as a founding member. The work is built from scratch.
              </p>
              <a href={foundingMailto} className="hero-cta-primary mt-8">
                Email {siteEmail}
              </a>
            </div>
            <dl className="founding-panel grid grid-cols-2 gap-px overflow-hidden">
              {facts.map((fact) => (
                <div key={fact.label} className="min-w-0 px-4 py-5 sm:px-5">
                  <dt className="text-[11px] tracking-[0.16em] text-muted uppercase">{fact.label}</dt>
                  <dd className="mt-2 text-[16px] leading-6 tracking-[-0.02em]">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </header>

          <section aria-labelledby="roles-heading" className="mt-16 md:mt-24">
            <div className="max-w-[40rem]">
              <h2 id="roles-heading" className="text-[13px] tracking-[0.16em] text-muted uppercase">
                Who this is for
              </h2>
              <p className="mt-4 text-[17px] leading-8 text-foreground/80">
                Developers, designers, product enthusiasts, and creative roles such as content.
                Campaigns count. So does other work that does not fit a neat job title.
              </p>
            </div>
            <ul className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
              {roles.map((role) => (
                <li
                  key={role}
                  className="min-w-0 bg-[#f7f3ec]/70 px-4 py-5 text-[18px] leading-7 tracking-[-0.02em] sm:px-5"
                >
                  {role}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="products-heading" className="mt-16 md:mt-24">
            <h2 id="products-heading" className="text-[13px] tracking-[0.16em] text-muted uppercase">
              The work
            </h2>
            <div className="mt-6 grid gap-8 border-t border-black/10 pt-6 md:grid-cols-2 md:gap-12">
              <div className="min-w-0">
                <h3 className="font-display text-[clamp(1.8rem,3vw,2.4rem)] leading-none tracking-[-0.03em]">
                  Fintech
                </h3>
                <p className="mt-4 max-w-[36ch] text-[17px] leading-8 text-foreground/80">
                  A fintech product. More detail after you join.
                </p>
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-[clamp(1.8rem,3vw,2.4rem)] leading-none tracking-[-0.03em]">
                  Sustainability
                </h3>
                <p className="mt-4 max-w-[36ch] text-[17px] leading-8 text-foreground/80">
                  A sustainability product. More detail after you join.
                </p>
              </div>
            </div>
            <p className="mt-8 max-w-[52ch] text-[17px] leading-8 text-foreground">
              This team is the founding group. The chance is to build the vertical from scratch.
            </p>
          </section>

          <section id="write" aria-labelledby="write-heading" className="founding-panel mt-16 scroll-mt-24 px-5 py-8 sm:px-8 md:mt-24 md:py-10">
            <h2 id="write-heading" className="text-[13px] tracking-[0.16em] text-muted uppercase">
              If you want in
            </h2>
            <p className="mt-4 max-w-[46ch] text-[17px] leading-8 text-foreground/80">
              Email{" "}
              <a
                href={foundingMailto}
                className="text-foreground underline decoration-black/30 underline-offset-4 transition hover:decoration-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand"
              >
                {siteEmail}
              </a>
              . Include something you have built, a portfolio, or a campaign or other idea you
              have in mind.
            </p>
            <p className="mt-8 text-[13px] tracking-[0.04em] text-muted">Suggested subject</p>
            <p className="mt-2 max-w-[16ch] font-display text-[clamp(1.7rem,4vw,2.5rem)] leading-tight tracking-[-0.03em] text-balance break-words sm:max-w-none">
              {foundingSubject}
            </p>
            <a href={foundingMailto} className="hero-cta-primary mt-8">
              Email {siteEmail}
            </a>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
