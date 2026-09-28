"use client";

import { useRef, type MouseEvent } from "react";

function ProofWindow({
  kind,
  title,
  copy,
  src,
  alt,
  delay,
  tags,
}: {
  kind: "build" | "extend";
  title: string;
  copy: string;
  src: string;
  alt: string;
  delay: string;
  tags: string[];
}) {
  const frame = useRef<HTMLDivElement>(null);

  const reset = () => {
    const el = frame.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--mx", "0px");
    el.style.setProperty("--my", "0px");
  };

  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    const el = frame.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return;
    const box = el.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;
    el.style.setProperty("--rx", `${(y * -4).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${(x * 5).toFixed(2)}deg`);
    el.style.setProperty("--mx", `${(x * 8).toFixed(2)}px`);
    el.style.setProperty("--my", `${(y * 8).toFixed(2)}px`);
  };

  return (
    <article className="hero-line" style={{ animationDelay: delay }}>
      <div
        ref={frame}
        className="hero-window"
        onMouseMove={onMove}
        onMouseLeave={reset}
      >
        <div className="hero-window-bar">
          <span className="hero-window-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="hero-window-path" aria-hidden="true">
            sayge / {kind}
          </span>
          <span className="hero-window-kicker">{title}</span>
        </div>
        <div className="hero-window-stage">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} width={768} height={960} />

          <div className="hero-artifact" aria-hidden="true">
            <span className="hero-crop">
              <i className="tl" />
              <i className="tr" />
              <i className="bl" />
              <i className="br" />
            </span>
            <ul className="hero-tags">
              {tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            {kind === "extend" ? (
              <div className="hero-seats">
                <span />
                <span />
                <span />
              </div>
            ) : null}
          </div>

          <div className="hero-window-caption">
            <h2>{title}</h2>
            <p>{copy}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="home-heading"
      className="relative overflow-hidden pb-12 md:pb-16"
    >
      <div className="mx-auto max-w-[820px] px-6 pt-10 text-center md:pt-12">
        <p
          className="hero-line text-[11px] tracking-[0.18em] text-muted"
          style={{ animationDelay: "20ms" }}
        >
          Technology Consulting · Product Engineering · AI
        </p>

        <h1
          id="home-heading"
          className="hero-line display hero-headline mx-auto mt-4 max-w-[22ch] text-foreground"
          style={{ animationDelay: "80ms" }}
        >
          Is your technology ready for what’s next?
        </h1>

        <p
          className="hero-line mx-auto mt-5 max-w-[48ch] text-[16px] leading-7 text-muted md:text-[17px] md:leading-8"
          style={{ animationDelay: "160ms" }}
        >
          Sayge helps businesses make better technology decisions—and turn them
          into products, software and engineering teams that move the business
          forward.
        </p>

        <div
          className="hero-line mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5"
          style={{ animationDelay: "240ms" }}
        >
          <a href="#contact" className="hero-cta-primary">
            Start a conversation
            <span aria-hidden="true">→</span>
          </a>
          <a href="#values" className="hero-cta-secondary">
            Explore how we work
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 grid max-w-[1100px] gap-10 px-6 md:mt-10 md:grid-cols-2 md:gap-12">
        <ProofWindow
          kind="build"
          title="Build"
          copy="Digital products, software and AI systems designed around your business."
          src="/hero-card-s.png"
          alt=""
          delay="320ms"
          tags={["Digital products", "Software", "AI systems"]}
        />
        <ProofWindow
          kind="extend"
          title="Extend"
          copy="Dedicated engineers and technology teams that work alongside yours."
          src="/hero-card-forms.png"
          alt=""
          delay="400ms"
          tags={["Engineers", "Technology teams", "Capability"]}
        />
      </div>
    </section>
  );
}
