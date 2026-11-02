import type { Metadata } from "next";
import {
  absoluteUrl,
  ogImage,
  portalUrl,
  siteEmail,
  siteName,
  siteUrl,
} from "@/lib/site";

export const saasifyName = "SaaSify";

export const saasifyPath = {
  overview: "/saasify",
  hrms: "/saasify/hrms",
  dms: "/saasify/dms",
  finances: "/saasify/finances",
  pos: "/saasify/pos",
  assets: "/saasify/asset-management",
  checklist: "/saasify/digital-checklist",
  legal: "/saasify/legal-notice",
  privacy: "/saasify/privacy",
  contact: "/contact",
} as const;

export const saasifyRoutes = [
  saasifyPath.overview,
  saasifyPath.hrms,
  saasifyPath.dms,
  saasifyPath.finances,
  saasifyPath.pos,
  saasifyPath.assets,
  saasifyPath.checklist,
  saasifyPath.legal,
  saasifyPath.privacy,
] as const;

/** Existing product login. New access is arranged by the Sayge team. */
export const saasifyLogin = {
  href: portalUrl,
  label: "Log in",
} as const;

export const saasifyNav = [
  { href: `${saasifyPath.overview}#hero`, label: "Home" },
  { href: `${saasifyPath.overview}#modules`, label: "Modules" },
  { href: `${saasifyPath.overview}#reach-out`, label: "Get brochure" },
] as const;

export type SaasifyLink = {
  href: string;
  label: string;
};

export type SaasifyFaq = {
  question: string;
  answer: string;
};

export type SaasifyFeature = {
  title: string;
  copy: string;
};

export type SaasifyStep = {
  title: string;
  copy: string;
};

const posEnquiry = `mailto:${siteEmail}?subject=${encodeURIComponent("SaaSify POS — get started")}`;
const hrmsEnquiry = `mailto:${siteEmail}?subject=${encodeURIComponent("SaaSify HRMS — get started")}`;
const dmsEnquiry = `mailto:${siteEmail}?subject=${encodeURIComponent("SaaSify DMS — get started")}`;
const financesEnquiry = `mailto:${siteEmail}?subject=${encodeURIComponent("SaaSify Finances — get started")}`;
const assetsEnquiry = `mailto:${siteEmail}?subject=${encodeURIComponent("SaaSify Asset Management — get started")}`;
const checklistEnquiry = `mailto:${siteEmail}?subject=${encodeURIComponent("SaaSify Digital Checklist — get started")}`;

