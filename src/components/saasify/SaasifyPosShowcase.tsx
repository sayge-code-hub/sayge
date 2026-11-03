"use client";

import { useState, type KeyboardEvent, type ReactNode } from "react";
import {
  getShowcaseAudience,
  showcaseAudiences,
  type AudienceId,
  type ShowcaseAudience,
  type ShowcaseProduct,
  type ShowcaseWorkflow,
} from "@/lib/saasify-pos-showcase";

function WindowShell({
  path,
  title,
  tone,
  children,
}: {
  path: string;
  title: string;
  tone: AudienceId;
  children: ReactNode;
}) {
  return (
    <figure className={`sf-pos-mock sf-pos-window tone-${tone}`}>
      <div className="sf-pos-window-frame">
        <div className="sf-pos-window-bar" aria-hidden="true">
          <span className="sf-pos-window-dots">
            <i />
            <i />
            <i />
          </span>
          <span className="sf-pos-window-path">{path}</span>
        </div>
        <div className="sf-pos-window-body">
          <p className="sf-pos-window-title">{title}</p>
          {children}
        </div>
      </div>
      <figcaption className="sr-only">
        Illustrative {title.toLowerCase()} preview for {path}. Sample data, not a live account.
      </figcaption>
    </figure>
  );
}

function PhoneShell({
  brand,
  meta,
  tone,
  categories,
  activeCategory,
  children,
  share,
}: {
  brand: string;
  meta: string;
  tone: AudienceId;
  categories: string[];
  activeCategory: string;
  children: ReactNode;
  share?: { url: string; note: string };
}) {
  return (
    <figure className={`sf-pos-mock sf-pos-online-mock tone-${tone}`}>
      <div className="sf-pos-phone" aria-hidden="true">
        <p className="sf-pos-phone-name">{brand}</p>
        <p className="sf-pos-phone-meta">{meta}</p>
        <div className="sf-pos-phone-cats">
          {categories.slice(0, 3).map((category) => (
            <span key={category} className={category === activeCategory ? "is-on" : undefined}>
              {category}
            </span>
          ))}
        </div>
        {children}
      </div>
      {share ? (
        <div className="sf-pos-share" aria-hidden="true">
          <div className="sf-pos-qr" />
          <div>
            <p className="sf-pos-sketch-kicker">Share</p>
            <p className="sf-pos-store-url">{share.url}</p>
            <p className="sf-pos-store-send">{share.note}</p>
          </div>
        </div>
      ) : null}
      <figcaption className="sr-only">
        Illustrative catalogue for {brand}. Sample products, not a live shop.
      </figcaption>
    </figure>
  );
}

function productSwatch(index: number, tone: AudienceId) {
  return `sf-pos-swatch sf-pos-swatch-${tone}-${(index % 4) + 1}`;
}

function CounterVisual({ audience }: { audience: ShowcaseAudience }) {
  const items = audience.products.slice(0, 2);
  return (
    <WindowShell
      path={`SaaSify / POS / ${audience.brand}`}
      title="Counter"
      tone={audience.tone}
    >
      <div className="sf-pos-demo-pills">
        <span className="is-on">{audience.orderTypeLabels[0]}</span>
        <span>{audience.orderTypeLabels[1]}</span>
      </div>
      <div className="sf-pos-demo-cats">
        {audience.categories.map((category, index) => (
          <span key={category} className={index === 0 ? "is-on" : undefined}>
            {category}
          </span>
        ))}
      </div>
      <ul className="sf-pos-demo-list">
        {items.map((product, index) => (
          <li key={product.name}>
            <span>{product.name}</span>
            <span>
              <em>× {index === 0 ? 2 : 1}</em>
              {product.price}
            </span>
          </li>
        ))}
      </ul>
      <div className="sf-pos-demo-summary">
        <p>
          <span>{audience.orderMeta}</span>
          <strong>Open</strong>
        </p>
        <p>
          <span>{items.length} lines</span>
          <span>{items[0]?.price}</span>
        </p>
        <div className="sf-pos-demo-actions">
          <span className="is-on">{audience.id === "cafe" ? "Send to kitchen" : "Checkout"}</span>
          <span>Settle</span>
        </div>
      </div>
    </WindowShell>
  );
}

