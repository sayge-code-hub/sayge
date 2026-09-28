import { customSoftwarePath } from "@/lib/site";
import { classloopStudy } from "@/lib/work-classloop";
import { co2existStudy } from "@/lib/work-co2exist";
import { nivaasStudy } from "@/lib/work-nivaas";
import {
  pandoraOverview,
  petsStudy,
  toolkitxStudy,
} from "@/lib/work-pandora";

export const workPath = "/work";

export type CaseStudyLink = {
  href: string;
  label: string;
};

export type CaseStudyLogo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type StaffingCaseStudy = {
  kind: "staffing";
  slug: string;
  number: string;
  client: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  categories: string[];
  logo?: CaseStudyLogo;
  relationship: {
    heading: string;
    lede: string;
    paragraphs: string[];
  };
  keepingPace: {
    heading: string;
    lede: string;
    paragraphs: string[];
    closing: string;
  };
  role: {
    heading: string;
    lede: string;
    paragraphs: string[];
    bullets: string[];
    pullQuote: string;
  };
  engagementModel?: {
    client: string;
    clientRole: string;
    partner: string;
    partnerRole: string;
    collaboration: string;
    outcomes: string[];
    summary: string;
  };
  process: {
    heading: string;
    steps: { n: string; title: string; copy: string }[];
  };
  pauseQuote?: string;
  contributions: {
    heading: string;
    items: { title: string; copy: string }[];
  };
  partnership: {
    heading: string;
    lede: string;
    points: string[];
    note?: string;
    statement: string;
  };
  learnings: {
    heading: string;
    lede: string;
    paragraphs: string[];
    pullQuote: string;
  };
  facts: { label: string; value: string }[];
  technologies: string[];
  closing: {
    heading: string;
    lockup: string;
    paragraphs: string[];
    ctaLabel: string;
    ctaHref: string;
  };
  relatedLinks: CaseStudyLink[];
};

export type ProductCaseStudy = {
  kind: "product";
  slug: string;
  number: string;
  client: string;
  product: string;
  eyebrow: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  categories: string[];
  indexTitle?: string;
  indexLine?: string;
  hideProduct?: boolean;
  clientLogo?: CaseStudyLogo;
  parent?: { name: string; slug: string };
  heroFacts?: { label: string; value: string }[];
  heroSupport?: string;
  liveProduct?: {
    heading: string;
    paragraphs: string[];
    ctaLabel: string;
    href: string;
    note?: string;
  };
  opening: {
    lede: string;
    paragraphs: string[];
  };
  context: {
    heading: string;
    paragraphs: string[];
    points?: string[];
  };
  challenge: {
    heading: string;
    paragraphs: string[];
    bullets: string[];
  };
  flow?: {
    summary: string;
    steps: { title: string; detail?: string }[];
  };
  work: {
    heading: string;
    paragraphs: string[];
    bullets: string[];
  };
  process?: {
    steps: { n: string; title: string; copy: string }[];
  };
  journey?: {
    summary: string;
    steps: { title: string; detail?: string }[];
  };
  loop?: {
    kicker: string;
    summary: string;
    steps: string[];
  };
  pickup?: {
    heading: string;
    intro: string;
    steps: { n: string; title: string; copy: string }[];
  };
  screens?: {
    heading: string;
    intro?: string;
    items: {
      src: string;
      alt: string;
      caption: string;
      kicker?: string;
      width: number;
      height: number;
      layout: "feature" | "pair" | "closing";
    }[];
  };
  stats?: { value: string; label: string }[];
  depth?: {
    heading: string;
    paragraphs: string[];
    bullets: string[];
  };
  pauseQuote: string;
  pauseQuoteKicker?: string;
  capabilities?: {
    heading: string;
    intro?: string;
    items: { title: string; copy: string }[];
  };
  contributions?: {
    heading: string;
    items: { title: string; copy: string }[];
  };
  delivery?: {
    heading: string;
    paragraphs: string[];
  };
  outcome: {
    heading?: string;
    paragraphs: string[];
  };
  facts: { label: string; value: string }[];
  technologies: string[];
  stack?: { label: string; value: string }[];
  closing: {
    heading: string;
    lockup: string;
    paragraphs: string[];
    ctaLabel: string;
    ctaHref: string;
    secondaryCta?: {
      label: string;
      href: string;
      external?: boolean;
    };
  };
  relatedLinks: CaseStudyLink[];
};

