import type { ReactNode } from "react";
import { JsonLd } from "@/components/JsonLd";
import { saasifyPageMetadata, saasifyPath } from "@/lib/saasify";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/site";

const title = "SaaSify Privacy Policy";
const description =
  "How SaaSify, operated by Sayge, collects, uses, stores, and deletes personal information.";

export const metadata = saasifyPageMetadata({
  title,
  description,
  path: saasifyPath.privacy,
});

const linkClass = "underline underline-offset-4 hover:text-[#111827]";

function Section({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-12">
      <h2 className="text-[1.35rem] font-semibold tracking-tight text-[#111827]">
        {heading}
      </h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

function Sub({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <div className="mt-8">
      <h3 className="text-[1.05rem] font-semibold tracking-tight text-[#111827]">
        {heading}
      </h3>
      <div className="mt-3 space-y-4">{children}</div>
    </div>
  );
}

export default function SaasifyPrivacyPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          name: title,
          description,
          path: saasifyPath.privacy,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "SaaSify", path: saasifyPath.overview },
          { name: "Privacy Policy", path: saasifyPath.privacy },
        ])}
      />
      <article className="mx-auto max-w-[760px] px-6 py-16 text-[16px] leading-7 text-[#4b5563] md:py-24">
        <h1 className="sf-h2 text-[#111827]">Privacy Policy</h1>
        <p className="mt-4 text-[15px] text-[#6b7280]">Effective date: 2 November 2026</p>

        <Section heading="1. Introduction">
          <p>
            SaaSify is a business software platform operated by Sayge. We respect your
            privacy and are committed to handling personal information responsibly.
          </p>
          <p>
            This Privacy Policy explains how information is collected, used, stored,
            and deleted when you visit the SaaSify website, create an account, use our
            products and modules, or contact our team.
          </p>
          <p>
            SaaSify offers business tools, including point-of-sale (POS) and human
            resource management (HRMS) functionality. Depending on the modules you
            use, the platform may process information relating to business owners,
            employees, customers, suppliers, and other individuals.
          </p>
          <p>
            By using SaaSify, you acknowledge that you have read this Privacy Policy.
            Where applicable law requires consent for particular processing activities,
            we will seek that consent separately.
          </p>
        </Section>

        <Section heading="2. Information We Collect">
          <p>
            The information we process depends on how you use SaaSify and which
            modules you enable.
          </p>
          <Sub heading="2.1 Account and Authentication Information">
            <p>SaaSify uses Supabase Authentication with email-based authentication.</p>
            <p>When you create or access an account, we may process information such as:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Email address.</li>
              <li>
                Authentication credentials and related authentication records managed
                by Supabase.
              </li>
              <li>Account identifiers and account status.</li>
              <li>
                Information necessary to maintain authenticated sessions and protect
                account access.
              </li>
            </ul>
            <p>
              We do not offer social sign-in as an authentication method under the
              current authentication setup.
            </p>
            <p>
              You are responsible for keeping your account access secure and for
              ensuring that your account is used by authorised individuals.
            </p>
          </Sub>
          <Sub heading="2.2 Business and Operational Information">
            <p>
              Depending on the modules you use, SaaSify may process business
              information that you or your authorised users submit, including:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Business profiles, settings, and configurations.</li>
              <li>Product catalogues, inventory, billing, and transaction records.</li>
              <li>Employee details, attendance, leave, and related HR records.</li>
              <li>
                Customer and supplier information entered into business workflows.
              </li>
              <li>Reports and other information generated through the platform.</li>
            </ul>
            <p>
              You are responsible for ensuring that you have the necessary authority
              and lawful basis to submit information about employees, customers,
              suppliers, or other individuals.
            </p>
            <p>
              Please do not submit sensitive personal information unless the relevant
              functionality supports it and you are authorised to do so.
            </p>
          </Sub>
          <Sub heading="2.3 Technical and Diagnostic Information">
            <p>
              We use Firebase Analytics and Firebase Crashlytics for application
              analytics, crash reporting, and technical monitoring.
            </p>
            <p>These services may process technical information such as:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>App version and device or operating-system information.</li>
              <li>App interaction and usage events configured for analytics.</li>
              <li>Crash reports, diagnostic information, and technical error details.</li>
              <li>Technical identifiers used by the relevant Firebase services.</li>
            </ul>
            <p>
              We configure our analytics and monitoring implementation not to
              intentionally send personally identifiable information (PII) or
              business-record contents to Firebase Analytics or Crashlytics.
            </p>
            <p>
              However, technical identifiers and diagnostic information may still be
              processed by these services. We take care to avoid including personal
              information in event parameters, crash logs, error messages, or
              diagnostic metadata.
            </p>
          </Sub>
          <Sub heading="2.4 Communications and Support">
            <p>
              When you contact us by email, telephone, or another supported
              communication channel, we may process your contact details, message
              contents, and information necessary to respond to your enquiry or
              provide assistance.
            </p>
          </Sub>
        </Section>

        <Section heading="3. How We Use Information">
          <p>We use information for purposes including:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Creating and managing user accounts.</li>
            <li>Authenticating users and maintaining account security.</li>
            <li>Providing the SaaSify modules and functionality you select.</li>
            <li>Storing, processing, and displaying business information.</li>
            <li>Providing customer support and onboarding assistance.</li>
            <li>Monitoring application performance and diagnosing technical issues.</li>
            <li>Identifying crashes, errors, and reliability problems.</li>
            <li>Protecting the platform against misuse and unauthorised access.</li>
            <li>Meeting applicable legal obligations and resolving disputes.</li>
          </ul>
          <p>
            We do not intentionally use business records or personal information for
            advertising profiles or behavioural advertising.
          </p>
        </Section>

        <Section heading="4. Data Storage and Hosting">
          <p>SaaSify uses Supabase as its backend database and authentication infrastructure.</p>
          <p>
            Business records and other application data submitted through SaaSify are
            stored on Supabase-hosted servers. SaaSify is designed around server-side
            data storage rather than using the user&apos;s device as the primary
            persistent store for business records.
          </p>
          <p>
            Access to stored information depends on the platform&apos;s functionality,
            account permissions, and applicable access controls.
          </p>
          <p>
            Supabase and its underlying infrastructure providers may process
            information as necessary to provide hosting, database, authentication,
            backup, and related services.
          </p>
          <p>
            The physical processing location of data depends on the configuration and
            hosting region of the relevant infrastructure. Please contact us if you
            require information about the applicable hosting region.
          </p>
        </Section>

        <Section heading="5. Analytics, Crash Reporting, and Cookies">
          <Sub heading="5.1 Firebase Analytics and Crashlytics">
            <p>
              We use Firebase Analytics and Firebase Crashlytics to understand
              application usage at a technical level and to monitor stability and
              performance.
            </p>
            <p>
              Our implementation is intended to exclude PII and the contents of
              business records from analytics events and crash reports.
            </p>
            <p>
              These services may nevertheless process technical identifiers, device
              information, usage events, and diagnostic metadata under their own
              technical and privacy frameworks.
            </p>
            <p>
              Firebase services are provided by Google and may process technical
              information in accordance with Google&apos;s applicable terms and privacy
              documentation.
            </p>
          </Sub>
          <Sub heading="5.2 Cookies and Similar Technologies">
            <p>
              SaaSify may use cookies, local storage, session storage, or similar
              technologies where required for authentication, session management,
              security, and application functionality.
            </p>
            <p>The specific technologies used may vary between the website and application.</p>
            <p>
              Any optional tracking technologies introduced in the future will be
              handled in accordance with applicable law and relevant consent
              requirements.
            </p>
          </Sub>
        </Section>

        <Section heading="6. Third-Party Service Providers">
          <p>SaaSify relies on third-party providers to operate and maintain its services.</p>
          <p>Current infrastructure and monitoring providers include:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <strong className="font-semibold text-[#111827]">Supabase:</strong>{" "}
              Database hosting and email-based authentication.
            </li>
            <li>
              <strong className="font-semibold text-[#111827]">Firebase Analytics:</strong>{" "}
              Application usage analytics.
            </li>
            <li>
              <strong className="font-semibold text-[#111827]">Firebase Crashlytics:</strong>{" "}
              Crash reporting and diagnostic monitoring.
            </li>
          </ul>
          <p>These providers may process information necessary to deliver their respective services.</p>
          <p>
            Their processing activities are governed by their applicable terms, privacy
            policies, and contractual arrangements.
          </p>
          <p>
            We do not intentionally transmit business-record contents or PII to
            Firebase Analytics or Crashlytics. We take reasonable steps to ensure that
            analytics events and crash reports do not contain such information.
          </p>
          <h3 className="pt-2 text-[1.05rem] font-semibold tracking-tight text-[#111827]">
            Payments
          </h3>
          <p>
            If payment processing is enabled for a SaaSify plan or service, payment
            information may be processed by the relevant payment service provider.
          </p>
          <p>
            Payment processing will be subject to the applicable provider&apos;s terms
            and privacy policy. We will update this section with the relevant provider
            and processing details when the payment integration is finalised.
          </p>
        </Section>

        <Section heading="7. Data Sharing and Disclosure">
          <p>
            We do not treat the business information or personal information you
            provide as publicly available information.
          </p>
          <p>Information may be processed or disclosed in the following circumstances:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>To service providers that support SaaSify&apos;s operation.</li>
            <li>
              To authorised users and administrators within your business, according to
              the platform&apos;s functionality and access permissions.
            </li>
            <li>Where disclosure is required by applicable law or valid legal process.</li>
            <li>
              Where reasonably necessary to investigate security incidents, prevent
              misuse, or protect legal rights.
            </li>
            <li>
              In connection with a business restructuring or transfer, subject to
              applicable legal requirements.
            </li>
          </ul>
          <p>We do not sell personal information to third parties.</p>
        </Section>

        <Section heading="8. Data Retention and Deletion">
          <p>
            SaaSify follows a seven-day retention period for account and associated
            business data following an account deletion or plan cancellation request.
          </p>
          <p>Once the applicable deletion process is initiated:</p>
          <ol className="list-decimal space-y-1 pl-5">
            <li>The relevant account or subscription is marked for deletion.</li>
            <li>
              Associated data is retained for up to seven days to allow the defined
              retention period to elapse.
            </li>
            <li>
              At the end of the seven-day period, the associated data is scheduled to
              be permanently deleted from the applicable primary data stores.
            </li>
          </ol>
          <p>
            Deletion may be subject to legal retention obligations or other
            requirements imposed by applicable law.
          </p>
          <p>
            Copies held in backups, technical logs, or third-party systems may be
            subject to separate retention cycles and may not be erased at precisely
            the same time as the primary records. Where such copies exist, they should
            be handled in accordance with applicable retention and deletion
            requirements.
          </p>
          <p>
            If you need assistance with account deletion, please contact us using the
            details in Section 14.
          </p>
        </Section>

        <Section heading="9. Data Security">
          <p>
            We take reasonable steps to protect information against unauthorised
            access, alteration, loss, or disclosure.
          </p>
          <p>
            Security depends on the platform&apos;s implementation, infrastructure
            configuration, access controls, and operational practices. We aim to
            restrict access to authorised individuals and maintain appropriate
            safeguards for the information we process.
          </p>
          <p>
            No method of transmission, storage, or processing is completely secure. We
            cannot guarantee absolute security.
          </p>
          <p>
            Users are responsible for maintaining the confidentiality of their account
            credentials and ensuring that access is provided only to authorised
            individuals.
          </p>
        </Section>

        <Section heading="10. HIPAA and Sensitive Information">
          <p>
            SaaSify uses Supabase infrastructure and is designed with attention to
            responsible data handling and security.
          </p>
          <p>
            HIPAA compliance depends on more than the choice of database provider. It
            may require appropriate contractual agreements, technical configurations,
            administrative safeguards, access controls, monitoring, and operational
            procedures.
          </p>
          <p>
            Where SaaSify is used in a context involving protected health information
            (PHI), such information must only be processed where the relevant service
            configuration, contractual arrangements, and applicable legal requirements
            permit it.
          </p>
          <p>
            Users must not submit PHI or other sensitive personal information unless
            the relevant service is explicitly configured and authorised to support
            that use.
          </p>
          <p>
            This Privacy Policy does not, by itself, constitute a certification or
            guarantee that every SaaSify module, integration, or customer deployment is
            HIPAA-compliant.
          </p>
        </Section>

        <Section heading="11. International Data Transfers">
          <p>
            SaaSify may serve businesses located in different countries. Information
            may be processed in jurisdictions where our infrastructure and service
            providers operate.
          </p>
          <p>
            The applicable hosting region and international transfer arrangements
            depend on the services and configurations used.
          </p>
          <p>
            Where required, international transfers will be handled in accordance with
            applicable data-protection laws and relevant contractual safeguards.
          </p>
        </Section>

        <Section heading="12. Your Privacy Rights">
          <p>
            Depending on your location and applicable law, you may have rights relating
            to your personal information, including the right to:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Request access to personal information.</li>
            <li>Request correction of inaccurate information.</li>
            <li>Request deletion where applicable.</li>
            <li>Object to or request restriction of certain processing.</li>
            <li>Withdraw consent where processing is based on consent.</li>
            <li>Request information about how your personal information is handled.</li>
            <li>Lodge a complaint with the relevant regulatory authority.</li>
          </ul>
          <p>These rights are subject to applicable legal conditions and exceptions.</p>
          <p>
            If your information is managed through a business account, you may need to
            contact your business administrator first. Where Sayge processes
            information on behalf of a business, requests may need to be coordinated
            with that business.
          </p>
          <p>To submit a privacy request, contact us using the details in Section 14.</p>
        </Section>

        <Section heading="13. Children's Privacy">
          <p>
            SaaSify is primarily intended for businesses and their authorised users. It
            is not designed to be directed at children.
          </p>
          <p>
            Business users must ensure that information about children is not submitted
            unless they have the necessary authority and lawful basis and the relevant
            use is permitted by the service and applicable law.
          </p>
        </Section>

        <Section heading="14. Contact Us">
          <p>
            For questions, privacy requests, or concerns about how information is
            handled, contact:
          </p>
          <p className="text-[#111827]">
            <strong className="font-semibold">SaaSify — a product of Sayge</strong>
          </p>
          <p>
            Email:{" "}
            <a className={linkClass} href="mailto:saasify@sayge.in">
              saasify@sayge.in
            </a>
            <br />
            Phone:{" "}
            <a className={linkClass} href="tel:+918788681499">
              +91 87886 81499
            </a>
          </p>
          <p className="text-[#111827]">
            Address:
            <br />
            Harsh Society,
            <br />
            Vivekanand Nagar,
            <br />
            Nagpur – 440015,
            <br />
            India
          </p>
          <p>
            Website:{" "}
            <a className={linkClass} href="https://sayge.in">
              https://sayge.in
            </a>
          </p>
        </Section>

        <Section heading="15. Changes to This Policy">
          <p>
            We may update this Privacy Policy when our products, services, data
            practices, or legal requirements change.
          </p>
          <p>
            The effective date at the beginning of this page will be updated when a
            revised policy is published. Where required by applicable law, we will
            provide additional notice or obtain consent for material changes.
          </p>
          <p>We encourage users to review this page periodically.</p>
        </Section>
      </article>
    </>
  );
}
