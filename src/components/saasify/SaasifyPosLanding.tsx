"use client";

import { useState, type FormEvent, type KeyboardEvent } from "react";
import { PosTerminalMock, ProductPreview } from "@/components/saasify/SaasifyMocks";
import { FaqList } from "@/components/saasify/SaasifyPages";
import { SaasifyPosShowcase } from "@/components/saasify/SaasifyPosShowcase";
import { saasifyLogin, saasifyPos } from "@/lib/saasify";
import { siteEmail, sitePhoneDisplay, sitePhoneHref } from "@/lib/site";

function OnlineCataloguePreview() {
  return (
    <figure className="sf-pos-mock sf-pos-online-mock tone-cafe">
      <div className="sf-pos-phone" aria-hidden="true">
        <p className="sf-pos-phone-name">North Window</p>
        <p className="sf-pos-phone-meta">Online catalogue</p>
        <div className="sf-pos-phone-cats">
          <span className="is-on">Coffee</span>
          <span>Pastry</span>
          <span>Merch</span>
        </div>
        <ul className="sf-pos-phone-cards">
          <li>
            <i className="sf-pos-swatch sf-pos-swatch-cafe-1" />
            <span>
              <b>Filter coffee</b>
              <small>250 ml</small>
            </span>
            <span>₹180</span>
          </li>
          <li>
            <i className="sf-pos-swatch sf-pos-swatch-cafe-2" />
            <span>
              <b>Croissant</b>
              <small>Butter</small>
            </span>
            <span>₹120</span>
          </li>
        </ul>
      </div>
      <div className="sf-pos-share" aria-hidden="true">
        <div className="sf-pos-qr" />
        <div>
          <p className="sf-pos-sketch-kicker">Share</p>
          <p className="sf-pos-store-url">sayge.in/order/north-window</p>
          <p className="sf-pos-store-send">Link · QR · social · messaging</p>
        </div>
      </div>
      <figcaption className="sr-only">
        Illustrative online catalogue with share link and QR concept. Sample brand, not a live shop.
      </figcaption>
    </figure>
  );
}

function DayPreview() {
  return (
    <figure className="sf-pos-mock">
      <div className="sf-pos-day" aria-hidden="true">
        <p className="sf-pos-day-label">Today</p>
        <dl>
          <div>
            <dt>Paid orders</dt>
            <dd>46</dd>
          </div>
          <div>
            <dt>Gross sales</dt>
            <dd>₹18,420</dd>
          </div>
          <div>
            <dt>Cash</dt>
            <dd>₹6,200</dd>
          </div>
          <div>
            <dt>UPI/card</dt>
            <dd>₹12,220</dd>
          </div>
        </dl>
      </div>
      <figcaption className="sr-only">
        Illustrative daily snapshot. Sample figures, not a live café.
      </figcaption>
    </figure>
  );
}

function FlowSketch({ step }: { step: number }) {
  if (step === 0) {
    return (
      <div className="sf-pos-sketch" aria-hidden="true">
        <div className="sf-pos-sketch-pills">
          <span className="is-on">Dine-in</span>
          <span>Takeaway</span>
        </div>
        <ul>
          <li>
            <span>Filter coffee × 2</span>
            <span>₹360</span>
          </li>
          <li>
            <span>Table</span>
            <span>4</span>
          </li>
        </ul>
      </div>
    );
  }
  if (step === 1) {
    return (
      <div className="sf-pos-sketch sf-pos-sketch-kitchen" aria-hidden="true">
        <div className="is-hot">
          <p>New</p>
          <span>Coffee × 2</span>
        </div>
        <div>
          <p>Prep</p>
          <span>—</span>
        </div>
        <div>
          <p>Ready</p>
          <span>—</span>
        </div>
      </div>
    );
  }
  if (step === 2) {
    return (
      <div className="sf-pos-sketch sf-pos-sketch-kitchen" aria-hidden="true">
        <div>
          <p>New</p>
          <span>Chai</span>
        </div>
        <div className="is-hot">
          <p>Prep</p>
          <span>Coffee</span>
        </div>
        <div>
          <p>Ready</p>
          <span>Toast</span>
        </div>
      </div>
    );
  }
  return (
    <div className="sf-pos-sketch" aria-hidden="true">
      <p className="sf-pos-sketch-kicker">Bill</p>
      <p className="sf-pos-sketch-name">₹360</p>
      <div className="sf-pos-sketch-pills">
        <span className="is-on">Cash</span>
        <span>UPI</span>
      </div>
    </div>
  );
}

