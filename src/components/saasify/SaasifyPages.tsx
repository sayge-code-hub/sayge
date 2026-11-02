import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SaasifyHero } from "@/components/saasify/SaasifyHero";
import {
  HrmsDirectoryMock,
  PosTerminalMock,
} from "@/components/saasify/SaasifyMocks";
import { SaasifyReachOut } from "@/components/saasify/SaasifyReachOut";
import { SaasifyWalkthrough } from "@/components/saasify/SaasifyWalkthrough";
import { siteEmail } from "@/lib/site";
import {
  saasifyOverview,
  type SaasifyFaq,
  type SaasifyFeature,
  type SaasifyLink,
  type SaasifyProduct,
} from "@/lib/saasify";

const body = "max-w-[46ch] text-[16.5px] leading-7 text-[#62605b]";

function Action({
  link,
  tone,
  onDark = false,
}: {
  link: SaasifyLink;
  tone: "primary" | "secondary";
  onDark?: boolean;
}) {
  const className =
    tone === "primary"
      ? `sf-btn${onDark ? " sf-btn-on-dark" : ""}`
      : `sf-btn-ghost${onDark ? " sf-btn-ghost-on-dark" : ""}`;
  const external = link.href.startsWith("http");
  const hash = link.href.startsWith("#");
  const mail = link.href.startsWith("mailto:");
  const mark = external ? "↗" : hash ? "↓" : "→";
  const content = (
    <>
      {link.label}
      <span aria-hidden="true">{mark}</span>
      {external ? <span className="sr-only"> (opens in a new tab)</span> : null}
    </>
  );

  if (external) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    );
  }

  if (mail || hash) {
    return (
      <a href={link.href} className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link href={link.href} className={className}>
      {content}
    </Link>
  );
}

function Actions({
  primary,
  secondary,
  onDark = false,
}: {
  primary: SaasifyLink;
  secondary?: SaasifyLink;
  onDark?: boolean;
}) {
  return (
    <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center">
      <Action link={primary} tone="primary" onDark={onDark} />
      {secondary ? <Action link={secondary} tone="secondary" onDark={onDark} /> : null}
    </div>
  );
}

