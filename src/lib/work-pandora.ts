import { customSoftwarePath } from "@/lib/site";
import type { EngagementOverview, ProductCaseStudy } from "@/lib/work";

const pandoraLogo = {
  src: "/pandora-analytics.png",
  alt: "Pandora Analytics",
  width: 197,
  height: 53,
} as const;

const toolkitxPath = "pandora-analytics-toolkitx";
const petsPath = "pandora-analytics-pets-software";
const overviewPath = "pandora-analytics";

export const pandoraOverview: EngagementOverview = {
  kind: "engagement",
  slug: overviewPath,
  client: "Pandora Analytics",
  title: "Two products. Two very different engineering problems.",
  seoTitle: "Pandora Analytics | ToolKitX & Pets.Software | Sayge",
  seoDescription:
    "Sayge’s work with Pandora Analytics covered two product engineering problems: migrating the ToolKitX mobile application from Ionic to Flutter, and building Pets.Software from scratch in Flutter.",
  lede: "Our work with Pandora Analytics covered two very different product challenges.",
  paragraphs: [
    "One involved moving an established SaaS mobile application from Ionic to Flutter.",
    "The other started from a blank canvas—a new Flutter product built around the needs of animal breeders.",
    "The technology was different. The engineering problem was different. The approach had to be different too.",
  ],
  clientLogo: pandoraLogo,
  treeSummary:
    "Pandora Analytics is the client. Sayge’s engagement covered two products: ToolKitX, a mobile application migration from Ionic to Flutter, and Pets.Software, a Flutter product built from scratch.",
  products: [
    {
      slug: toolkitxPath,
      product: "ToolKitX",
      kindLabel: "Modernisation",
      line: "Ionic → Flutter",
    },
    {
      slug: petsPath,
      product: "Pets.Software",
      kindLabel: "Greenfield product engineering",
      line: "Built from scratch in Flutter",
    },
  ],
  relatedLinks: [
    { href: "/work", label: "Selected work" },
    { href: customSoftwarePath, label: "Custom software" },
  ],
};

