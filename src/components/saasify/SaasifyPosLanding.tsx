"use client";

import { useState, type FormEvent, type KeyboardEvent } from "react";
import { ProductPreview } from "@/components/saasify/SaasifyMocks";
import { FaqList } from "@/components/saasify/SaasifyPages";
import { SaasifyPosShowcase } from "@/components/saasify/SaasifyPosShowcase";
import { saasifyLogin, saasifyPos } from "@/lib/saasify";
import { siteEmail, sitePhoneDisplay, sitePhoneHref } from "@/lib/site";

function OnlineCataloguePreview() {
  return (
    <figure className="sf-pos-mock sf-pos-online-mock tone-cafe">
      <div className="sf-pos-phone" aria-hidden="true">
        <p className="sf-pos-phone-name">North Window</p>
        <p className="sf-pos-phone-meta">Shared catalogue</p>
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
        Illustrative catalogue with share link and QR. Sample brand, not a live shop.
      </figcaption>
    </figure>
  );
}

function DayPreview() {
  return (
    <figure className="sf-pos-mock">
      <div className="sf-pos-day" aria-hidden="true">
        <p className="sf-pos-day-label">Today · sample figures</p>
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
      <figcaption className="sf-pos-analytics-note">
        Sample figures for a fictional café. Illustrative only—not a live account.
      </figcaption>
    </figure>
  );
}

function FeatureVisual({ id, preview }: { id: string; preview: number | null }) {
  if (id === "online") return <OnlineCataloguePreview />;
  if (id === "insights") return <DayPreview />;
  return <ProductPreview kind="pos" state={preview ?? 1} />;
}

export function SaasifyPosLanding() {
  const page = saasifyPos;
  const [accessEmail, setAccessEmail] = useState("");
  const [accessOpened, setAccessOpened] = useState(false);
  const [featureTab, setFeatureTab] = useState(0);
  const feature = page.featureGroups[featureTab];

  function requestAccess(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const address = accessEmail.trim();
    if (!address) return;
    const subject = "SaaSify POS — request access";
    const body = `Please arrange access and a 14-day trial of SaaSify POS.\n\nMy email: ${address}\n`;
    window.location.href = `mailto:${siteEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setAccessOpened(true);
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
            <p className="sf-pos-note">{page.accessNote}</p>
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

      <SaasifyPosShowcase />

      <section id="features" className="sf-pos-section">
        <div className="sf-pos-wrap">
          <p className="sf-pos-eyebrow">Features</p>
          <h2 className="sf-pos-h2">{page.featureHeading}</h2>
          <p className="sf-pos-intro">{page.featureLede}</p>
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
              {feature.id === "online" ? (
                <div className="sf-pos-journey">
                  <p className="sf-pos-points-label">{page.onlineJourney.heading}</p>
                  <ol className="sf-pos-journey-steps">
                    {page.onlineJourney.steps.map((step, index) => (
                      <li key={step.title}>
                        <span aria-hidden="true">{index + 1}</span>
                        <div>
                          <strong>{step.title}</strong>
                          <p>{step.copy}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              ) : null}
            </div>
            <FeatureVisual id={feature.id} preview={feature.preview} />
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
              <dl className="sf-pos-price-terms">
                {page.pricing.starter.terms.map((term) => (
                  <div key={term.label}>
                    <dt>{term.label}</dt>
                    <dd>{term.value}</dd>
                  </div>
                ))}
              </dl>
              <ul>
                {page.pricing.starter.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="sf-pos-price-trial">{page.pricing.starter.accessNote}</p>
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

      <section id="questions">
        <div className="mx-auto max-w-[1120px] px-6 py-16 md:py-24">
          <div className="sf-faq-grid">
            <div>
              <p className="sf-pos-eyebrow">FAQ</p>
              <h2 className="sf-h2 max-w-[16ch]">What to know before you start</h2>
              <p className="sf-pos-intro">
                Access, the catalogue journey, pricing, tax display, and printers—answered straight.
              </p>
            </div>
            <FaqList items={page.faqs} />
          </div>
        </div>
      </section>

      <section id="access" className="sf-offer sf-pos-offer">
        <div className="sf-offer-panel">
          <div className="sf-offer-copy">
            <p className="sf-offer-kicker">Next step</p>
            <h2 className="sf-h2">{page.closing.heading}</h2>
            <p className="sf-offer-lede">{page.closing.lede}</p>
            <ol className="sf-offer-points sf-pos-access-steps">
              {page.closing.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
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
          </div>
          <div className="sf-offer-act">
            <h3>{page.closing.formTitle}</h3>
            <p>{page.closing.formLede}</p>
            <form onSubmit={requestAccess} className="sf-reach">
              <div className="sf-reach-field">
                <label className="sr-only" htmlFor="pos-access-email">
                  Work email
                </label>
                <input
                  id="pos-access-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  inputMode="email"
                  placeholder="you@cafe.com"
                  value={accessEmail}
                  onChange={(event) => {
                    setAccessEmail(event.target.value);
                    setAccessOpened(false);
                  }}
                />
                <button type="submit" className="sf-btn">
                  {page.closing.formCta}
                </button>
              </div>
              <p className="sf-reach-alt">
                Prefer a walkthrough first?{" "}
                <a href={`mailto:${siteEmail}?subject=${encodeURIComponent("SaaSify POS — guided setup")}`}>
                  Book a guided setup
                </a>
              </p>
              <p className="sf-reach-alt">
                or call <a href={sitePhoneHref}>{sitePhoneDisplay}</a>
                {" · "}
                <a href={saasifyLogin.href}>{saasifyLogin.label}</a>
              </p>
              {accessOpened ? (
                <p className="sf-reach-note">
                  Send the email that opened. We’ll use it to arrange access, setup, and your 14-day trial.
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </section>
    </article>
  );
}
