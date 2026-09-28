type CaseStudyScreen = {
  src: string;
  alt: string;
  caption: string;
  kicker?: string;
  width: number;
  height: number;
  layout: "feature" | "pair" | "closing";
  priority?: boolean;
};

export function CaseStudyScreens({
  heading,
  intro,
  items,
}: {
  heading: string;
  intro?: string;
  items: CaseStudyScreen[];
}) {
  if (items.length === 0) return null;

  const feature = items.filter((item) => item.layout === "feature");
  const pair = items.filter((item) => item.layout === "pair");
  const closing = items.filter((item) => item.layout === "closing");

  return (
    <section aria-labelledby="screens-heading" className="border-t border-line">
      <div className="mx-auto max-w-[1180px] px-6 py-16 md:py-24">
        <h2 id="screens-heading" className="section-title max-w-[14ch]">
          {heading}
        </h2>
        {intro ? (
          <p className="mt-8 max-w-[48ch] text-[16px] leading-7 text-muted md:text-[17px] md:leading-8">
            {intro}
          </p>
        ) : null}
        <div className="mt-14 space-y-16 md:space-y-20">
          {feature.map((item) => (
            <ScreenFigure key={item.src} item={item} wide />
          ))}
          {pair.length > 0 ? (
            <div className="grid gap-10 md:grid-cols-2 md:gap-12 md:items-end">
              {pair.map((item) => (
                <ScreenFigure key={item.src} item={item} />
              ))}
            </div>
          ) : null}
          {closing.map((item) => (
            <ScreenFigure key={item.src} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ScreenFigure({
  item,
  wide,
}: {
  item: CaseStudyScreen;
  wide?: boolean;
}) {
  return (
    <figure className={wide ? "mx-auto max-w-[42rem]" : "min-w-0"}>
      {item.kicker ? (
        <p className="mb-4 text-[12px] tracking-[0.18em] text-brand uppercase">
          {item.kicker}
        </p>
      ) : null}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.src}
        alt={item.alt}
        width={item.width}
        height={item.height}
        loading={item.priority ? "eager" : "lazy"}
        decoding="async"
        className="case-study-screen"
      />
      <figcaption className="mt-4 max-w-[40ch] text-[14px] leading-6 text-muted md:text-[15px] md:leading-7">
        {item.caption}
      </figcaption>
    </figure>
  );
}
