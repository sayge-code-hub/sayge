import { JsonLd } from "@/components/JsonLd";
import { saasifyPageMetadata, saasifyPath } from "@/lib/saasify";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/site";

const title = "SaaSify Legal Notice";
const description =
  "Legal notice for SaaSify, the business software platform operated by Sayge in Nagpur, India.";

export const metadata = saasifyPageMetadata({
  title,
  description,
  path: saasifyPath.legal,
});

const linkClass = "underline underline-offset-4 hover:text-[#111827]";

export default function SaasifyLegalNoticePage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          name: title,
          description,
          path: saasifyPath.legal,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "SaaSify", path: saasifyPath.overview },
          { name: "Legal Notice", path: saasifyPath.legal },
        ])}
      />
      <article className="mx-auto max-w-[760px] px-6 py-16 text-[16px] leading-7 text-[#4b5563] md:py-24">
        <h1 className="sf-h2 text-[#111827]">Legal Notice</h1>
        <p className="mt-6">
          This Legal Notice provides information about SaaSify, a business software
          platform operated by Sayge. It identifies the operator of the platform and
          outlines basic information regarding its content, intellectual property and
          use.
        </p>
        <p className="mt-4">
          This notice does not imply that Sayge or SaaSify is registered, resident, or
          legally represented in Germany or the United Arab Emirates.
        </p>

        <section className="mt-12">
          <h2 className="text-[1.35rem] font-semibold tracking-tight text-[#111827]">
            Platform Operator
          </h2>
          <p className="mt-4">
            <strong className="font-semibold text-[#111827]">SaaSify</strong> is a
            software product operated by:
          </p>
          <p className="mt-4 text-[#111827]">
            <strong className="font-semibold">Sayge</strong>
            <br />
            Partnership
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-[1.35rem] font-semibold tracking-tight text-[#111827]">
            Registered Address
          </h2>
          <p className="mt-4 text-[#111827]">
            Harsh Society,
            <br />
            Vivekanand Nagar,
            <br />
            Nagpur – 440015,
            <br />
            India
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-[1.35rem] font-semibold tracking-tight text-[#111827]">
            GSTIN
          </h2>
          <p className="mt-4 text-[#111827]">27AEAFS9363N1ZB</p>
        </section>

        <section className="mt-12">
          <h2 className="text-[1.35rem] font-semibold tracking-tight text-[#111827]">
            Contact Information
          </h2>
          <p className="mt-4">
            <strong className="font-semibold text-[#111827]">Email:</strong>{" "}
            <a className={linkClass} href="mailto:saasify@sayge.in">
              saasify@sayge.in
            </a>
            <br />
            <strong className="font-semibold text-[#111827]">Phone:</strong>{" "}
            <a className={linkClass} href="tel:+918788681499">
              +91 87886 81499
            </a>
          </p>
          <p className="mt-4">
            For general enquiries about Sayge, you may contact{" "}
            <a className={linkClass} href="mailto:humans@sayge.in">
              humans@sayge.in
            </a>.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-[1.35rem] font-semibold tracking-tight text-[#111827]">
            Website
          </h2>
          <p className="mt-4">
            <strong className="font-semibold text-[#111827]">SaaSify:</strong>{" "}
            <a className={linkClass} href="https://saasify.in">
              https://saasify.in
            </a>
            <br />
            <strong className="font-semibold text-[#111827]">Operator:</strong>{" "}
            <a className={linkClass} href="https://sayge.in">
              https://sayge.in
            </a>
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-[1.35rem] font-semibold tracking-tight text-[#111827]">
            Intellectual Property
          </h2>
          <p className="mt-4">
            SaaSify&apos;s name, branding, interface designs, software, graphics,
            documentation and original content are owned by or licensed to Sayge,
            subject to applicable intellectual-property laws and third-party rights.
          </p>
          <p className="mt-4">
            All rights are reserved unless expressly stated otherwise. Access to or
            use of SaaSify does not transfer ownership of any intellectual property or
            grant any licence beyond what is necessary for permitted use of the
            platform.
          </p>
          <p className="mt-4">
            Third-party names, trademarks, logos and other materials remain the
            property of their respective owners. Their appearance on the platform does
            not necessarily imply endorsement, sponsorship or affiliation.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-[1.35rem] font-semibold tracking-tight text-[#111827]">
            Use of the Platform
          </h2>
          <p className="mt-4">
            SaaSify provides business software and related tools intended to help
            businesses manage their operations. Features, availability and
            functionality may vary depending on the modules, plan and configuration
            selected.
          </p>
          <p className="mt-4">
            Users are responsible for ensuring that their use of the platform
            complies with applicable laws and that any information they submit is
            accurate and authorised for use.
          </p>
          <p className="mt-4">
            Access to SaaSify is subject to the applicable terms and conditions and
            any additional policies governing the relevant services.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-[1.35rem] font-semibold tracking-tight text-[#111827]">
            External Links and Third-Party Services
          </h2>
          <p className="mt-4">
            SaaSify may contain links to third-party websites or integrate with
            third-party services. These services may be governed by their own terms,
            privacy policies and practices.
          </p>
          <p className="mt-4">
            Sayge does not control third-party websites or services and is not
            responsible for their content or practices, except to the extent required
            by applicable law. The presence of a link or integration does not
            necessarily constitute an endorsement.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-[1.35rem] font-semibold tracking-tight text-[#111827]">
            Information and Availability
          </h2>
          <p className="mt-4">
            We make reasonable efforts to keep information about SaaSify accurate and
            up to date. However, product descriptions, features, pricing and
            availability may change without prior notice, subject to applicable law
            and any commitments made under an existing agreement.
          </p>
          <p className="mt-4">
            Information published on this website is provided for general
            informational purposes and does not constitute a contractual offer unless
            expressly stated otherwise.
          </p>
          <p className="mt-4">
            We aim to maintain reliable access to SaaSify but do not guarantee
            uninterrupted or error-free availability. Maintenance, updates, technical
            issues and circumstances beyond our reasonable control may affect access.
          </p>
          <p className="mt-4">
            Nothing in this notice excludes or limits liability where such exclusion
            or limitation is prohibited by applicable law.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-[1.35rem] font-semibold tracking-tight text-[#111827]">
            Privacy and Personal Data
          </h2>
          <p className="mt-4">
            The collection, use, storage and processing of personal information in
            connection with SaaSify are governed by the applicable{" "}
            <a className={linkClass} href={saasifyPath.privacy}>
              Privacy Policy
            </a>. Users should review that policy to understand how their information is
            handled.
          </p>
          <p className="mt-4">
            This Legal Notice should be read alongside SaaSify&apos;s Terms and
            Conditions and Privacy Policy, where applicable.
          </p>
        </section>
      </article>
    </>
  );
}
