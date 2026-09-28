import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { SelectedExperienceLogos } from "@/components/SelectedExperienceLogos";
import { Reveal } from "@/components/Reveal";
import {
  absoluteUrl,
  breadcrumbJsonLd,
  customSoftwareDescription,
  customSoftwareJsonLd,
  customSoftwarePath,
  customSoftwareTitle,
  ogImage,
  siteName,
} from "@/lib/site";

export const metadata: Metadata = {
  title: customSoftwareTitle,
  description: customSoftwareDescription,
  alternates: {
    canonical: absoluteUrl(customSoftwarePath),
  },
  openGraph: {
    type: "website",
    url: absoluteUrl(customSoftwarePath),
    siteName,
    title: customSoftwareTitle,
    description: customSoftwareDescription,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: customSoftwareTitle,
    description: customSoftwareDescription,
    images: [ogImage],
  },
};

const weBuild = [
  {
    title: "Business applications",
    copy: "Software shaped around how the company actually operates—not around a vendor’s default workflow.",
  },
  {
    title: "Internal platforms",
    copy: "Shared systems that give teams one place to work, instead of a patchwork of files and tools.",
  },
  {
    title: "Customer-facing products",
    copy: "Digital products your customers use: portals, apps and services that have to hold up in the real world.",
  },
  {
    title: "Enterprise applications",
    copy: "Software that can live inside operational, security and reporting constraints without becoming unusable.",
  },
  {
    title: "Workflow systems",
    copy: "Applications that take manual, exception-heavy processes and make them reliable enough to scale.",
  },
  {
    title: "APIs and integrations",
    copy: "The connections between finance, operations, product and the systems you already run.",
  },
  {
    title: "SaaS products",
    copy: "Multi-tenant products designed to be owned, extended and still defensible a year after launch.",
  },
  {
    title: "Legacy modernisation",
    copy: "Evolving what is already in production—so the business can move without a reckless rewrite.",
  },
];

const approach = [
  {
    n: "01",
    title: "Understand",
    copy: "The business, the users, the workflows and the constraints that will actually decide the work.",
  },
  {
    n: "02",
    title: "Define",
    copy: "Turn the problem into a product and technical direction you can defend—scope, architecture and what not to build.",
  },
  {
    n: "03",
    title: "Engineer",
    copy: "Design the architecture and build the software in slices that can go to production, not a slide deck.",
  },
  {
    n: "04",
    title: "Evolve",
    copy: "Measure what happens after launch. Improve, integrate and support the system as the business changes.",
  },
];

const scenarios = [
  "You’re building something your business depends on.",
  "A workflow has outgrown the tools supporting it.",
  "Your systems need to work together.",
  "Manual processes are limiting growth.",
  "Legacy software is becoming harder to change.",
  "Off-the-shelf tools are forcing the business to work around them.",
];

const experience = [
  { value: "6+ years", label: "Technology experience" },
  { value: "6 products", label: "Designed and delivered" },
  { value: "4+ businesses", label: "Supported across their technology journeys" },
  { value: "5+ industries", label: "Products and business systems" },
];

