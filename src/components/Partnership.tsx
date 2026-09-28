import { Reveal } from "@/components/Reveal";

const practices = [
  {
    name: "Mobile apps",
    kicker: "Close to people",
    copy: "iOS and Android products designed around real lives — private by default, honest about what they collect, and built to last.",
  },
  {
    name: "Websites",
    kicker: "Clear on the web",
    copy: "Sites and portals that respect attention. No dark patterns. Language people can trust, and experiences they can actually use.",
  },
  {
    name: "Custom ERP",
    kicker: "Fair operations",
    copy: "Internal systems shaped around how your teams work — so software serves people, not the other way around.",
  },
  {
    name: "SaaS products",
    kicker: "Held to a standard",
    copy: "Products we will still stand behind a year later: accessible, well-owned, and designed for the humans who depend on them.",
  },
  {
    name: "Automations",
    kicker: "Less grind",
    copy: "We remove repetitive work so people can do the work that needs judgment. Automation with a human still in the loop.",
  },
  {
    name: "HR staffing",
    kicker: "People, not fill",
    copy: "Embedded talent and teams placed with care — matching skill, culture, and dignity, not just a vacant seat.",
  },
];

export function Partnership() {
  return (
    <section
      id="partnership"
      aria-labelledby="partnership-heading"
      className="bg-ink text-white"
    >
      <div className="mx-auto max-w-[1180px] px-6 py-20 md:py-28">
        <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-xl">
            <div className="accent-bar mb-6 h-[3px] w-10 bg-brand" />
            <h2 id="partnership-heading" className="section-title">
              A digital partner
            </h2>
          </Reveal>
          <Reveal delayMs={120} className="max-w-md">
            <p className="text-[15px] leading-7 text-white/55">
              We don’t drop in, ship, and vanish. We stay with software, systems,
              and the people who run them — as a long relationship, not a ticket
              queue.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {practices.map((item, i) => (
            <Reveal key={item.name} delayMs={i * 70} as="article">
              <div className="group flex min-h-[340px] flex-col bg-[#1c1c1c] p-8 transition duration-500 hover:-translate-y-1 hover:bg-[#242424]">
                <p className="text-[11px] tracking-[0.16em] text-white/40 uppercase">
                  {item.kicker}
                </p>
                <h3 className="mt-12 text-[30px] leading-none tracking-tight">
                  {item.name}
                </h3>
                <p className="mt-auto max-w-[34ch] pt-10 text-sm leading-6 text-white/55">
                  {item.copy}
                </p>
                <div className="mt-6 h-px w-10 bg-white/20 transition-all duration-500 group-hover:w-16 group-hover:bg-brand" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