export function FaqList({ items }: { items: SaasifyFaq[] }) {
  return (
    <div className="saasify-faq mt-8 space-y-3">
      {items.map((item) => (
        <details key={item.question} className="group sf-card px-5">
          <summary className="flex cursor-pointer items-start justify-between gap-6 py-4 text-[16px] font-medium tracking-tight">
            <span>{item.question}</span>
            <span
              aria-hidden="true"
              className="mt-0.5 shrink-0 text-[#62605b] transition-transform duration-200 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="max-w-[62ch] pb-5 text-[15px] leading-7 text-[#62605b]">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}

function HelpIcon({ kind }: { kind: string }) {
  const props = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };
  if (kind === "clock") {
    return (
      <svg {...props}>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4.5l3 1.5" />
      </svg>
    );
  }
  if (kind === "languages") {
    return (
      <svg {...props}>
        <circle cx="12" cy="12" r="8" />
        <path d="M4 12h16M12 4c2.2 2.4 3.3 5.1 3.3 8S14.2 17.6 12 20c-2.2-2.4-3.3-5.1-3.3-8S9.8 6.4 12 4z" />
      </svg>
    );
  }
  if (kind === "person") {
    return (
      <svg {...props}>
        <circle cx="12" cy="8" r="3" />
        <path d="M6.5 19c.8-2.8 2.8-4 5.5-4s4.7 1.2 5.5 4" />
      </svg>
    );
  }
  if (kind === "book") {
    return (
      <svg {...props}>
        <path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H19v16H7.5A2.5 2.5 0 0 0 5 21.5z" />
        <path d="M5 5.5V21" />
      </svg>
    );
  }
  if (kind === "team") {
    return (
      <svg {...props}>
        <circle cx="8" cy="9" r="2.2" />
        <circle cx="16" cy="9" r="2.2" />
        <path d="M3.8 18c.6-2.2 2.2-3.3 4.2-3.3s3.6 1.1 4.2 3.3M12 18c.5-2 2-3 3.8-3s3.2 1 3.8 3" />
      </svg>
    );
  }
  return (
    <svg {...props}>
      <path d="M5 7h8a3 3 0 0 1 0 6H9" />
      <path d="M8 10l-3 3 3 3" />
      <path d="M19 17h-6" />
    </svg>
  );
}

const helpPoints = [
  {
    icon: "clock",
    title: "24×7 support",
    copy: "Call or write any time. Someone from the team will help.",
  },
  {
    icon: "languages",
    title: "Multilingual",
    copy: "Get help in the language your business works in.",
  },
  {
    icon: "person",
    title: "In-person onboarding",
    copy: "We can sit with you and set SaaSify up on site.",
  },
  {
    icon: "book",
    title: "Tutorials",
    copy: "Short guides are there when you want to learn it yourself.",
  },
  {
    icon: "team",
    title: "Team training",
    copy: "If the whole team needs a walkthrough, we can arrange it.",
  },
  {
    icon: "flow",
    title: "Custom flows",
    copy: "User journeys can be shaped for your business. Call us, tell us what you need, and we will customise it for you.",
  },
];

function Close() {
  return (
    <section id="get-started" className="bg-white">
      <div className="mx-auto max-w-[1120px] px-6 pb-16 md:pb-20">
        <div className="sf-green text-white">
          <div className="sf-green-inner">
            <h2 className="sf-h2 max-w-[14ch] text-white">Help is part of it.</h2>
            <p className="sf-green-lede">
              You can start on your own. When you want a person, the team is there.
            </p>
            <ul className="sf-help">
              {helpPoints.map((point) => (
                <li key={point.title}>
                  <span className="sf-help-icon">
                    <HelpIcon kind={point.icon} />
                  </span>
                  <span>
                    <strong>{point.title}</strong>
                    <span>{point.copy}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SaasifyOverviewPage() {
  const page = saasifyOverview;
  return (
    <article>
      <SaasifyHero />

      <section>
        <div className="mx-auto max-w-[760px] px-6 py-16 text-center md:py-20">
          <Reveal>
            <h2 className="sf-h2">
              Made for a small business. Without the <span className="sf-mark">pile of tools.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[48ch] text-[16.5px] leading-7 text-[#6b7280]">
              People, documents, money, the counter, assets, and daily checks.
              One product from Sayge, at a price a small team can start with.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="modules" className="sf-modules">
        <div className="mx-auto max-w-[1120px] px-6 py-20 md:py-28">
          <Reveal>
            <h2 className="sf-h2 max-w-[14ch]">The modules.</h2>
            <p className={`mt-4 ${body}`}>
              Start with the work you have today. Open a module to see what it covers.
            </p>
          </Reveal>
          <div className="mt-12 grid items-stretch gap-4 md:grid-cols-2 lg:grid-cols-3">
            {page.products.map((product, index) => (
              <Reveal key={product.href} as="article" delayMs={index * 50} className="sf-card sf-module-card sf-lift">
                <h3 className="sf-module-title">{product.title}</h3>
                <p className="sf-module-copy">{product.copy}</p>
                <Link href={product.href} className="sf-btn sf-module-cta" aria-label={`Explore ${product.title}`}>
                  Explore <span aria-hidden="true">→</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="reach-out" className="sf-offer">
        <div className="sf-offer-panel">
          <div className="sf-offer-copy">
            <p className="sf-offer-kicker">Start here</p>
            <h2 className="sf-h2">Onboard yourself.</h2>
            <p className="sf-offer-lede">
              It’s that easy. Leave your email, or call, and we’ll take the next step with you.
            </p>
            <div className="sf-offer-prices">
              <p>
                <strong>₹49</strong>
                <span>per month</span>
              </p>
              <p>
                <strong>$9</strong>
                <span>per month</span>
              </p>
            </div>
            <ul className="sf-offer-points">
              <li>Pay only for the modules you use</li>
              <li>14 days to see if it fits</li>
              <li>A reply in under 59 minutes</li>
            </ul>
          </div>
          <div className="sf-offer-act">
            <h3>Tell us where to write</h3>
            <p>One email is enough. We’ll reply with how to begin.</p>
            <SaasifyReachOut />
          </div>
        </div>
      </section>

      <section>
        <div className="sf-faq-grid mx-auto max-w-[1120px] px-6 py-16 md:py-24">
          <Reveal>
            <h2 className="sf-h2 max-w-[12ch]">Frequently asked questions</h2>
          </Reveal>
          <FaqList items={page.faqs} />
        </div>
      </section>

      <Close />
    </article>
  );
}

function FeatureList({ items }: { items: SaasifyFeature[] }) {
  return (
    <ol className="mt-12 divide-y divide-[#e7e5e0] border-y border-[#e7e5e0]">
      {items.map((item, index) => (
        <Reveal
          key={item.title}
          as="li"
          delayMs={index * 40}
          className="grid gap-3 py-7 md:grid-cols-[4.5rem_minmax(0,0.7fr)_minmax(0,1.1fr)] md:items-baseline md:gap-8"
        >
          <span className="font-semibold text-[26px] text-[#16a34a]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-[20px] font-medium tracking-tight">{item.title}</h3>
          <p className="text-[15.5px] leading-7 text-[#62605b]">{item.copy}</p>
        </Reveal>
      ))}
    </ol>
  );
}

export function SaasifyProductPage({
  product,
  kind,
}: {
  product: SaasifyProduct;
  kind: "pos" | "hrms" | "module";
}) {
  const calm = kind !== "pos";

  return (
    <article>
      <section className="sf-hero">
        <div className="mx-auto grid max-w-[1120px] items-center gap-12 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:py-24">
          <div>
            <p className="sf-rise text-[13px] font-medium tracking-[0.14em] text-[#16a34a] uppercase">
              {product.eyebrow}
            </p>
            <h1 className="sf-display sf-rise mt-4 max-w-[11ch]" style={{ animationDelay: "80ms" }}>
              {product.title}
            </h1>
            <p className={`sf-rise mt-6 ${body}`} style={{ animationDelay: "160ms" }}>
              {product.lede}
            </p>
            <div className="sf-rise" style={{ animationDelay: "240ms" }}>
              <Actions primary={product.primary} secondary={product.secondary} />
            </div>
            <p
              className="sf-rise mt-4 max-w-[42ch] text-[13px] leading-6 text-[#62605b]"
              style={{ animationDelay: "300ms" }}
            >
              Get Started writes to {siteEmail}. New accounts are arranged for you.
              There is no public signup.
            </p>
          </div>
          <div className="sf-rise sf-stage-pad" style={{ animationDelay: "280ms" }}>
            {kind === "pos" ? (
              <PosTerminalMock />
            ) : kind === "hrms" ? (
              <HrmsDirectoryMock />
            ) : (
              <ul className="space-y-3 p-2">
                {product.features.items.slice(0, 4).map((item) => (
                  <li key={item.title} className="rounded-2xl border border-[#e7e5e0] bg-white px-4 py-3">
                    <p className="text-[14px] font-semibold">{item.title}</p>
                    <p className="mt-1 text-[13px] leading-5 text-[#6b7280]">{item.copy}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      <section className={calm ? "bg-[#f7f8f7]" : ""}>
        <div className="mx-auto max-w-[1120px] px-6 py-20 md:py-28">
          <Reveal>
            <h2 className="sf-h2 max-w-[16ch]">{product.problems.heading}</h2>
            <p className={`mt-4 ${body}`}>{product.problems.lede}</p>
          </Reveal>
          <ol className={calm ? "mt-14 space-y-10" : "mt-12 grid gap-8 md:grid-cols-2"}>
            {product.problems.items.map((item, index) => (
              <Reveal key={item} as="li" delayMs={index * 60}>
                <p className="font-semibold text-[28px] text-[#16a34a]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className={`mt-3 max-w-[42ch] ${calm ? "font-semibold text-[clamp(1.6rem,2.6vw,2.1rem)] leading-snug tracking-tight" : "text-[17px] leading-7"}`}>
                  {item}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section id="demonstration" className="border-t border-[#e7e5e0]">
        <div className="mx-auto max-w-[1120px] px-6 py-20 md:py-28">
          <Reveal>
            <h2 className="sf-h2 max-w-[14ch]">{product.how.heading}</h2>
            <p className={`mt-4 ${body}`}>{product.how.lede}</p>
          </Reveal>
          <div className="mt-14">
            {kind === "module" ? (
              <ol className="grid gap-4 md:grid-cols-2">
                {product.how.steps.map((step, index) => (
                  <Reveal key={step.title} as="li" delayMs={index * 60} className="sf-card sf-lift p-5">
                    <p className="text-[13px] font-semibold text-[#16a34a]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 text-[18px] font-semibold tracking-tight">{step.title}</h3>
                    <p className="mt-2 text-[15px] leading-6 text-[#6b7280]">{step.copy}</p>
                  </Reveal>
                ))}
              </ol>
            ) : (
              <SaasifyWalkthrough
                kind={kind}
                steps={product.how.steps}
                side={calm ? "left" : "right"}
              />
            )}
          </div>
        </div>
      </section>

      <section id="capabilities">
        <div className="mx-auto max-w-[1120px] px-6 py-16 md:py-24">
          <h2 className="sf-h2 max-w-[16ch]">{product.features.heading}</h2>
          <p className={`mt-4 ${body}`}>{product.features.lede}</p>
          <FeatureList items={product.features.items} />
        </div>
      </section>

      <section className="border-t border-[#e7e5e0] bg-[#f7f8f7]">
        <div className="mx-auto max-w-[1120px] px-6 py-20 md:py-24">
          <h2 className="sf-h2 max-w-[16ch]">{product.audience.heading}</h2>
          <p className={`mt-4 ${body}`}>{product.audience.lede}</p>
          <div className={`mt-12 ${calm ? "space-y-8" : "grid gap-10 md:grid-cols-3"}`}>
            {product.audience.items.map((item, index) => (
              <Reveal
                key={item.title}
                as="article"
                delayMs={index * 70}
                className={calm ? "grid gap-3 border-t border-[#e7e5e0] pt-6 md:grid-cols-[minmax(0,0.4fr)_minmax(0,1fr)]" : ""}
              >
                <h3 className="font-semibold text-[32px] leading-none tracking-tight">{item.title}</h3>
                <p className="text-[15.5px] leading-7 text-[#62605b]">{item.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[760px] px-6 py-16 md:py-24">
          <h2 className="sf-h2">Questions</h2>
          <FaqList items={product.faqs} />
        </div>
      </section>

      <Close />
    </article>
  );
}