export const toolkitxStudy: ProductCaseStudy = {
  kind: "product",
  slug: toolkitxPath,
  number: "02",
  client: "Pandora Analytics",
  product: "ToolKitX",
  parent: { name: "Pandora Analytics", slug: overviewPath },
  eyebrow: "Selected work / Pandora Analytics",
  title: "Moving an established SaaS application from Ionic to Flutter.",
  seoTitle:
    "Migrating ToolKitX from Ionic to Flutter | Pandora Analytics | Sayge",
  seoDescription:
    "How Sayge worked with Pandora Analytics to migrate the ToolKitX mobile application from Ionic to Flutter through a dedicated engineering engagement.",
  categories: [
    "Mobile Application Modernisation",
    "Ionic → Flutter",
    "Flutter Engineering",
  ],
  clientLogo: pandoraLogo,
  opening: {
    lede: "Replacing a technology stack is easy to describe. Migrating a real product is not.",
    paragraphs: [
      "ToolKitX was already an established SaaS product. Pandora Analytics engaged Sayge to migrate its mobile application from Ionic to Flutter.",
      "This was not a greenfield build. The work was to move an existing application onto a different technology foundation while preserving the product context and the functionality that already mattered.",
      "The ToolKitX mobile application was migrated from Ionic to Flutter. That is the scope of the engagement—not a claim about the wider ToolKitX platform.",
    ],
  },
  context: {
    heading: "An existing product, with a mobile application that had to move.",
    paragraphs: [
      "ToolKitX is publicly described as a SaaS platform for field workforce and operations management. The public product talks about areas such as field workforce management, project and workflow management, mobile support, location, analytics and collaboration.",
      "That context matters because it explains why a mobile application already existed, and why a migration had to respect journeys and behaviour that were already in use. It does not describe the work Sayge performed on the platform as a whole.",
      "Sayge worked with Pandora Analytics on the ToolKitX mobile application. The rest of the product remained Pandora Analytics’ responsibility.",
    ],
  },
  challenge: {
    heading: "The product already existed. The technology needed to move.",
    paragraphs: [
      "Migrating an established application is a different problem from starting a new one. There is already a product in the world. People already know how it behaves.",
      "The engineering team has to understand that product well enough to rebuild the mobile application in Flutter without treating the existing work as disposable.",
    ],
    bullets: [
      "existing functionality",
      "existing user journeys",
      "existing application behaviour",
      "dependencies between features",
      "existing UI and interaction patterns",
      "what needs to remain consistent",
      "what has to change because the new foundation is Flutter, not Ionic",
    ],
  },
  flow: {
    summary:
      "The ToolKitX mobile application moved from an existing Ionic implementation, through assessment of journeys, behaviour and functionality, into a Flutter migration, a Flutter mobile application, and continued product evolution.",
    steps: [
      {
        title: "Existing mobile application",
        detail: "Ionic",
      },
      {
        title: "Assessment",
        detail:
          "Existing journeys, existing behaviour, existing functionality",
      },
      {
        title: "Flutter migration",
      },
      {
        title: "Flutter mobile application",
      },
      {
        title: "Continued product evolution",
      },
    ],
  },
  work: {
    heading: "Moving the product, not just the screens.",
    paragraphs: [
      "The migration required understanding the existing application before rebuilding it in Flutter. Screens are the visible part. The work sits underneath: how journeys fit together, what the application already does, and what must still be true after the technology changes.",
      "Sayge worked with Pandora Analytics through that transfer of product knowledge—from the Ionic mobile application into a Flutter implementation of the same product context.",
    ],
    bullets: [
      "existing application analysis",
      "understanding user journeys",
      "mapping existing functionality",
      "implementing functionality in Flutter",
      "validating the migrated experience",
      "fixing issues discovered during migration",
      "stabilisation",
    ],
  },
  stats: [
    { value: "3–4", label: "Developers" },
    { value: "~6 months", label: "Engagement" },
  ],
  depth: {
    heading: "What a migration actually has to hold.",
    paragraphs: [
      "A framework change is not an overlay. Ionic and Flutter do not arrange work the same way. Functionality has to be translated, not copied as a picture of the old screens.",
      "The concerns that mattered here are the ones that belong to any serious mobile migration: keep the product recognisable, keep journeys continuous, and leave the new implementation stable enough to keep evolving.",
    ],
    bullets: [
      "preserving existing product behaviour",
      "translating existing mobile functionality into Flutter",
      "maintaining user journey continuity",
      "handling the differences between the two frameworks",
      "validating functionality during the migration",
      "stabilising the new implementation",
      "preparing the application for continued development",
    ],
  },
  pauseQuote:
    "A migration is not a rewrite of screens. It's a transfer of product knowledge from one technology foundation to another.",
  outcome: {
    paragraphs: [
      "The engagement moved the ToolKitX mobile application from Ionic to Flutter, giving Pandora Analytics a Flutter-based mobile implementation to continue evolving.",
    ],
  },
  facts: [
    { label: "Client", value: "Pandora Analytics" },
    { label: "Product", value: "ToolKitX" },
    { label: "Engagement", value: "Mobile application modernisation" },
    { label: "Starting technology", value: "Ionic" },
    { label: "Target technology", value: "Flutter" },
    { label: "Team", value: "3–4 developers" },
    { label: "Duration", value: "Approximately 6 months" },
    { label: "Focus", value: "Existing mobile application migration" },
    {
      label: "Sayge's role",
      value: "Mobile application migration from Ionic to Flutter",
    },
  ],
  technologies: ["Ionic", "Flutter"],
  closing: {
    heading: "Existing products deserve engineering decisions that respect what already works.",
    lockup: "Pandora Analytics · ToolKitX",
    paragraphs: [
      "The ToolKitX engagement was about more than moving from Ionic to Flutter. It was about taking an established mobile product forward while keeping the product itself at the centre of the migration.",
    ],
    ctaLabel: "Start a conversation",
    ctaHref: "/contact",
  },
  relatedLinks: [
    { href: "/work/pandora-analytics", label: "Pandora Analytics" },
    {
      href: "/work/pandora-analytics-pets-software",
      label: "Pets.Software",
    },
    { href: customSoftwarePath, label: "Custom software" },
  ],
};

