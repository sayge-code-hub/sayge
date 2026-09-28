type WorkLoopProps = {
  kicker: string;
  summary: string;
  steps: string[];
};

export function WorkLoop({ kicker, summary, steps }: WorkLoopProps) {
  return (
    <figure className="min-w-0">
      <p className="text-[12px] tracking-[0.18em] text-muted uppercase">
        {kicker}
      </p>
      <figcaption className="sr-only">{summary}</figcaption>
      <ol className="work-loop mt-8">
        {steps.map((step, i) => (
          <li key={step} className="work-loop-step">
            <p className="text-[12px] tracking-[0.18em] text-brand">
              {String(i + 1).padStart(2, "0")}
            </p>
            <p className="mt-2 font-display text-[20px] leading-snug tracking-tight md:text-[22px]">
              {step}
            </p>
            {i < steps.length - 1 ? (
              <span className="work-flow-arrow" aria-hidden="true">
                ↓
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </figure>
  );
}
