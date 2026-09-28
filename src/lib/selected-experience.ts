import { caseStudyPath } from "@/lib/work";

export const selectedExperienceLogos = [
  {
    src: "/mahindra-finance.png",
    alt: "Mahindra Finance",
    width: 884,
    height: 124,
    href: caseStudyPath("mahindra-finance"),
  },
  {
    src: "/classloop.png",
    alt: "ClassLoop",
    width: 252,
    height: 62,
    href: caseStudyPath("classloop"),
  },
  {
    src: "/pandora-analytics.png",
    alt: "Pandora Analytics",
    width: 197,
    height: 53,
    href: caseStudyPath("pandora-analytics"),
  },
  {
    src: "/co2exist.png",
    alt: "CO2Exist",
    width: 279,
    height: 81,
    href: caseStudyPath("co2-exist"),
  },
  {
    src: "/nivaas.png",
    alt: "Nivaas",
    width: 196,
    height: 48,
    href: caseStudyPath("nivaas"),
  },
  {
    src: "/saasify.png",
    alt: "Saasify",
    width: 599,
    height: 180,
  },
] as const;
