import Link from "next/link";
import { selectedExperienceLogos } from "@/lib/selected-experience";

type SelectedExperienceLogosProps = {
  className?: string;
};

type Logo = (typeof selectedExperienceLogos)[number];

const logoImageClass =
  "h-8 w-auto max-h-8 max-w-[148px] object-contain object-left md:h-9 md:max-h-9 md:max-w-[168px]";

const logoLinkClass =
  "rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[4px] focus-visible:outline-[var(--brand)]";

function LogoImage({ logo }: { logo: Logo }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={logo.src}
      alt={logo.alt}
      width={logo.width}
      height={logo.height}
      className={logoImageClass}
    />
  );
}

export function SelectedExperienceLogos({
  className = "mt-5",
}: SelectedExperienceLogosProps) {
  return (
    <ul
      className={`grid grid-cols-2 items-center gap-x-8 gap-y-7 sm:grid-cols-3 sm:gap-x-10 sm:gap-y-8 ${className}`.trim()}
    >
      {selectedExperienceLogos.map((logo) => {
        const href = "href" in logo ? logo.href : undefined;
        const external = "external" in logo && logo.external;

        return (
          <li key={logo.src} className="flex items-center">
            {href && external ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={logoLinkClass}
              >
                <LogoImage logo={logo} />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : href ? (
              <Link href={href} className={logoLinkClass}>
                <LogoImage logo={logo} />
              </Link>
            ) : (
              <LogoImage logo={logo} />
            )}
          </li>
        );
      })}
    </ul>
  );
}
