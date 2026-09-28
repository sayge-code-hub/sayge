import { Reveal } from "@/components/Reveal";
import { siteEmail } from "@/lib/site";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-background"
    >
      <div className="mx-auto flex max-w-[1180px] flex-col gap-10 px-6 py-20 md:flex-row md:items-end md:justify-between md:py-28">
        <Reveal>
          <div className="accent-bar mb-6 h-[3px] w-10 bg-brand" />
          <h2 id="contact-heading" className="section-title max-w-xl">
            Tell us what you’re building.
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-7 text-muted">
            A product, an operations problem, or a team you need to stand up
            with care. We’ll come back with a clear, honest next step.
          </p>
        </Reveal>

        <Reveal delayMs={120} className="flex flex-col items-start gap-3 md:items-end">
          <a
            href={`mailto:${siteEmail}`}
            className="text-2xl tracking-tight text-foreground underline decoration-foreground/20 underline-offset-4 transition hover:decoration-brand hover:text-brand"
          >
            {siteEmail}
          </a>
          <p className="text-sm text-muted">A digital partner for humans</p>
        </Reveal>
      </div>
    </section>
  );
}
