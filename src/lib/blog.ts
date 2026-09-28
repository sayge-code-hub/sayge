export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "quote"; text: string }
  | { type: "ul"; items: string[]; dense?: boolean }
  | { type: "ol"; items: string[]; dense?: boolean }
  | { type: "table"; columns: string[]; rows: string[][]; wide?: boolean };

export type BlogPost = {
  slug: string;
  title: string;
  dek: string;
  seoTitle?: string;
  seoDescription?: string;
  date: string;
  dateLabel: string;
  dateModified?: string;
  readingTime: string;
  body: BlogBlock[];
};

export function blockSearchText(block: BlogBlock) {
  if (block.type === "ul" || block.type === "ol") return block.items.join(" ");
  if (block.type === "table") {
    return [block.columns.join(" "), ...block.rows.map((row) => row.join(" "))].join(
      " ",
    );
  }
  return block.text;
}

export const posts: BlogPost[] = [
  {
    slug: "how-much-does-it-cost-to-build-a-mobile-app",
    title: "How much does it cost to build a mobile app?",
    dek: "There isn’t one price. The useful number comes from the work, not from counting screens.",
    seoTitle: "How Much Does It Cost to Build a Mobile App? A Practical Guide",
    seoDescription:
      "How much does it cost to build a mobile app? Learn how app development costs are calculated, what affects the budget, and how to estimate your project realistically.",
    date: "2026-09-24",
    dateLabel: "24 September 2026",
    dateModified: "2026-09-24",
    readingTime: "14 min",
    body: [
      {
        type: "p",
        text: "If you’re thinking about building a mobile app, the first question is usually the same: “How much will it cost?” It’s a reasonable question. The problem is that most answers aren’t particularly useful.",
      },
      {
        type: "p",
        text: "You search for app development costs and find numbers ranging from a few thousand dollars to hundreds of thousands. In India, you might see estimates ranging from a few lakh rupees to several crores. So which number is actually right?",
      },
      {
        type: "p",
        text: "The uncomfortable answer is: it depends on what you’re building. But “it depends” shouldn’t be the end of the conversation. There is a much better way to estimate mobile app development cost. Instead of asking “How much does it cost to build an app?”, break the project into the things that actually require time, people and technology. Once you do that, the estimate becomes much easier to understand.",
      },
      {
        type: "h2",
        text: "There isn’t one price for “a mobile app”",
      },
      {
        type: "p",
        text: "Consider two applications. The first is a relatively simple app where users create an account, browse information, view a few screens, submit a basic form and receive notifications.",
      },
      {
        type: "p",
        text: "The second allows users to create accounts, make payments, track live locations, chat with other users, upload documents, receive real-time updates, interact with an admin team, connect to several external systems and use AI-powered features.",
      },
      {
        type: "p",
        text: "Both are “mobile apps.” But treating them as the same type of project would make no sense. The number of screens isn’t enough to explain the difference. What the software has to do matters much more than how many screens it has.",
      },
      {
        type: "h2",
        text: "The simplest way to think about app development cost",
      },
      {
        type: "p",
        text: "A useful starting point is: total project cost = development effort × team cost + external costs + contingency.",
      },
      {
        type: "p",
        text: "Development effort includes the time required for product discovery, UI/UX design, mobile development, backend development, API integration, testing, deployment and project management.",
      },
      {
        type: "ul",
        dense: true,
        items: [
          "Cloud infrastructure",
          "Payment gateways",
          "Maps",
          "SMS",
          "Email services",
          "Third-party APIs",
          "Apple and Google developer accounts",
          "Other software or platform subscriptions",
        ],
      },
      {
        type: "p",
        text: "And there should usually be some allowance for uncertainty, because software projects rarely go exactly according to the first plan. The important thing is that you’re estimating work, not simply counting screens.",
      },
      {
        type: "h2",
        text: "What actually affects mobile app development cost?",
      },
      {
        type: "p",
        text: "Let’s break down the major factors.",
      },
      {
        type: "h3",
        text: "1. What are you actually building?",
      },
      {
        type: "p",
        text: "The first question is the most obvious one. What does the app need to do? A content application is fundamentally different from a fintech application. A booking application is different from a field-service application. A social platform is different from an internal employee application.",
      },
      {
        type: "p",
        text: "Start by writing down the core user journeys. For example, a customer might: sign up → browse → select service → make payment → receive confirmation → track status. That’s already telling you much more than “We need 12 screens.” The workflow determines the complexity.",
      },
      {
        type: "h3",
        text: "2. One platform or two?",
      },
      {
        type: "p",
        text: "Do you need Android, iPhone, or both? Building for both doesn’t necessarily mean building two completely separate applications. Cross-platform technologies can allow teams to share a significant portion of the codebase. But there are still platform-specific considerations: device behaviour, permissions, notifications, background processing, app-store requirements, platform-specific APIs and testing across devices.",
      },
      {
        type: "p",
        text: "So when estimating an app, don’t simply think Android = one project and iOS = another. Think about which parts can be shared and which genuinely need platform-specific work.",
      },
      {
        type: "h3",
        text: "3. UI and UX complexity",
      },
      {
        type: "p",
        text: "A beautiful application isn’t necessarily an expensive application. And an expensive application isn’t necessarily visually complicated. The real question is what the interface needs to accomplish.",
      },
      {
        type: "p",
        text: "A straightforward information-based application might have relatively simple interactions. A financial application could have fewer screens but require much more careful handling of transaction states, validation, security, error conditions, confirmations, permissions and user trust. A field application might need interfaces designed around people working outdoors with limited connectivity.",
      },
      {
        type: "p",
        text: "Good UI/UX isn’t just about making screens look good. It’s about designing the product around how people actually use it.",
      },
      {
        type: "h3",
        text: "4. Backend development",
      },
      {
        type: "p",
        text: "This is where many early app estimates go wrong. Someone sees a mobile application and thinks: “It’s 20 screens. How much can that cost?” But the mobile application may only be the visible part.",
      },
      {
        type: "ul",
        dense: true,
        items: [
          "User accounts",
          "Databases",
          "APIs",
          "Permissions",
          "Business rules",
          "Notifications",
          "File storage",
          "Payment processing",
          "Reporting",
          "Integrations",
          "Administrative tools",
        ],
      },
      {
        type: "p",
        text: "A mobile application without a suitable backend may have very little to do with the actual business system. That’s why the backend needs to be estimated separately — and why this work often sits inside [custom software development](/services/custom-software-development), not only inside the phone.",
      },
      {
        type: "h3",
        text: "5. Authentication and user roles",
      },
      {
        type: "p",
        text: "A simple email-and-password login is one thing. A system with multiple types of users is another. Imagine an application with customers, employees, managers, administrators and external partners. Each role may see different information and have different permissions.",
      },
      {
        type: "p",
        text: "Now you’re dealing with who can see what, who can create something, who can edit it, who can approve it, who can delete it, and what happens when someone’s role changes. Permissions become part of the product’s business logic. And business logic takes development effort.",
      },
      {
        type: "h3",
        text: "6. Payments",
      },
      {
        type: "p",
        text: "Payments are another area where a seemingly small feature can introduce considerable complexity. The obvious requirement is: “Users should be able to pay.” But then you need payment initiation, successful payments, failed payments, cancelled payments, retries, refunds, transaction records, payment verification, order status, notifications and reconciliation.",
      },
      {
        type: "p",
        text: "The payment screen may take very little time to build. The reliable system around it is where much of the work lives.",
      },
      {
        type: "h3",
        text: "7. Location, maps and device capabilities",
      },
      {
        type: "p",
        text: "Does the application use GPS, maps, camera, microphone, Bluetooth, contacts, files, biometric authentication, background location or push notifications? These features can increase complexity because the application has to interact with the device and operating system. A delivery application with live location tracking is therefore very different from an application that simply displays information.",
      },
      {
        type: "h3",
        text: "8. Real-time functionality",
      },
      {
        type: "p",
        text: "Real-time features deserve special attention: chat, live tracking, real-time dashboards, live order status, collaborative editing. These aren’t simply UI features. They require systems that can handle information changing while the user is looking at it — connections, event handling, synchronization, notifications, server infrastructure and reliability.",
      },
      {
        type: "p",
        text: "The important point is not that real-time features are automatically expensive. It’s that they introduce additional engineering considerations.",
      },
      {
        type: "h3",
        text: "9. Third-party integrations",
      },
      {
        type: "p",
        text: "Most modern applications don’t operate alone. They connect to payment providers, CRM platforms, ERP systems, accounting software, maps, messaging services, identity providers, shipping systems, analytics and cloud services. Every integration creates another dependency, and every dependency has to be understood.",
      },
      {
        type: "p",
        text: "The team needs to know what data goes in, what data comes out, what happens when the external service is unavailable, how errors are handled, and what happens when the API changes. That’s why “just integrate with X” can sometimes turn into a significant part of a project.",
      },
      {
        type: "h3",
        text: "10. Admin panels",
      },
      {
        type: "p",
        text: "The customer-facing mobile application is often only half the system. Someone needs to operate it. That might require an administrative web application where your team can manage users, view orders, approve requests, manage content, process refunds, view reports, configure settings and handle support requests.",
      },
      {
        type: "p",
        text: "This is frequently forgotten when businesses estimate app development costs. If the business needs an operational dashboard, include it in the scope from the beginning.",
      },
      {
        type: "h3",
        text: "11. AI features",
      },
      {
        type: "p",
        text: "AI can add useful capabilities — document processing, intelligent search, recommendations, conversational interfaces, classification, summarisation, workflow automation. But AI isn’t simply another checkbox. A production AI feature may require model or API integration, prompt and workflow design, data preparation, retrieval systems, evaluation, permissions, monitoring, fallback behaviour and human review.",
      },
      {
        type: "p",
        text: "A simple AI-powered feature and an AI-heavy product can therefore have very different development requirements. Whether it belongs is a [practical AI](/blog/practical-ai-not-ai-as-decoration) question, not a leftover in the budget.",
      },
      {
        type: "h2",
        text: "MVP vs. production-ready application",
      },
      {
        type: "p",
        text: "This is one of the biggest factors in the app development budget. An MVP isn’t supposed to be a cheap version of the final product. Its purpose is to test the core idea with the smallest useful amount of software.",
      },
      {
        type: "p",
        text: "Imagine you’re building a service marketplace. The long-term product might eventually need customer accounts, provider accounts, search, booking, payments, reviews, chat, notifications, location tracking, promotions, loyalty, analytics and admin tools. The first version might only need: customer → discover service → book → pay → receive confirmation. That’s a very different project.",
      },
      {
        type: "p",
        text: "The trick isn’t to remove important engineering. It’s to remove things that haven’t yet earned their place.",
      },
      {
        type: "h2",
        text: "So how much does a mobile app actually cost?",
      },
      {
        type: "p",
        text: "There isn’t one universal price, but it can be useful to think in broad project categories. For a business working with a professional development team in India, illustrative project ranges might look something like this:",
      },
      {
        type: "table",
        columns: [
          "Type of application",
          "Illustrative range",
        ],
        rows: [
          ["Simple app / focused MVP", "₹3 lakh – ₹7 lakh"],
          ["Standard business application", "₹7 lakh – ₹15 lakh"],
          ["Complex customer-facing application", "₹15 lakh – ₹30 lakh"],
          ["Highly integrated / enterprise application", "₹30 lakh+"],
        ],
      },
      {
        type: "p",
        text: "These aren’t market tariffs or guaranteed project prices. They’re simply useful planning ranges. A real estimate should come after understanding the actual requirements. A relatively simple app could fall outside these ranges, and a seemingly large application could cost less than expected if much of its functionality is straightforward. The number of screens alone isn’t enough to determine the price.",
      },
      {
        type: "h2",
        text: "Here’s a better way to calculate it",
      },
      {
        type: "p",
        text: "Suppose you’re planning an application and your initial estimate looks like this:",
      },
      {
        type: "table",
        columns: [
          "Work",
          "Hours",
        ],
        rows: [
          ["Product discovery and planning", "40"],
          ["UI/UX", "80"],
          ["Mobile development", "400"],
          ["Backend and APIs", "250"],
          ["Admin panel", "100"],
          ["Testing", "120"],
          ["Project management and coordination", "80"],
          ["Total", "1,070"],
        ],
      },
      {
        type: "p",
        text: "Now suppose the blended development cost for the team is ₹2,000 per hour. The estimated effort would be 1,070 × ₹2,000 = ₹21.4 lakh. That’s not the final quote. You would still need to consider project uncertainty, third-party services, infrastructure, app-store costs, scope assumptions, support requirements, taxes and post-launch work.",
      },
      {
        type: "p",
        text: "But now you have something much more useful than “This app will cost around ₹20 lakh.” You can actually explain why.",
      },
      {
        type: "h2",
        text: "Why two companies can quote very different prices",
      },
      {
        type: "p",
        text: "Imagine you send exactly the same requirement to three development companies and receive ₹8 lakh, ₹18 lakh and ₹32 lakh. It’s tempting to assume someone is overcharging. But you don’t know that yet.",
      },
      {
        type: "p",
        text: "The proposals may differ in number of developers, seniority, design effort, architecture, testing, project management, security, documentation, infrastructure, support and assumptions about scope. The cheapest proposal might simply have fewer things included. The most expensive proposal might include work you don’t actually need. That’s why comparing only the final number can be misleading. Compare what you’re actually buying.",
      },
      {
        type: "h2",
        text: "Ask what is included in the estimate",
      },
      {
        type: "p",
        text: "Before comparing quotes, ask for a breakdown. At minimum:",
      },
      {
        type: "ul",
        items: [
          "Product discovery — is requirements analysis included?",
          "UI/UX — how many screens and user journeys?",
          "Development — which platforms, which features?",
          "Backend — is the backend included?",
          "Admin panel — is there an operational dashboard?",
          "Testing — who tests the application, and how?",
          "Deployment — does the team handle App Store and Play Store submission?",
          "Infrastructure — who sets up the cloud environment?",
          "Support — what’s included after launch?",
          "Third-party services — which costs are paid separately?",
        ],
      },
      {
        type: "p",
        text: "Now you can compare proposals properly.",
      },
      {
        type: "h2",
        text: "Don’t forget the cost after launch",
      },
      {
        type: "p",
        text: "The development invoice isn’t necessarily the total cost of owning an app. You may also have cloud hosting, database costs, third-party APIs, SMS/email, payment processing, monitoring, security updates, OS compatibility updates, bug fixes, new features and ongoing development.",
      },
      {
        type: "p",
        text: "Some of these costs may be tiny. Others can become significant as usage grows. A good software partner should explain the likely ongoing costs before you commit.",
      },
      {
        type: "h2",
        text: "How to reduce app development cost without building the wrong thing",
      },
      {
        type: "p",
        text: "Reducing cost doesn’t necessarily mean choosing the cheapest developer. There are better ways: reduce the first version, simplify workflows, reuse existing services, choose technology deliberately, define scope clearly, and prioritise the core user journey. If the main user can’t complete the primary task, ten extra features won’t save the product.",
      },
      {
        type: "p",
        text: "The goal isn’t to use the newest technology. It’s to use technology appropriate for the product. Ambiguous requirements create expensive conversations later.",
      },
      {
        type: "h2",
        text: "The most expensive feature is sometimes the one you haven’t defined",
      },
      {
        type: "p",
        text: "A project can start with “We’ll figure out the details during development.” It sounds flexible. It can also become expensive very quickly. Consider: “Users should be able to manage their orders.” What does that mean? Can they cancel? Until when? Can they modify an order? Can the seller reject the modification? What happens after payment? Can an order be partially refunded? What happens if inventory changes? What notifications are sent?",
      },
      {
        type: "p",
        text: "Each unanswered question eventually becomes a product or engineering decision. The more decisions that appear during development, the harder it becomes to predict the final cost. That’s why [understanding the product before building it](/blog/understand-before-building) matters.",
      },
      {
        type: "h2",
        text: "A simple checklist for estimating your app",
      },
      {
        type: "p",
        text: "Before asking a development company for a quote, try answering these:",
      },
      {
        type: "ol",
        items: [
          "Who will use the app?",
          "What is the most important thing they need to accomplish?",
          "Which platforms do they need?",
          "What are the main user journeys?",
          "Do you need a backend?",
          "Do you need an admin panel?",
          "Are payments involved?",
          "Are there third-party integrations?",
          "Does the app need real-time functionality?",
          "Does it use location, camera or other device features?",
          "Are there different user roles?",
          "Is AI actually required?",
          "What needs to happen when something goes wrong?",
          "What does version one absolutely need to accomplish?",
          "What can wait until later?",
        ],
      },
      {
        type: "p",
        text: "The clearer these answers are, the more useful your estimate will be.",
      },
      {
        type: "h2",
        text: "The right question isn’t “How cheap can we build it?”",
      },
      {
        type: "quote",
        text: "What is the smallest amount we need to build to create the outcome we’re looking for?",
      },
      {
        type: "p",
        text: "That’s a much better starting point. Because there are two ways to reduce the cost of a software project. You can cut corners. Or you can remove unnecessary work. The first one can create problems later. The second is good product planning. A well-scoped application can be significantly cheaper than a poorly defined one — without compromising the things that actually matter.",
      },
      {
        type: "h2",
        text: "So, how much should you budget?",
      },
      {
        type: "p",
        text: "If you’re at the very beginning, don’t try to arrive at an exact number from a feature list alone. Start with the problem → the users → the workflow → the first version → the technology → the effort → the cost. That order matters.",
      },
      {
        type: "p",
        text: "A mobile app can cost a few lakh rupees. It can cost tens of lakhs. It can cost considerably more. The important question isn’t which number sounds reasonable in isolation. It’s what you’re getting for it, what problem it solves, and whether the scope matches the outcome you need.",
      },
      {
        type: "p",
        text: "A good estimate isn’t simply a price. It’s an explanation of the work behind the price. And if a development company can’t explain where its estimate comes from, that’s probably a more important question than whether the number itself is high or low.",
      },
      {
        type: "h2",
        text: "Start with the problem, not the feature list",
      },
      {
        type: "p",
        text: "At Sayge, we generally approach app projects by understanding the product first — the users, workflows, integrations, platforms and business goals — before turning the requirements into an engineering estimate.",
      },
      {
        type: "p",
        text: "If you’re planning a mobile application and don’t yet know what the right scope or budget looks like, start with the problem rather than the feature list. That’s usually where a much better estimate begins. [Planning a mobile app? Start a conversation.](/contact)",
      },
    ],
  },
  {
    slug: "mobile-app-vs-web-app-or-both",
    title: "Do you need a mobile app, a web app, or both?",
    dek: "The platform is a product decision. Start with how people will actually use it.",
    seoTitle: "Do You Need a Mobile App, a Web App, or Both?",
    seoDescription:
      "Not every business needs a mobile app. Learn when a mobile app, web app, or both make sense based on users, features, cost, distribution and business goals.",
    date: "2026-09-23",
    dateLabel: "23 September 2026",
    dateModified: "2026-09-24",
    readingTime: "12 min",
    body: [
      {
        type: "p",
        text: "Someone has an idea for a digital product. The first question is often: “Should we build an app?” But that’s actually two questions. Do you need a mobile application? Or do you need a web application? And sometimes the answer is neither. Or both.",
      },
      {
        type: "p",
        text: "The right choice depends less on what technology is popular and more on what your users need to accomplish. A customer ordering a product from their phone has different needs from an employee managing inventory. A field technician working without reliable internet has different needs from a finance manager sitting at a desktop. And a public-facing service that needs to be discovered through Google has different requirements from an internal business system.",
      },
      {
        type: "p",
        text: "So before deciding what to build, start with something more important than the technology: [understand how it will be used](/blog/understand-before-building).",
      },
      {
        type: "h2",
        text: "First, what is the difference?",
      },
      {
        type: "p",
        text: "The distinction sounds simple. A mobile app is software installed on a phone or tablet, typically distributed through an app store. A web application runs through a browser. But modern technology makes the boundary less obvious than it used to be.",
      },
      {
        type: "p",
        text: "A well-built web application can work extremely well on a phone. A mobile application can connect to the same backend as a web application. And a product can have both while sharing much of the underlying infrastructure. So this isn’t necessarily a choice between two completely separate systems. It’s a product decision.",
      },
      {
        type: "h2",
        text: "When a web app makes sense",
      },
      {
        type: "p",
        text: "A web application is often a strong starting point when users need quick access without installing anything.",
      },
      {
        type: "ul",
        dense: true,
        items: [
          "Business dashboards",
          "Customer portals",
          "Admin systems",
          "Booking platforms",
          "SaaS products",
          "Reporting tools",
          "Internal operations software",
          "Document management",
          "Workflow applications",
        ],
      },
      {
        type: "p",
        text: "A user can receive a link, sign in and start working. There’s no app-store download, no installation, and no waiting for an update to finish. For many business applications, that’s a significant advantage.",
      },
      {
        type: "h2",
        text: "Web applications are especially useful for business teams",
      },
      {
        type: "p",
        text: "Imagine a company building an internal operations platform. Employees need to manage customers, review requests, approve transactions, generate reports, update records and manage users. Many of those activities happen while sitting at a desk. A browser-based application may be the natural choice.",
      },
      {
        type: "p",
        text: "The company doesn’t necessarily gain much by forcing employees to install a mobile application just to manage a table or approve a report. In this situation, web can be the simpler product.",
      },
      {
        type: "h2",
        text: "When a mobile app makes sense",
      },
      {
        type: "p",
        text: "Mobile applications become more compelling when the phone itself is part of the experience.",
      },
      {
        type: "ul",
        items: [
          "Field work — a technician may need the application while moving between customer locations.",
          "Location — a delivery or travel application may need GPS throughout the user’s journey.",
          "Camera — a field employee might photograph equipment, documents or damage.",
          "Notifications — a customer may need timely updates about an order, booking or service.",
          "Device capabilities — the product might depend on Bluetooth, biometrics, files, contacts or other device-level functionality.",
          "Frequent usage — if customers interact with the product several times a day, having it readily available on their phone can be valuable.",
        ],
      },
      {
        type: "p",
        text: "The important question isn’t “Can we make this a mobile app?” Almost anything can be made into an app. The better question is:",
      },
      {
        type: "quote",
        text: "Does having this product on the device create meaningful value?",
      },
      {
        type: "h2",
        text: "Don’t confuse a mobile-friendly website with a mobile app",
      },
      {
        type: "p",
        text: "This distinction causes a lot of confusion. A responsive website can work beautifully on a phone. That doesn’t automatically mean you need an application.",
      },
      {
        type: "p",
        text: "For example, suppose you’re building a company website where visitors need to read about services, view projects, contact the company and read articles. A mobile-responsive website is probably sufficient. There may be no meaningful benefit from asking every visitor to download an app. On the other hand, if the product requires frequent interaction, notifications, device capabilities or offline functionality, a mobile application may make more sense.",
      },
      {
        type: "h2",
        text: "What about SEO?",
      },
      {
        type: "p",
        text: "This is one area where the difference can be significant. If you’re building something that needs to be discovered through search engines, the web has a natural advantage. Public web pages can be crawled, indexed, shared, linked and discovered through search. A mobile application doesn’t replace that.",
      },
      {
        type: "p",
        text: "This is why many businesses benefit from having a web presence even when their main customer experience happens inside a mobile app. Think about an ecommerce business. Someone might discover a product through Google, visit the website, browse and create an account. Later, they install the mobile application because they’re a regular customer. The two experiences can complement each other.",
      },
      {
        type: "h2",
        text: "What if users need both?",
      },
      {
        type: "p",
        text: "Sometimes the answer is clearly both. Consider a delivery platform. Customers might use a mobile application to place orders, track deliveries and receive notifications. Drivers might use another mobile experience to receive jobs, navigate, update delivery status and capture proof of delivery. Meanwhile, the operations team might use a web application to manage orders, assign drivers, monitor operations, handle exceptions and view reports.",
      },
      {
        type: "p",
        text: "That’s not one product in the traditional sense. It’s a connected system with different interfaces for different users — the kind of work that often sits inside [custom software development](/services/custom-software-development). Don’t force every user into the same interface. Give each group the experience that matches the work they need to do.",
      },
      {
        type: "h2",
        text: "Customer-facing and internal software are different",
      },
      {
        type: "p",
        text: "This is one of the easiest ways to make the decision. Ask who is using it. If it’s an internal business system, web may often be sufficient. If it’s a customer product used repeatedly on a phone, mobile may provide more value. If it’s a field application, mobile capabilities become more important. If it’s a public information platform, the web becomes particularly useful because of discoverability.",
      },
      {
        type: "p",
        text: "Of course, these aren’t rules. They’re starting points.",
      },
      {
        type: "h2",
        text: "What about cost?",
      },
      {
        type: "p",
        text: "Cost shouldn’t be the only deciding factor, but it matters. A web application may be cheaper to launch in some cases because you don’t need to build, test and distribute a native mobile application. But that doesn’t mean web is cheap and mobile is expensive. The actual cost depends on the product.",
      },
      {
        type: "p",
        text: "A complex web application with multiple roles, payment processing, real-time updates, integrations and advanced reporting can be significantly more complicated than a relatively simple mobile app. The right comparison is therefore what the product needs to do — not which platform is cheaper. [How much it costs to build a mobile app](/blog/how-much-does-it-cost-to-build-a-mobile-app) is a more useful question once the work is visible.",
      },
      {
        type: "h2",
        text: "What about speed of development?",
      },
      {
        type: "p",
        text: "This also depends on the product. A simple web application can often be made available quickly because users only need a browser. Mobile applications introduce additional considerations: device testing, app-store submission, platform requirements, release cycles, mobile permissions and OS versions.",
      },
      {
        type: "p",
        text: "Cross-platform mobile development can reduce duplicated engineering work, but it doesn’t remove all mobile-specific considerations. Again, the right technology depends on the product.",
      },
      {
        type: "h2",
        text: "What about offline functionality?",
      },
      {
        type: "p",
        text: "This can change the decision significantly. Imagine a field-service employee working in a location with unreliable connectivity. They need to open assigned jobs, capture photos, record work, collect signatures and update status. If the application has to work reliably without continuous internet access, offline functionality becomes an important product requirement. A mobile application may be particularly well suited to this type of experience.",
      },
      {
        type: "p",
        text: "But even here, the question isn’t simply “mobile or web.” A well-designed web application can also support certain offline scenarios. The requirement comes first.",
      },
      {
        type: "h2",
        text: "Notifications can change the equation",
      },
      {
        type: "p",
        text: "Imagine a booking platform. A customer makes a reservation. They need to know when the booking is confirmed, the appointment changes, the provider is on the way, or the service is completed. A mobile application can make push notifications a natural part of the experience. But notifications alone don’t necessarily justify an app. Email, SMS and browser notifications can also play a role.",
      },
      {
        type: "p",
        text: "The important question is how important immediate, repeated engagement is. If it’s central to the product, mobile becomes more attractive.",
      },
      {
        type: "h2",
        text: "Don’t build both just because you can",
      },
      {
        type: "p",
        text: "This is probably the most expensive mistake in this decision. A business says: “Let’s build iOS, Android and web.” Sounds ambitious. But now you potentially have more interfaces, more testing, more release processes, more edge cases, more maintenance and more product decisions.",
      },
      {
        type: "p",
        text: "If the users don’t need all three, you’ve created unnecessary work. Start with the experience that solves the core problem. Then expand when there is a reason.",
      },
      {
        type: "h2",
        text: "Start with the most important user journey",
      },
      {
        type: "p",
        text: "Instead of asking “Should we build a mobile app?”, ask: “What is the most important thing our user needs to accomplish?” Imagine you’re building a restaurant ordering product. The primary journey might be: find restaurant → browse menu → order → pay → track order.",
      },
      {
        type: "p",
        text: "Now ask where this will happen, how often, what device users will have, whether they need notifications or location, whether discovery happens through search, and whether they need to use the service without installing anything. Suddenly, the technology decision becomes much clearer.",
      },
      {
        type: "h2",
        text: "A simple decision framework",
      },
      {
        type: "p",
        text: "Here’s a practical way to think about it.",
      },
      {
        type: "h3",
        text: "Choose a web application when",
      },
      {
        type: "ul",
        items: [
          "Users need easy browser access",
          "The product is primarily business or admin focused",
          "SEO and public discoverability matter",
          "Installation would create unnecessary friction",
          "Users work mainly from desktops",
          "The product doesn’t depend heavily on device capabilities",
        ],
      },
      {
        type: "h3",
        text: "Consider a mobile application when",
      },
      {
        type: "ul",
        items: [
          "Users interact frequently from their phones",
          "Push notifications are important",
          "Location is central",
          "Camera or other device capabilities matter",
          "Offline use is important",
          "The product is designed around mobile behaviour",
          "The application is part of a frequent customer journey",
        ],
      },
      {
        type: "h3",
        text: "Consider both when",
      },
      {
        type: "ul",
        items: [
          "Different user groups need different experiences",
          "Public discovery and mobile engagement both matter",
          "Customers need mobile while operations need desktop",
          "The product has genuinely different workflows across devices",
        ],
      },
      {
        type: "h2",
        text: "There is another option: start with one",
      },
      {
        type: "p",
        text: "You don’t have to decide the entire future of the product on day one. A sensible product strategy might be to build a web application to validate the workflow, learn how customers actually use it, then build a mobile application around the journeys where mobile creates meaningful value.",
      },
      {
        type: "p",
        text: "Or it could be the opposite. Build the mobile experience first because that’s where the product’s core value exists. Then build a web dashboard for operations. There isn’t a universal sequence. The sequence should follow the product.",
      },
      {
        type: "h2",
        text: "Technology should follow the experience",
      },
      {
        type: "p",
        text: "This is the part that is easy to forget. Technology choices are important — React, Flutter, native iOS, native Android, Next.js, backend APIs, cloud infrastructure. They all matter. But they shouldn’t be the first decision.",
      },
      {
        type: "p",
        text: "The first decision should be what the user needs to do. Then: what is the best experience for that? Then: what technology can deliver that experience reliably? That order tends to produce better products.",
      },
      {
        type: "h2",
        text: "The answer isn’t always mobile vs. web",
      },
      {
        type: "p",
        text: "Sometimes the best answer is web first. Sometimes mobile first. Sometimes both. And sometimes the smartest decision is to build neither until the business problem is better understood.",
      },
      {
        type: "p",
        text: "The goal isn’t to have an app because every modern business seems to have one. The goal is to create the right digital experience for the people using your product. A mobile application should earn its place. A web application should earn its place. And if both are necessary, they should work together rather than simply duplicate each other.",
      },
      {
        type: "quote",
        text: "Build the experience first. Choose the platform second.",
      },
      {
        type: "p",
        text: "That’s usually a much better way to start.",
      },
      {
        type: "h2",
        text: "The platform is a means to an outcome",
      },
      {
        type: "p",
        text: "At Sayge, we look at the product, users, workflows and technical requirements before deciding whether a project should be web, mobile or both. The platform is a means to an outcome. The right technology is the one that makes the product work better for the people using it.",
      },
      {
        type: "p",
        text: "[Start a conversation.](/contact)",
      },
    ],
  },
  {
    slug: "what-makes-a-software-project-expensive",
    title: "What makes a software project expensive?",
    dek: "Complexity lives in the behaviour behind the screens, not in how many there are.",
    seoTitle: "What Makes a Software Project Expensive? The Real Cost Drivers",
    seoDescription:
      "Software cost isn’t simply about the number of screens. Learn what actually makes software projects expensive, from integrations and business logic to security, data and scope changes.",
    date: "2026-09-22",
    dateLabel: "22 September 2026",
    dateModified: "2026-09-24",
    readingTime: "13 min",
    body: [
      {
        type: "p",
        text: "A software quote can be confusing. One company says ₹8 lakh. Another says ₹18 lakh. Someone else comes back with ₹30 lakh. The immediate reaction is understandable: “Why is there such a huge difference?”",
      },
      {
        type: "p",
        text: "Sometimes the answer is that the companies are pricing the same work differently. But quite often, they’re not actually pricing the same thing. One proposal might include proper discovery, UX, backend engineering, testing, deployment and support. Another might be estimating only the visible application.",
      },
      {
        type: "p",
        text: "And sometimes the difference has nothing to do with the number of screens. A five-screen application can be considerably more difficult to build than a 30-screen application. The reason is simple: software complexity lives in the behaviour behind the screens.",
      },
      {
        type: "h2",
        text: "A screen isn’t a unit of complexity",
      },
      {
        type: "p",
        text: "Imagine two applications. Application A has 30 screens. Most of them display information. Users can navigate between them. There are a few forms. The data is relatively straightforward.",
      },
      {
        type: "p",
        text: "Application B has eight screens. But it includes multiple user roles, payments, real-time updates, complex approval rules, external integrations, sensitive data, offline functionality and automated notifications.",
      },
      {
        type: "p",
        text: "Which one sounds more complicated? Probably B. That’s why estimating software based purely on screen count can be misleading. The better question is:",
      },
      {
        type: "quote",
        text: "What happens when the user presses the button?",
      },
      {
        type: "p",
        text: "That’s where much of the engineering effort lives — and why [custom software development](/services/custom-software-development) cost is so hard to read from a feature list.",
      },
      {
        type: "h2",
        text: "What actually drives software development cost?",
      },
      {
        type: "p",
        text: "Let’s look at the things that quietly add work, even when the interface looks simple.",
      },
      {
        type: "h3",
        text: "1. Business logic can make simple software complicated",
      },
      {
        type: "p",
        text: "Consider an application that allows an employee to submit an expense. At first glance, it sounds simple: employee submits expense → manager approves → finance processes it. Then the business rules arrive. What if the amount exceeds ₹50,000? What if the employee is in a different department? What if the expense category requires additional approval? What if the manager rejects it? What if the employee edits it after rejection? What if finance has already processed it? What if the employee leaves the company?",
      },
      {
        type: "p",
        text: "Suddenly, the system isn’t simply storing a form. It’s implementing the company’s operating rules. Business logic is one of the biggest drivers of software complexity — and much of it isn’t visible in the UI.",
      },
      {
        type: "h3",
        text: "2. Integrations can change the project completely",
      },
      {
        type: "p",
        text: "A requirement might say: “Integrate with our existing ERP.” It sounds like one feature. It isn’t necessarily. The development team may need to understand authentication, API limits, data formats, field mapping, synchronisation, failures, retries, duplicate records, data conflicts and API version changes.",
      },
      {
        type: "p",
        text: "And then there’s the question of what happens when the ERP is unavailable. Does the application stop working? Does it queue the request? Does someone need to retry it? What does the user see? A good integration isn’t simply System A → System B. It’s all the behaviour around that connection.",
      },
      {
        type: "h3",
        text: "3. Real-time functionality adds another layer",
      },
      {
        type: "p",
        text: "Some applications need information to change immediately: chat, live delivery tracking, trading interfaces, operational dashboards, collaborative systems, live order status. These systems have to deal with information changing while users are actively interacting with the application.",
      },
      {
        type: "p",
        text: "That introduces additional engineering around event handling, synchronisation, connections, notifications, server-side processing and failure recovery. Again, the UI may look simple. The underlying system may not be.",
      },
      {
        type: "h3",
        text: "4. Multiple user roles create more than multiple login screens",
      },
      {
        type: "p",
        text: "A system with one type of user is relatively straightforward. But imagine customers, employees, supervisors, administrators and vendors. Now the application has to understand what each person can do. A customer might create a request. An employee can process it. A supervisor can approve it. An administrator can modify the configuration. A vendor might only see a limited subset of information.",
      },
      {
        type: "p",
        text: "Now every important operation needs permission rules. That creates complexity across the UI, the API, the database, the business logic and security. This is why “we just need five user types” isn’t necessarily a small requirement.",
      },
      {
        type: "h3",
        text: "5. Data migration can become a project of its own",
      },
      {
        type: "p",
        text: "Imagine replacing an old business system. The new software is ready. But the company already has ten years of data. Where does it go? The old database might contain inconsistent records, duplicate customers, outdated fields, missing information, different naming conventions and old business rules.",
      },
      {
        type: "p",
        text: "Moving that data isn’t simply copying rows from one database to another. It may require extract → clean → transform → validate → import → verify. And sometimes the migration has to happen without interrupting the existing business. Data migration is often underestimated because it happens behind the scenes. But it can represent significant engineering work.",
      },
      {
        type: "h3",
        text: "6. Security increases the engineering responsibility",
      },
      {
        type: "p",
        text: "Not every application has the same security requirements. An internal tool containing basic operational information is different from a system handling financial transactions, personal information, business-critical data, sensitive documents or employee information.",
      },
      {
        type: "p",
        text: "Security can affect authentication, authorization, encryption, data storage, logging, access controls, session management, infrastructure, monitoring and backups. It isn’t usually a feature you add at the end. It needs to influence how the system is designed — and doing it properly takes time.",
      },
      {
        type: "h3",
        text: "7. Performance requirements matter",
      },
      {
        type: "p",
        text: "A system designed for 100 users doesn’t necessarily need the same architecture as one expected to handle 100,000. But scale shouldn’t be treated as a magic number either. A better question is: what does the system need to do under realistic usage?",
      },
      {
        type: "p",
        text: "Consider an ecommerce platform during a normal afternoon. Now consider the same platform during a major sale. Traffic increases. Orders increase. Payments increase. Database activity increases. Third-party APIs receive more requests. Suddenly, performance becomes part of the product. That may require additional work around caching, database optimisation, infrastructure, queues, load handling, monitoring and performance testing. You don’t necessarily need all of that from day one. But if the product genuinely requires it, it becomes part of the project.",
      },
      {
        type: "h3",
        text: "8. Third-party dependencies aren’t free engineering",
      },
      {
        type: "p",
        text: "Modern software is built on top of other software. You might use payment providers, cloud platforms, mapping services, SMS providers, email services, authentication providers, analytics or AI APIs. That’s often a good thing. You don’t need to build everything yourself.",
      },
      {
        type: "p",
        text: "But every dependency introduces something you need to understand. What happens when the API is down? What happens when pricing changes? What happens when the API changes? What happens when the provider introduces a new authentication method? The more external systems your application relies on, the more integration and operational work needs to be considered.",
      },
      {
        type: "h3",
        text: "9. Legacy systems make “simple” features difficult",
      },
      {
        type: "p",
        text: "This is particularly common in established businesses. Someone asks: “Can we build a mobile application for our existing system?” The mobile application might be straightforward. The existing system might not be. Perhaps there is an old database, limited APIs, undocumented business logic, outdated authentication, multiple legacy systems or inconsistent data.",
      },
      {
        type: "p",
        text: "Now the project isn’t simply mobile development. It’s also integration and modernisation. Sometimes a seemingly simple new interface requires significant work underneath it. [How much it costs to build a mobile app](/blog/how-much-does-it-cost-to-build-a-mobile-app) is a more useful question once that hidden work is visible.",
      },
      {
        type: "h3",
        text: "10. Poorly defined requirements increase cost",
      },
      {
        type: "p",
        text: "This is one of the most avoidable sources of cost. Imagine starting development with “We’ll figure out the details as we go.” It sounds flexible. But every unresolved question eventually becomes a decision. And decisions during development can affect design, architecture, database structure, APIs, testing and timelines.",
      },
      {
        type: "p",
        text: "A small change early in the project can be inexpensive. The same change after several dependent features have been built can be much more expensive. That’s why [understanding the product before building it](/blog/understand-before-building) isn’t bureaucracy. It is cost control.",
      },
      {
        type: "h3",
        text: "11. Changing scope is different from changing your mind",
      },
      {
        type: "p",
        text: "Software projects change. That’s normal. You learn something from users. The market changes. A business process changes. A new integration becomes necessary. The issue isn’t that scope changes. The issue is pretending they don’t affect the project.",
      },
      {
        type: "p",
        text: "If you add three new workflows, another user type, a payment system and a new integration after development has started, that’s additional work. A good project makes that visible. The client should know what changed, why it changed, what it affects, and how much additional work it creates. That transparency is more useful than pretending the original estimate can never change.",
      },
      {
        type: "h3",
        text: "12. Testing isn’t just “checking if the button works”",
      },
      {
        type: "p",
        text: "A professional software product needs to be tested across different conditions. Consider a payment flow. You don’t just test that payment succeeds. You also need to think about payment failing, the user cancelling, the network disappearing, payment succeeding but confirmation being delayed, the user pressing the button twice, the application being closed during payment, and the backend receiving duplicate requests.",
      },
      {
        type: "p",
        text: "The same principle applies across the product. Testing becomes more complex as the number of possible states increases. And good testing takes time.",
      },
      {
        type: "h3",
        text: "13. Mobile applications have their own complexity",
      },
      {
        type: "p",
        text: "If the project includes mobile applications, there can be additional considerations around different screen sizes, operating system versions, permissions, device capabilities, background behaviour, notifications, app-store requirements, network conditions and battery usage.",
      },
      {
        type: "p",
        text: "A feature that works perfectly on one device isn’t necessarily finished. It needs to work reliably across the environments that matter to the product. And a mobile application isn’t always the right surface in the first place — [whether you need a mobile app, a web app, or both](/blog/mobile-app-vs-web-app-or-both) is a product decision, not a default.",
      },
      {
        type: "h3",
        text: "14. Admin and operational software is part of the product",
      },
      {
        type: "p",
        text: "A customer-facing application rarely operates by itself. Someone needs to manage the business behind it: users, requests, approvals, support, content, reports, settings. If the business needs an admin platform, that is part of the software project. It shouldn’t be treated as an afterthought.",
      },
      {
        type: "h3",
        text: "15. Infrastructure matters too",
      },
      {
        type: "p",
        text: "Software needs somewhere to run. Depending on the application, you may need application servers, databases, storage, content delivery, background jobs, monitoring, backups, logging, staging environments and production environments.",
      },
      {
        type: "p",
        text: "A small internal tool may need very little infrastructure. A large customer-facing platform may need considerably more. The important thing is to match the infrastructure to the actual requirements.",
      },
      {
        type: "h3",
        text: "16. “Enterprise-ready” can mean a lot of things",
      },
      {
        type: "p",
        text: "Sometimes a project brief contains a phrase like “The application should be enterprise-grade.” That’s not a technical specification. You need to ask what it means. Does it mean high availability, security controls, audit logs, role-based access, scalability, compliance requirements, disaster recovery, monitoring or formal support?",
      },
      {
        type: "p",
        text: "Each requirement can affect the architecture and cost. The phrase itself doesn’t tell you much. The details do.",
      },
      {
        type: "h2",
        text: "Why the cheapest quote isn’t always the cheapest project",
      },
      {
        type: "p",
        text: "Imagine two proposals. Proposal A is ₹10 lakh, but it excludes the admin panel, testing, deployment, documentation and production support. Proposal B is ₹16 lakh and includes all of those things. Which is cheaper? You can’t answer that from the headline number. You need to compare the actual scope.",
      },
      {
        type: "p",
        text: "This is why businesses should avoid evaluating software vendors purely on price. Compare the work behind the number.",
      },
      {
        type: "h2",
        text: "How to make software costs more predictable",
      },
      {
        type: "p",
        text: "You can’t eliminate uncertainty completely. But you can reduce it.",
      },
      {
        type: "ul",
        items: [
          "Start with discovery — understand the business problem and core workflows.",
          "Define the first version — separate essential functionality from things that can wait.",
          "Identify integrations early — don’t discover critical dependencies halfway through development.",
          "Define user roles — know who can do what.",
          "Make assumptions visible — if something isn’t known, write it down.",
          "Break the project into milestones — this makes progress and scope easier to manage.",
          "Keep change management clear — new requirements should have visible impact.",
          "Don’t overbuild — prepare for realistic future needs rather than every hypothetical scenario.",
        ],
      },
      {
        type: "h2",
        text: "A useful way to compare software quotes",
      },
      {
        type: "p",
        text: "Before choosing a development partner, create a simple comparison.",
      },
      {
        type: "table",
        wide: true,
        columns: ["Area", "Vendor A", "Vendor B", "Vendor C"],
        rows: [
          ["Discovery", "Included?", "Included?", "Included?"],
          ["UI/UX", "Included?", "Included?", "Included?"],
          ["Mobile", "What platforms?", "What platforms?", "What platforms?"],
          ["Backend", "Included?", "Included?", "Included?"],
          ["Admin panel", "Included?", "Included?", "Included?"],
          ["Integrations", "Which ones?", "Which ones?", "Which ones?"],
          ["Testing", "What’s included?", "What’s included?", "What’s included?"],
          ["Deployment", "Included?", "Included?", "Included?"],
          ["Documentation", "Included?", "Included?", "Included?"],
          ["Support", "What’s included?", "What’s included?", "What’s included?"],
          ["Source code", "Ownership?", "Ownership?", "Ownership?"],
          ["Third-party costs", "Included?", "Separate?", "Separate?"],
          ["Total", "₹X", "₹Y", "₹Z"],
        ],
      },
      {
        type: "p",
        text: "This makes the conversation much more useful. You’re no longer comparing three numbers. You’re comparing three proposals.",
      },
      {
        type: "h2",
        text: "The real cost isn’t always the development cost",
      },
      {
        type: "p",
        text: "There’s another number businesses should think about: the cost of getting the wrong software. If the product doesn’t solve the problem, the money spent developing it isn’t the only loss. There may also be wasted employee time, a delayed launch, lost customers, abandoned development, migration costs, replacement costs and opportunity cost.",
      },
      {
        type: "p",
        text: "This is why good product thinking matters — and why [knowing when custom software is worth building](/blog/when-custom-software-is-worth-building) should come before asking how much it will cost. Spending less on development doesn’t automatically mean spending less overall.",
      },
      {
        type: "h2",
        text: "Complexity should be earned",
      },
      {
        type: "p",
        text: "One of the best ways to control software cost is surprisingly simple: don’t build complexity until the business needs it. If you don’t need real-time functionality, don’t add it. If you don’t need five user roles, don’t create five. If a standard integration works, don’t build a custom one unnecessarily. If a web application solves the problem, don’t automatically build three mobile applications. If a normal rule works reliably, don’t add AI just because it’s available.",
      },
      {
        type: "p",
        text: "Good engineering isn’t about making systems complicated. It’s about making them appropriate to the problem.",
      },
      {
        type: "h2",
        text: "So what actually makes software expensive?",
      },
      {
        type: "p",
        text: "Usually, it’s not one thing. It’s the combination of complex business rules, integrations, data, security, multiple users and roles, performance requirements, testing, infrastructure, changing requirements and unclear scope.",
      },
      {
        type: "p",
        text: "The visible application is only part of the project. The engineering underneath it is what determines much of the effort.",
      },
      {
        type: "h2",
        text: "A software quote is really a model of the work",
      },
      {
        type: "p",
        text: "The next time you receive a software proposal, don’t start by looking at the final number. Look underneath it.",
      },
      {
        type: "ul",
        items: [
          "What exactly are they building?",
          "What assumptions did they make?",
          "What’s included?",
          "What’s excluded?",
          "How are integrations handled?",
          "Who is testing it?",
          "What happens after launch?",
          "Who owns the software?",
        ],
      },
      {
        type: "p",
        text: "Once you understand those things, the price becomes much easier to evaluate. Because a software estimate isn’t really just a price tag. It’s a model of the work someone believes is required to solve your problem. And the better that model is, the more useful the estimate becomes.",
      },
      {
        type: "h2",
        text: "Make the uncertainty visible",
      },
      {
        type: "p",
        text: "At Sayge, we prefer to understand the business problem, workflows, users and technical requirements before putting a development estimate around a project. That doesn’t eliminate uncertainty. It makes the uncertainty visible. And in software, knowing what you don’t know is often the first step toward controlling the cost.",
      },
      {
        type: "p",
        text: "If you’re comparing quotes and aren’t sure what the numbers actually include, [start a conversation](/contact).",
      },
    ],
  },
  {
    slug: "when-custom-software-is-worth-building",
    title: "When custom software is worth building.",
    dek: "Not every problem needs a new piece of software. Sometimes owning it has become valuable.",
    seoTitle: "When Is Custom Software Worth Building? A Practical Guide",
    seoDescription:
      "Not every business needs custom software. Learn when building custom software makes sense, when off-the-shelf tools are better, and how to make the decision.",
    date: "2026-09-18",
    dateLabel: "18 September 2026",
    dateModified: "2026-09-24",
    readingTime: "12 min",
    body: [
      {
        type: "p",
        text: "Not every problem needs a new piece of software. Sometimes the smartest thing a business can do is buy an existing tool, configure it properly and move on. Other times, that approach quietly becomes expensive.",
      },
      {
        type: "p",
        text: "The team starts working around limitations. Someone maintains a spreadsheet because the software doesn’t support a particular workflow. Another person exports data from one system and uploads it into another. Approvals happen over email. Customers get different answers depending on who handled the request.",
      },
      {
        type: "p",
        text: "Nobody looks at these things individually and thinks, We need custom software. But collectively, they tell a different story. The question isn’t really whether your business should build software. The better question is:",
      },
      {
        type: "quote",
        text: "Is the way your business works different enough that owning the software has become valuable?",
      },
      {
        type: "p",
        text: "That’s usually where custom software starts making sense.",
      },
      {
        type: "h2",
        text: "Start with the problem, not the software",
      },
      {
        type: "p",
        text: "One of the easiest mistakes to make is starting with technology. A business decides it needs an app, an AI platform, a dashboard or an ERP. Then the search for a development company begins. Software should usually start somewhere much less exciting: what isn’t working today?",
      },
      {
        type: "p",
        text: "Maybe your sales team spends hours entering the same information into multiple systems. Maybe your operations team has developed a complicated spreadsheet that only one person fully understands. Maybe customers have to call your team to do something that should be self-service. Maybe your existing software handles 80% of your process perfectly — but the remaining 20% is where most of the work happens.",
      },
      {
        type: "p",
        text: "That last situation is particularly interesting. Sometimes the problem isn’t that you don’t have software. It’s that your software doesn’t fit the business anymore.",
      },
      {
        type: "h2",
        text: "The hidden cost of “good enough” software",
      },
      {
        type: "p",
        text: "Off-the-shelf software is often the right choice. It’s cheaper to start with. It’s already tested. Updates are handled by someone else. You don’t have to build and maintain everything yourself. The problem begins when a business starts adapting itself around the tool.",
      },
      {
        type: "p",
        text: "Consider a simple example. A company uses a standard ticketing platform. It works well for creating tickets, assigning them and closing them. But the company’s actual process is more complicated: a ticket might need approval from a manager, then a site visit, then a quotation, then customer confirmation, then scheduling, then completion documentation.",
      },
      {
        type: "p",
        text: "The team starts creating workarounds. One status is used for two different things. Comments become approval records. Excel becomes the scheduling system. Email becomes the notification system. Eventually, the company has a ticketing process — but not really a ticketing system. It has a collection of tools held together by human effort. That human effort has a cost, and it tends to increase as the business grows.",
      },
      {
        type: "h2",
        text: "A useful way to think about build vs. buy",
      },
      {
        type: "p",
        text: "Before deciding on [custom software development](/services/custom-software-development), look at four things.",
      },
      {
        type: "h3",
        text: "1. How unique is the process?",
      },
      {
        type: "p",
        text: "If your process is essentially the same as thousands of other businesses, an existing product will often be the sensible option.",
      },
      {
        type: "ul",
        dense: true,
        items: [
          "Accounting",
          "Email",
          "Project management",
          "Basic CRM",
          "Team communication",
        ],
      },
      {
        type: "p",
        text: "There is little value in rebuilding something that already works extremely well. But if your process is a meaningful part of how your company operates, the equation changes. Perhaps you have a unique approval structure, a specialised pricing model, a complex field operation, a particular customer journey, or a workflow that connects several departments. That’s where custom software can create an advantage.",
      },
      {
        type: "h3",
        text: "2. How much time is the current process consuming?",
      },
      {
        type: "p",
        text: "This is one of the simplest questions to answer — and one of the most useful. Take a process your team performs regularly.",
      },
      {
        type: "ul",
        items: [
          "How many people touch it?",
          "How long does it take?",
          "How often does it happen?",
          "How much information is entered manually?",
          "How often does someone have to correct an error?",
        ],
      },
      {
        type: "p",
        text: "You might discover that a process which looks like “just admin” is consuming hundreds of hours every year. For example: 10 employees × 30 minutes per day × 250 working days. That’s 1,250 hours a year. At that point, the question isn’t simply “How much will the software cost?” It becomes:",
      },
      {
        type: "quote",
        text: "How much is it costing us not to change it?",
      },
      {
        type: "p",
        text: "That’s a much better conversation.",
      },
      {
        type: "h3",
        text: "3. Are you constantly working around your existing tools?",
      },
      {
        type: "p",
        text: "This is one of the strongest signals that custom software may be worth considering. Watch for phrases like:",
      },
      {
        type: "ul",
        items: [
          "“The system doesn’t support that.”",
          "“We export it to Excel.”",
          "“Someone from operations has to update it manually.”",
          "“Don’t change that field — it breaks the report.”",
          "“We’ll have to do that outside the system.”",
          "“Only Rahul knows how this works.”",
        ],
      },
      {
        type: "p",
        text: "The individual workaround may seem harmless. The problem is what happens when there are twenty of them. Over time, the business develops an unofficial operating system made from spreadsheets, emails, WhatsApp messages, PDFs and people’s memory. That’s difficult to scale — and even more difficult to hand over.",
      },
      {
        type: "h3",
        text: "4. Does the software itself create business value?",
      },
      {
        type: "p",
        text: "Not every internal inefficiency justifies a custom application. The strongest cases are usually where software can directly improve something important:",
      },
      {
        type: "ul",
        dense: true,
        items: [
          "Revenue",
          "Customer experience",
          "Operational efficiency",
          "Decision-making",
          "Reliability",
          "Scalability",
          "Speed",
          "Data visibility",
        ],
      },
      {
        type: "p",
        text: "For example, imagine a distributor whose sales team currently places orders manually. A custom ordering platform might not just remove paperwork. It could provide live inventory, customer-specific pricing, approval workflows, automated order processing and visibility into sales. Now the software isn’t simply replacing a spreadsheet. It is becoming part of the business model. That’s a very different proposition.",
      },
      {
        type: "h2",
        text: "When you probably shouldn’t build custom software",
      },
      {
        type: "p",
        text: "This part is important. A software development company should not tell every business to build custom software. Sometimes, buying is the better decision. You probably don’t need custom software if:",
      },
      {
        type: "h3",
        text: "Your process is standard",
      },
      {
        type: "p",
        text: "If your requirements can be handled well by an established SaaS product, use it. You don’t get extra points for owning your own CRM.",
      },
      {
        type: "h3",
        text: "Your requirements are still unclear",
      },
      {
        type: "p",
        text: "Building software before understanding the problem usually creates expensive confusion. If the business itself doesn’t know what the system needs to accomplish, start with discovery.",
      },
      {
        type: "h3",
        text: "The problem isn’t significant enough",
      },
      {
        type: "p",
        text: "If a process happens twice a month and takes an hour, spending months building software for it probably isn’t sensible. Fix the process first.",
      },
      {
        type: "h3",
        text: "You don’t have someone who can own the product",
      },
      {
        type: "p",
        text: "Software doesn’t end at launch. Someone needs to make decisions, prioritise improvements, review usage and keep the system aligned with the business. Without ownership, even good software can become shelfware.",
      },
      {
        type: "h2",
        text: "There is also a middle ground",
      },
      {
        type: "p",
        text: "The decision isn’t always buy software versus build everything from scratch. There is a third option: extend what you already have. Sometimes the right solution is to keep your existing CRM, accounting system or ERP and build a smaller application around it.",
      },
      {
        type: "ul",
        items: [
          "Your existing system handles customer records.",
          "Your custom application handles a specialised field workflow.",
          "An API connects the two.",
        ],
      },
      {
        type: "p",
        text: "Your team gets the workflow they actually need without replacing the entire technology stack. This can be considerably more practical than starting from zero. Good custom software doesn’t necessarily mean rebuilding everything. It means building the part that genuinely needs to be yours.",
      },
      {
        type: "h2",
        text: "What should you actually build?",
      },
      {
        type: "p",
        text: "If you’ve reached the point where custom software makes sense, resist the temptation to build every feature you can think of. Start with the business outcome. A useful first version might be surprisingly small. For example, a custom operations platform could begin with:",
      },
      {
        type: "ol",
        dense: true,
        items: [
          "User login and roles",
          "Customer management",
          "The core workflow",
          "Approvals",
          "Notifications",
          "Basic reporting",
        ],
      },
      {
        type: "p",
        text: "That’s enough to put the system into the hands of real users. Then you learn.",
      },
      {
        type: "ul",
        items: [
          "Which part saves the most time?",
          "Where do users struggle?",
          "Which reports actually matter?",
          "Which features are being ignored?",
          "What should happen automatically?",
        ],
      },
      {
        type: "p",
        text: "That information is far more valuable than a 60-page feature document created before anyone has used the product.",
      },
      {
        type: "h2",
        text: "The real value of custom software is ownership",
      },
      {
        type: "p",
        text: "There’s a reason businesses eventually choose to build their own systems. It’s not always about having more features. It’s about having more control.",
      },
      {
        type: "ul",
        dense: true,
        items: [
          "Control over the workflow",
          "Control over the data",
          "Control over integrations",
          "Control over the customer experience",
          "Control over what gets changed next",
        ],
      },
      {
        type: "p",
        text: "And, perhaps most importantly, control over the technology that supports a critical part of the business. That doesn’t mean every business should own its software. It means that when software becomes central to how you operate, the ability to shape it around the business can become an advantage.",
      },
      {
        type: "h2",
        text: "So, is custom software worth it?",
      },
      {
        type: "p",
        text: "A simple checklist can help. Ask yourself:",
      },
      {
        type: "ul",
        items: [
          "Is the process important to the business?",
          "Is it significantly different from the way standard software works?",
          "Are employees spending substantial time working around existing tools?",
          "Are manual processes creating errors or delays?",
          "Could better software improve revenue, efficiency or customer experience?",
          "Will the process continue to matter as the company grows?",
          "Is there someone who can own the product internally?",
        ],
      },
      {
        type: "p",
        text: "If most of those answers are yes, it’s probably worth investigating custom software — not necessarily building it immediately. Investigating it.",
      },
      {
        type: "p",
        text: "Start with understanding the current process. Map where the friction actually exists. Calculate what that friction costs. Look at existing products. Identify what they can and cannot do. Then decide.",
      },
      {
        type: "p",
        text: "Because the best custom software projects don’t begin with “We need an app.” They begin with:",
      },
      {
        type: "quote",
        text: "There has to be a better way of doing this.",
      },
      {
        type: "p",
        text: "And that’s usually where the interesting work starts.",
      },
      {
        type: "h2",
        text: "A final thought",
      },
      {
        type: "p",
        text: "Software is easy to build badly. It’s also surprisingly easy to build something nobody really needed. The hard part isn’t writing the code. It’s knowing what deserves to become software in the first place.",
      },
      {
        type: "p",
        text: "That’s why the most valuable part of a custom software project often happens before development starts — understanding the business, challenging assumptions, defining the problem and deciding what should actually be built. Once that part is right, the technology has somewhere useful to go.",
      },
      {
        type: "quote",
        text: "Technology, thoughtfully engineered.",
      },
    ],
  },
  {
    slug: "understand-before-building",
    title: "Understand before building.",
    dek: "The first artefact of a good project is not a prototype. It is a shared picture of the problem.",
    seoTitle:
      "Why Software Projects Should Start With Understanding, Not Development",
    seoDescription:
      "Great software projects don’t start with features or code. They start by understanding the business, users and problem. Here’s what that actually looks like.",
    date: "2026-09-11",
    dateLabel: "11 September 2026",
    dateModified: "2026-09-24",
    readingTime: "12 min",
    body: [
      {
        type: "p",
        text: "A business comes to you with an idea. “We need an app.” Another says: “We need a dashboard.” Someone else has already decided: “We need AI.” And occasionally, the requirement arrives with a complete list of screens, buttons and features.",
      },
      {
        type: "p",
        text: "It can be tempting to open Figma immediately. Or create a backlog. Or start setting up the repository. But there is a step that is easy to skip because it doesn’t look like much from the outside: understanding the problem.",
      },
      {
        type: "p",
        text: "It doesn’t produce a beautiful screen. It doesn’t generate a demo. It doesn’t give anyone something impressive to show in the first meeting. But it can determine whether everything that comes after it is useful.",
      },
      {
        type: "h2",
        text: "The first deliverable shouldn’t be the prototype",
      },
      {
        type: "p",
        text: "There’s a common idea in the software development process that the faster you build something, the faster you learn. There’s truth in that. But speed without direction isn’t really speed. If the team has misunderstood the problem, a fast prototype simply helps everyone get to the wrong answer faster.",
      },
      {
        type: "p",
        text: "A prototype can show what an interface might look like. It can’t automatically tell you whether you’re solving the right problem. That’s why good projects usually begin with a different kind of deliverable: a shared understanding of what needs to be solved.",
      },
      {
        type: "ul",
        items: [
          "What is happening today?",
          "Who is affected?",
          "Where does the process break?",
          "What are people doing manually?",
          "What information is missing?",
          "What decisions need to be made?",
          "What does success actually look like?",
        ],
      },
      {
        type: "p",
        text: "Until those questions are reasonably clear, designing the solution is premature.",
      },
      {
        type: "h2",
        text: "Start with how the business actually works",
      },
      {
        type: "p",
        text: "A requirement document might say: “The system should allow managers to approve requests.” That’s technically a requirement. But it isn’t much of a picture.",
      },
      {
        type: "ul",
        items: [
          "What kind of request?",
          "Who creates it?",
          "What information is required?",
          "Who approves it?",
          "Can it be rejected?",
          "What happens after rejection?",
          "Can someone edit it?",
          "What happens if the manager doesn’t respond?",
          "Does the customer need to know?",
          "Does another department need to act afterwards?",
          "What happens today?",
        ],
      },
      {
        type: "p",
        text: "Those questions matter because software doesn’t operate in isolation. It becomes part of a process that already exists. And sometimes the process itself is the problem.",
      },
      {
        type: "h2",
        text: "Watch the work, don’t just document it",
      },
      {
        type: "p",
        text: "One of the most useful things a technology team can do is talk to the people who actually use the process. Not just management. Not just the person who requested the software. The people doing the work every day. They often know things that never appear in requirement documents.",
      },
      {
        type: "ul",
        items: [
          "Which fields nobody uses.",
          "Which reports are manually prepared every Monday.",
          "Which step requires three phone calls.",
          "Which “temporary” Excel sheet has quietly become essential to the business.",
          "Which part of the existing system everyone hates.",
          "Where people have created shortcuts to make the process survivable.",
        ],
      },
      {
        type: "p",
        text: "Those details are incredibly valuable. Because they reveal the difference between how the business is supposed to work and how it actually works.",
      },
      {
        type: "h2",
        text: "Requirements aren’t always the problem",
      },
      {
        type: "p",
        text: "Sometimes a project starts with perfectly reasonable requirements. The problem is that the requirements describe the solution rather than the underlying need.",
      },
      {
        type: "quote",
        text: "We need a mobile application where customers can track their service requests.",
      },
      {
        type: "p",
        text: "That’s useful. But why? Perhaps customers are calling the support team repeatedly because they have no visibility into the status of their request. If that’s the real problem, there might be several possible solutions. A mobile app could be one. A web portal could be another. Automated notifications might solve part of it. Better internal status management might solve another part.",
      },
      {
        type: "p",
        text: "The original requirement may have been correct. But understanding the underlying problem gives the team more options. And more options usually lead to better decisions.",
      },
      {
        type: "h2",
        text: "Ask “why” a few more times",
      },
      {
        type: "p",
        text: "This doesn’t need to become a complicated consulting exercise. Sometimes you simply need to keep asking one question. Why?",
      },
      {
        type: "p",
        text: "“We need an automated report.” Why? “Because the operations team spends three hours preparing it.” Why does it take three hours? “Data comes from four systems.” Why? “Those systems don’t share data.” Why do they need four systems? “Different departments use different tools.”",
      },
      {
        type: "p",
        text: "Now the problem looks very different. The original request was an automated report. The underlying problem might actually be fragmented data and manual reconciliation. That distinction matters. Otherwise, you could spend weeks building a beautiful reporting system that automates only one part of a much larger problem.",
      },
      {
        type: "h2",
        text: "The people using the software matter",
      },
      {
        type: "p",
        text: "Software requirements often make sense when written down. Users don’t read requirements documents. They use software. And users bring context that isn’t always visible in a specification.",
      },
      {
        type: "p",
        text: "A warehouse worker might use the system while moving between locations. A sales representative might have thirty seconds to update a customer record. A finance employee might need a complete audit trail. A manager might only open the dashboard once a week. The same feature can therefore behave very differently depending on who is using it.",
      },
      {
        type: "p",
        text: "Understanding the user isn’t about creating elaborate personas for the sake of a presentation. It’s about understanding their reality. Where are they? What are they trying to accomplish? What information do they have? What constraints are they working under? What happens if they make a mistake? Those answers should influence the product.",
      },
      {
        type: "h2",
        text: "Define what success means",
      },
      {
        type: "p",
        text: "“Build the application.” That’s a delivery goal. It isn’t a business outcome. A better conversation is: what should be different after this software exists?",
      },
      {
        type: "ul",
        items: [
          "Order processing should take 10 minutes instead of 45.",
          "Customers should be able to resolve common requests without calling support.",
          "Managers should see operational performance without waiting for a weekly report.",
          "Sales teams should stop entering the same information in multiple systems.",
          "Field teams should be able to complete their workflow from a phone.",
        ],
      },
      {
        type: "p",
        text: "Now the development team has something to measure against. A feature can be technically complete and still fail to create the intended outcome. Success needs to be defined before development makes that distinction difficult to see.",
      },
      {
        type: "h2",
        text: "Then decide what actually needs to be built",
      },
      {
        type: "p",
        text: "Once the problem is understood, something interesting happens. The original scope often changes. Sometimes it gets smaller. Sometimes it gets bigger. Sometimes an entirely different solution becomes obvious. That’s not a failure of product discovery. That’s the point of it.",
      },
      {
        type: "p",
        text: "If the first conversation says you need twenty features and the third conversation reveals that five of them solve the actual problem, you’ve saved time. If it reveals that the original five features aren’t enough to make the workflow useful, you’ve discovered that before spending months building them. Either way, understanding has done its job.",
      },
      {
        type: "p",
        text: "That is also the right moment to ask whether [custom software development](/services/custom-software-development) is even the answer — or whether the work should stay with what you already have. [When custom software is worth building](/blog/when-custom-software-is-worth-building) is the next question, not the first.",
      },
      {
        type: "h2",
        text: "A good first version should answer a question",
      },
      {
        type: "p",
        text: "The first version of a product doesn’t need to prove that the entire future exists. It needs to prove something useful.",
      },
      {
        type: "ul",
        items: [
          "Can users complete the core workflow?",
          "Does the new process actually save time?",
          "Will customers use it?",
          "Does the data become more reliable?",
          "Can the business operate with it?",
          "Does the new workflow work outside the development team’s laptop?",
        ],
      },
      {
        type: "p",
        text: "These are much better questions than: “How many features can we get into version one?” A smaller product that answers an important question is often more valuable than a larger product that answers none.",
      },
      {
        type: "h2",
        text: "Technology decisions come later than people think",
      },
      {
        type: "p",
        text: "Once the problem and workflow are clear, technology becomes much easier to discuss. Should this be a web application? A mobile application? Both? Does it need real-time updates? Does it need integrations? What data needs to be stored? What needs to be automated? Where does AI genuinely help? What security requirements exist? What needs to scale?",
      },
      {
        type: "p",
        text: "These are important questions. But they become much easier when the team understands what the system is actually supposed to do. Otherwise, technical conversations can become detached from the business. You end up debating frameworks before agreeing on the problem.",
      },
      {
        type: "h2",
        text: "Understanding isn’t a phase you finish and forget",
      },
      {
        type: "p",
        text: "There is another misconception worth clearing up. Discovery isn’t something you do once, produce a document and never revisit. Good software product development is iterative. You learn something from users. You build something. Users interact with it. You discover something you didn’t know. The product changes.",
      },
      {
        type: "p",
        text: "That doesn’t mean the project lacked planning. It means reality provided new information. The goal isn’t to predict everything before writing code. The goal is to make better decisions as you learn.",
      },
      {
        type: "h2",
        text: "What a useful discovery process can look like",
      },
      {
        type: "p",
        text: "It doesn’t have to be complicated. For a new software project, a practical starting point could be:",
      },
      {
        type: "h3",
        text: "01 — Understand the business",
      },
      {
        type: "p",
        text: "What does the company do? How does the relevant process work today? Where does money, time or information move?",
      },
      {
        type: "h3",
        text: "02 — Understand the users",
      },
      {
        type: "p",
        text: "Who actually uses the system? What are they trying to accomplish? What constraints do they work with?",
      },
      {
        type: "h3",
        text: "03 — Map the current workflow",
      },
      {
        type: "p",
        text: "What happens from beginning to end? Where are the handoffs? Where are the delays? Where are the manual steps?",
      },
      {
        type: "h3",
        text: "04 — Identify the real problem",
      },
      {
        type: "p",
        text: "Which problems are worth solving? Which are symptoms? Which are simply preferences?",
      },
      {
        type: "h3",
        text: "05 — Define the outcome",
      },
      {
        type: "p",
        text: "What should improve? How will you know?",
      },
      {
        type: "h3",
        text: "06 — Shape the first version",
      },
      {
        type: "p",
        text: "What is the smallest useful system that can test the idea?",
      },
      {
        type: "h3",
        text: "07 — Then design and build",
      },
      {
        type: "p",
        text: "Now the team has enough context to make technology decisions with purpose.",
      },
      {
        type: "h2",
        text: "The best software teams ask uncomfortable questions",
      },
      {
        type: "p",
        text: "A good technology partner shouldn’t simply translate every request into code. Sometimes the most useful answer is: “Why do you need this?” Or: “What happens if we don’t build this?” Or: “Could your existing system already solve most of this?” Or even: “Do we need to build this at all?”",
      },
      {
        type: "p",
        text: "Those questions can be uncomfortable. They’re also useful. Because the objective isn’t to maximise the amount of software delivered. It’s to create something that genuinely improves the business.",
      },
      {
        type: "h2",
        text: "Before you build, make sure you understand",
      },
      {
        type: "p",
        text: "If there’s one thing worth taking away from all of this, it’s simple: don’t confuse a requested feature with a defined problem. A feature is what someone asks for. A problem is what the business needs to solve. The difference between the two can be the difference between software that gets launched and software that actually gets used.",
      },
      {
        type: "p",
        text: "So before the first wireframe, before the first sprint and definitely before the first line of production code, spend some time understanding. Talk to the people doing the work. Map the process. Question the assumptions. Define success. Then build.",
      },
      {
        type: "p",
        text: "Because the first artefact of a good software project isn’t necessarily a prototype. It’s a shared picture of the problem.",
      },
    ],
  },
  {
    slug: "practical-ai-not-ai-as-decoration",
    title: "Practical AI, not AI as decoration.",
    dek: "Intelligence belongs in a product when it earns its place in the work — not when it earns a slide.",
    seoTitle: "Practical AI: How Businesses Should Actually Use AI in Software",
    seoDescription:
      "AI can improve software when it solves a real business problem. Here’s how to identify practical AI use cases, avoid AI for AI’s sake, and build useful AI features.",
    date: "2026-09-04",
    dateLabel: "4 September 2026",
    dateModified: "2026-09-24",
    readingTime: "12 min",
    body: [
      {
        type: "p",
        text: "AI is everywhere right now. Add a chatbot. Add a copilot. Add a “powered by AI” label. Put an AI button somewhere in the product. Suddenly the product is supposed to feel intelligent.",
      },
      {
        type: "p",
        text: "But there’s a problem. Adding AI to software doesn’t automatically make the software better. Sometimes it makes it slower. Sometimes it makes it more complicated. Sometimes it creates another feature nobody uses. And occasionally, it solves a problem that didn’t really exist in the first place.",
      },
      {
        type: "p",
        text: "The interesting question isn’t “Where can we add AI?” It’s:",
      },
      {
        type: "quote",
        text: "Where could intelligence meaningfully improve the way this product works?",
      },
      {
        type: "p",
        text: "That distinction matters.",
      },
      {
        type: "h2",
        text: "AI should earn its place in the product",
      },
      {
        type: "p",
        text: "Imagine a customer support application. You could add an AI chatbot to the homepage. It might answer questions. It might also give customers another place to ask questions that your existing support team already answers perfectly well.",
      },
      {
        type: "p",
        text: "Now consider a different use case. The support team receives 5,000 tickets a month. Each ticket needs to be categorised, prioritised and routed to the right team. That’s different. AI could potentially classify incoming requests, identify urgency, extract relevant information and suggest the appropriate team. The technology is no longer decoration. It’s doing work. That’s the standard worth applying.",
      },
      {
        type: "h2",
        text: "Start with the work, not the model",
      },
      {
        type: "p",
        text: "When companies talk about AI, conversations often jump immediately to models. Which model? Which API? Which framework? Which vector database? Which agent? Those questions have their place. But they aren’t the starting point.",
      },
      {
        type: "p",
        text: "Start with the workflow. [Understanding the work before you build](/blog/understand-before-building) usually reveals the real opportunities. Look at what people actually do.",
      },
      {
        type: "ul",
        items: [
          "Where do they spend time?",
          "Where do they repeatedly read information?",
          "Where do they make similar decisions?",
          "Where do they search through large amounts of content?",
          "Where do they copy information between systems?",
          "Where do they write the same type of response again and again?",
          "Where does someone have to look at ten things before deciding what to do next?",
        ],
      },
      {
        type: "p",
        text: "These are much more interesting places to look for AI opportunities.",
      },
      {
        type: "h2",
        text: "Five places where AI can genuinely help",
      },
      {
        type: "p",
        text: "There isn’t one universal AI feature that every business needs. But there are some patterns that repeatedly make sense.",
      },
      {
        type: "h3",
        text: "1. Working with large amounts of information",
      },
      {
        type: "p",
        text: "People are good at understanding context. They’re much less excited about reading 300 pages of documents to find three relevant paragraphs. AI can help make information easier to work with. For example:",
      },
      {
        type: "ul",
        dense: true,
        items: [
          "searching internal documentation",
          "summarising long documents",
          "extracting information from invoices",
          "finding relevant clauses in contracts",
          "answering questions over company knowledge",
          "comparing documents",
          "classifying incoming requests",
        ],
      },
      {
        type: "p",
        text: "The important part is that the AI is helping someone get to the useful information faster. Not simply generating text because it can.",
      },
      {
        type: "h3",
        text: "2. Repetitive decisions",
      },
      {
        type: "p",
        text: "Many businesses perform the same basic decision-making process hundreds or thousands of times. A customer request comes in. Someone reads it. They identify the category. They check a few details. They decide what happens next. Then they repeat the process.",
      },
      {
        type: "p",
        text: "If the decision follows a reasonably consistent pattern, AI can sometimes help with classification, recommendations or routing. The human doesn’t necessarily disappear. The human gets a better starting point. That distinction is important. AI doesn’t always need to replace the person doing the work. Sometimes its job is to reduce the amount of work that person has to do.",
      },
      {
        type: "h3",
        text: "3. Turning unstructured information into structured data",
      },
      {
        type: "p",
        text: "This is one of the less glamorous AI applications — and one of the more useful. Businesses deal with messy information all day. Emails. PDFs. Images. Forms. Documents. Messages. Notes. Reports. The information is valuable, but it isn’t necessarily organised. AI can help turn that information into something a software system can actually work with.",
      },
      {
        type: "p",
        text: "For example, a customer sends an email describing a problem. Instead of someone manually reading it and entering the details into a ticketing system, an AI workflow could identify:",
      },
      {
        type: "ul",
        dense: true,
        items: [
          "Customer: ABC Industries",
          "Issue: Equipment failure",
          "Location: Pune facility",
          "Priority: High",
          "Requested action: Service visit",
        ],
      },
      {
        type: "p",
        text: "The important thing isn’t that AI wrote something clever. It’s that information moved from an unstructured format into the business workflow. That’s where the value is.",
      },
      {
        type: "h3",
        text: "4. Helping people make decisions",
      },
      {
        type: "p",
        text: "Another useful category is decision support. Consider a sales team. A salesperson might have customer history, previous orders, open issues, payment information, product usage and previous conversations. All of that information may already exist. The problem is that it’s spread across systems.",
      },
      {
        type: "p",
        text: "An AI layer could bring relevant information together and provide a concise summary before a customer conversation. The salesperson still makes the decision. The system simply reduces the time required to understand the situation. That’s often a much more realistic use of AI than trying to automate the entire sales process.",
      },
      {
        type: "h3",
        text: "5. Automating workflows",
      },
      {
        type: "p",
        text: "This is where AI becomes particularly interesting. AI doesn’t have to live inside a chat window. It can become part of a workflow. For example: new customer email → AI reads request → extracts details → checks existing customer → creates ticket → assigns team → drafts response → human approves → customer receives update.",
      },
      {
        type: "p",
        text: "Now AI isn’t really a “feature.” It’s part of the operating process. That’s a much more powerful way to think about AI development.",
      },
      {
        type: "h2",
        text: "The best AI experiences can be almost invisible",
      },
      {
        type: "p",
        text: "This sounds counterintuitive. But sometimes the best AI feature is the one users barely notice.",
      },
      {
        type: "p",
        text: "Imagine a field-service application. A technician finishes a job and speaks a few sentences into their phone. The system turns that into a job summary, parts used, the issue identified, work completed, any follow-up required and a customer note. The technician doesn’t need to fill six forms. There doesn’t need to be a giant button saying ASK AI. The intelligence simply removes friction from the workflow. That’s a much better product experience.",
      },
      {
        type: "h2",
        text: "Don’t use AI where normal software is better",
      },
      {
        type: "p",
        text: "This is probably the most important part. AI isn’t automatically the best solution. If a rule can be written clearly, write the rule. If a calculation needs to be exact, use deterministic software. If a workflow is predictable, automate it normally. If a database query can answer the question reliably, don’t send it to a language model just because you can. That kind of judgment is part of good [custom software development](/services/custom-software-development).",
      },
      {
        type: "p",
        text: "For example: “If invoice amount exceeds ₹1 lakh, require manager approval.” You don’t need AI for that. It’s a business rule. But “Read this supplier’s email and determine whether it contains a request for a new quotation” is a much more interesting AI problem. Knowing the difference is part of good engineering.",
      },
      {
        type: "h2",
        text: "AI introduces new problems too",
      },
      {
        type: "p",
        text: "It would be irresponsible to talk about practical AI without talking about what can go wrong. AI systems can produce incorrect information. They can misunderstand context. They can expose sensitive information if systems aren’t designed carefully. They can behave differently from traditional deterministic software. And sometimes they can be confidently wrong.",
      },
      {
        type: "p",
        text: "So an AI feature needs more than a model. It needs:",
      },
      {
        type: "ul",
        dense: true,
        items: [
          "appropriate data handling",
          "access controls",
          "clear system boundaries",
          "evaluation",
          "monitoring",
          "human review where necessary",
          "sensible fallback behaviour",
        ],
      },
      {
        type: "p",
        text: "The question shouldn’t simply be “Can the AI do this?” It should also be:",
      },
      {
        type: "quote",
        text: "What happens when the AI gets it wrong?",
      },
      {
        type: "p",
        text: "That’s a much better engineering question.",
      },
      {
        type: "h2",
        text: "Don’t start with an AI transformation",
      },
      {
        type: "p",
        text: "Another common mistake is trying to “add AI” across the entire company. That sounds impressive. It’s also difficult to execute well. A better approach is usually much smaller. Find one workflow. One painful process. One repetitive task. One place where people are spending meaningful time. Then test whether AI can improve it.",
      },
      {
        type: "p",
        text: "For example: customer support spends 25 hours a week categorising incoming requests. That’s specific. Now you can measure the current process. You can build a small AI-assisted workflow. Then compare. Before: 25 hours a week. After: perhaps significantly less manual effort, depending on accuracy and workflow design.",
      },
      {
        type: "p",
        text: "Now you have something tangible. Not an AI strategy presentation. A business result.",
      },
      {
        type: "h2",
        text: "Measure the outcome, not the AI",
      },
      {
        type: "p",
        text: "This is another trap. Teams sometimes measure AI projects using AI metrics alone. How many prompts were processed? How many tokens were used? How many responses were generated? Interesting. But not necessarily useful.",
      },
      {
        type: "p",
        text: "The business should care about things like:",
      },
      {
        type: "ul",
        dense: true,
        items: [
          "time saved",
          "processing cost",
          "response time",
          "error rates",
          "conversion",
          "customer satisfaction",
          "employee productivity",
          "throughput",
        ],
      },
      {
        type: "p",
        text: "If AI generates 100,000 responses but doesn’t improve the business, the number doesn’t mean much. The technology should be measured by the problem it was supposed to solve.",
      },
      {
        type: "h2",
        text: "A simple test for any AI idea",
      },
      {
        type: "p",
        text: "Before building an AI feature, ask five questions.",
      },
      {
        type: "h3",
        text: "01 — Is there a real problem?",
      },
      {
        type: "p",
        text: "Not “AI would be cool here.” But: “What is currently difficult, slow or expensive?”",
      },
      {
        type: "h3",
        text: "02 — Is there enough useful information?",
      },
      {
        type: "p",
        text: "AI needs context. If there isn’t enough reliable information to work with, the result may not be useful.",
      },
      {
        type: "h3",
        text: "03 — Does intelligence actually help?",
      },
      {
        type: "p",
        text: "Could a normal rule, search or automation solve the same problem more reliably?",
      },
      {
        type: "h3",
        text: "04 — What happens when AI is wrong?",
      },
      {
        type: "p",
        text: "Can someone review it? Can the system fall back? Is the consequence of an error acceptable?",
      },
      {
        type: "h3",
        text: "05 — Can we measure the improvement?",
      },
      {
        type: "p",
        text: "If you can’t describe what success looks like, it will be difficult to know whether the AI feature is worth keeping.",
      },
      {
        type: "h2",
        text: "The most useful AI may not look like AI",
      },
      {
        type: "p",
        text: "This is probably where the industry is heading. Less “Look, our product has an AI chatbot.” More “This process used to take two hours. Now it takes fifteen minutes.” Less “Our platform uses generative AI.” More “The team no longer reads every document manually.” Less “We built an AI agent.” More “The workflow now runs automatically, with a person reviewing the decisions that matter.”",
      },
      {
        type: "p",
        text: "That’s the difference between AI as a marketing feature and AI as engineering.",
      },
      {
        type: "h2",
        text: "AI should earn its place",
      },
      {
        type: "p",
        text: "There will always be pressure to add the latest technology to a product. That’s normal. But good software doesn’t become better because it has more technology in it. It becomes better when technology removes friction, improves decisions, saves time or creates something that wasn’t practical before. AI is no different.",
      },
      {
        type: "p",
        text: "Sometimes the right answer is a language model. Sometimes it’s retrieval. Sometimes it’s automation. Sometimes it’s a simple database query. And sometimes the right answer is no AI at all. That’s not anti-AI. It’s simply good product engineering.",
      },
      {
        type: "p",
        text: "The goal isn’t to make software look intelligent. The goal is to make the work better. And when AI genuinely earns its place in that work, that’s when it becomes interesting.",
      },
    ],
  },
  {
    slug: "software-you-can-own-a-year-later",
    title: "Software you can still own a year later.",
    dek: "Launch is a test. A year later is the one that tells you whether the business actually owns the software.",
    seoTitle: "Software You Can Still Own a Year Later | Sayge",
    seoDescription:
      "What does it really mean to own software after launch? Explore source code, infrastructure, documentation, data, maintainability and vendor lock-in.",
    date: "2026-09-29",
    dateLabel: "29 September 2026",
    dateModified: "2026-09-29",
    readingTime: "12 min",
    body: [
      {
        type: "p",
        text: "Most software projects are judged on the week they go live. Does the application work? Can people sign in? Does the important flow complete? Did someone in the business approve the release?",
      },
      {
        type: "p",
        text: "Those questions matter. They are also incomplete. There is a quieter test, and it arrives later: you open the project twelve months on, and you try to change it.",
      },
      {
        type: "p",
        text: "Software ownership is not a feeling you get at handover. It is whether the company can still operate, understand and evolve the system without treating the original developers as the only people who know how it works.",
      },
      {
        type: "h2",
        text: "Launch is not the test that lasts",
      },
      {
        type: "p",
        text: "A system can look finished on the day it ships and still be fragile a year later. The screens work. The first users get through. Then the people who built it move on, a library falls behind, a credential lives in someone’s personal account, and a business rule exists only in a function nobody wants to touch.",
      },
      {
        type: "p",
        text: "That is how software maintainability is lost. Not always through a dramatic failure. More often through small absences: no picture of the application architecture, no note on how to run the project locally, a deployment that only one person has ever done by hand, tests that were going to be added later.",
      },
      {
        type: "p",
        text: "Custom software development is expensive enough that the useful question is not only “Did it launch?” It is:",
      },
      {
        type: "quote",
        text: "Can the business still operate, change and evolve this software a year from now?",
      },
      {
        type: "h2",
        text: "What owning software actually means",
      },
      {
        type: "p",
        text: "Receiving a GitHub repository is not the same as source code ownership in any complete sense. A zip file of the last build is even less so. Ownership is a set of practical facts the business can point to.",
      },
      {
        type: "h3",
        text: "Source-code ownership",
      },
      {
        type: "p",
        text: "The organisation should be able to reach the source, including history. An organisation-owned repository, with the right people as owners, is different from a project that lives under one contractor’s personal account. If the only copy is on a laptop, you do not own the work. You are borrowing it.",
      },
      {
        type: "h3",
        text: "Infrastructure ownership",
      },
      {
        type: "p",
        text: "Someone in the business should know where the application runs, where the database sits, where files are stored, and which accounts control those services. “It is in the cloud” is not a location. Hosting, DNS, object storage and scheduled jobs are part of the product, even when they never appear on a screen.",
      },
      {
        type: "h3",
        text: "Data ownership",
      },
      {
        type: "p",
        text: "You should know where customer and operational data lives, who can read it, how it is backed up, and whether it can be exported in a form another system could use. If restoring a backup requires a particular person and an undocumented ritual, the data is not really under the company’s control.",
      },
      {
        type: "p",
        text: "This is also where software ownership and day-to-day operations meet. A report that can only be produced by querying a live database by hand is not a feature the business owns. It is a favour someone still knows how to do.",
      },
      {
        type: "h3",
        text: "Account and credential ownership",
      },
      {
        type: "p",
        text: "Critical services should not permanently depend on one developer’s personal login. That includes cloud consoles, the domain registrar, app stores, payment providers, email or SMS gateways, analytics, the repository host, and any third-party API that production depends on. People leave. Personal inboxes get locked. The product should not leave with them.",
      },
      {
        type: "h3",
        text: "Knowledge ownership",
      },
      {
        type: "p",
        text: "Software documentation is part of the asset. Not a novel. A set of notes a competent engineer can use: what the system is, how it is shaped, how to run it, how it is released, which decisions were deliberate. If the only briefing is a conversation that happened once, the knowledge is not owned. It is remembered, until it is not.",
      },
      {
        type: "h3",
        text: "Operational ownership",
      },
      {
        type: "p",
        text: "The business should understand, at a useful level, how the application is built, tested, deployed, watched and patched. You do not need every stakeholder to run a production release. You do need a path that does not collapse if one person is on leave.",
      },
      {
        type: "h3",
        text: "Change ownership",
      },
      {
        type: "p",
        text: "Another competent team should be able to change the product without reverse-engineering it from behaviour alone. That is the difference between a maintainable codebase and a black box that happens to still run.",
      },
      {
        type: "h2",
        text: "The one-year-later test",
      },
      {
        type: "p",
        text: "Imagine the company writes to the original development partner a year after launch. Not in a crisis. A small change: a new report, a new payment method, a new role. Before anyone opens an editor, these questions are worth answering honestly.",
      },
      {
        type: "ul",
        items: [
          "Can someone else access the repository, with history?",
          "Can the application be deployed without calling the original developer?",
          "Can the database be backed up, and has that been done recently?",
          "Can the company retrieve its own data in a usable form?",
          "Are production credentials controlled by the business, not a personal account?",
          "Is there a current list of external services the product depends on?",
          "Are there instructions for running the project locally?",
          "Is there a documented deployment process?",
          "Are important business rules written down, or only implied in code?",
          "Could a new developer form a working picture of the system in a reasonable time?",
          "Are language, framework and major dependency versions known?",
          "Is there a testing approach that matches the risk of the product?",
        ],
      },
      {
        type: "p",
        text: "If most answers are no, the company may have software it uses every day and still does not control. That is not a moral failure. It is a common outcome when delivery is treated as the finish line and software maintenance is left unnamed.",
      },
      {
        type: "h2",
        text: "Documentation is part of the product",
      },
      {
        type: "p",
        text: "Useful documentation is not hundreds of pages nobody opens. It is the smallest set of artefacts that lets a competent developer become productive without a personal handover from one specific person.",
      },
      {
        type: "p",
        text: "In practice that usually means a short system overview, a sketch of the architecture, setup instructions, environment configuration, the deployment path, a plain description of the database, API notes where they exist, third-party integrations, who owns which accounts, backup and recovery, the architectural decisions that would otherwise look like accidents, and the known limitations. That last item is underrated. A honest list of what the system does not do saves months of guesswork.",
      },
      {
        type: "p",
        text: "If the only way to learn the product is to sit next to the person who wrote it, you do not have documentation. You have a bottleneck.",
      },
      {
        type: "h2",
        text: "Vendor lock-in is a choice, until it isn’t",
      },
      {
        type: "p",
        text: "Not all vendor lock-in is a mistake. A managed database, a payment processor or a particular cloud can be a good decision because it buys reliability, compliance features or speed you would otherwise have to staff. The problem is not dependence. The problem is dependence you cannot see.",
      },
      {
        type: "p",
        text: "There is a difference between “we chose this because it earns its keep” and “we cannot leave because nobody designed for the possibility of change.” Zero lock-in is usually expensive and often fake: you still depend on languages, operating systems and people. The useful goal is to understand the dependencies and to keep migration cost visible before it becomes urgent.",
      },
      {
        type: "p",
        text: "Portability, where it is worth paying for, looks ordinary: data you can export in a standard form, APIs that are documented, integration boundaries that are not smeared through the whole codebase, architecture that does not assume one vendor’s unique feature in every layer. Avoiding a proprietary service just to feel independent can be as unwise as wrapping the whole product around one.",
      },
      {
        type: "h2",
        text: "Complexity is not the same as craft",
      },
      {
        type: "p",
        text: "Technical debt is not only old libraries. It is also the extra service nobody can explain, the abstraction that hides a simple rule, the pipeline that three people fear, the tool that solved a problem the business never had. Teams add these things with good intentions. A year later they are part of the furniture.",
      },
      {
        type: "p",
        text: "Maintainable software is often the result of appropriate simplicity: enough structure to change safely, not so much machinery that the machinery is the product. Sophistication that only the original team can operate is not sophistication. It is a private language.",
      },
      {
        type: "h2",
        text: "Tests and deployment are how you keep the keys",
      },
      {
        type: "p",
        text: "A year-old system is easier to own when a change can be checked, a build can be repeated, a release can be described, versions are in source control, logs exist when something fails, and dependencies are listed rather than discovered in production. That is not a DevOps religion. It is how you avoid making the original author the only safe person to type a command.",
      },
      {
        type: "p",
        text: "You do not need a perfect pipeline on day one. You do need a path that can be written down and followed twice. Repeatability is what turns a release from folklore into something the company can keep.",
      },
      {
        type: "p",
        text: "Manual deployment is not a crime. Undocumented, unreproducible deployment is. If shipping still means “ask the person who last did it,” the business does not own the release. That person does.",
      },
      {
        type: "h2",
        text: "A software development partner should not be a single point of failure",
      },
      {
        type: "p",
        text: "Continuing with the same partner after launch can be a good decision. They know the product. They have context. They can provide software maintenance without a cold start. That is a partnership.",
      },
      {
        type: "p",
        text: "It is a different situation if the product cannot be operated, understood or handed to another team without them. Then the relationship is not extra capacity. It is the only map. One is chosen. The other is stuck.",
      },
      {
        type: "p",
        text: "Good engineering work should make the second situation unnecessary. The partner can still be valuable. The product should still be intelligible without them.",
      },
      {
        type: "h2",
        text: "A one-year ownership checklist",
      },
      {
        type: "p",
        text: "This is not a certificate. It is a conversation you can have with whoever is responsible for the product.",
      },
      {
        type: "h3",
        text: "Code",
      },
      {
        type: "ul",
        dense: true,
        items: [
          "Source code is accessible to the business.",
          "Repository ownership is clear.",
          "Dependencies are documented.",
        ],
      },
      {
        type: "h3",
        text: "Infrastructure",
      },
      {
        type: "ul",
        dense: true,
        items: [
          "Hosting account ownership is clear.",
          "The production environment is documented.",
          "The deployment process is documented.",
        ],
      },
      {
        type: "h3",
        text: "Data",
      },
      {
        type: "ul",
        dense: true,
        items: [
          "Database ownership is clear.",
          "Backups exist and someone knows how to restore them.",
          "Data export is possible.",
        ],
      },
      {
        type: "h3",
        text: "Access",
      },
      {
        type: "ul",
        dense: true,
        items: [
          "Domains are controlled by the business.",
          "App-store accounts are controlled by the business where they apply.",
          "Payment, API, email and SMS accounts are controlled appropriately.",
        ],
      },
      {
        type: "h3",
        text: "Knowledge",
      },
      {
        type: "ul",
        dense: true,
        items: [
          "The architecture is documented.",
          "Setup instructions exist.",
          "Important business logic is understandable.",
          "Third-party integrations are documented.",
        ],
      },
      {
        type: "h3",
        text: "Operations",
      },
      {
        type: "ul",
        dense: true,
        items: [
          "The application can be deployed by more than one person.",
          "Monitoring or logging exists where the risk justifies it.",
          "A new developer can reasonably get started.",
        ],
      },
      {
        type: "h2",
        text: "What a serious engagement should leave behind",
      },
      {
        type: "p",
        text: "Working screens are not enough. A [custom software](/services/custom-software-development) project that is done well also leaves source the company can reach, infrastructure it can name, data it can recover, integrations it can list, enough technical knowledge to continue, a release path that can be repeated, and an architecture that can take the next change. That is what [thoughtful engineering](/about) looks like when the applause has stopped.",
      },
      {
        type: "p",
        text: "The job is not only to make the software work today. It is to leave it understandable enough to keep working tomorrow — so the business has more control as the product matures, not less. The best engagement does not leave a client dependent on one person, one vendor, or a process that exists only in someone’s head. It leaves a product they can operate, change and keep building.",
      },
      {
        type: "p",
        text: "If you’re planning custom software, start by asking not only what will be built, but what you’ll actually own a year after launch. [Start a conversation →](/contact)",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getPosts() {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAdjacentPosts(slug: string) {
  const ordered = getPosts();
  const index = ordered.findIndex((post) => post.slug === slug);

  return {
    newer: index > 0 ? ordered[index - 1] : undefined,
    older:
      index >= 0 && index < ordered.length - 1
        ? ordered[index + 1]
        : undefined,
  };
}