export type InHouseProduct = {
  kind: "inhouse";
  slug: string;
  number: string;
  product: string;
  eyebrow: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  categories: string[];
  indexTitle?: string;
  indexLine?: string;
  logo?: CaseStudyLogo;
  productUrl?: string;
  productCtaLabel?: string;
  heroSupport: string;
  live: {
    heading: string;
    paragraphs: string[];
    note?: string;
    ctaLabel?: string;
    secondaryLabel: string;
    secondaryHref: string;
  };
  why: {
    lede: string;
    paragraphs: string[];
  };
  problem: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  };
  idea: {
    heading: string;
    paragraphs: string[];
  };
  experience: {
    heading: string;
    paragraphs: string[];
  };
  workflow?: {
    summary: string;
    steps: { title: string; detail?: string }[];
  };
  roles?: {
    heading: string;
    intro: string;
    items: { title: string; copy: string }[];
  };
  feature?: {
    heading: string;
    paragraphs: string[];
    steps?: { title: string; detail?: string }[];
  };
  quizzes?: {
    heading: string;
    paragraphs: string[];
    steps?: { title: string; detail?: string }[];
  };
  engineering: {
    heading: string;
    paragraphs: string[];
    bullets: string[];
  };
  learnings: {
    heading: string;
    paragraphs: string[];
    points: string[];
  };
  commercial: {
    heading: string;
    paragraphs: string[];
  };
  midCta?: {
    heading: string;
    copy: string;
    ctaLabel: string;
  };
  pauseQuote: string;
  facts: { label: string; value: string }[];
  technologies: string[];
  stack?: { label: string; value: string }[];
  closing: {
    heading: string;
    lockup: string;
    paragraphs: string[];
    ctaLabel: string;
    ctaHref: string;
    secondaryCta?: {
      label: string;
      href: string;
      external?: boolean;
    };
  };
  relatedLinks: CaseStudyLink[];
};

export type EngagementOverview = {
  kind: "engagement";
  slug: string;
  client: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  lede: string;
  paragraphs: string[];
  clientLogo?: CaseStudyLogo;
  treeSummary: string;
  products: {
    slug: string;
    product: string;
    kindLabel: string;
    line: string;
  }[];
  relatedLinks: CaseStudyLink[];
};

export type CaseStudy = StaffingCaseStudy;
export type WorkDocument =
  | StaffingCaseStudy
  | ProductCaseStudy
  | InHouseProduct
  | EngagementOverview;

