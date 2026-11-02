"use client";

import { useEffect, useState, type MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SaasifyLogo } from "@/components/saasify/SaasifyLogo";
import { saasifyNav, saasifyPath } from "@/lib/saasify";

const links = saasifyNav;

export function SaasifyNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState("");

  useEffect(() => {
    const read = () => setHash(window.location.hash);
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, [pathname]);

  const active = (href: string) => {
    const onOverview = pathname === saasifyPath.overview;
    if (href.endsWith("#modules")) return onOverview && hash === "#modules";
    if (href.endsWith("#reach-out")) return onOverview && hash === "#reach-out";
    if (href.endsWith("#hero")) {
      return onOverview && (hash === "" || hash === "#hero");
    }
    if (href.startsWith("mailto:") || href.startsWith("tel:")) return false;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sf-nav sticky top-0 z-50 border-b border-[#e8ebe9] bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1120px] items-center justify-between px-6">
        <Link href={saasifyPath.overview} className="inline-flex items-center" aria-label="SaaSify">
          <SaasifyLogo className="h-7 w-auto" />
        </Link>

        <nav aria-label="SaaSify" className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-6 text-[14.5px] text-[#62605b]">
            {links.map((item) => (
              <li key={item.label}>
                <NavLink
                  item={item}
                  active={active(item.href)}
                  pathname={pathname}
                  onNavigate={() => setOpen(false)}
                />
              </li>
            ))}
          </ul>
          <a href={`${saasifyPath.overview}#reach-out`} className="sf-btn sf-btn-start">
            Let’s start
          </a>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 h-px w-5 bg-[#101612] transition ${open ? "top-1.5 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 top-1.5 h-px w-5 bg-[#101612] transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 h-px w-5 bg-[#101612] transition ${open ? "top-1.5 -rotate-45" : "top-3"}`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <nav aria-label="SaaSify" className="border-t border-[#e7e5e0] px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4 text-[15px]">
            {links.map((item) => (
              <li key={item.label}>
                <NavLink
                  item={item}
                  active={active(item.href)}
                  pathname={pathname}
                  onNavigate={() => setOpen(false)}
                />
              </li>
            ))}
            <li>
              <a
                href={`${saasifyPath.overview}#reach-out`}
                className="sf-btn sf-btn-start"
                onClick={() => setOpen(false)}
              >
                Let’s start
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

function NavLink({
  item,
  active,
  onNavigate,
  pathname,
}: {
  item: (typeof links)[number];
  active: boolean;
  onNavigate: () => void;
  pathname: string;
}) {
  const className = "nav-link transition-colors hover:text-[#111]";
  const direct = item.href.startsWith("mailto:") || item.href.startsWith("tel:");
  const hashIndex = item.href.indexOf("#");
  const hash = hashIndex >= 0 ? item.href.slice(hashIndex + 1) : "";
  const path = hashIndex >= 0 ? item.href.slice(0, hashIndex) : item.href;

  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onNavigate();
    if (!hash || pathname !== path) return;
    const target = document.getElementById(hash);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.pushState(null, "", item.href);
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  };

  if (direct || hash) {
    return (
      <a
        href={item.href}
        data-active={active}
        aria-current={active ? "true" : undefined}
        className={className}
        onClick={onClick}
      >
        {item.label}
      </a>
    );
  }

  return (
    <Link
      href={item.href}
      data-active={active}
      aria-current={active ? "page" : undefined}
      className={className}
      onClick={onNavigate}
    >
      {item.label}
    </Link>
  );
}
