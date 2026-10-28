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
  { label: "Closes", value: "30 November" },
  { label: "Starts", value: "15 December" },
  { label: "Duration", value: "4 months" },
  { label: "Batches", value: "2 × 5" },
  { label: "Apps", value: "Fintech, pet care" },
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
          { name: "Internship", path: foundingPath },
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
      <header className="founding-nav sticky top-0 z-50">
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
              Sayge is opening a new vertical, and this internship is how it starts. Two batches.
              Five people in each. Four months from 15 December, built from scratch, in public.
            </p>
            <p>
              You join as founding members. One batch takes the fintech app. The other takes the
              pet care app. Same studio, two different sets of work, small enough that your name
              is on what ships.
            </p>
          </div>
          <dl className="mt-10 grid grid-cols-2 border-t border-black/10 lg:grid-cols-5">
            {facts.map((fact, index) => (
              <div
                key={fact.label}
                className={`min-w-0 border-b border-black/10 py-4 pr-4 lg:border-b-0 lg:py-5 lg:pr-6 ${
                  index === facts.length - 1 ? "col-span-2 lg:col-span-1" : ""
                }`}
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
              Small on purpose.
            </h2>
            <div className="mt-6 space-y-5 text-[17px] leading-8 text-foreground/85">
              <p>
                Five people to a batch. Close enough to argue a decision in the morning and ship
                it in the afternoon. The vertical is new, so the culture is the work itself: taste,
                craft, and the nerve to put your name on something unfinished.
              </p>
              <p>
                You will be in the room where the product changes. There is no bench and no layer
                between you and the thing being made. What your batch ships is yours to point at.
              </p>
            </div>
          </section>

          <section aria-labelledby="roles-heading" className="mt-16 md:mt-20">
            <h2 id="roles-heading" className="text-[13px] tracking-[0.16em] text-muted uppercase">
              Who should write
            </h2>
            <div className="mt-4 space-y-5 text-[17px] leading-8 text-foreground/85">
              <p>
                Developers, designers, product enthusiasts, and people who make campaigns and
                content. Creative work sits in the build, next to the product. It is how the work
                meets the world.
              </p>
              <p>
                If your practice sits between those titles, write. Bring the thing you made. A
                label is less interesting than the way you work.
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
                Both apps get built. The two batches work on different sets: one on fintech, one
                on pet care. More detail on each product comes after you join. Both start from
                nothing.
              </p>
            </div>
          </section>

          <section aria-labelledby="outcomes-heading" className="mt-16 md:mt-20">
            <h2 id="outcomes-heading" className="text-[13px] tracking-[0.16em] text-muted uppercase">
              By the end
            </h2>
            <p className="mt-4 max-w-[62ch] text-[17px] leading-8 text-foreground/85">
              Each batch leaves its set with these in place.
            </p>
            <ol className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-6">
              {outcomes.map((item, index) => (
                <li
                  key={item}
                  className={`min-w-0 bg-[#f7f3ec]/80 p-5 sm:p-6 ${
                    index < 3 ? "lg:col-span-2" : "lg:col-span-3"
                  } ${index === outcomes.length - 1 ? "sm:col-span-2 lg:col-span-3" : ""}`}
                >
                  <p className="font-display text-[1.35rem] leading-none tracking-[-0.04em] text-foreground/35">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-4 text-[18px] leading-7 tracking-[-0.02em]">{item}</p>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="public-heading" className="mt-16 md:mt-20">
            <h2 id="public-heading" className="font-display text-[clamp(2rem,4vw,3rem)] leading-none tracking-[-0.04em]">
              Built in public.
            </h2>
            <div className="mt-6 space-y-5 text-[17px] leading-8 text-foreground/85">
              <p>
                The making is public. People outside the studio can watch both products take
                shape, week by week. The record is the work itself, while it is still being made.
              </p>
              <p>
                You show unfinished work. You explain a decision while it is still warm. The other
                batch can see you get better, and so can anyone paying attention. That is the room.
              </p>
            </div>
          </section>
        </article>

        <section id="write" aria-labelledby="write-heading" className="scroll-mt-24 px-5 pb-16 sm:px-6 md:pb-24">
          <div className="founding-panel mx-auto max-w-[1080px] px-5 py-8 sm:px-8 md:py-10">
            <h2 id="write-heading" className="text-[13px] tracking-[0.16em] text-muted uppercase">
              If you want in
            </h2>
            <div className="mt-4 max-w-[54ch] space-y-5 text-[17px] leading-8 text-foreground/85">
              <p>
                Applications close on 30 November. Email{" "}
                <a
                  href={foundingMailto}
                  className="text-foreground underline decoration-black/30 underline-offset-4 hover:decoration-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand"
                >
                  {siteEmail}
                </a>{" "}
                before then, with the subject below so the note is easy to find.
              </p>
              <p>
                Include something you have built, a portfolio, or a campaign or idea that was
                yours. Show how you work when the brief was yours.
              </p>
              <p>
                Shortlisted candidates get the detail for the rounds that follow. Those rounds are
                different for each person. You are the best person to help yourself. Bring the
                work only you could have made, and make the case in your own way.
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
