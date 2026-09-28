type WorkFlowProps = {
  steps: { title: string; detail?: string }[];
  summary: string;
};

export function WorkFlow({ steps, summary }: WorkFlowProps) {
  return (
    <figure className="min-w-0">
      <figcaption className="sr-only">{summary}</figcaption>
      <ol className="work-flow">
        {steps.map((step, i) => (
          <li key={step.title} className="work-flow-step">
            <p className="text-[12px] tracking-[0.18em] text-brand">
              {String(i + 1).padStart(2, "0")}
            </p>
            <p className="mt-3 font-display text-[22px] leading-snug tracking-tight md:text-[24px]">
              {step.title}
            </p>
            {step.detail ? (
              <p className="mt-2 max-w-[28ch] text-[14px] leading-6 text-muted">
                {step.detail}
              </p>
            ) : null}
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
