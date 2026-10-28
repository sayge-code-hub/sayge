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

const foundingMailto = `mailto:${siteEmail}?subject=${encodeURIComponent(foundingSubject)}&body=${encodeURIComponent("Hello,\n\nSomething I have built, or a portfolio:\n\nA campaign or other idea:\n")}`;

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
        <article className="mx-auto max-w-[820px] px-5 pt-14 pb-20 sm:px-6 md:pt-20 md:pb-28">
          <header>
            <p className="text-[12px] tracking-[0.18em] text-muted uppercase">
              Founding internship
            </p>
            <h1 id="founding-heading" className="page-display mt-4 max-w-[16ch] text-balance">
              A new vertical at Sayge.
            </h1>
            <div className="mt-6 max-w-[58ch] space-y-5 text-[17px] leading-8 text-foreground/80 md:text-lg">
              <p>
                Sayge is opening a new vertical. This internship is how it starts. There is no
                existing team to join and no product already underway. The people who come in are
                its founding members, and the work is built from scratch.
              </p>
              <p>
                The batch starts on 15 December and runs for five months. The team is eight.
              </p>
            </div>
          </header>

          <dl className="mt-12 border-t border-black/10 sm:mt-14">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="grid grid-cols-1 gap-1 border-b border-black/10 py-4 sm:grid-cols-[9.5rem_minmax(0,1fr)] sm:items-baseline sm:gap-6 sm:py-5"
              >
                <dt className="text-[13px] tracking-[0.04em] text-muted">{fact.label}</dt>
                <dd className="min-w-0 text-[17px] leading-6">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <section aria-labelledby="roles-heading" className="mt-16 md:mt-20">
            <h2 id="roles-heading" className="text-[13px] tracking-[0.16em] text-muted uppercase">
              Roles
            </h2>
            <p className="mt-5 max-w-[58ch] text-[17px] leading-8 text-foreground/80">
              The batch is for developers, designers, product enthusiasts, and content. Content
              is part of the work itself: campaigns, and other creative work that has to move
              with the products.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {roles.map((role) => (
                <li
                  key={role}
                  className="min-w-0 border-t border-black/10 pt-3 text-[18px] leading-7 tracking-[-0.02em]"
                >
                  {role}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="products-heading" className="mt-16 md:mt-20">
            <h2 id="products-heading" className="text-[13px] tracking-[0.16em] text-muted uppercase">
              Products
            </h2>
            <div className="mt-5 grid gap-6 border-t border-black/10 pt-5 sm:grid-cols-2">
              <h3 className="font-display text-[1.65rem] leading-none tracking-[-0.03em]">
                Fintech
              </h3>
              <h3 className="font-display text-[1.65rem] leading-none tracking-[-0.03em]">
                Sustainability
              </h3>
            </div>
            <div className="mt-6 max-w-[58ch] space-y-5 text-[17px] leading-8 text-foreground/80">
              <p>
                The team will work on two products. One is fintech. One is sustainability. Both
                belong to this new vertical under Sayge, and both start from scratch. More
                details after you join.
              </p>
            </div>
          </section>

          <section id="write" aria-labelledby="write-heading" className="mt-16 scroll-mt-24 md:mt-20">
            <h2 id="write-heading" className="text-[13px] tracking-[0.16em] text-muted uppercase">
              How to write
            </h2>
            <div className="mt-5 max-w-[58ch] space-y-5 border-t border-black/10 pt-5 text-[17px] leading-8 text-foreground/80">
              <p>
                Email{" "}
                <a
                  href={foundingMailto}
                  className="text-foreground underline decoration-black/30 underline-offset-4 transition hover:decoration-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand"
                >
                  {siteEmail}
                </a>
                . Use the subject below so the note is easy to find.
              </p>
              <p>
                Include something you have built, a portfolio, or a campaign or other idea you
                have in mind. That is what we need to see.
              </p>
            </div>
            <p className="mt-8 text-[13px] tracking-[0.04em] text-muted">Suggested subject</p>
            <p className="mt-2 max-w-[24ch] font-display text-[clamp(1.6rem,3vw,2.1rem)] leading-tight tracking-[-0.03em] text-balance break-words sm:max-w-none">
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