export default function CustomSoftwarePage() {
  return (
    <>
      <JsonLd data={customSoftwareJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Custom software development", path: customSoftwarePath },
        ])}
      />
      <Header />
      <main>
        <section
          aria-labelledby="service-heading"
          className="mx-auto max-w-[820px] px-6 pb-16 pt-10 md:pb-24 md:pt-14"
        >
          <Breadcrumb current="Custom software development" />
          <p className="mt-8 text-[11px] tracking-[0.18em] text-muted">
            Custom Software Development
          </p>
          <h1
            id="service-heading"
            className="page-display mt-4 max-w-[16ch] text-foreground"
          >
            Software built around the way your business works.
          </h1>
          <p className="mt-6 max-w-[46ch] text-[16px] leading-7 text-muted md:text-[17px] md:leading-8">
            When off-the-shelf software no longer fits, Sayge designs and builds
            custom digital systems around your processes, customers and goals.
          </p>
          <p className="mt-4 max-w-[42ch] text-[14px] leading-6 text-muted">
            For startups, growing businesses and established teams building
            software that matters.
          </p>
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5">
            <Link href="/contact" className="hero-cta-primary">
              Start a conversation
              <span aria-hidden="true">→</span>
            </Link>
            <a href="#how-we-work" className="hero-cta-secondary">
              How we work
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>

        <section
          aria-labelledby="problem-heading"
          className="border-t border-line"
        >
          <div className="mx-auto grid max-w-[1180px] gap-10 px-6 py-16 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-20 md:py-24">
            <h2 id="problem-heading" className="section-title max-w-[12ch]">
              Not every business problem needs another tool.
            </h2>
            <div className="max-w-[48ch] space-y-5 text-[16px] leading-7 text-muted md:text-[17px] md:leading-8">
              <p>Sometimes the problem is the tools themselves.</p>
              <p>
                Disconnected systems. Manual processes. Legacy applications.
                Workflows that have grown around software instead of the
                business.
              </p>
              <p>
                Sayge helps businesses decide when custom software is worth
                building—and then takes it from architecture to production.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="build-heading" className="border-t border-line">
          <div className="mx-auto max-w-[1180px] px-6 py-16 md:py-24">
            <h2 id="build-heading" className="section-title">
              What we build
            </h2>
            <ul className="mt-12 divide-y divide-line border-y border-line">
              {weBuild.map((item) => (
                <li
                  key={item.title}
                  className="grid gap-2 py-6 md:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] md:gap-12 md:py-7"
                >
                  <h3 className="text-[17px] tracking-tight">{item.title}</h3>
                  <p className="max-w-[48ch] text-[15px] leading-7 text-muted">
                    {item.copy}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="how-we-work"
          aria-labelledby="approach-heading"
          className="bg-ink text-white"
        >
          <div className="mx-auto max-w-[1180px] px-6 py-16 md:py-24">
            <h2
              id="approach-heading"
              className="section-title max-w-[16ch] text-white"
            >
              Built around the problem, not the technology
            </h2>
            <ol className="mt-14 divide-y divide-white/10 border-y border-white/10">
              {approach.map((item, i) => (
                <li key={item.n} className="py-8 md:py-10">
                  <Reveal delayMs={i * 70}>
                    <div className="grid gap-3 lg:grid-cols-[4.5rem_minmax(0,0.38fr)_minmax(0,1fr)] lg:items-baseline lg:gap-12">
                      <p className="text-[12px] tracking-[0.18em] text-brand">
                        {item.n}
                      </p>
                      <h3 className="text-[22px] tracking-tight md:text-[26px]">
                        {item.title}
                      </h3>
                      <p className="max-w-[46ch] text-[15px] leading-7 text-white/55">
                        {item.copy}
                      </p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section aria-labelledby="tech-heading" className="border-t border-line">
          <div className="mx-auto grid max-w-[1180px] gap-10 px-6 py-16 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-20 md:py-24">
            <h2 id="tech-heading" className="section-title max-w-[12ch]">
              Technology that fits the job.
            </h2>
            <div className="max-w-[48ch] text-[16px] leading-7 text-muted md:text-[17px] md:leading-8">
              <p>
                Stack choices follow the product and the constraints—not a
                preferred catalogue. We use Flutter, Java, Node.js, Python,
                cloud platforms and practical AI where they earn their place.
              </p>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="when-heading"
          className="border-t border-line"
        >
          <div className="mx-auto max-w-[820px] px-6 py-16 md:py-24">
            <h2 id="when-heading" className="section-title max-w-[14ch]">
              When custom software makes sense.
            </h2>
            <p className="mt-6 max-w-[48ch] text-[16px] leading-7 text-muted md:text-[17px] md:leading-8">
              For startups building important products, growing businesses whose
              systems are becoming limiting, and established organisations
              modernising or connecting what they already run.
            </p>
            <ul className="mt-12 space-y-0">
              {scenarios.map((item) => (
                <li
                  key={item}
                  className="border-t border-line py-5 text-[17px] leading-7 tracking-tight last:border-b"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          aria-labelledby="experience-heading"
          className="border-t border-line"
        >
          <div className="mx-auto max-w-[1180px] px-6 py-16 md:py-24">
            <h2 id="experience-heading" className="section-title max-w-[16ch]">
              Experience building beyond the brief.
            </h2>
            <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {experience.map((item, i) => (
                <Reveal key={item.value} delayMs={i * 70}>
                  <p className="text-[28px] tracking-tight">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {item.label}
                  </p>
                </Reveal>
              ))}
            </div>
            <SelectedExperienceLogos className="mt-14" />
            <p className="mt-6 max-w-[52ch] text-[16px] leading-7 text-muted md:text-[17px] md:leading-8">
              Our experience spans products and business systems across fintech,
              education, oil &amp; gas, chemicals and corporate
              environments—including{" "}
              <Link
                href="/work/mahindra-finance"
                className="text-foreground underline-offset-[5px] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[var(--brand)]"
              >
                technology work for Mahindra Finance
              </Link>
              .
            </p>
            <p className="mt-6">
              <Link
                href="/about"
                className="text-[15px] tracking-tight text-foreground underline-offset-[5px] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[var(--brand)]"
              >
                More about how we work
                <span aria-hidden="true"> →</span>
              </Link>
            </p>
          </div>
        </section>

        <section
          aria-labelledby="service-cta-heading"
          className="border-t border-line"
        >
          <div className="mx-auto flex max-w-[1180px] flex-col gap-8 px-6 py-16 md:flex-row md:items-end md:justify-between md:py-24">
            <div>
              <div className="accent-bar mb-6 h-[3px] w-10 bg-brand" />
              <h2 id="service-cta-heading" className="section-title max-w-xl">
                Building something that doesn’t fit the standard solution?
              </h2>
              <p className="mt-5 max-w-[42ch] text-[16px] leading-7 text-muted">
                Tell us what you’re trying to solve. We’ll help you work out
                what should come next.
              </p>
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