const mahindraFinance: StaffingCaseStudy = {
  kind: "staffing",
  slug: "mahindra-finance",
  number: "01",
  client: "Mahindra Finance",
  title: "Extending enterprise engineering capacity.",
  seoTitle:
    "Mahindra Finance | Enterprise Engineering & Technology Staffing | Sayge",
  seoDescription:
    "How Sayge works with Mahindra Finance as a technology and staffing partner, providing Flutter engineering capacity for feature development, user journeys and ongoing application maintenance.",
  categories: [
    "Technology Staffing",
    "Flutter Engineering",
    "Product Development",
  ],
  logo: {
    src: "/mahindra-finance.png",
    alt: "Mahindra Finance",
    width: 884,
    height: 124,
  },
  relationship: {
    heading: "The relationship",
    lede: "Some technology partnerships begin with a blank screen. This one didn't.",
    paragraphs: [
      "Mahindra Finance already had a digital product, an established engineering organisation and a roadmap that continued to grow.",
      "What they needed was additional engineering capacity—people who could step into an existing environment, understand how the product worked and contribute without creating another layer of complexity.",
      "That's where Sayge came in.",
      "Sayge works with Mahindra Finance as a technology and staffing partner, providing Flutter engineers who work alongside the core engineering team on the continued development and maintenance of its digital application.",
    ],
  },
  keepingPace: {
    heading: "Keeping pace with a product that keeps moving.",
    lede: "A live financial application is never really finished.",
    paragraphs: [
      "Requirements change. Journeys that felt settled get rewritten. New work has to land in an application people already use.",
      "And the parts that shipped last quarter still need looking after. The team has to keep building without letting what already exists go stale.",
    ],
    closing:
      "For Mahindra Finance, the need wasn't simply for more people. It was for engineers who could become productive within an existing product and engineering environment.",
  },
  role: {
    heading: "An engineering team within the engineering team.",
    lede: "Sayge's Flutter developers work alongside Mahindra Finance's core engineering organisation.",
    paragraphs: [
      "They do not operate as an isolated “Sayge project.”",
      "They contribute to the actual product by:",
    ],
    bullets: [
      "understanding requirements",
      "implementing features",
      "working through user journeys",
      "supporting the application as it evolves",
      "contributing to ongoing maintenance",
    ],
    pullQuote:
      "The value of an engineering partner isn't just how quickly someone can write code. It's how effectively they can understand an existing product, work within its ways of working and become part of the team responsible for keeping it moving.",
  },
  engagementModel: {
    client: "Mahindra Finance",
    clientRole: "Core product & engineering",
    partner: "Sayge",
    partnerRole: "Flutter engineering",
    collaboration: "Collaboration",
    outcomes: ["Features", "User journeys", "Maintenance"],
    summary:
      "Sayge Flutter engineers collaborate with Mahindra Finance's core product and engineering organisation on features, user journeys and maintenance, rather than working as an isolated vendor team.",
  },
  process: {
    heading: "From requirement to release.",
    steps: [
      {
        n: "01",
        title: "Understand",
        copy: "Understand the requirement, the user journey and where the change belongs in the existing product.",
      },
      {
        n: "02",
        title: "Build",
        copy: "Implement the required functionality in Flutter within the existing application.",
      },
      {
        n: "03",
        title: "Integrate",
        copy: "Make sure the new functionality works with the rest of the product rather than behaving like an isolated feature.",
      },
      {
        n: "04",
        title: "Refine",
        copy: "Address changes, fixes and improvements as the work moves through development.",
      },
      {
        n: "05",
        title: "Maintain",
        copy: "Continue supporting the application after individual features are released.",
      },
    ],
  },
  pauseQuote:
    "The best external engineers shouldn't feel external for long.",
  contributions: {
    heading: "What Sayge contributes.",
    items: [
      {
        title: "Flutter Engineering",
        copy: "Developing and enhancing mobile application functionality using Flutter.",
      },
      {
        title: "Feature Development",
        copy: "Taking defined product requirements and translating them into working application features.",
      },
      {
        title: "User Journeys",
        copy: "Building and improving journeys that connect multiple features and interactions within the application.",
      },
      {
        title: "Maintenance & Evolution",
        copy: "Supporting the application beyond individual releases as requirements and product needs change.",
      },
      {
        title: "Engineering Staffing",
        copy: "Providing specialised Flutter developers who work as part of the wider engineering organisation.",
      },
    ],
  },
  partnership: {
    heading:
      "More engineering capacity. Without creating another engineering island.",
    lede: "Bringing in an external team can sometimes create another layer between the people building the product and the people responsible for it.",
    points: [
      "Engineers work within the existing engineering environment.",
      "They collaborate with the wider team.",
      "They contribute directly to product development.",
      "They work within the existing product context.",
    ],
    note: "The shape of the work is dedicated Flutter capacity inside the organisation—engineering team augmentation, not a separate delivery track.",
    statement:
      "The result is not simply additional hands. It's additional engineering capacity that can fit into an existing team.",
  },
  learnings: {
    heading: "What this engagement taught us.",
    lede: "Enterprise engineering is rarely about building something once and walking away.",
    paragraphs: [
      "Products evolve continuously.",
      "Technology has to evolve with them.",
      "Our work with Mahindra Finance has given Sayge experience working within that reality—where feature development, user experience, maintenance and engineering capacity all exist at the same time.",
    ],
    pullQuote:
      "It's also shaped how we think about technology staffing: the best external engineers shouldn't feel external for long.",
  },
  facts: [
    { label: "Client", value: "Mahindra Finance" },
    {
      label: "Engagement",
      value: "Technology & staffing partnership",
    },
    { label: "Sayge's role", value: "Flutter engineering" },
    {
      label: "Focus",
      value: "Feature development, user journeys & maintenance",
    },
    {
      label: "Team model",
      value: "Engineers working alongside the core engineering team",
    },
    { label: "Engagement", value: "Ongoing" },
  ],
  technologies: ["Flutter", "Dart", "Mobile Engineering"],
  closing: {
    heading: "Engineering partnerships should make the existing team stronger.",
    lockup: "Mahindra Finance × Sayge",
    paragraphs: [
      "That's the role Sayge continues to play with Mahindra Finance—bringing additional engineering capability into an established product environment and contributing to the work that keeps the product moving forward.",
    ],
    ctaLabel: "Start a conversation",
    ctaHref: "/contact",
  },
  relatedLinks: [
    {
      href: customSoftwarePath,
      label: "Custom software",
    },
  ],
};

