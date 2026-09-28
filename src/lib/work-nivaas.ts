import { customSoftwarePath } from "@/lib/site";
import type { InHouseProduct } from "@/lib/work";

export const nivaasStudy: InHouseProduct = {
  kind: "inhouse",
  slug: "nivaas",
  number: "06",
  product: "Nivaas",
  eyebrow: "In-house product by Sayge",
  title: "Built because the problem deserved a better product.",
  seoTitle: "Nivaas | In-house Product | Sayge",
  seoDescription:
    "Nivaas is an in-house product built by Sayge. This page is about that product work — not a client engagement.",
  categories: ["In-house product", "Product engineering"],
  indexTitle: "In-house product",
  indexLine:
    "An in-house Sayge product. The implementation is not in this website repository, so this page does not invent the product.",
  logo: {
    src: "/nivaas.png",
    alt: "Nivaas",
    width: 196,
    height: 48,
  },
  heroSupport:
    "Nivaas is an in-house product from Sayge. It is not a client project. We will not invent features, a live URL or a product category that are not in a source we can inspect.",
  live: {
    heading: "Don't just read about it.",
    paragraphs: [
      "A public Nivaas application URL is not present in this website repository, and a Nivaas product codebase is not in the workspace we inspected. Until that source is available, this page will not send you to another product that happens to share the name.",
    ],
    note: "ClassLoop is an in-house Sayge product whose repository we could inspect. If you want to try something we actually built, start there.",
    secondaryLabel: "See how we think about in-house products",
    secondaryHref: "#how-we-built-it",
  },
  why: {
    lede: "We build some products because a client needs them. We build others because we want to understand a problem ourselves.",
    paragraphs: [
      "Nivaas belongs to the second category: an in-house Sayge product, not work done for another company.",
      "The detailed workflows, stack and live environment belong in the product repository. They are not invented here.",
    ],
  },
  problem: {
    heading: "01 / The problem",
    paragraphs: [
      "In-house products exist so we can sit with a problem long enough to make software for it — without a client brief filling in the gaps.",
      "Until we can inspect the Nivaas implementation, we will not describe a domain, a user, or a workflow we have not verified.",
    ],
  },
  idea: {
    heading: "02 / The product idea",
    paragraphs: [
      "The idea is the product itself: build it, use it, learn from the edges that only appear when something is real.",
      "This page is the public record that Nivaas is ours. It is not a substitute for the application.",
    ],
  },
  experience: {
    heading: "03 / The experience",
    paragraphs: [
      "Product screens, a try link and a walkthrough will be added from the actual Nivaas application when that source is in hand. We will not generate fictional UI.",
    ],
  },
  engineering: {
    heading: "04 / The engineering",
    paragraphs: [
      "Technical claims will follow the Nivaas codebase. This website repository only contains the Nivaas mark used on sayge.in.",
    ],
    bullets: [
      "in-house product, not a client delivery",
      "implementation not inspected in this workspace",
      "no invented architecture",
    ],
  },
  learnings: {
    heading: "05 / Building the product was part of the research.",
    paragraphs: [
      "What Nivaas taught us about users, workflow and technology should be written from the product, not from a guess. That section stays reserved until the source is available.",
    ],
    points: [
      "we build products ourselves, not only for clients",
      "we do not import another company's Nivaas",
      "we do not fill gaps with a market story",
    ],
  },
  commercial: {
    heading: "Why this matters if you're building your own product.",
    paragraphs: [
      "Nivaas is evidence that Sayge ships in-house work, not only client work. For a product you can open today, see ClassLoop — that repository was available to inspect.",
      "If you have a product of your own, the same muscle applies: understand the workflow, make the product concrete, make technical decisions, and keep refining the thing itself. That sits next to Sayge's custom software practice.",
    ],
  },
  pauseQuote:
    "The value is not an invented case study. The value is: we built this.",
  facts: [
    { label: "Project", value: "Nivaas" },
    { label: "Type", value: "In-house product" },
    {
      label: "Role",
      value: "Product strategy · Product engineering · Application development",
    },
    { label: "Status", value: "In-house product" },
    { label: "Focus", value: "In-house product (details from the product repo, not invented here)" },
  ],
  technologies: [],
  closing: {
    heading: "This one is ours.",
    lockup: "Nivaas · Sayge",
    paragraphs: [
      "Nivaas is an in-house Sayge product. When a verified live URL exists, it will be the primary action. Until then, explore ClassLoop or talk to us about a product of your own.",
    ],
    ctaLabel: "Build something with Sayge",
    ctaHref: "/contact",
    secondaryCta: {
      label: "See ClassLoop",
      href: "/work/classloop",
    },
  },
  relatedLinks: [
    { href: "/work/classloop", label: "ClassLoop" },
    { href: customSoftwarePath, label: "Custom software development" },
    { href: "/contact", label: "Contact" },
  ],
};