export const saasifyOverview = {
  meta: {
    title: "SaaSify by Sayge | Business software for daily operations",
    description:
      "SaaSify is business software for a small business, from Sayge. ₹49 a month. Human resources, documents, finances, point of sale, assets, and checklists.",
    path: saasifyPath.overview,
  },
  title: "Business runs better with SaaSify.",
  lede: "The software a small business can run. ₹49 or $9 per month.",
  primary: { href: "#reach-out", label: "Get started" },
  secondary: { href: "#modules", label: "See the modules" },
  products: [
    {
      href: saasifyPath.hrms,
      kicker: "HRMS",
      title: "Human Resources (HRMS)",
      copy: "Employee directory, profiles, compensation, and the view an invited employee has of their own record.",
      points: ["All employees", "Add an employee", "Salary slips on the profile"],
    },
    {
      href: saasifyPath.dms,
      kicker: "DMS",
      title: "Document Management (DMS)",
      copy: "A document library grouped by employees, clients, vendors, and candidates.",
      points: ["Attach files", "Open them from the record", "Add a vendor or candidate"],
    },
    {
      href: saasifyPath.finances,
      kicker: "Finances",
      title: "Finances",
      copy: "Payroll, profitability, proposals, invoices, and expenses.",
      points: ["Payslips", "Proposals and invoices", "Expense approval"],
    },
    {
      href: saasifyPath.pos,
      kicker: "POS",
      title: "Point of Sale (POS)",
      copy: "Create your shop online and share the link with customers.",
      points: ["Dine-in and takeaway", "Kitchen tickets", "Daily sales snapshot"],
    },
    {
      href: saasifyPath.assets,
      kicker: "Asset Management",
      title: "Asset Management",
      copy: "A module for the assets the business tracks, alongside the other SaaSify tools.",
      points: ["Part of the signed-in product", "Alongside HRMS and Finances", "Access arranged for you"],
    },
    {
      href: saasifyPath.checklist,
      kicker: "Digital Checklist",
      title: "Digital Checklist",
      copy: "A module for repeatable checks, so the list lives with the rest of the work.",
      points: ["Part of the signed-in product", "Alongside daily operations", "Access arranged for you"],
    },
  ],
  problems: {
    heading: "The day gets messy in the gaps.",
    lede: "SaaSify is aimed at two places where a small operation usually loses the thread.",
    items: [
      {
        title: "The sale lives in too many places",
        copy: "A notebook, a chat message, and a spreadsheet rarely agree on what was ordered, what the kitchen is making, or how it was paid.",
      },
      {
        title: "The person lives in too many files",
        copy: "Joining date, role, compensation, and documents drift apart when each one sits with a different person.",
      },
    ],
  },
  faqs: [
    {
      question: "What is SaaSify?",
      answer:
        "SaaSify offers simple, affordable business software to help small businesses manage their daily operations more efficiently.",
    },
    {
      question: "What products does SaaSify offer?",
      answer:
        "SaaSify offers multiple business modules, including POS and HRMS, to help you manage different parts of your business in one place.",
    },
    {
      question: "How much does SaaSify cost?",
      answer:
        "Plans start at ₹49 per month. Choose the modules you need and pay only for what you use.",
    },
    {
      question: "Can I use all the modules together?",
      answer:
        "Yes. Use one module or combine several, based on what your business needs.",
    },
    {
      question: "Is SaaSify suitable for small businesses?",
      answer:
        "Yes. SaaSify is built for home-grown and growing businesses that want practical, affordable software without unnecessary complexity.",
    },
    {
      question: "How do I get started with SaaSify?",
      answer:
        "Create an account and follow the steps. Need help setting things up, or get stuck along the way? Call 8788681499 and the team will help.",
    },
    {
      question: "Can I try SaaSify before paying?",
      answer:
        "Absolutely. You get 14 days to explore SaaSify and see if it clicks with your business. Need more time to test things out, or a little help getting set up? Just reach out. We're happy to help with personalised support, or to discuss an extended trial when there's a genuine need. No business left figuring it out alone.",
    },
    {
      question: "How can I contact SaaSify for help?",
      answer:
        "Call 8788681499 or email saasify@sayge.in for onboarding help, product questions, or any other support.",
    },
  ] satisfies SaasifyFaq[],
  closing: {
    heading: "Want to start, or have a question?",
    lede: "Leave your email. The team will write back with the next step.",
  },
};

