import { Reveal } from "@/components/Reveal";

const stats = [
  { value: "Partner", label: "Not a vendor. We stay in the work with you." },
  { value: "Care", label: "For users, operators, and the teams we place." },
  { value: "Stewardship", label: "From first brief through living systems." },
];

export function People() {
  return (
    <section
      id="people"
      aria-labelledby="people-heading"
      className="bg-ink text-white"
    >
      <div className="mx-auto max-w-[1180px] px-6 py-20 md:py-28">
        <Reveal>
          <div className="accent-bar mb-6 h-[3px] w-10 bg-brand" />
          <h2 id="people-heading" className="section-title max-w-3xl">
            Measured by trust, not by tickets.
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-7 text-white/55">
            We work with operators who need more than a supplier. Sayge is a
            digital partner for products, internal systems, and the people who
            run them — ethically, patiently, and in the open.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-10 border-t border-white/10 pt-12 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delayMs={i * 90}>
              <p className="text-[28px] tracking-tight">{stat.value}</p>
              <p className="mt-2 text-sm leading-6 text-white/50">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
