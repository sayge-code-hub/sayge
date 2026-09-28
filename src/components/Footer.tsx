import type { ReactNode } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { SiteVersion } from "@/components/SiteVersion";
import { siteEmail, sitePhoneDisplay, sitePhoneHref } from "@/lib/site";

const services = [
  { href: "/services/custom-software-development", label: "Custom software" },
];

const company = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Selected work" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/legal-notice", label: "Legal Notice" },
];

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const className =
    "inline-block py-0.5 text-[15px] tracking-tight text-muted transition hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[var(--brand)]";

  if (href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer aria-label="Site" className="border-t border-line bg-background">
      <div className="mx-auto max-w-[1180px] px-6 pt-16 pb-12 md:pt-20 md:pb-14">
        <div className="grid gap-14 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1.85fr)] md:gap-20 lg:items-start">
          <div>
            <Link href="/" aria-label="Sayge home">
              <Logo />
            </Link>
            <p className="mt-6 max-w-[28ch] text-[15px] leading-7 text-muted">
              Technology partner for products, software and teams.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
            <div>
              <p className="text-[11px] tracking-[0.18em] text-muted uppercase">
                Services
              </p>
              <ul className="mt-5 space-y-3">
                {services.map((link) => (
                  <li key={link.href}>
                    <FooterLink href={link.href}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] tracking-[0.18em] text-muted uppercase">
                Company
              </p>
              <ul className="mt-5 space-y-3">
                {company.map((link) => (
                  <li key={link.href}>
                    <FooterLink href={link.href}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] tracking-[0.18em] text-muted uppercase">
                Get in touch
              </p>
              <div className="mt-5 flex flex-col items-start gap-3">
                <FooterLink href={`mailto:${siteEmail}`}>{siteEmail}</FooterLink>
                <FooterLink href={sitePhoneHref}>{sitePhoneDisplay}</FooterLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-3 text-[12px] tracking-[0.04em] text-muted">
            <span>© {new Date().getFullYear()} Sayge. All rights reserved.</span>
            <SiteVersion />
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-8">
            <Link
              href="/login"
              className="inline-flex min-h-11 items-center gap-2 text-[12px] tracking-[0.04em] text-muted transition hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[var(--brand)]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="8"
                  cy="5"
                  r="2.25"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <path
                  d="M3.25 13.25c.4-2.35 2.15-3.75 4.75-3.75s4.35 1.4 4.75 3.75"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
              Employee / employer / client login
            </Link>
            <p className="text-[12px] tracking-[0.04em] text-muted">
              India · UAE · Germany
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