export const saasifyPos = {
  meta: {
    title: "SaaSify POS | Point of sale for cafés and home-grown brands",
    description:
      "SaaSify POS takes counter and kitchen orders, or a store link you send to clients. See detailed sales for the day, the week, and what actually sold. A product of Sayge.",
    path: saasifyPath.pos,
  },
  eyebrow: "SaaSify point of sale",
  title: "A POS ready for the floor you've got",
  lede: "Run a café counter, or put a home-grown brand’s menu and products on a link clients can order from. One point of sale from Sayge.",
  primary: { href: posEnquiry, label: "Get started" },
  secondary: { href: "#ways", label: "See it work" },
  problems: {
    heading: "A busy counter should not depend on memory.",
    lede: "SaaSify POS is for the stretch between the order and the end of the day.",
    items: [
      "Orders taken at the counter and tickets the kitchen can actually follow.",
      "Dine-in and takeaway kept distinct, with tables numbered for the floor.",
      "A bill that shows tax, a coupon if you use one, and whether it was cash or UPI/card.",
      "A daily snapshot of paid orders, instead of reconstructing the shift afterwards.",
    ],
  },
  features: {
    heading: "What the POS does today.",
    lede: "The counter, the kitchen, a store link you can send, and the numbers behind what sold. The previews on this page are illustrative.",
    items: [
      {
        title: "Menu and product options",
        copy: "Add items and prices for a café menu or a brand’s products, with options, grouped into categories.",
      },
      {
        title: "Counter",
        copy: "Take a dine-in or takeaway order. Set how many tables the floor uses, and attach an order to a table.",
      },
      {
        title: "Kitchen",
        copy: "Send a ticket to the kitchen and move it through new, preparing, and ready.",
      },
      {
        title: "Guest menu",
        copy: "Share a QR menu for the café. A table number can be included. Guests get categories, options, and item detail.",
      },
      {
        title: "Your store link",
        copy: "Create a link and send it to clients. They open it and place an order. The store is live as soon as the link goes out.",
      },
      {
        title: "Bill, coupon, and tender",
        copy: "Apply a percent or fixed coupon, with a minimum order and a use limit. Show tax on the bill, including an optional split into two halves. Record the settlement as cash or UPI/card, and generate a PDF receipt.",
      },
      {
        title: "Orders and the day",
        copy: "Look back through orders from the counter and from the link. Open sales by day, week, or month.",
      },
      {
        title: "Roles",
        copy: "Admin, cashier, and kitchen each see the work that role is meant to do, scoped to that business.",
      },
    ] satisfies SaasifyFeature[],
  },
  how: {
    heading: "How a sale moves through.",
    lede: "From the menu or the product list to the end-of-day snapshot.",
    steps: [
      {
        title: "Set the café up",
        copy: "Name it, build the menu and categories, set tax, coupons, branding for the guest menu, and the number of tables.",
      },
      {
        title: "Take the order",
        copy: "At the terminal, choose dine-in or takeaway, add items, and send the ticket on.",
      },
      {
        title: "The kitchen works it",
        copy: "Prep status moves from new to preparing to ready, then completed.",
      },
      {
        title: "Close the bill",
        copy: "Record cash or UPI/card, share the PDF receipt, and read the day in Reports.",
      },
    ] satisfies SaasifyStep[],
  },
  audience: {
    heading: "A counter, a kitchen, or a brand you run yourself.",
    lede: "Cafés use the floor and the kitchen. A home-grown brand uses the same menu tools, then sends a link instead of waiting on a website.",
    items: [
      {
        title: "Cafés",
        copy: "A short menu, tables, and a counter that has to stay in step with whoever is making the drinks.",
      },
      {
        title: "Restaurants",
        copy: "Dine-in and takeaway, kitchen tickets, and a guest menu guests can open from a QR code.",
      },
      {
        title: "Home-grown brands",
        copy: "Build product options, share one link, and take orders from clients. Your store is live in the time it takes to send the link.",
      },
    ] satisfies SaasifyFeature[],
  },
  faqs: [
    {
      question: "Is this a retail or inventory system?",
      answer:
        "No. It sells from a menu or a product list: at a counter, in a kitchen, or from a link you send. It does not track stock or synchronise inventory.",
    },
    {
      question: "Does it connect to a payment gateway?",
      answer:
        "It records how the bill was settled — cash, or UPI/card as a single digital tender. It does not charge a card or UPI through a payment gateway.",
    },
    {
      question: "Does it work offline, or with receipt printers and other hardware?",
      answer:
        "The current POS runs online. The receipt is a PDF. Dedicated printer, scanner, or other hardware support is not part of the product described here.",
    },
    {
      question: "What does the daily report include?",
      answer:
        "Pick a day, a week, or a month. You get paid orders, gross sales, the average order, item-wise sales, the payment mix, and how many orders came from the counter versus the link.",
    },
    {
      question: "How do we get access?",
      answer:
        "Leave your email on Request a demo, or call 8788681499. Access is arranged for you. If you already have an account, use the SaaSify login.",
    },
  ] satisfies SaasifyFaq[],
  closing: {
    heading: "Tell us about the counter.",
    lede: "Say what you serve and how the floor works. We’ll reply about SaaSify POS and whether it fits.",
  },
};

