import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Header } from "@/components/Header";
import { LoginForm } from "@/components/LoginForm";
import { SiteVersion } from "@/components/SiteVersion";
import {
  absoluteUrl,
  loginDescription,
  loginPath,
  loginTitle,
  ogImage,
  siteName,
} from "@/lib/site";

export const metadata: Metadata = {
  title: loginTitle,
  description: loginDescription,
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: absoluteUrl(loginPath),
  },
  openGraph: {
    type: "website",
    url: absoluteUrl(loginPath),
    siteName,
    title: loginTitle,
    description: loginDescription,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: loginTitle,
    description: loginDescription,
    images: [ogImage],
  },
};

export default function LoginPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <section
          aria-labelledby="login-heading"
          className="mx-auto flex w-full max-w-[1180px] flex-1 flex-col justify-center px-6 py-8"
        >
          <Breadcrumb current="Sign in" />
          <h1
            id="login-heading"
            className="font-display mt-5 max-w-[12ch] text-[clamp(2rem,4vw,2.75rem)] leading-[1.08] tracking-tight text-foreground"
          >
            Sign in.
          </h1>
          <LoginForm />
        </section>
      </main>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-6 py-4">
          <p className="flex items-center gap-3 text-[12px] tracking-[0.04em] text-muted">
            <span>© {new Date().getFullYear()} Sayge</span>
            <SiteVersion />
          </p>
          <div className="flex gap-5 text-[12px] tracking-[0.04em] text-muted">
            <Link
              href="/privacy"
              className="transition hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[var(--brand)]"
            >
              Privacy
            </Link>
            <Link
              href="/legal-notice"
              className="transition hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[var(--brand)]"
            >
              Legal
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
