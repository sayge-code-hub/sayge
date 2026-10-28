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
  { label: "Duration", value: "4 months" },
  { label: "Team", value: "8 people" },
  { label: "Apps", value: "Fintech and pet care" },
];

const outcomes = [
  "A beta user community",
  "A mobile app",
  "A web app",
  "Branding and design",
  "Content on relevant media platforms",
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
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f4efe6]/80 backdrop-blur-md">
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
        <article className="mx-auto max-w-[1080px] px-5 pt-12 sm:px-6 md:pt-16">
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
          <div className="mt-6 max-w-[62ch] space-y-5 text-[18px] leading-8 md:text-[20px]">
            <p>
              Sayge is opening a new vertical, and this internship is how it starts. The batch
              begins on 15 December and runs for four months. The team is eight.
            </p>
            <p>
              You join as founding members. There is no finished product to inherit. The work is
              built from scratch, and it will be built in public.
            </p>
          </div>
          <dl className="mt-10 grid grid-cols-2 border-t border-black/10 sm:grid-cols-4">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="min-w-0 border-b border-black/10 py-4 pr-4 sm:border-b-0 sm:py-5 sm:pr-6"
              >
                <dt className="text-[11px] tracking-[0.16em] text-muted uppercase">{fact.label}</dt>
                <dd className="mt-2 text-[17px] leading-6 tracking-[-0.02em]">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </article>

        <article className="mx-auto max-w-[1080px] px-5 py-14 sm:px-6 md:py-20">
          <section aria-labelledby="shape-heading">
            <h2 id="shape-heading" className="font-display text-[clamp(2rem,4vw,3rem)] leading-none tracking-[-0.04em]">
              Not a placement. A start.
            </h2>
            <div className="mt-6 space-y-5 text-[17px] leading-8 text-foreground/85">
              <p>
                A typical internship drops you into a team that already knows the work. This one
                does not. The vertical does not exist yet. The eight of you are the people who
                make it exist.
              </p>
              <p>
                That is the offer. Four months, starting 15 December, inside a new part of Sayge.
                You will be close to the decisions, because there is no layer between you and the
                thing being made. What you ship will be yours to point at.
              </p>
            </div>
          </section>

          <section aria-labelledby="roles-heading" className="mt-16 md:mt-20">
            <h2 id="roles-heading" className="text-[13px] tracking-[0.16em] text-muted uppercase">
              Who should write
            </h2>
            <div className="mt-4 space-y-5 text-[17px] leading-8 text-foreground/85">
              <p>
                Developers, designers, product enthusiasts, and people who work in content. Content
                is not a side task here. Campaigns and other creative work are part of how the
                products get out into the world.
              </p>
              <p>
                If your practice sits between those titles, write anyway. We would rather see the
                thing you made than a perfect match to a label.
              </p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-3">
              {roles.map((role) => (
                <li key={role} className="founding-sticker">
                  <span aria-hidden="true">*</span>
                  {role}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="products-heading" className="mt-16 md:mt-20">
            <h2 id="products-heading" className="text-[13px] tracking-[0.16em] text-muted uppercase">
              What you will make
            </h2>
            <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 sm:grid-cols-2">
              <div className="min-w-0 bg-[#f7f3ec]/75 p-5 sm:p-6">
                <h3 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-none tracking-[-0.04em]">
                  Fintech
                </h3>
                <p className="mt-4 text-[16px] leading-7 text-foreground/85">A fintech app.</p>
              </div>
              <div className="min-w-0 bg-[#f7f3ec]/75 p-5 sm:p-6">
                <h3 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-none tracking-[-0.04em]">
                  Pet care
                </h3>
                <p className="mt-4 text-[16px] leading-7 text-foreground/85">A pet care app.</p>
              </div>
            </div>
            <div className="mt-6 max-w-[62ch] space-y-5 text-[17px] leading-8 text-foreground/85">
              <p>
                The batch builds both. A fintech app, and a pet care app. They are not a choice.
                More detail on each comes after you join. Both start from nothing, with a team
                small enough that your work shows.
              </p>
            </div>
          </section>

          <section aria-labelledby="outcomes-heading" className="mt-16 md:mt-20">
            <h2 id="outcomes-heading" className="text-[13px] tracking-[0.16em] text-muted uppercase">
              By the end
            </h2>
            <p className="mt-4 max-w-[62ch] text-[17px] leading-8 text-foreground/85">
              The batch should leave the vertical with these in place.
            </p>
            <ul className="mt-6 grid border-t border-black/10 sm:grid-cols-2">
              {outcomes.map((item) => (
                <li
                  key={item}
                  className="min-w-0 border-b border-black/10 py-4 pr-6 text-[17px] leading-7"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="public-heading" className="mt-16 md:mt-20">
            <h2 id="public-heading" className="font-display text-[clamp(2rem,4vw,3rem)] leading-none tracking-[-0.04em]">
              Built in public.
            </h2>
            <div className="mt-6 space-y-5 text-[17px] leading-8 text-foreground/85">
              <p>
                The work will be built in public. Not a private draft that appears, finished, at
                the end of four months. The making is part of the record. People outside the team
                will be able to see the products take shape.
              </p>
              <p>
                That asks something of you. You have to be willing to show unfinished work, to
                explain a decision while it is still warm, and to let the outside world watch you
                get better at it. If that sounds like the room you want, this batch is that room.
              </p>
            </div>
          </section>
        </article>

        <section id="write" aria-labelledby="write-heading" className="scroll-mt-24 px-5 pb-16 sm:px-6 md:pb-24">
          <div className="founding-panel mx-auto max-w-[1080px] px-5 py-8 sm:px-8 md:py-10">
            <h2 id="write-heading" className="text-[13px] tracking-[0.16em] text-muted uppercase">
              If you want in
            </h2>
            <div className="mt-4 max-w-[48ch] space-y-5 text-[17px] leading-8 text-foreground/85">
              <p>
                Email{" "}
                <a
                  href={foundingMailto}
                  className="text-foreground underline decoration-black/30 underline-offset-4 hover:decoration-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand"
                >
                  {siteEmail}
                </a>
                . Use the subject below so the note is easy to find.
              </p>
              <p>
                Include something you have built, a portfolio, or a campaign or other idea you
                have in mind. Show us how you work when the brief was yours.
              </p>
            </div>
            <p className="mt-8 text-[13px] tracking-[0.04em] text-muted">Suggested subject</p>
            <p className="mt-2 max-w-[14ch] font-display text-[clamp(1.8rem,4vw,2.8rem)] leading-tight tracking-[-0.04em] text-balance break-words sm:max-w-none">
              {foundingSubject}
            </p>
            <a href={foundingMailto} className="hero-cta-primary mt-8">
              Email {siteEmail}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