const analyticsRanges = {
  today: {
    label: "Today",
    gross: "₹18,420",
    orders: "46",
    avg: "₹400",
    link: "12",
    bars: [42, 68, 50, 84, 60, 96, 74],
    marks: ["9a", "11a", "1p", "3p", "5p", "7p", "9p"],
    top: [
      ["Filter coffee", "₹6,480", "36"],
      ["Masala chai", "₹3,120", "26"],
      ["Cold brew", "₹2,640", "12"],
    ],
    cash: 34,
    counter: 34,
  },
  week: {
    label: "7 days",
    gross: "₹1.24L",
    orders: "312",
    avg: "₹397",
    link: "84",
    bars: [58, 72, 64, 80, 90, 100, 70],
    marks: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    top: [
      ["Filter coffee", "₹42,300", "235"],
      ["Masala chai", "₹21,600", "180"],
      ["Sandwich", "₹14,800", "74"],
    ],
    cash: 29,
    counter: 228,
  },
  month: {
    label: "30 days",
    gross: "₹5.18L",
    orders: "1,284",
    avg: "₹403",
    link: "346",
    bars: [48, 55, 62, 70, 66, 88, 94],
    marks: ["W1", "W2", "W3", "W4", "W5", "W6", "W7"],
    top: [
      ["Filter coffee", "₹1.72L", "956"],
      ["Masala chai", "₹86,400", "720"],
      ["Cold brew", "₹61,600", "280"],
    ],
    cash: 31,
    counter: 938,
  },
} as const;

type AnalyticsKey = keyof typeof analyticsRanges;

