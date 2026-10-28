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
      <div className="founding-grain" aria-hidden="true" />
      <a
        href="#founding-main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white focus:outline focus:outline-2 focus:outline-offset-3 focus:outline-brand"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f4efe6]">
        <div className="mx-auto flex h-[80px] max-w-[1180px] items-center justify-between gap-4 px-5 sm:px-6">
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
        <article className="mx-auto max-w-[1180px] px-5 pt-12 pb-14 sm:px-6 md:pt-16 md:pb-20">
          <p className="text-[12px] tracking-[0.2em] text-muted uppercase">
            Founding batch · Sayge
          </p>
          <h1 id="founding-heading" className="founding-poster mt-4">
            Internship.
          </h1>
          <svg className="founding-scribble" viewBox="0 0 360 28" fill="none" aria-hidden="true">
            <path
              d="M4 18c36-14 72 10 112-2 34-10 62 12 104-2 32-10 78 8 136-8"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
          <p className="mt-6 max-w-[34ch] text-[18px] leading-8 md:text-[20px]">
            Not a typical internship. A new vertical at Sayge, built from scratch.
          </p>
        </article>

        <section aria-label="Batch" className="bg-brand text-ink">
          <dl className="mx-auto grid max-w-[1180px] gap-8 px-5 py-10 sm:grid-cols-3 sm:px-6 md:py-14">
            {facts.slice(0, 3).map((fact) => (
              <div key={fact.label} className="min-w-0">
                <dt className="text-[12px] tracking-[0.16em] uppercase">{fact.label}</dt>
                <dd className="mt-2 font-display text-[clamp(2rem,4vw,3.2rem)] leading-none tracking-[-0.04em]">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <article className="mx-auto max-w-[1180px] px-5 py-14 sm:px-6 md:py-20">
          <p className="max-w-[46ch] text-[17px] leading-8 text-foreground/80">
            Eight people join as founding members. The vertical starts with this team. There is
            nothing already built to inherit.
          </p>

          <section aria-labelledby="roles-heading" className="mt-14 md:mt-20">
            <h2 id="roles-heading" className="text-[13px] tracking-[0.16em] text-muted uppercase">
              The call
            </h2>
            <p className="mt-4 max-w-[42ch] text-[17px] leading-8 text-foreground/80">
              Developers, designers, product enthusiasts, and creative roles such as content.
              Campaigns included.
            </p>
            <ul className="mt-8 flex flex-wrap gap-3">
              {roles.map((role) => (
                <li key={role} className="founding-sticker">
                  <span aria-hidden="true">*</span>
                  {role}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="products-heading" className="mt-16 md:mt-24">
            <h2 id="products-heading" className="text-[13px] tracking-[0.16em] text-muted uppercase">
              Two products
            </h2>
            <div className="mt-6 grid gap-10 md:grid-cols-2">
              <h3 className="min-w-0 font-display text-[clamp(2.4rem,6vw,4.5rem)] leading-none tracking-[-0.04em]">
                Fintech
              </h3>
              <h3 className="min-w-0 font-display text-[clamp(2.4rem,6vw,4.5rem)] leading-none tracking-[-0.04em]">
                Sustainability
              </h3>
            </div>
            <p className="mt-6 max-w-[42ch] text-[17px] leading-8 text-foreground/80">
              A fintech product and a sustainability product. More details after you join.
            </p>
          </section>
        </article>

        <section id="write" aria-labelledby="write-heading" className="scroll-mt-24 bg-ink text-white">
          <div className="mx-auto max-w-[1180px] px-5 py-14 sm:px-6 md:py-20">
            <h2 id="write-heading" className="text-[13px] tracking-[0.16em] text-white/70 uppercase">
              Write in
            </h2>
            <p className="mt-4 max-w-[40ch] text-[17px] leading-8 text-white/85">
              Email{" "}
              <a
                href={foundingMailto}
                className="text-white underline decoration-white/40 underline-offset-4 hover:decoration-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand"
              >
                {siteEmail}
              </a>
              . Include something you have built, a portfolio, or a campaign or other idea you
              have in mind.
            </p>
            <p className="mt-10 text-[13px] tracking-[0.04em] text-white/65">Suggested subject</p>
            <p className="mt-2 max-w-[12ch] font-display text-[clamp(2rem,5vw,3.4rem)] leading-[1.05] tracking-[-0.04em] text-balance break-words sm:max-w-none">
              {foundingSubject}
            </p>
            <a href={foundingMailto} className="hero-cta-primary hero-cta-on-ink mt-8">
              Email {siteEmail}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
