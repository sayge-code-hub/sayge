import Link from "next/link";
import { Logo } from "@/components/Logo";
import { SaasifyLogo } from "@/components/saasify/SaasifyLogo";
import { saasifyPath } from "@/lib/saasify";
import { siteEmail, sitePhoneHref } from "@/lib/site";

export function SaasifyFooter() {
  return (
    <footer className="border-t border-[#e8ebe9] bg-white">
      <div className="mx-auto grid max-w-[1120px] gap-10 px-6 py-14 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <div>
          <SaasifyLogo className="h-8 w-auto" />
          <p className="mt-3 max-w-[36ch] text-[14px] leading-6 text-[#6b7280]">
            Business software for people, documents, money, the café counter, assets, and checklists.
          </p>
          <Link
            href="/"
            aria-label="Powered by Sayge"
            className="mt-6 inline-flex items-center gap-2 text-[14px] leading-none text-[#6b7280]"
          >
            <span>Powered by</span>
            <Logo size="inline" />
          </Link>
        </div>
        <ul className="flex flex-wrap content-start gap-x-5 gap-y-2 text-[14px] text-[#6b7280] md:justify-end">
          <li>
            <a href={sitePhoneHref} className="hover:text-[#111827]">
              +91 8788681499
            </a>
          </li>
          <li>
            <a href={`mailto:${siteEmail}`} className="hover:text-[#111827]">
              {siteEmail}
            </a>
          </li>
          <li>
            <Link href={saasifyPath.privacy} className="hover:text-[#111827]">
              Privacy
            </Link>
          </li>
          <li>
            <Link href={saasifyPath.legal} className="hover:text-[#111827]">
              Legal notice
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
