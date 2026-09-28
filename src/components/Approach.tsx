import { Reveal } from "@/components/Reveal";

const principles = [
  {
    title: "Dignity before delivery",
    copy: "Every decision has a person on the other side of it. We design for that person first — then for the deadline.",
  },
  {
    title: "Build what you can stand behind",
    copy: "No throwaway demos, no hidden lock-in. We leave systems that the next team can understand, own, and improve.",
  },
  {
    title: "Stay after launch",
    copy: "Partnership is the work after the applause: care, honesty when something is wrong, and the patience to get it right.",
  },
];

const steps = [
  { n: "01", label: "Listen", detail: "Context, constraints, and who is affected." },
  { n: "02", label: "Align", detail: "A plan we can defend — technically and ethically." },
  { n: "03", label: "Build", detail: "Shipped in slices, with quality that holds under load." },
  { n: "04", label: "Steward", detail: "We stay, staff, or hand over with the same care." },
];

export function Approach() {
  return (
    <section
      id="values"
      aria-labelledby="values-heading"
      className="bg-background"
    >
      <div className="mx-auto grid max-w-[1180px] gap-16 px-6 py-20 md:grid-cols-2 md:gap-20 md:py-28">
        <Reveal>
          <div className="accent-bar mb-6 h-[3px] w-10 bg-brand" />
          <h2 id="values-heading" className="section-title mb-6">
            What we hold to
          </h2>
          <p className="max-w-md text-[15px] leading-7 text-muted">
            Sayge is a digital partner for companies that want software with a
            conscience. We combine craft with care — so what you launch is still
            something you can be proud of a year later.
          </p>
        </Reveal>

        <div className="space-y-10">
          {principles.map((item, i) => (
            <Reveal key={item.title} delayMs={i * 90} className="border-t border-line pt-6">
              <h3 className="text-lg tracking-tight">{item.title}</h3>
              <p className="mt-3 max-w-md text-[15px] leading-7 text-muted">
                {item.copy}
              </p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto grid max-w-[1180px] sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal
              key={step.n}
              delayMs={i * 80}
              className={`px-6 py-10 ${i !== 0 ? "border-t border-line sm:border-t-0 sm:border-l" : ""}`}
            >
              <p className="text-[12px] tracking-[0.18em] text-brand">{step.n}</p>
              <h3 className="mt-4 text-xl tracking-tight">{step.label}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{step.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
