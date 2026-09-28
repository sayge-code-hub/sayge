import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { MahindraFinanceLogo } from "@/components/MahindraFinanceLogo";
import { SelectedExperienceLogos } from "@/components/SelectedExperienceLogos";
import { Reveal } from "@/components/Reveal";
import {
  aboutDescription,
  aboutPageJsonLd,
  aboutTitle,
  absoluteUrl,
  breadcrumbJsonLd,
  customSoftwarePath,
  ogImage,
  siteName,
} from "@/lib/site";

export const metadata: Metadata = {
  title: aboutTitle,
  description: aboutDescription,
  alternates: {
    canonical: absoluteUrl("/about"),
  },
  openGraph: {
    type: "website",
    url: absoluteUrl("/about"),
    siteName,
    title: aboutTitle,
    description: aboutDescription,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: aboutTitle,
    description: aboutDescription,
    images: [ogImage],
  },
};

const stats = [
  { value: "6+", label: "Years of experience", offset: "lg:pt-0" },
  { value: "6", label: "Products delivered", offset: "lg:pt-16" },
  { value: "4+", label: "Businesses supported", offset: "lg:pt-8" },
  { value: "5+", label: "Industries", offset: "lg:pt-20" },
];

const industries = [
  "Fintech",
  "EdTech",
  "Oil & Gas",
  "Chemicals",
  "Corporate",
];

const thinking = [
  {
    n: "01",
    title: "Understand before building.",
    copy: "We take the time to understand the business, the users and the problem before deciding what technology should look like.",
  },
  {
    n: "02",
    title: "Build with purpose.",
    copy: "Every system, interface and technical decision should have a reason behind it.",
  },
  {
    n: "03",
    title: "Stay accountable.",
    copy: "Our relationship doesn’t end when something goes live. We care about what happens next.",
  },
];