export const petsStudy: ProductCaseStudy = {
  kind: "product",
  slug: petsPath,
  number: "03",
  client: "Pandora Analytics",
  product: "Pets.Software",
  parent: { name: "Pandora Analytics", slug: overviewPath },
  eyebrow: "Selected work / Pandora Analytics",
  title: "Building a new product from the ground up.",
  seoTitle:
    "Building Pets.Software From Scratch in Flutter | Pandora Analytics | Sayge",
  seoDescription:
    "How Sayge worked with Pandora Analytics to build Pets.Software from the ground up in Flutter, turning product requirements and real-world workflows into a digital application.",
  categories: [
    "Greenfield Product Engineering",
    "Flutter",
    "Mobile Application Development",
  ],
  clientLogo: pandoraLogo,
  opening: {
    lede: "There was no existing application to migrate. No legacy product to preserve.",
    paragraphs: [
      "Pandora Analytics engaged Sayge to build Pets.Software from scratch in Flutter.",
      "The engineering challenge was different from ToolKitX. Instead of translating an existing application from one technology stack to another, the team had to take the product requirements and workflows and turn them into a working application from the ground up.",
      "Sayge worked with Pandora Analytics to build Pets.Software. The product remains theirs.",
    ],
  },
  context: {
    heading: "A product shaped around real-world animal care workflows.",
    paragraphs: [
      "The public Pets.Software site describes functionality around animal records, veterinary information, vaccination history, medications, documents, appointments, scheduling and breeder-oriented workflows.",
      "Those areas are useful as product context. They describe the kind of work the application had to support. They are not a claim that Sayge invented the business requirements, or that Sayge owns or operates Pets.Software.",
    ],
  },
  challenge: {
    heading: "Starting with the product, not the technology.",
    paragraphs: [
      "Because the application was being built from scratch, the work began with understanding the product and the workflows behind it.",
      "Flutter was the implementation. It was not the starting point. The starting point was what the product needed people to be able to do.",
    ],
    bullets: [
      "application structure",
      "navigation",
      "user journeys",
      "screens",
      "data interactions",
      "business workflows",
      "Flutter implementation",
    ],
  },
  flow: {
    summary:
      "Pets.Software was engineered from product requirements through workflows, user journeys and product structure into a Flutter application, then features and business logic, and a working product.",
    steps: [
      { title: "Product requirements" },
      { title: "Workflows" },
      { title: "User journeys" },
      { title: "Product structure" },
      { title: "Flutter application" },
      { title: "Features + business logic" },
      { title: "Working product" },
    ],
  },
  work: {
    heading: "Turning product requirements into a working application.",
    paragraphs: [
      "Greenfield work looks empty at the beginning. It is not empty for long. Every decision about structure, navigation and data becomes part of how the product behaves later.",
      "Sayge worked with Pandora Analytics to take those requirements into Flutter—building the application rather than migrating one that already existed.",
    ],
    bullets: [
      "understanding the product and its workflows",
      "shaping application structure around those workflows",
      "building journeys people could actually complete",
      "implementing the product in Flutter",
    ],
  },
  pauseQuote:
    "When you're building from scratch, every technical decision becomes part of the product.",
  capabilities: {
    heading: "Turning real-world workflows into software.",
    intro:
      "Software in this kind of product has to represent activities, not only store records. The application needed to support areas such as:",
    items: [
      {
        title: "Animal records",
        copy: "A durable place for the information that follows an animal through the product.",
      },
      {
        title: "Health and veterinary information",
        copy: "Room for veterinary context to sit alongside the rest of the record, not off to one side.",
      },
      {
        title: "Documents",
        copy: "A way to keep documents with the work they belong to.",
      },
      {
        title: "Vaccinations and medications",
        copy: "Health events that have to be recorded, revisited and understood over time.",
      },
      {
        title: "Appointments and scheduling",
        copy: "Time-bound work that connects people, animals and the rest of the product.",
      },
    ],
  },
  contributions: {
    heading: "What Sayge contributed.",
    items: [
      {
        title: "Product Engineering",
        copy: "Turning product requirements into a working digital application.",
      },
      {
        title: "Flutter Development",
        copy: "Building the mobile application using Flutter.",
      },
      {
        title: "User Journeys",
        copy: "Translating defined workflows into usable application journeys.",
      },
      {
        title: "Application Structure",
        copy: "Creating the application structure needed to support the product's workflows.",
      },
      {
        title: "Product Evolution",
        copy: "Building a foundation that could continue to evolve with the product.",
      },
    ],
  },
  outcome: {
    paragraphs: [
      "Sayge worked with Pandora Analytics to create the Pets.Software application from scratch using Flutter.",
    ],
  },
  facts: [
    { label: "Client", value: "Pandora Analytics" },
    { label: "Product", value: "Pets.Software" },
    { label: "Engagement", value: "Greenfield product development" },
    { label: "Technology", value: "Flutter" },
    { label: "Starting point", value: "Built from scratch" },
    {
      label: "Focus",
      value: "Product engineering and mobile application development",
    },
    {
      label: "Sayge's role",
      value: "Greenfield product development in Flutter",
    },
  ],
  technologies: ["Flutter"],
  closing: {
    heading: "Good product engineering starts before the first screen is written.",
    lockup: "Pandora Analytics · Pets.Software",
    paragraphs: [
      "Pets.Software was an opportunity to take a product requirement, understand the workflows behind it and turn those workflows into a digital application from the ground up.",
    ],
    ctaLabel: "Start a conversation",
    ctaHref: "/contact",
  },
  relatedLinks: [
    { href: "/work/pandora-analytics", label: "Pandora Analytics" },
    { href: "/work/pandora-analytics-toolkitx", label: "ToolKitX" },
    { href: customSoftwarePath, label: "Custom software" },
  ],
};
