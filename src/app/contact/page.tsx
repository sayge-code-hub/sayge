import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import {
  absoluteUrl,
  breadcrumbJsonLd,
  contactDescription,
  contactPageJsonLd,
  contactTitle,
  ogImage,
  siteEmail,
  siteName,
  sitePhoneDisplay,
  sitePhoneHref,
} from "@/lib/site";

export const metadata: Metadata = {
  title: contactTitle,
  description: contactDescription,
  alternates: {
    canonical: absoluteUrl("/contact"),
  },
  openGraph: {
    type: "website",
    url: absoluteUrl("/contact"),
    siteName,
    title: contactTitle,
    description: contactDescription,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: contactTitle,
    description: contactDescription,
    images: [ogImage],
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactPageJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <Header />
      <main>
        <section
          aria-labelledby="contact-heading"
          className="mx-auto max-w-[1180px] px-6 pb-20 pt-10 md:pb-28 md:pt-14"
        >
          <div className="grid gap-14 md:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] md:items-end md:gap-20">
            <div>
              <Breadcrumb current="Contact" />
              <h1
                id="contact-heading"
                className="page-display mt-8 max-w-[12ch] text-foreground"
              >
                Tell us what you’re building.
              </h1>
              <p className="mt-6 max-w-[42ch] text-[16px] leading-7 text-muted md:text-[17px] md:leading-8">
                Have a product to build, a technology problem to solve or an
                engineering team to extend? Tell us where you are and where you
                want to go.
              </p>
            </div>
            <div>
              <p className="text-[12px] tracking-[0.18em] text-muted uppercase">
                Get in touch
              </p>
              <div className="mt-6 h-px w-10 bg-brand" />
              <a
                href={`mailto:${siteEmail}`}
                className="mt-8 block max-w-full break-words font-display text-[clamp(1.6rem,3.4vw,2.6rem)] leading-tight tracking-tight text-foreground underline-offset-[6px] transition hover:text-brand hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[var(--brand)]"
              >
                {siteEmail}
              </a>
              <a
                href={sitePhoneHref}
                className="mt-4 inline-flex min-h-11 items-center text-[20px] tracking-tight text-foreground underline-offset-[6px] transition hover:text-brand hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[var(--brand)] md:text-[22px]"
              >
                {sitePhoneDisplay}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