const workDocuments: WorkDocument[] = [
  mahindraFinance,
  pandoraOverview,
  toolkitxStudy,
  petsStudy,
  co2existStudy,
  classloopStudy,
  nivaasStudy,
];

export const workTitle = "Selected Work | Sayge";
export const workDescription =
  "Selected work from Sayge. Different businesses. Different problems. One approach: technology built around the work it needs to do.";

export function getWorkDocuments() {
  return workDocuments;
}

export function getWorkDocument(slug: string) {
  return workDocuments.find((doc) => doc.slug === slug);
}

export function getCaseStudies() {
  return workDocuments.filter(
    (
      doc,
    ): doc is StaffingCaseStudy | ProductCaseStudy | InHouseProduct =>
      doc.kind === "staffing" ||
      doc.kind === "product" ||
      doc.kind === "inhouse",
  );
}

export function getCaseStudy(slug: string) {
  const doc = getWorkDocument(slug);
  if (!doc || doc.kind === "engagement") return undefined;
  return doc;
}

export function isStaffingStudy(
  doc: WorkDocument,
): doc is StaffingCaseStudy {
  return doc.kind === "staffing";
}

export function isProductStudy(doc: WorkDocument): doc is ProductCaseStudy {
  return doc.kind === "product";
}

export function isInHouseProduct(doc: WorkDocument): doc is InHouseProduct {
  return doc.kind === "inhouse";
}

export function isEngagementOverview(
  doc: WorkDocument,
): doc is EngagementOverview {
  return doc.kind === "engagement";
}

export function workIndexLabel(
  doc: StaffingCaseStudy | ProductCaseStudy | InHouseProduct,
) {
  if (doc.kind === "inhouse") return doc.product;
  if (doc.kind === "product" && !doc.hideProduct && doc.product !== doc.client) {
    return `${doc.client} · ${doc.product}`;
  }
  return doc.client;
}

export function workIndexTitle(
  doc: StaffingCaseStudy | ProductCaseStudy | InHouseProduct,
) {
  if (doc.kind === "inhouse" && doc.indexTitle) return doc.indexTitle;
  if (doc.kind === "product" && doc.indexTitle) return doc.indexTitle;
  return doc.title;
}

export function workIndexLine(
  doc: StaffingCaseStudy | ProductCaseStudy | InHouseProduct,
) {
  if (doc.kind === "inhouse" && doc.indexLine) return doc.indexLine;
  if (doc.kind === "product" && doc.indexLine) return doc.indexLine;
  return doc.categories.join(" · ");
}

export function caseStudyPath(slug: string) {
  return `${workPath}/${slug}`;
}

export function workBreadcrumb(doc: WorkDocument): { name: string; path: string }[] {
  const home = { name: "Home", path: "/" };
  const work = { name: "Selected Work", path: workPath };

  if (doc.kind === "staffing") {
    return [home, work, { name: doc.client, path: caseStudyPath(doc.slug) }];
  }

  if (doc.kind === "engagement") {
    return [home, work, { name: doc.client, path: caseStudyPath(doc.slug) }];
  }

  if (doc.kind === "inhouse") {
    return [home, work, { name: doc.product, path: caseStudyPath(doc.slug) }];
  }

  if (doc.parent) {
    return [
      home,
      work,
      { name: doc.parent.name, path: caseStudyPath(doc.parent.slug) },
      { name: doc.product, path: caseStudyPath(doc.slug) },
    ];
  }

  return [home, work, { name: doc.client, path: caseStudyPath(doc.slug) }];
}