const capabilities = [
  {
    group: "Advise",
    items: [
      { label: "Technology consulting" },
      { label: "Architecture" },
      { label: "Product strategy" },
    ],
  },
  {
    group: "Build",
    items: [
      { label: "Custom software", href: customSoftwarePath },
      { label: "Mobile applications" },
      { label: "Digital products" },
    ],
  },
  {
    group: "Intelligence",
    items: [
      { label: "AI" },
      { label: "Automation" },
      { label: "Intelligent systems" },
    ],
  },
  {
    group: "Extend",
    items: [
      { label: "Dedicated developers" },
      { label: "Engineering teams" },
      { label: "Technology staffing" },
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutPageJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <Header />
      <main className="about-story">
        <section
          aria-labelledby="about-heading"
          className="mx-auto max-w-[1180px] px-6 pb-20 pt-10 md:pb-28 md:pt-14"
        >
          <Breadcrumb current="About" />
          <div className="mt-14 grid items-end gap-10 md:mt-20 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:gap-16 lg:mt-24">
            <h1
              id="about-heading"
              className="about-display max-w-[11ch] text-foreground"
            >
              Technology built with intention<span className="text-brand">.</span>
            </h1>
            <p className="max-w-[38ch] border-l border-brand pl-5 text-[16px] leading-7 text-muted md:text-[17px] md:leading-8">
              Sayge is a technology partner helping businesses make better
              technology decisions, build digital products and extend their
              engineering capabilities.
            </p>
          </div>
        </section>

        <section
          aria-labelledby="why-heading"
          className="bg-ink text-white"
        >
          <div className="mx-auto max-w-[1180px] px-6 py-24 md:py-32">
            <Reveal>
              <p className="text-[12px] tracking-[0.18em] text-brand">
                Why Sayge exists
              </p>
              <div className="about-rule mt-6 h-px w-16 bg-brand" />
              <h2
                id="why-heading"
                className="about-display mt-10 max-w-[18ch] text-white"
              >
                We started Sayge with a simple ambition: to create things worth
                building.
              </h2>
            </Reveal>
            <div className="mt-16 grid gap-10 border-t border-white/10 pt-12 md:mt-20 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-20">
              <Reveal>
                <p className="max-w-[22ch] font-display text-[28px] leading-snug tracking-tight md:text-[34px]">
                  Beautiful digital experiences. Useful products. Thoughtful
                  technology.
                </p>
              </Reveal>
              <Reveal delayMs={90}>
                <div className="max-w-[48ch] space-y-6 text-[16px] leading-7 text-white/60 md:text-[17px] md:leading-8">
                  <p>
                    And, just as importantly, opportunities for people to grow,
                    contribute and build meaningful careers.
                  </p>
                  <p>
                    We believe good technology is not only about what gets
                    delivered. It is about how it is conceived, how it is built
                    and the people who stand behind it.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="numbers-heading"
          className="border-t border-line"
        >
          <div className="mx-auto max-w-[1180px] px-6 py-20 md:py-28">
            <Reveal>
              <h2
                id="numbers-heading"
                className="font-display text-[clamp(2rem,4vw,3.4rem)] leading-[1.08] tracking-tight"
              >
                Experience, in numbers.
              </h2>
            </Reveal>
            <div className="mt-10 divide-y divide-line border-y border-line lg:grid lg:grid-cols-4 lg:divide-x lg:divide-y-0">
              {stats.map((item, i) => (
                <Reveal
                  key={item.label}
                  delayMs={i * 80}
                  className={`py-10 lg:px-8 lg:first:pl-0 lg:last:pr-0 ${item.offset}`}
                >
                  <p className="about-stat text-foreground">{item.value}</p>
                  <p className="mt-5 max-w-[16ch] text-[13px] leading-6 tracking-[0.08em] text-muted uppercase">
                    {item.label}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="complexity-heading"
          className="border-t border-line"
        >
          <div className="mx-auto grid max-w-[1180px] gap-12 px-6 py-20 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:items-end md:gap-20 md:py-28">
            <Reveal>
              <h2
                id="complexity-heading"
                className="font-display text-[clamp(2rem,4vw,3.4rem)] leading-[1.08] tracking-tight"
              >
                Experience that spans real-world complexity.
              </h2>
            </Reveal>
            <Reveal delayMs={80}>
              <p className="max-w-[46ch] text-[16px] leading-7 text-muted md:text-[17px] md:leading-8">
                Our work has taken us across fintech, education, oil &amp; gas,
                chemicals and corporate environments.
              </p>
              <p className="mt-10 text-[12px] tracking-[0.18em] text-muted">
                Selected experience
              </p>
              <SelectedExperienceLogos />
              <div className="about-rule mt-6 h-[2px] w-24 bg-brand" />
            </Reveal>
          </div>
        </section>

        <section
          aria-labelledby="industries-heading"
          className="border-t border-line"
        >
          <div className="mx-auto max-w-[1180px] px-6 py-20 md:py-28">
            <div className="grid gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-20">
              <Reveal>
                <h2
                  id="industries-heading"
                  className="font-display max-w-[12ch] text-[clamp(2rem,4vw,3.4rem)] leading-[1.08] tracking-tight"
                >
                  Different industries. Similar expectation.
                </h2>
                <p className="mt-6 max-w-[36ch] text-[16px] leading-7 text-muted md:text-[17px] md:leading-8">
                  Technology should work when the environment is complex, the
                  stakes are high and the requirements keep changing.
                </p>
              </Reveal>
              <ol className="border-t border-line">
                {industries.map((item, i) => (
                  <li key={item} className="border-b border-line">
                    <Reveal delayMs={i * 60}>
                      <div className="grid grid-cols-[3rem_minmax(0,1fr)] items-baseline py-5 md:grid-cols-[4.5rem_minmax(0,1fr)] md:py-6">
                        <span className="text-[12px] tracking-[0.18em] text-brand">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display text-[26px] tracking-tight md:text-[32px]">
                          {item}
                        </span>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="think-heading"
          className="border-t border-line"
        >
          <div className="mx-auto max-w-[1180px] px-6 py-20 md:py-28">
            <Reveal>
              <h2
                id="think-heading"
                className="font-display text-[clamp(2rem,4vw,3.4rem)] leading-[1.08] tracking-tight"
              >
                How we think.
              </h2>
            </Reveal>
            <ol className="mt-14 divide-y divide-line border-y border-line">
              {thinking.map((item, i) => (
                <li key={item.n} className="py-8 md:py-12">
                  <Reveal delayMs={i * 70}>
                    <div className="grid gap-4 lg:grid-cols-[5rem_minmax(0,0.5fr)_minmax(0,1fr)] lg:items-baseline lg:gap-12">
                      <p className="text-[12px] tracking-[0.18em] text-brand">
                        {item.n}
                      </p>
                      <h3 className="font-display text-[26px] tracking-tight md:text-[32px]">
                        {item.title}
                      </h3>
                      <p className="max-w-[46ch] text-[16px] leading-7 text-muted md:text-[17px] md:leading-8">
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
          aria-labelledby="capabilities-heading"
          className="border-t border-line"
        >
          <div className="mx-auto max-w-[1180px] px-6 py-20 md:py-28">
            <Reveal>
              <h2
                id="capabilities-heading"
                className="font-display max-w-[14ch] text-[clamp(2rem,4vw,3.4rem)] leading-[1.08] tracking-tight"
              >
                What we bring to the table.
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-0 border-t border-line md:grid-cols-2">
              {capabilities.map((cap, i) => (
                <Reveal
                  key={cap.group}
                  delayMs={i * 70}
                  className={`border-line py-10 ${i % 2 === 1 ? "md:border-l md:pl-10" : "md:pr-10"} ${i > 1 ? "border-t" : ""} ${i === 1 ? "border-t md:border-t-0" : ""}`}
                >
                  <h3 className="text-[12px] tracking-[0.18em] text-brand uppercase">
                    {cap.group}
                  </h3>
                  <ul className="mt-5 space-y-2">
                    {cap.items.map((item) => (
                      <li
                        key={item.label}
                        className="text-[20px] tracking-tight md:text-[22px]"
                      >
                        {"href" in item && item.href ? (
                          <Link
                            href={item.href}
                            className="underline-offset-[6px] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[var(--brand)]"
                          >
                            {item.label}
                          </Link>
                        ) : (
                          item.label
                        )}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="people-heading"
          className="border-t border-line"
        >
          <div className="mx-auto max-w-[1180px] px-6 py-20 md:py-28">
            <div className="grid gap-12 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:items-start md:gap-24">
              <Reveal>
                <p className="text-[12px] tracking-[0.18em] text-muted">
                  A human element
                </p>
                <h2
                  id="people-heading"
                  className="mt-5 font-display max-w-[10ch] text-[clamp(2rem,4vw,3.4rem)] leading-[1.08] tracking-tight"
                >
                  People matter to the work.
                </h2>
              </Reveal>
              <Reveal delayMs={90}>
                <div className="about-rule mb-8 h-[3px] w-10 bg-brand" />
                <p className="max-w-[42ch] font-display text-[24px] leading-snug tracking-tight md:text-[28px]">
                  We care about creating opportunities for people to grow,
                  contribute and build meaningful careers.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="enterprise-heading"
          className="bg-ink text-white"
        >
          <div className="mx-auto max-w-[1180px] px-6 py-24 md:py-32">
            <Reveal>
              <p className="text-[12px] tracking-[0.18em] text-brand">
                Who we have worked with
              </p>
              <p className="mt-5 text-[12px] tracking-[0.18em] text-white/45">
                Enterprise experience
              </p>
              <Link
                href="/work/mahindra-finance"
                className="mt-8 inline-block bg-white px-4 py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[var(--brand)]"
              >
                <MahindraFinanceLogo alt="Mahindra Finance" />
              </Link>
              <h2 id="enterprise-heading" className="about-display mt-8 max-w-[16ch]">
                Technology work for Mahindra Finance.
              </h2>
              <div className="about-rule mt-10 h-px w-20 bg-brand" />
              <p className="mt-10 max-w-[42ch] text-[16px] leading-7 text-white/55 md:text-[17px] md:leading-8">
                Our experience spans India, the UAE and Germany, including
                technology work for Mahindra Finance.
              </p>
              <p className="mt-8">
                <Link
                  href="/work/mahindra-finance"
                  className="text-[15px] tracking-tight text-white underline-offset-[5px] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[var(--brand)]"
                >
                  Selected work
                  <span aria-hidden="true"> →</span>
                </Link>
              </p>
            </Reveal>
          </div>
        </section>

        <section
          aria-labelledby="going-heading"
          className="border-t border-line"
        >
          <div className="mx-auto grid max-w-[1180px] gap-10 px-6 py-20 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-20 md:py-28">
            <Reveal>
              <h2
                id="going-heading"
                className="font-display max-w-[12ch] text-[clamp(2rem,4vw,3.4rem)] leading-[1.08] tracking-tight"
              >
                Where we are going.
              </h2>
            </Reveal>
            <Reveal delayMs={80}>
              <p className="max-w-[46ch] text-[16px] leading-7 text-muted md:text-[17px] md:leading-8">
                We will keep choosing work that deserves care: products that
                matter to the business, systems that can be owned, and engineering
                that people can stand behind.
              </p>
            </Reveal>
          </div>
        </section>

        <section
          aria-labelledby="about-cta-heading"
          className="border-t border-line"
        >
          <div className="mx-auto flex max-w-[1180px] flex-col gap-8 px-6 py-20 md:flex-row md:items-end md:justify-between md:py-28">
            <div>
              <Reveal>
                <div className="accent-bar mb-6 h-[3px] w-10 bg-brand" />
                <h2
                  id="about-cta-heading"
                  className="font-display max-w-[14ch] text-[clamp(2rem,4vw,3.4rem)] leading-[1.08] tracking-tight"
                >
                  Building something worth building?
                </h2>
                <p className="mt-5 max-w-[42ch] text-[16px] leading-7 text-muted">
                  Tell us what you’re trying to solve. We’ll help you work out
                  what should come next.
                </p>
              </Reveal>
            </div>
            <Link href="/contact" className="hero-cta-primary self-start">
              Start a conversation
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
