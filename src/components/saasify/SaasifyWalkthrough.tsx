import { ProductPreview } from "@/components/saasify/SaasifyMocks";
import type { SaasifyStep } from "@/lib/saasify";

export function SaasifyWalkthrough({
  kind,
  steps,
}: {
  kind: "pos" | "hrms";
  steps: SaasifyStep[];
  side?: "left" | "right";
}) {
  return (
    <ol className="sf-steps">
      {steps.map((step, index) => (
        <li key={step.title} className="sf-card sf-lift p-4 sm:p-5">
          <ProductPreview kind={kind} state={index} />
          <p className="mt-4 text-[13px] font-semibold text-[#16a34a]">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-1 text-[18px] font-semibold tracking-tight">{step.title}</h3>
          <p className="mt-2 text-[15px] leading-6 text-[#6b7280]">{step.copy}</p>
        </li>
      ))}
    </ol>
  );
}
