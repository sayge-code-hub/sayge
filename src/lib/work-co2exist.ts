import { customSoftwarePath } from "@/lib/site";
import type { ProductCaseStudy } from "@/lib/work";

const co2existUrl = "https://www.co2exist.com/";

export const co2existStudy: ProductCaseStudy = {
  kind: "product",
  slug: "co2-exist",
  number: "03",
  client: "CO2Exist",
  product: "CO2Exist App",
  hideProduct: true,
  indexTitle: "End-to-End Product Engineering",
  indexLine:
    "Building a digital platform connecting sustainability participation, carbon-footprint tracking and waste collection workflows.",
  eyebrow:
    "End-to-End Product Development · Mobile Application · Sustainability Technology",
  title: "Building a digital platform for everyday sustainability.",
  seoTitle:
    "CO2Exist | Sustainability Platform & Product Engineering | Sayge",
  seoDescription:
    "How Sayge built CO2Exist as an end-to-end digital product, connecting carbon-footprint tracking, sustainability participation and waste collection workflows.",
  categories: [
    "End-to-End Product Development",
    "Mobile Application",
    "Sustainability Technology",
  ],
  clientLogo: {
    src: "/co2exist.png",
    alt: "CO2Exist",
    width: 279,
    height: 81,
  },
  heroFacts: [
    { label: "Client", value: "CO2Exist" },
    { label: "Engagement", value: "End-to-end product development" },
    { label: "Role", value: "Product engineering and application development" },
  ],
  heroSupport:
    "Sayge worked with CO2Exist to turn sustainability-focused product requirements into a working digital application—connecting participation, carbon-footprint tracking and waste-collection workflows into a single product experience.",
  liveProduct: {
    heading: "See CO2Exist in context.",
    paragraphs: [
      "Some products are easier to understand when you can experience them. Explore the current CO2Exist platform, then come back to see how the digital experience was approached.",
    ],
    note: "The public site is a reference for the product in context. It may have evolved after this one-time delivery, and it does not define the exact scope of the application Sayge delivered.",
    ctaLabel: "Explore CO2Exist",
    href: co2existUrl,
  },
  opening: {
    lede: "Some software projects start with a detailed specification. Others start with a problem that needs to become a product.",
    paragraphs: [
      "CO2Exist came from the second kind of problem.",
      "The idea was to create a digital experience that could connect sustainability behaviour with practical action—from understanding an individual's carbon footprint to taking part in waste collection and other environmental initiatives.",
      "As a one-time product development engagement, Sayge worked with CO2Exist to turn that idea into the CO2Exist App, covering the product experience from the user's first interaction through the operational workflows behind it.",
    ],
  },
  context: {
    heading: "One experience, multiple sustainability workflows.",
    paragraphs: [
      "The delivered application had to hold more than a single idea. Carbon-footprint information, everyday participation, waste collection, scheduling and a way to see what had happened all needed to live in one product.",
      "CO2Exist as a company also works more widely across climate solutions, carbon markets and circular-economy initiatives. That wider activity is theirs. This case study is about the application Sayge delivered—not every capability now visible on the public CO2Exist website.",
    ],
    points: [
      "Carbon footprint",
      "Sustainability participation",
      "Waste collection / pickup",
      "Scheduling",
      "Impact / participation tracking",
      "Environmental initiatives included in the delivered product",
    ],
  },
  challenge: {
    heading:
      "Turning sustainability intent into something people can actually participate in.",
    paragraphs: [
      "The challenge was not simply displaying sustainability information. Intent is easy. The next step is harder: what to measure, what to do, and how a collection actually gets booked.",
      "The product needed to turn environmental participation into understandable digital workflows, then connect those workflows so they felt like one experience rather than a set of disconnected screens.",
    ],
    bullets: [
      "understand their footprint",
      "take part in sustainability activities",
      "arrange waste collection",
      "see the relevant status and information",
      "join environmental initiatives included in the product",
    ],
  },
  work: {
    heading: "From requirements to product.",
    paragraphs: [
      "Sayge worked across the product delivery rather than implementing isolated screens. The engagement focused on turning requirements and user needs into application structure, then into working journeys.",
      "The work ran from understanding the product through to handing over a completed digital application.",
    ],
    bullets: [],
  },
  process: {
    steps: [
      {
        n: "01",
        title: "Understand",
        copy: "Understand the product requirements, user needs and operational workflows.",
      },
      {
        n: "02",
        title: "Structure",
        copy: "Translate those requirements into application flows, information architecture and user journeys.",
      },
      {
        n: "03",
        title: "Build",
        copy: "Implement the application screens, navigation and behaviour the product needed.",
      },
      {
        n: "04",
        title: "Connect",
        copy: "Connect related sustainability workflows so footprint, participation and collection belonged to the same experience.",
      },
      {
        n: "05",
        title: "Deliver",
        copy: "Bring the completed product together as a working digital application for the client.",
      },
    ],
  },
  loop: {
    kicker: "Conceptual digital workflow",
    summary:
      "A conceptual digital workflow: user, sustainable action, collection or participation, impact, then back to the user and community. This describes the product experience, not a physical supply chain operated by Sayge.",
    steps: [
      "User",
      "Sustainable action",
      "Collection / participation",
      "Impact",
      "User / community",
    ],
  },
  pickup: {
    heading: "From waste at home to a scheduled collection.",
    intro:
      "The software supports a collection workflow. Sayge does not operate the physical collection or manage waste recovery. The application is how participation is arranged and followed in the product.",
    steps: [
      {
        n: "01",
        title: "Separate the material",
        copy: "The journey starts with material that is ready to be collected.",
      },
      {
        n: "02",
        title: "Book a pickup",
        copy: "The application lets a user schedule a collection.",
      },
      {
        n: "03",
        title: "Collection",
        copy: "The booked pickup is the operational step the software is built to support.",
      },
      {
        n: "04",
        title: "Recovery / processing",
        copy: "Recovery sits in the wider circular workflow. The product provides the digital connection, not the physical operation.",
      },
    ],
  },
  depth: {
    heading: "The engineering challenge was in the connections.",
    paragraphs: [
      "The product was not a collection of independent screens. Requirements had to become journeys, journeys had to become navigation, and related sustainability workflows had to behave as one application.",
      "The engineering work was translating that product into application structure and behaviour—then delivering a working mobile product—without treating each workflow as a separate mini-app.",
    ],
    bullets: [
      "translating product requirements into application workflows",
      "structuring user journeys",
      "designing application screens and navigation",
      "connecting related sustainability workflows",
      "implementing application behaviour",
      "building the mobile product",
      "delivering the working application",
    ],
  },
  pauseQuote:
    "The difficult part wasn't putting sustainability features into an app. It was making them work together as one experience.",
  capabilities: {
    heading: "What the product brings together.",
    items: [
      {
        title: "Carbon footprint",
        copy: "Helping users understand and track their carbon footprint.",
      },
      {
        title: "Waste collection",
        copy: "Supporting participation in waste collection workflows.",
      },
      {
        title: "Pickup scheduling",
        copy: "Allowing users to schedule a collection.",
      },
      {
        title: "Sustainability actions",
        copy: "Supporting everyday sustainability participation.",
      },
      {
        title: "Impact tracking",
        copy: "Providing visibility into participation and environmental activity.",
      },
      {
        title: "Environmental initiatives",
        copy: "Supporting activities such as tree planting where they were included in the delivered product.",
      },
    ],
  },
  delivery: {
    heading: "A complete product delivery.",
    paragraphs: [
      "Sayge delivered the digital application as a one-time end-to-end product development engagement, taking the product from requirements and user journeys through application development and delivery.",
    ],
  },
  outcome: {
    heading:
      "A working digital product for sustainability participation.",
    paragraphs: [
      "CO2Exist received a working digital product designed to make sustainability participation more accessible through connected digital workflows.",
    ],
  },
  facts: [
    { label: "Client", value: "CO2Exist" },
    { label: "Engagement", value: "End-to-End Product Development" },
    {
      label: "Role",
      value: "Product Engineering · Application Development",
    },
    { label: "Delivery", value: "One-Time Project" },
    {
      label: "Focus",
      value:
        "Sustainability Platform · Carbon Footprint · Digital Participation · Waste Collection",
    },
    { label: "Status", value: "Delivered" },
  ],
  technologies: [],
  closing: {
    heading: "Building something that needs to work in the real world?",
    lockup: "Built for CO2Exist",
    paragraphs: [
      "Tell us what you're trying to build. We'll help you work through the product, technology and engineering decisions behind it.",
    ],
    ctaLabel: "Start a conversation",
    ctaHref: "/contact",
    secondaryCta: {
      label: "Explore CO2Exist",
      href: co2existUrl,
      external: true,
    },
  },
  relatedLinks: [
    { href: customSoftwarePath, label: "Custom software development" },
    { href: "/contact", label: "Contact" },
  ],
};