export const saasifyHrms = {
  meta: {
    title: "SaaSify HRMS | Employee records and people operations",
    description:
      "SaaSify HRMS keeps employee records, compensation, documents, and status in one place. A product of Sayge for owners and HR teams.",
    path: saasifyPath.hrms,
  },
  eyebrow: "People operations",
  title: "People operations, made simpler.",
  lede: "Discover SaaSify HRMS, designed to bring everyday HR work into a more organized experience.",
  primary: { href: hrmsEnquiry, label: "Get Started" },
  secondary: { href: "#demonstration", label: "Explore HRMS" },
  problems: {
    heading: "A team is hard to run from scattered files.",
    lede: "SaaSify HRMS is the employee record: who someone is, where they sit, what they are paid, and the papers that belong with them.",
    items: [
      "No single list of who is active, still a draft, or already exited.",
      "Compensation, bank details, and tax identifiers kept somewhere other than the person they describe.",
      "Documents and purchase orders detached from the employee they belong to.",
      "A person who cannot see their own record or salary slip without asking someone to forward a file.",
    ],
  },
  features: {
    heading: "What HRMS covers today.",
    lede: "Taken from the current employee record. The screen on this page is an illustration of that directory, not a customer’s data.",
    items: [
      {
        title: "Directory",
        copy: "Search by name, employee ID, designation, or client. Filter by active, draft, or exited, and by client. Export the list.",
      },
      {
        title: "The person",
        copy: "Identity, contact, designation, department, grade, location, date of joining, and client allocation when the work is client-based.",
      },
      {
        title: "Compensation",
        copy: "Annual and monthly CTC, a client billing rate, medical insurance, retention, monthly TDS, and special allowance, with a breakdown view.",
      },
      {
        title: "Bank and statutory fields",
        copy: "PF and PT applicability, PAN, UAN, and bank account stored on the profile. This is a record of those fields, not a filing service.",
      },
      {
        title: "Documents and purchase orders",
        copy: "Attach documents to the employee, and keep purchase orders on the same record.",
      },
      {
        title: "Status over time",
        copy: "Hold an incomplete profile as a draft. Mark someone active, record an exit, or rehire them later.",
      },
      {
        title: "The employee’s own view",
        copy: "An invited employee linked to their record can open their details, compensation, and salary slips.",
      },
    ] satisfies SaasifyFeature[],
  },
  how: {
    heading: "How a record is kept.",
    lede: "From the first profile to the view the employee has of their own information.",
    steps: [
      {
        title: "Add the person",
        copy: "Create the employee. Leave the profile as a draft until the details are complete.",
      },
      {
        title: "Fill the record",
        copy: "Role, allocation, compensation, bank and tax identifiers, documents, and any purchase orders.",
      },
      {
        title: "Keep status honest",
        copy: "Active while they are with you. Exit when they leave, with a date. Rehire if they come back.",
      },
      {
        title: "Invite them in",
        copy: "Once linked, they can see their own details, compensation breakdown, and salary slips.",
      },
    ] satisfies SaasifyStep[],
  },
  audience: {
    heading: "For the people who keep the record.",
    lede: "SaaSify HRMS suits a team that wants one employee record, including organisations that allocate people to client work.",
    items: [
      {
        title: "Owners",
        copy: "A clear list of who is on the team, what they are paid, and which documents sit with them.",
      },
      {
        title: "HR teams",
        copy: "Search, filters, and an export, instead of a spreadsheet that only one person trusts.",
      },
      {
        title: "Client-facing organisations",
        copy: "Allocate an employee to a client account when that is how the work is organised.",
      },
    ] satisfies SaasifyFeature[],
  },
  faqs: [
    {
      question: "Does SaaSify HRMS include leave, attendance, or hiring?",
      answer:
        "Not in the current product. There is no leave workflow, attendance tracking, recruitment pipeline, performance review, or biometric integration.",
    },
    {
      question: "Does it run payroll?",
      answer:
        "Compensation is stored on the employee, and an invited employee can view salary slips. This page does not describe payroll as a statutory filing or compliance product.",
    },
    {
      question: "What can an employee see?",
      answer:
        "Once invited and linked to their record, they can open their own details, compensation, and salary slips. They do not get the full staff directory.",
    },
    {
      question: "Can we export the directory?",
      answer: "Yes. The employee list can be exported.",
    },
    {
      question: "How do we get started?",
      answer: `Email ${siteEmail}. New access is arranged for you. Existing users can log in to SaaSify.`,
    },
  ] satisfies SaasifyFaq[],
  closing: {
    heading: "Tell us how the team is organised.",
    lede: "A short note is enough: how many people, and whether you need the employee record, the slips, or both.",
  },
};

