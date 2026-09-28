import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import {
  absoluteUrl,
  breadcrumbJsonLd,
  legalNoticeDescription,
  legalNoticePath,
  legalNoticeTitle,
  ogImage,
  siteEmail,
  siteName,
  sitePhoneDisplay,
  sitePhoneHref,
  siteUrl,
  webPageJsonLd,
} from "@/lib/site";

export const metadata: Metadata = {
  title: legalNoticeTitle,
  description: legalNoticeDescription,
  alternates: {
    canonical: absoluteUrl(legalNoticePath),
  },
  openGraph: {
    type: "website",
    url: absoluteUrl(legalNoticePath),
    siteName,
    title: legalNoticeTitle,
    description: legalNoticeDescription,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: legalNoticeTitle,
    description: legalNoticeDescription,
    images: [ogImage],
  },
};

const linkClass =
  "text-foreground underline-offset-[5px] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[var(--brand)]";

export default function LegalNoticePage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          name: legalNoticeTitle,
          description: legalNoticeDescription,
          path: legalNoticePath,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Legal Notice", path: legalNoticePath },
        ])}
      />
      <Header />
      <main>
        <article className="mx-auto max-w-[1180px] px-6 pb-20 pt-10 md:pb-28 md:pt-14">
          <Breadcrumb current="Legal Notice" />
          <h1
            id="legal-heading"
            className="page-display mt-8 max-w-[16ch] text-foreground"
          >
            Legal Notice / Impressum
          </h1>
          <p className="mt-6 max-w-[52ch] text-[16px] leading-7 text-muted md:text-[17px] md:leading-8">
            Information about the operator of this website. This notice does not
            state that Sayge is registered, resident, or legally represented in
            Germany or the United Arab Emirates.
          </p>

          <div className="mt-14 max-w-[62ch] space-y-12 text-[16px] leading-7 text-muted md:text-[17px] md:leading-8">
            <section aria-labelledby="legal-operator">
              <h2
                id="legal-operator"
                className="font-display text-[1.45rem] leading-snug tracking-tight text-foreground"
              >
                Website operator
              </h2>
              <p className="mt-4 text-foreground">Sayge</p>
              <p className="mt-2">Partnership</p>
            </section>

            <section aria-labelledby="legal-address">
              <h2
                id="legal-address"
                className="font-display text-[1.45rem] leading-snug tracking-tight text-foreground"
              >
                Registered address
              </h2>
              <p className="mt-4">
                Harsh Society,
                <br />
                Vivekanand Nagar,
                <br />
                Nagpur - 440015,
                <br />
                India
              </p>
            </section>

            <section aria-labelledby="legal-gstin">
              <h2
                id="legal-gstin"
                className="font-display text-[1.45rem] leading-snug tracking-tight text-foreground"
              >
                GSTIN
              </h2>
              <p className="mt-4">27AEAFS9363N1ZB</p>
            </section>

            <section aria-labelledby="legal-contact">
              <h2
                id="legal-contact"
                className="font-display text-[1.45rem] leading-snug tracking-tight text-foreground"
              >
                Contact
              </h2>
              <p className="mt-4">
                <a href={`mailto:${siteEmail}`} className={linkClass}>
                  {siteEmail}
                </a>
              </p>
              <p className="mt-2">
                <a href={sitePhoneHref} className={linkClass}>
                  {sitePhoneDisplay}
                </a>
              </p>
            </section>

            <section aria-labelledby="legal-website">
              <h2
                id="legal-website"
                className="font-display text-[1.45rem] leading-snug tracking-tight text-foreground"
              >
                Website
              </h2>
              <p className="mt-4">
                <a href={siteUrl} className={linkClass}>
                  {siteUrl}
                </a>
              </p>
            </section>

            <section aria-labelledby="legal-ip">
              <h2
                id="legal-ip"
                className="font-display text-[1.45rem] leading-snug tracking-tight text-foreground"
              >
                Intellectual property
              </h2>
              <p className="mt-4">
                Website content, branding, graphics and original materials
                published by Sayge are protected by applicable
                intellectual-property laws, subject to third-party rights.
                Names, logos and marks of other organisations — including those
                shown as selected experience — remain the property of their
                respective owners. No licence is granted except as required to
                view this website.
              </p>
            </section>

            <section aria-labelledby="legal-links">
              <h2
                id="legal-links"
                className="font-display text-[1.45rem] leading-snug tracking-tight text-foreground"
              >
                External links
              </h2>
              <p className="mt-4">
                This website may contain links to third-party websites. Those
                sites have their own content and privacy practices, which are
                outside Sayge’s control. A link is not an endorsement.
              </p>
            </section>

            <section aria-labelledby="legal-liability">
              <h2
                id="legal-liability"
                className="font-display text-[1.45rem] leading-snug tracking-tight text-foreground"
              >
                Content
              </h2>
              <p className="mt-4">
                The information on this website is provided for general
                information about Sayge. We take care to keep it accurate, but
                it may change and may not be complete. Nothing on this website
                is a contractual offer unless it is expressly stated to be one.
                Liability that cannot be excluded under applicable law is not
                excluded by this notice.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