function KitchenVisual({ audience }: { audience: ShowcaseAudience }) {
  const first = audience.products[0];
  const second = audience.products[1];
  return (
    <WindowShell path="SaaSify / POS / Kitchen" title="Kitchen" tone={audience.tone}>
      <div className="sf-pos-demo-ticket">
        <p>
          <span>Ticket · {audience.orderMeta}</span>
          <strong>Preparing</strong>
        </p>
        <p className="sf-pos-demo-ticket-name">{first.name} × 2</p>
        <p className="sf-pos-demo-ticket-meta">
          {audience.orderTypeLabels[0]} · {first.detail ?? "No extras"}
        </p>
      </div>
      <div className="sf-pos-demo-board">
        <div>
          <p>New</p>
          <span>{second?.name}</span>
        </div>
        <div className="is-hot">
          <p>Prep</p>
          <span>{first.name} × 2</span>
        </div>
        <div>
          <p>Ready</p>
          <span>{audience.products[3]?.name ?? "Order"}</span>
        </div>
      </div>
    </WindowShell>
  );
}

function BillingVisual({ audience }: { audience: ShowcaseAudience }) {
  const lines = audience.products.slice(0, 2);
  return (
    <WindowShell path="SaaSify / POS / Bill" title="Billing" tone={audience.tone}>
      <p className="sf-pos-demo-meta">
        {audience.orderMeta} · {audience.orderTypeLabels[0]}
      </p>
      <ul className="sf-pos-demo-list">
        {lines.map((product, index) => (
          <li key={product.name}>
            <span>
              {product.name} × {index === 0 ? 2 : 1}
            </span>
            <span>{product.price}</span>
          </li>
        ))}
        <li className="is-muted">
          <span>GST</span>
          <span>Shown on the bill</span>
        </li>
        <li className="is-total">
          <span>Total</span>
          <span>Due</span>
        </li>
      </ul>
      <div className="sf-pos-demo-actions">
        <span className="is-on">Cash</span>
        <span>UPI/Card</span>
      </div>
      <p className="sf-pos-demo-note">PDF receipt · Settlement recorded</p>
    </WindowShell>
  );
}

function ProductsVisual({ audience }: { audience: ShowcaseAudience }) {
  return (
    <WindowShell
      path={`SaaSify / POS / Catalogue`}
      title="Products & categories"
      tone={audience.tone}
    >
      <div className="sf-pos-demo-cats">
        {audience.categories.map((category, index) => (
          <span key={category} className={index === 0 ? "is-on" : undefined}>
            {category}
          </span>
        ))}
      </div>
      <ul className="sf-pos-demo-list sf-pos-demo-list-rich">
        {audience.products.slice(0, 3).map((product) => (
          <li key={product.name}>
            <span>
              {product.name}
              <small>
                {product.detail ? `${product.detail} · ` : ""}
                {product.category}
              </small>
            </span>
            <span>{product.price}</span>
          </li>
        ))}
      </ul>
      <p className="sf-pos-demo-note is-accent">Add product · Manage categories</p>
    </WindowShell>
  );
}