const moduleClose = {
  heading: "Tell us which module you need.",
  lede: "A short note is enough. We’ll reply about access and whether it fits.",
};

export const saasifyDms = {
  meta: {
    title: "SaaSify DMS | Documents for people, clients, and vendors",
    description:
      "SaaSify DMS keeps documents with employees, clients, vendors, and candidates. Attach a file and open it from that record.",
    path: saasifyPath.dms,
  },
  eyebrow: "Documents",
  title: "Documents, kept with the record.",
  lede: "SaaSify DMS is the document library: files grouped by the employee, client, vendor, or candidate they belong to.",
  primary: { href: dmsEnquiry, label: "Get Started" },
  secondary: { href: "#capabilities", label: "Explore DMS" },
  problems: {
    heading: "A file is useless if it is not with the person.",
    lede: "DMS is for the documents that should sit with an employee, a client, a vendor, or a candidate.",
    items: [
      "Contracts and papers stored somewhere other than the record they describe.",
      "No single place to open a vendor’s or a candidate’s documents.",
      "A file that has to be forwarded because the person who needs it cannot open it.",
    ],
  },
  features: {
    heading: "What DMS covers.",
    lede: "Taken from the current document library.",
    items: [
      { title: "Four owners", copy: "Browse documents for employees, clients, vendors, and candidates." },
      { title: "Attach a file", copy: "Add a document to the record you are viewing." },
      { title: "Open it again", copy: "Open an attached document from that same record." },
      { title: "Add a vendor or candidate", copy: "Those two can be created from DMS. Employees and clients are managed in their own areas." },
    ] satisfies SaasifyFeature[],
  },
  how: {
    heading: "How a document is kept.",
    lede: "From the library to the file on a record.",
    steps: [
      { title: "Choose the group", copy: "Employees, clients, vendors, or candidates." },
      { title: "Open the record", copy: "Find the person or organisation the file belongs to." },
      { title: "Attach the document", copy: "Add the file to that record." },
      { title: "Open it later", copy: "Come back to the same record and open the document." },
    ] satisfies SaasifyStep[],
  },
  audience: {
    heading: "For the people who keep the papers.",
    lede: "DMS suits a team that already keeps employee, client, vendor, or candidate records in SaaSify.",
    items: [
      { title: "HR teams", copy: "Employee documents next to the person, not in a separate folder only one person can find." },
      { title: "Operations", copy: "Vendor and candidate files in the same library." },
      { title: "Client work", copy: "Client documents grouped with that client." },
    ] satisfies SaasifyFeature[],
  },
  faqs: [
    {
      question: "Is DMS the same as the documents on an employee profile?",
      answer: "Employee documents can be kept with the employee. DMS is the library for employees, clients, vendors, and candidates.",
    },
    {
      question: "Can I add anyone from DMS?",
      answer: "Vendors and candidates can be added from DMS. Employees are added in HRMS.",
    },
    {
      question: "How do we get access?",
      answer: `Email ${siteEmail}. New access is arranged for you.`,
    },
  ] satisfies SaasifyFaq[],
  closing: moduleClose,
};

