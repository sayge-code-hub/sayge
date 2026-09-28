type EngagementModelProps = {
  client: string;
  clientRole: string;
  partner: string;
  partnerRole: string;
  collaboration: string;
  outcomes: string[];
  summary: string;
};

export function EngagementModel({
  client,
  clientRole,
  partner,
  partnerRole,
  collaboration,
  outcomes,
  summary,
}: EngagementModelProps) {
  return (
    <figure className="min-w-0">
      <figcaption className="sr-only">{summary}</figcaption>
      <div className="grid min-w-0 gap-0 border border-line lg:grid-cols-[minmax(0,1fr)_minmax(7.5rem,auto)_minmax(0,1.15fr)]">
        <div className="min-w-0 px-6 py-8 md:px-8 md:py-10">
          <p className="text-[11px] tracking-[0.18em] text-muted uppercase">
            {client}
          </p>
          <p className="mt-4 font-display text-[26px] leading-snug tracking-tight md:text-[32px]">
            {clientRole}
          </p>
        </div>

        <div className="flex min-w-0 flex-col items-center justify-center border-t border-line px-6 py-5 lg:border-t-0 lg:border-x lg:px-4">
          <span
            aria-hidden="true"
            className="hidden h-px w-10 bg-brand lg:block"
          />
          <p className="text-[11px] tracking-[0.16em] text-brand uppercase">
            {collaboration}
          </p>
          <span aria-hidden="true" className="mt-3 text-brand lg:hidden">
            ↓
          </span>
          <span
            aria-hidden="true"
            className="mt-3 hidden h-px w-10 bg-brand lg:mt-4 lg:block"
          />
        </div>

        <div className="min-w-0 border-t border-line px-6 py-8 md:px-8 md:py-10 lg:border-t-0">
          <p className="text-[11px] tracking-[0.18em] text-muted uppercase">
            {partner}
          </p>
          <p className="mt-4 font-display text-[26px] leading-snug tracking-tight md:text-[32px]">
            {partnerRole}
          </p>
          <ul className="mt-8 flex min-w-0 flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-2">
            {outcomes.map((item) => (
              <li
                key={item}
                className="text-[15px] tracking-tight text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </figure>
  );
}
