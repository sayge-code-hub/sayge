import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import {
  absoluteUrl,
  breadcrumbJsonLd,
  ogImage,
  privacyDescription,
  privacyPath,
  privacyTitle,
  siteEmail,
  siteName,
  sitePhoneDisplay,
  sitePhoneHref,
  siteUrl,
  webPageJsonLd,
} from "@/lib/site";

export const metadata: Metadata = {
  title: privacyTitle,
  description: privacyDescription,
  alternates: {
    canonical: absoluteUrl(privacyPath),
  },
  openGraph: {
    type: "website",
    url: absoluteUrl(privacyPath),
    siteName,
    title: privacyTitle,
    description: privacyDescription,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: privacyTitle,
    description: privacyDescription,
    images: [ogImage],
  },
};

const linkClass =
  "text-foreground underline-offset-[5px] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[var(--brand)]";

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          name: privacyTitle,
          description: privacyDescription,
          path: privacyPath,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: privacyPath },
        ])}
      />
      <Header />
      <main>
        <article className="mx-auto max-w-[1180px] px-6 pb-20 pt-10 md:pb-28 md:pt-14">
          <Breadcrumb current="Privacy Policy" />
          <h1
            id="privacy-heading"
            className="page-display mt-8 max-w-[14ch] text-foreground"
          >
            Privacy Policy
          </h1>
          <p className="mt-6 text-[13px] tracking-[0.04em] text-muted">
            Effective date: 22 September 2026
          </p>

          <div className="mt-14 max-w-[62ch] space-y-12 text-[16px] leading-7 text-muted md:text-[17px] md:leading-8">
            <section aria-labelledby="privacy-intro">
              <h2
                id="privacy-intro"
                className="font-display text-[1.45rem] leading-snug tracking-tight text-foreground"
              >
                1. Introduction
              </h2>
              <p className="mt-4">
                Sayge respects privacy. This policy describes how personal
                information may be handled when someone visits{" "}
                <a href={siteUrl} className={linkClass}>
                  sayge.in
                </a>{" "}
                or contacts Sayge by email or telephone. The website is
                primarily informational. It does not currently provide user
                accounts, a contact form, or online payment.
              </p>
            </section>

            <section aria-labelledby="privacy-receive">
              <h2
                id="privacy-receive"
                className="font-display text-[1.45rem] leading-snug tracking-tight text-foreground"
              >
                2. Information we may receive
              </h2>
              <p className="mt-4">
                We may receive personal information only in limited ways:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>
                  Information a person chooses to include when sending email to{" "}
                  {siteEmail}, such as a name, contact details and the content
                  of the message.
                </li>
                <li>
                  Information shared during a telephone call to{" "}
                  {sitePhoneDisplay}.
                </li>
                <li>
                  Technical information that web hosting or related
                  infrastructure may record automatically in ordinary server
                  logs, such as IP address, browser type, requested pages and
                  time of request. This website’s code does not implement its
                  own analytics or visitor-profiling tools.
                </li>
              </ul>
              <p className="mt-4">
                We do not collect payment details, account credentials, or form
                submissions through this website, because those features are
                not present.
              </p>
            </section>

            <section aria-labelledby="privacy-use">
              <h2
                id="privacy-use"
                className="font-display text-[1.45rem] leading-snug tracking-tight text-foreground"
              >
                3. How information is used
              </h2>
              <p className="mt-4">
                Information received in this way may be used to:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>respond to enquiries;</li>
                <li>communicate about requested services;</li>
                <li>operate and help secure the website; and</li>
                <li>maintain ordinary website functionality.</li>
              </ul>
              <p className="mt-4">
                This website does not use personal information for advertising
                profiles, remarketing, or automated marketing campaigns.
              </p>
            </section>

            <section aria-labelledby="privacy-cookies">
              <h2
                id="privacy-cookies"
                className="font-display text-[1.45rem] leading-snug tracking-tight text-foreground"
              >
                4. Cookies and similar technologies
              </h2>
              <p className="mt-4">
                The current website does not intentionally use advertising
                cookies, analytics tracking technologies, or tracking pixels.
                There is no cookie banner because the site does not set
                marketing or analytics cookies in its application code.
              </p>
              <p className="mt-4">
                Hosting or content-delivery infrastructure may still use
                technically necessary logs or similar mechanisms to deliver and
                protect the site. Those are outside the application code and
                are not documented here as first-party tracking.
              </p>
            </section>

            <section aria-labelledby="privacy-third">
              <h2
                id="privacy-third"
                className="font-display text-[1.45rem] leading-snug tracking-tight text-foreground"
              >
                5. Third-party services
              </h2>
              <p className="mt-4">
                This website is a Next.js application. Typefaces (Geist and
                Fraunces) are loaded through Next.js font optimization and
                served from this website. Images and other assets are hosted
                with the site. There are no advertising, analytics, payment, or
                marketing pixels in the current codebase.
              </p>
              <p className="mt-4">
                If you contact Sayge by email or telephone, that communication
                travels through the email or telephone services you and we use.
                Those providers have their own practices.
              </p>
            </section>

            <section aria-labelledby="privacy-retention">
              <h2
                id="privacy-retention"
                className="font-display text-[1.45rem] leading-snug tracking-tight text-foreground"
              >
                6. Data retention
              </h2>
              <p className="mt-4">
                Information may be retained only as reasonably necessary for
                the purpose for which it was collected, to meet legal
                obligations, to resolve disputes, and to keep legitimate
                business records, subject to applicable law. No fixed retention
                period is stated here because none is defined in the current
                website implementation.
              </p>
            </section>

            <section aria-labelledby="privacy-security">
              <h2
                id="privacy-security"
                className="font-display text-[1.45rem] leading-snug tracking-tight text-foreground"
              >
                7. Data security
              </h2>
              <p className="mt-4">
                We take reasonable steps to protect personal information
                against unauthorised access, alteration, or disclosure. No
                method of transmission or storage is completely secure, and we
                cannot guarantee absolute security.
              </p>
            </section>

            <section aria-labelledby="privacy-transfers">
              <h2
                id="privacy-transfers"
                className="font-display text-[1.45rem] leading-snug tracking-tight text-foreground"
              >
                8. International data transfers
              </h2>
              <p className="mt-4">
                Sayge has experience working with businesses in India, the
                United Arab Emirates and Germany. Personal information may be
                processed in jurisdictions where Sayge or its service providers
                operate, subject to applicable law. This policy does not claim
                a specific transfer mechanism such as Standard Contractual
                Clauses or an adequacy decision.
              </p>
            </section>

            <section aria-labelledby="privacy-rights">
              <h2
                id="privacy-rights"
                className="font-display text-[1.45rem] leading-snug tracking-tight text-foreground"
              >
                9. Your privacy rights
              </h2>
              <p className="mt-4">
                Applicable rights depend on where a person is located and on
                the law that applies. Depending on that law, a person may have
                rights such as requesting access, correction, deletion, or
                information about how personal information is used. Not every
                visitor has the same rights, and this policy does not claim
                that every GDPR or other local right applies to every enquiry.
              </p>
              <p className="mt-4">
                Privacy enquiries may be sent to{" "}
                <a href={`mailto:${siteEmail}`} className={linkClass}>
                  {siteEmail}
                </a>
                .
              </p>
            </section>

            <section aria-labelledby="privacy-children">
              <h2
                id="privacy-children"
                className="font-display text-[1.45rem] leading-snug tracking-tight text-foreground"
              >
                10. Children’s privacy
              </h2>
              <p className="mt-4">
                This website is intended for a business audience. It is not
                directed at children, and we do not knowingly ask children for
                personal information.
              </p>
            </section>

            <section aria-labelledby="privacy-changes">
              <h2
                id="privacy-changes"
                className="font-display text-[1.45rem] leading-snug tracking-tight text-foreground"
              >
                11. Changes to this policy
              </h2>
              <p className="mt-4">
                This policy may be updated when the website, our services, or
                legal requirements change. The effective date above will be
                revised when a change is published. Please review this page
                periodically.
              </p>
            </section>

            <section aria-labelledby="privacy-contact">
              <h2
                id="privacy-contact"
                className="font-display text-[1.45rem] leading-snug tracking-tight text-foreground"
              >
                12. Contact
              </h2>
              <p className="mt-4">Sayge</p>
              <p className="mt-2">
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
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