export const saasifyFinances = {
  meta: {
    title: "SaaSify Finances | Payroll, proposals, invoices, and expenses",
    description:
      "SaaSify Finances covers payroll and payslips, profitability, proposals, invoices, and expenses with approval.",
    path: saasifyPath.finances,
  },
  eyebrow: "Finances",
  title: "The money work, together.",
  lede: "SaaSify Finances is payroll, profitability, proposals, invoices, and expenses.",
  primary: { href: financesEnquiry, label: "Get Started" },
  secondary: { href: "#capabilities", label: "Explore Finances" },
  problems: {
    heading: "Proposals, invoices, and pay should not live in five tools.",
    lede: "Finances is the set of money workflows already in the signed-in product.",
    items: [
      "A proposal in one file and the invoice in another.",
      "Payslips that have to be rebuilt by hand each period.",
      "Expenses waiting in a chat instead of a pending, approved, or rejected status.",
    ],
  },
  features: {
    heading: "What Finances includes.",
    lede: "These are the areas in the product navigation. This is not a tax-filing service.",
    items: [
      { title: "Payroll", copy: "Run pay for a period and preview a payslip. This stores and presents pay. It is not described here as statutory filing." },
      { title: "Profitability", copy: "Look at profitability for a financial year, search, and export." },
      { title: "Proposals", copy: "Create a proposal and track it as active, sent, accepted, archived, or discarded." },
      { title: "Invoices", copy: "Create an invoice, including one started from a proposal, and preview it." },
      { title: "Expenses", copy: "Record an expense with an amount, who it was for, a category, and an approval status." },
    ] satisfies SaasifyFeature[],
  },
  how: {
    heading: "How the money moves through.",
    lede: "A typical path from a proposal to an expense, using the tools that exist today.",
    steps: [
      { title: "Write the proposal", copy: "Create it and mark where it stands." },
      { title: "Invoice from it", copy: "Start an invoice from an accepted proposal, or create one on its own." },
      { title: "Pay the period", copy: "Open payroll for the period and preview the payslip." },
      { title: "Record an expense", copy: "Log it and leave it pending until it is approved or rejected." },
    ] satisfies SaasifyStep[],
  },
  audience: {
    heading: "For the people who handle the money.",
    lede: "Finances is for the team that prepares proposals, invoices, pay, and expenses.",
    items: [
      { title: "Owners", copy: "Profitability for a year, and a list of what was proposed and invoiced." },
      { title: "Finance", copy: "Invoices, payroll, and expenses in the same product." },
      { title: "Employees", copy: "An invited employee can see their own salary slips. Payroll here prepares those slips. It does not file statutory returns." },
    ] satisfies SaasifyFeature[],
  },
  faqs: [
    {
      question: "Does Finances file taxes or statutory payroll?",
      answer: "No. Payroll here prepares payslips for a period. It is not described as a statutory filing or compliance product.",
    },
    {
      question: "Can an invoice start from a proposal?",
      answer: "Yes. An invoice draft can be opened from a proposal.",
    },
    {
      question: "What happens to an expense?",
      answer: "It can sit as pending, approved, or rejected.",
    },
    {
      question: "How do we get started?",
      answer: `Email ${siteEmail}. New access is arranged for you.`,
    },
  ] satisfies SaasifyFaq[],
  closing: moduleClose,
};

export const saasifyAssets = {
  meta: {
    title: "SaaSify Asset Management | Business assets in SaaSify",
    description:
      "SaaSify Asset Management is a module in the SaaSify product, alongside HRMS, DMS, Finances, and POS.",
    path: saasifyPath.assets,
  },
  eyebrow: "Assets",
  title: "Assets, in the same product.",
  lede: "SaaSify Asset Management is the module for the assets your business tracks.",
  primary: { href: assetsEnquiry, label: "Get Started" },
  secondary: { href: "#capabilities", label: "Explore Asset Management" },
  problems: {
    heading: "Assets drift when they live outside the product.",
    lede: "Asset Management is there so that record can sit with the rest of SaaSify.",
    items: [
      "A spreadsheet of equipment that nobody else can trust.",
      "No connection between the asset list and the team already using SaaSify.",
    ],
  },
  features: {
    heading: "Where it sits.",
    lede: "Asset Management is part of SaaSify. Write to us for how your register is organised in the product you will use.",
    items: [
      { title: "A module of its own", copy: "It sits with HRMS, DMS, Finances, POS, and Digital Checklist." },
      { title: "For the signed-in product", copy: "Access is arranged for your account. There is no public signup." },
      { title: "Tell us what you track", copy: "Equipment, devices, or other assets. We’ll confirm the fit before you start." },
    ] satisfies SaasifyFeature[],
  },
  how: {
    heading: "How to start.",
    lede: "Access is arranged. The working register is in the signed-in product.",
    steps: [
      { title: "Tell us what you track", copy: "A short note on the assets and who looks after them." },
      { title: "We confirm the fit", copy: "You’ll hear back before an account is arranged." },
      { title: "Open the module", copy: "Asset Management is available once you are signed in." },
    ] satisfies SaasifyStep[],
  },
  audience: {
    heading: "For teams that already run on SaaSify.",
    lede: "Useful when the asset list should live with the same people who use the other modules.",
    items: [
      { title: "Operations", copy: "One place to ask about the assets, instead of a private spreadsheet." },
      { title: "Owners", copy: "The asset module next to people, documents, and money." },
    ] satisfies SaasifyFeature[],
  },
  faqs: [
    {
      question: "What does the asset register include?",
      answer: "The working register is in the signed-in product. Tell us what you track and we’ll confirm how Asset Management fits before access is arranged.",
    },
    {
      question: "How do we get started?",
      answer: `Email ${siteEmail}. New access is arranged for you.`,
    },
  ] satisfies SaasifyFaq[],
  closing: moduleClose,
};