function AnalyticsBoard({ range }: { range: AnalyticsKey }) {
  const view = analyticsRanges[range];
  return (
    <div className="sf-pos-analytics" id="pos-analytics-board">
      <dl className="sf-pos-analytics-kpis">
        <div>
          <dt>Gross sales</dt>
          <dd>{view.gross}</dd>
        </div>
        <div>
          <dt>Paid orders</dt>
          <dd>{view.orders}</dd>
        </div>
        <div>
          <dt>Average order</dt>
          <dd>{view.avg}</dd>
        </div>
        <div>
          <dt>From the link</dt>
          <dd>{view.link}</dd>
        </div>
      </dl>
      <div className="sf-pos-analytics-chart" role="img" aria-label={`Sales over ${view.label}`}>
        {view.bars.map((height, index) => (
          <div key={view.marks[index]}>
            <span style={{ height: `${height}%` }} />
            <p>{view.marks[index]}</p>
          </div>
        ))}
      </div>
      <div className="sf-pos-analytics-split">
        <div>
          <p className="sf-pos-sketch-kicker">Best-selling products</p>
          <ul>
            {view.top.map(([name, amount, count]) => (
              <li key={name}>
                <span>{name}</span>
                <span>
                  {amount}
                  <small>{count} sold</small>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="sf-pos-sketch-kicker">Payment mix</p>
          <div className="sf-pos-mix" style={{ ["--cash" as string]: `${view.cash}%` }}>
            <span />
          </div>
          <p className="sf-pos-mix-key">
            <span>Cash {view.cash}%</span>
            <span>UPI/card {100 - view.cash}%</span>
          </p>
          <p className="sf-pos-sketch-kicker">Where it came from</p>
          <ul>
            <li>
              <span>Counter</span>
              <span>{view.counter}</span>
            </li>
            <li>
              <span>Store link</span>
              <span>{view.link}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function FeatureVisual({ id, preview }: { id: string; preview: number | null }) {
  if (id === "online") return <OnlineCataloguePreview />;
  if (id === "insights") return <DayPreview />;
  return <ProductPreview kind="pos" state={preview ?? 1} />;
}

export function SaasifyPosLanding() {
  const page = saasifyPos;
  const [demoEmail, setDemoEmail] = useState("");
  const [demoOpened, setDemoOpened] = useState(false);
  const [range, setRange] = useState<AnalyticsKey>("week");
  const [featureTab, setFeatureTab] = useState(0);
  const feature = page.featureGroups[featureTab];

  function requestDemo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const address = demoEmail.trim();
    if (!address) return;
    const subject = "SaaSify POS — free demo";
    const body = `Please show me a demo of SaaSify POS.\n\nMy email: ${address}\n`;
    window.location.href = `mailto:${siteEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setDemoOpened(true);
  }

  function moveFeature(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const next =
      event.key === "ArrowRight"
        ? (index + 1) % page.featureGroups.length
        : (index - 1 + page.featureGroups.length) % page.featureGroups.length;
    setFeatureTab(next);
    document.getElementById(`pos-feature-${page.featureGroups[next].id}`)?.focus();
  }

  return (
    <article className="sf-pos">
      <header className="sf-pos-hero">
        <div className="sf-pos-hero-inner">
          <div className="sf-pos-hero-copy">
            <p className="sf-pos-kicker">{page.eyebrow}</p>
            <h1 className="sf-pos-title">{page.title}</h1>
            <p className="sf-pos-lede">{page.lede}</p>
            <div className="sf-pos-actions">
              <a className="sf-pos-btn sf-pos-btn-solid" href={page.primary.href}>
                {page.primary.label}
              </a>
              <a className="sf-pos-btn" href={page.secondary.href}>
                {page.secondary.label}
              </a>
            </div>
            <p className="sf-pos-note">{page.priceNote}</p>
          </div>
          <div className="sf-pos-hero-visual">
            <img
              src="/saasify-hero-devices.png"
              alt="SaaSify POS on laptop analytics, tablet terminal, and phone catalogue"
              width={1024}
              height={436}
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>
      </header>

      <section id="paths" className="sf-pos-section sf-pos-paths-section">
        <div className="sf-pos-wrap">
          <p className="sf-pos-eyebrow">In-store & online</p>
          <h2 className="sf-pos-h2">{page.dualPaths.heading}</h2>
          <p className="sf-pos-intro">{page.dualPaths.lede}</p>
          <div className="sf-pos-paths">
            {page.dualPaths.items.map((item) => (
              <article key={item.id} className="sf-pos-path-card" id={`path-${item.id}`}>
                <div className="sf-pos-path-copy">
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  <ul className="sf-pos-points">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div className="sf-pos-path-visual">
                  {item.id === "in-person" ? (
                    <PosTerminalMock captionVisible={false} />
                  ) : (
                    <OnlineCataloguePreview />
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SaasifyPosShowcase />

      <section className="sf-pos-mid-cta" aria-label="Request a demo">
        <div className="sf-pos-mid-cta-inner">
          <div>
            <h2 className="sf-pos-h2">{page.midCta.heading}</h2>
            <p className="sf-pos-intro">{page.midCta.lede}</p>
          </div>
          <div className="sf-pos-actions">
            <a className="sf-pos-btn sf-pos-btn-solid" href={page.midCta.primary.href}>
              {page.midCta.primary.label}
            </a>
            <a className="sf-pos-btn" href={page.midCta.secondary.href}>
              {page.midCta.secondary.label}
            </a>
          </div>
        </div>
      </section>

      <section id="how" className="sf-pos-story" aria-labelledby="pos-story-heading">
        <div className="sf-pos-story-inner">
          <p className="sf-pos-eyebrow">How it works</p>
          <h2 id="pos-story-heading" className="sf-pos-h2">
            {page.how.heading}
          </h2>
          <p className="sf-pos-intro">{page.how.lede}</p>
          <ol className="sf-pos-path">
            {page.how.steps.map((step, index) => (
              <li key={step.title}>
                <span className="sf-pos-path-num" aria-hidden="true">
                  {index + 1}
                </span>
                <FlowSketch step={index} />
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="features" className="sf-pos-section">
        <div className="sf-pos-wrap">
          <p className="sf-pos-eyebrow">Features</p>
          <h2 className="sf-pos-h2">Three simple groups</h2>
          <p className="sf-pos-intro">
            Counter POS, online catalogue & ordering, and business insights—only what the product supports
            today.
          </p>
          <div className="sf-pos-tabs" role="tablist" aria-label="Feature groups">
            {page.featureGroups.map((item, index) => {
              const selected = index === featureTab;
              return (
                <button
                  key={item.id}
                  id={`pos-feature-${item.id}`}
                  type="button"
                  role="tab"
                  className="sf-pos-tab"
                  aria-selected={selected}
                  aria-controls="pos-feature-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setFeatureTab(index)}
                  onKeyDown={(event) => moveFeature(event, index)}
                >
                  {item.title}
                </button>
              );
            })}
          </div>
          <div
            id="pos-feature-panel"
            role="tabpanel"
            aria-labelledby={`pos-feature-${feature.id}`}
            className="sf-pos-panel"
          >
            <div>
              <h3>{feature.title}</h3>
              <p>{feature.benefit}</p>
              <p className="sf-pos-points-label">Includes</p>
              <ul className="sf-pos-points">
                {feature.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
            <FeatureVisual id={feature.id} preview={feature.preview} />
          </div>
        </div>
      </section>

      <section id="analytics" className="sf-pos-section sf-pos-section-muted">
        <div className="sf-pos-wrap">
          <div className="sf-pos-analytics-head">
            <div>
              <p className="sf-pos-eyebrow">Analytics</p>
              <h2 className="sf-pos-h2">See the day clearly</h2>
              <p className="sf-pos-intro">
                Gross sales, orders, average order value, best sellers, and payment mix—by day, week, or month.
              </p>
            </div>
            <div className="sf-pos-analytics-ranges" role="tablist" aria-label="Analytics period">
              {(Object.keys(analyticsRanges) as AnalyticsKey[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={range === key}
                  onClick={() => setRange(key)}
                >
                  {analyticsRanges[key].label}
                </button>
              ))}
            </div>
          </div>
          <AnalyticsBoard range={range} />
          <p className="sf-pos-analytics-note">
            Sample figures for a fictional café. Illustrative only—not a live account.
          </p>
        </div>
      </section>

      <section id="audience" className="sf-pos-section">
        <div className="sf-pos-wrap">
          <p className="sf-pos-eyebrow">Who it’s for</p>
          <h2 className="sf-pos-h2">{page.audience.heading}</h2>
          <p className="sf-pos-intro">{page.audience.lede}</p>
          <ul className="sf-pos-audience">
            {page.audience.items.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </li>
            ))}
          </ul>
          <ul className="sf-pos-outcomes">
            {page.problems.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="sf-pos-actions sf-pos-actions-follow">
            <a className="sf-pos-btn sf-pos-btn-solid" href="#demo">
              Request a demo
            </a>
            <a className="sf-pos-btn" href="#pricing">
              See pricing
            </a>
          </div>
        </div>
      </section>

      <section id="pricing" className="sf-pos-section sf-pos-section-muted">
        <div className="sf-pos-wrap">
          <p className="sf-pos-eyebrow">Pricing</p>
          <h2 className="sf-pos-h2">{page.pricing.heading}</h2>
          <p className="sf-pos-intro">{page.pricing.lede}</p>
          <div className="sf-pos-pricing">
            <article className="sf-pos-price-card is-featured">
              <h3>{page.pricing.starter.name}</h3>
              <p className="sf-pos-price-line">
                <strong>{page.pricing.starter.india}</strong>
                <span>{page.pricing.starter.indiaSuffix}</span>
              </p>
              <p className="sf-pos-price-line">
                <strong>{page.pricing.starter.intl}</strong>
                <span>{page.pricing.starter.intlSuffix}</span>
              </p>
              <p className="sf-pos-price-trial">{page.pricing.starter.trial}</p>
              <ul>
                {page.pricing.starter.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a className="sf-pos-btn sf-pos-btn-solid" href={page.pricing.starter.cta.href}>
                {page.pricing.starter.cta.label}
              </a>
            </article>
            <article className="sf-pos-price-card">
              <h3>{page.pricing.custom.name}</h3>
              <p className="sf-pos-price-custom">{page.pricing.custom.price}</p>
              <ul>
                {page.pricing.custom.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a className="sf-pos-btn" href={page.pricing.custom.cta.href}>
                {page.pricing.custom.cta.label}
              </a>
            </article>
          </div>
          <p className="sf-pos-pricing-note">{page.pricing.note}</p>
        </div>
      </section>

      <section id="trust" className="sf-pos-section">
        <div className="sf-pos-wrap">
          <p className="sf-pos-eyebrow">Trust</p>
          <h2 className="sf-pos-h2">{page.trust.heading}</h2>
          <p className="sf-pos-intro">{page.trust.lede}</p>
          <ul className="sf-pos-trust">
            {page.trust.items.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="demo" className="sf-offer sf-pos-offer">
        <div className="sf-offer-panel">
          <div className="sf-offer-copy">
            <p className="sf-offer-kicker">Start here</p>
            <h2 className="sf-h2">{page.closing.heading}</h2>
            <p className="sf-offer-lede">{page.closing.lede}</p>
            <div className="sf-offer-prices">
              <p>
                <strong>₹49</strong>
                <span>per month in India</span>
              </p>
              <p>
                <strong>$9</strong>
                <span>per month internationally</span>
              </p>
            </div>
            <ul className="sf-offer-points">
              <li>In-store counter and online catalogue</li>
              <li>14-day trial arranged with the team</li>
              <li>A reply in under 59 minutes</li>
            </ul>
          </div>
          <div className="sf-offer-act">
            <h3>Request a demo</h3>
            <p>One email is enough. We’ll reply with a walkthrough time—usually under 59 minutes.</p>
            <form onSubmit={requestDemo} className="sf-reach">
              <div className="sf-reach-field">
                <label className="sr-only" htmlFor="pos-demo-email">
                  Work email
                </label>
                <input
                  id="pos-demo-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  inputMode="email"
                  placeholder="you@cafe.com"
                  value={demoEmail}
                  onChange={(event) => {
                    setDemoEmail(event.target.value);
                    setDemoOpened(false);
                  }}
                />
                <button type="submit" className="sf-btn">
                  Request a demo
                </button>
              </div>
              <p className="sf-reach-alt">
                or call <a href={sitePhoneHref}>{sitePhoneDisplay}</a>
                {" · "}
                <a href={saasifyLogin.href}>{saasifyLogin.label}</a>
              </p>
              <p className="sf-reach-alt">
                Prefer to talk first?{" "}
                <a href={`mailto:${siteEmail}?subject=${encodeURIComponent("SaaSify POS — talk to us")}`}>
                  Talk to us
                </a>
              </p>
              {demoOpened ? (
                <p className="sf-reach-note">
                  Send the email that opened. We’ll use it to arrange your demo and, if it fits, a 14-day
                  trial.
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </section>

      <section id="questions">
        <div className="mx-auto max-w-[1120px] px-6 py-16 md:py-24">
          <div className="sf-faq-grid">
            <div>
              <p className="sf-pos-eyebrow">FAQ</p>
              <h2 className="sf-h2 max-w-[14ch]">Questions before you start</h2>
              <p className="sf-pos-intro">
                Straight answers on trials, pricing, printers, payments and selling online—without a custom
                website.
              </p>
            </div>
            <FaqList items={page.faqs} />
          </div>
          <div className="sf-pos-actions sf-pos-actions-follow">
            <a className="sf-pos-btn sf-pos-btn-solid" href="#demo">
              Still unsure? Request a demo
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
