import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import {
  absoluteUrl,
  breadcrumbJsonLd,
  ogImage,
  siteName,
  siteUrl,
  webPageJsonLd,
} from "@/lib/site";
import {
  caseStudyPath,
  getCaseStudies,
  workDescription,
  workIndexLabel,
  workIndexLine,
  workIndexTitle,
  workPath,
  workTitle,
} from "@/lib/work";

export const metadata: Metadata = {
  title: workTitle,
  description: workDescription,
  alternates: {
    canonical: absoluteUrl(workPath),
  },
  openGraph: {
    type: "website",
    url: absoluteUrl(workPath),
    siteName,
    title: workTitle,
    description: workDescription,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: workTitle,
    description: workDescription,
    images: [ogImage],
  },
};

export default function WorkIndexPage() {
  const studies = getCaseStudies();

  return (
    <>
      <JsonLd
        data={{
          ...webPageJsonLd({
            name: workTitle,
            description: workDescription,
            path: workPath,
          }),
          about: { "@id": `${siteUrl}/#organization` },
        }}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Selected Work", path: workPath },
        ])}
      />
      <Header />
      <main>
        <section
          aria-labelledby="work-index-heading"
          className="mx-auto max-w-[1180px] px-6 pb-16 pt-10 md:pb-24 md:pt-14"
        >
          <Breadcrumb current="Selected Work" />
          <p className="mt-4 text-[12px] tracking-[0.18em] text-muted uppercase">
            Selected work
          </p>
          <h1
            id="work-index-heading"
            className="page-display mt-5 max-w-[16ch] text-foreground"
          >
            Selected work.
          </h1>
          <p className="mt-6 max-w-[42ch] text-[16px] leading-7 text-muted md:text-[17px] md:leading-8">
            Different businesses. Different problems. One approach: technology
            built around the work it needs to do.
          </p>
        </section>

        <section
          aria-labelledby="work-list-heading"
          className="border-t border-line"
        >
          <div className="mx-auto max-w-[1180px] px-6 py-16 md:py-24">
            <h2 id="work-list-heading" className="sr-only">
              Case studies
            </h2>
            <ul className="divide-y divide-line border-y border-line">
              {studies.map((study, i) => (
                <li key={study.slug}>
                  <Reveal delayMs={i * 70}>
                    <Link
                      href={caseStudyPath(study.slug)}
                      className="group grid gap-4 py-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[6px] focus-visible:outline-[var(--brand)] md:grid-cols-[4.5rem_minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-baseline md:gap-12 md:py-10"
                    >
                      <p className="text-[12px] tracking-[0.18em] text-brand">
                        {study.number}
                      </p>
                      <div className="min-w-0">
                        <p className="text-[13px] tracking-tight text-muted">
                          {workIndexLabel(study)}
                        </p>
                        <p className="mt-2 font-display text-[26px] leading-snug tracking-tight text-foreground transition-colors group-hover:text-brand md:text-[32px]">
                          {workIndexTitle(study)}
                        </p>
                      </div>
                      <p className="max-w-[36ch] text-[14px] leading-6 text-muted">
                        {workIndexLine(study)}
                      </p>
                    </Link>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