export const saasifyChecklist = {
  meta: {
    title: "SaaSify Digital Checklist | Checklists in SaaSify",
    description:
      "SaaSify Digital Checklist is a module in the SaaSify product for repeatable checks, alongside the other modules.",
    path: saasifyPath.checklist,
  },
  eyebrow: "Checklists",
  title: "Checks, without a separate tool.",
  lede: "SaaSify Digital Checklist is the module for repeatable checks in the same product as the rest of the work.",
  primary: { href: checklistEnquiry, label: "Get Started" },
  secondary: { href: "#capabilities", label: "Explore Digital Checklist" },
  problems: {
    heading: "A checklist on paper does not stay with the work.",
    lede: "Digital Checklist is there so those checks can live in SaaSify.",
    items: [
      "Opening and closing checks that exist only on a printed sheet.",
      "No shared place for the team that already uses the other modules.",
    ],
  },
  features: {
    heading: "Where it sits.",
    lede: "Digital Checklist is part of SaaSify. Write to us for how your checks are set up in the product.",
    items: [
      { title: "A module of its own", copy: "It sits with HRMS, DMS, Finances, POS, and Asset Management." },
      { title: "For repeatable checks", copy: "The lists your team runs as part of the day, inside the signed-in product." },
      { title: "Tell us the checks", copy: "We’ll confirm the fit before an account is arranged." },
    ] satisfies SaasifyFeature[],
  },
  how: {
    heading: "How to start.",
    lede: "Access is arranged. The lists themselves are in the signed-in product.",
    steps: [
      { title: "Tell us the checks", copy: "What gets checked, and how often." },
      { title: "We confirm the fit", copy: "You’ll hear back before an account is arranged." },
      { title: "Open the module", copy: "Digital Checklist is available once you are signed in." },
    ] satisfies SaasifyStep[],
  },
  audience: {
    heading: "For teams with a list they repeat.",
    lede: "Useful when the same checks happen every day and should sit with the other SaaSify work.",
    items: [
      { title: "Operations", copy: "A shared list instead of a sheet that stays at one desk." },
      { title: "Café and floor teams", copy: "Checks next to POS, when the counter is also in SaaSify." },
    ] satisfies SaasifyFeature[],
  },
  faqs: [
    {
      question: "What can a checklist contain?",
      answer: "The lists are set up in the signed-in product. Tell us what you check and we’ll confirm how Digital Checklist fits.",
    },
    {
      question: "How do we get started?",
      answer: `Email ${siteEmail}. New access is arranged for you.`,
    },
  ] satisfies SaasifyFaq[],
  closing: moduleClose,
};

export type SaasifyProduct = {
  meta: { title: string; description: string; path: string };
  eyebrow: string;
  title: string;
  lede: string;
  primary: SaasifyLink;
  secondary: SaasifyLink;
  problems: { heading: string; lede: string; items: string[] };
  features: { heading: string; lede: string; items: SaasifyFeature[] };
  how: { heading: string; lede: string; steps: SaasifyStep[] };
  audience: { heading: string; lede: string; items: SaasifyFeature[] };
  faqs: SaasifyFaq[];
  closing: { heading: string; lede: string };
};

export function saasifyPageMetadata(page: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = absoluteUrl(page.path);
  return {
    title: "SaaSify",
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName,
      title: page.title,
      description: page.description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [ogImage],
    },
  };
}

export function saasifyFaqJsonLd(faqs: SaasifyFaq[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function saasifySoftwareJsonLd({
  name,
  description,
  path,
  category,
}: {
  name: string;
  description: string;
  path: string;
  category: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    applicationCategory: category,
    operatingSystem: "Web",
    description,
    url: absoluteUrl(path),
    provider: { "@id": `${siteUrl}/#organization` },
  };
}