function SalesVisual({ audience }: { audience: ShowcaseAudience }) {
  return (
    <figure className={`sf-pos-mock tone-${audience.tone}`}>
      <div className="sf-pos-day" aria-hidden="true">
        <p className="sf-pos-day-label">Today · {audience.brand}</p>
        <dl>
          <div>
            <dt>Paid orders</dt>
            <dd>{audience.sales.orders}</dd>
          </div>
          <div>
            <dt>Gross sales</dt>
            <dd>{audience.sales.gross}</dd>
          </div>
          <div>
            <dt>Cash</dt>
            <dd>{audience.sales.cash}</dd>
          </div>
          <div>
            <dt>UPI/card</dt>
            <dd>{audience.sales.digital}</dd>
          </div>
        </dl>
        <p className="sf-pos-sketch-kicker">Popular today</p>
        <ul className="sf-pos-demo-top">
          {audience.sales.top.map(([name, amount, count]) => (
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
      <figcaption className="sr-only">
        Illustrative sales snapshot for {audience.brand}. Sample figures, not a live account.
      </figcaption>
    </figure>
  );
}

function CatalogueCards({
  products,
  tone,
  dense = false,
}: {
  products: ShowcaseProduct[];
  tone: AudienceId;
  dense?: boolean;
}) {
  return (
    <ul className={`sf-pos-phone-cards ${dense ? "" : "sf-pos-phone-cards-rich"}`}>
      {products.map((product, index) => (
        <li key={product.name}>
          <i className={productSwatch(index, tone)} aria-hidden="true" />
          <span>
            <b>{product.name}</b>
            <small>{product.detail ?? product.category}</small>
          </span>
          <span>{product.price}</span>
        </li>
      ))}
    </ul>
  );
}

function CatalogueVisual({ audience }: { audience: ShowcaseAudience }) {
  return (
    <PhoneShell
      brand={audience.brand}
      meta="Online catalogue"
      tone={audience.tone}
      categories={audience.categories}
      activeCategory={audience.categories[0]}
      share={{
        url: `sayge.in/order/${audience.slug}`,
        note: "Link · QR · social · messaging",
      }}
    >
      <CatalogueCards products={audience.products.slice(0, 2)} tone={audience.tone} />
    </PhoneShell>
  );
}

function StoreVisual({ audience }: { audience: ShowcaseAudience }) {
  return (
    <PhoneShell
      brand={audience.brand}
      meta="Store link"
      tone={audience.tone}
      categories={audience.categories}
      activeCategory={audience.categories[0]}
      share={{
        url: `sayge.in/order/${audience.slug}`,
        note: "Share from social, DMs or your site",
      }}
    >
      <CatalogueCards products={audience.products.slice(0, 2)} tone={audience.tone} />
    </PhoneShell>
  );
}

function CollectionsVisual({ audience }: { audience: ShowcaseAudience }) {
  return (
    <PhoneShell
      brand={audience.brand}
      meta={audience.id === "fashion" ? "Collection" : "Lifestyle catalogue"}
      tone={audience.tone}
      categories={audience.categories}
      activeCategory={audience.categories[0]}
    >
      <div className="sf-pos-collection-grid" aria-hidden="true">
        {audience.products.slice(0, 4).map((product, index) => (
          <article key={product.name} className={productSwatch(index, audience.tone)}>
            <span>{product.name}</span>
            <strong>{product.price}</strong>
          </article>
        ))}
      </div>
    </PhoneShell>
  );
}

function WorkflowVisual({
  audience,
  visual,
}: {
  audience: ShowcaseAudience;
  visual: ShowcaseWorkflow["visual"];
}) {
  if (visual === "counter") return <CounterVisual audience={audience} />;
  if (visual === "kitchen") return <KitchenVisual audience={audience} />;
  if (visual === "billing") return <BillingVisual audience={audience} />;
  if (visual === "sales") return <SalesVisual audience={audience} />;
  if (visual === "products") return <ProductsVisual audience={audience} />;
  if (visual === "catalogue") return <CatalogueVisual audience={audience} />;
  if (visual === "store") return <StoreVisual audience={audience} />;
  return <CollectionsVisual audience={audience} />;
}

export function SaasifyPosShowcase() {
  const [audienceId, setAudienceId] = useState<AudienceId>("cafe");
  const audience = getShowcaseAudience(audienceId);
  const [workflowId, setWorkflowId] = useState(audience.workflows[0].id);
  const workflow =
    audience.workflows.find((item) => item.id === workflowId) ?? audience.workflows[0];

  function selectAudience(id: AudienceId) {
    const next = getShowcaseAudience(id);
    setAudienceId(id);
    setWorkflowId(next.workflows[0].id);
  }

  function moveAudience(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const next =
      event.key === "ArrowRight"
        ? (index + 1) % showcaseAudiences.length
        : (index - 1 + showcaseAudiences.length) % showcaseAudiences.length;
    selectAudience(showcaseAudiences[next].id);
    document.getElementById(`pos-audience-${showcaseAudiences[next].id}`)?.focus();
  }

  function moveWorkflow(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const next =
      event.key === "ArrowRight"
        ? (index + 1) % audience.workflows.length
        : (index - 1 + audience.workflows.length) % audience.workflows.length;
    setWorkflowId(audience.workflows[next].id);
    document.getElementById(`pos-flow-${audience.workflows[next].id}`)?.focus();
  }

  return (
    <section id="product" className="sf-pos-section sf-pos-section-muted">
      <div className="sf-pos-wrap sf-pos-showcase">
        <header className="sf-pos-showcase-head">
          <p className="sf-pos-eyebrow">See how SaaSify fits your business</p>
          <h2 className="sf-pos-h2">One simple system. Built around how you sell.</h2>
          <p className="sf-pos-intro">
            From cafés to independent brands, manage in-person sales and share your products online with
            SaaSify.
          </p>
        </header>

        <div className="sf-pos-audience-block">
          <p className="sf-pos-audience-label" id="pos-audience-label">
            What kind of business do you run?
          </p>
          <div
            className="sf-pos-audience-pills"
            role="tablist"
            aria-labelledby="pos-audience-label"
          >
            {showcaseAudiences.map((item, index) => {
              const selected = item.id === audienceId;
              return (
                <button
                  key={item.id}
                  id={`pos-audience-${item.id}`}
                  type="button"
                  role="tab"
                  className="sf-pos-audience-pill"
                  aria-selected={selected}
                  aria-controls="pos-flow-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => selectAudience(item.id)}
                  onKeyDown={(event) => moveAudience(event, index)}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="sf-pos-audience-lead">
          <p className="sf-pos-audience-kicker">{audience.label}</p>
          <h3 className="sf-pos-audience-title">{audience.headline}</h3>
          <p className="sf-pos-audience-copy">{audience.lede}</p>
        </div>

        <div
          className="sf-pos-flow-tabs"
          role="tablist"
          aria-label={`${audience.label} workflows`}
        >
          {audience.workflows.map((item, index) => {
            const selected = item.id === workflow.id;
            return (
              <button
                key={item.id}
                id={`pos-flow-${item.id}`}
                type="button"
                role="tab"
                className="sf-pos-flow-tab"
                aria-selected={selected}
                aria-controls="pos-flow-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => setWorkflowId(item.id)}
                onKeyDown={(event) => moveWorkflow(event, index)}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div
          id="pos-flow-panel"
          role="tabpanel"
          aria-labelledby={`pos-flow-${workflow.id}`}
          className="sf-pos-showcase-panel"
        >
          <div className="sf-pos-showcase-copy">
            <h3>{workflow.title}</h3>
            <p>{workflow.copy}</p>
            <p className="sf-pos-points-label">Key capabilities</p>
            <ul className="sf-pos-points">
              {workflow.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="sf-pos-showcase-modes" aria-label="Ways to sell">
              <span>Sell in person</span>
              <span>Share online</span>
            </div>
            <a className="sf-pos-btn sf-pos-btn-solid sf-pos-showcase-cta" href="#demo">
              Request a demo
            </a>
          </div>
          <div key={`${audienceId}-${workflow.id}`} className="sf-pos-showcase-visual">
            <WorkflowVisual audience={audience} visual={workflow.visual} />
          </div>
        </div>
        <p className="sf-pos-analytics-note">
          Illustrative screens for {audience.brand}. Sample catalogue only—not a live account. SaaSify does
          not build a fully custom website.
        </p>
      </div>
    </section>
  );
}
