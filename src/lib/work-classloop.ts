import { customSoftwarePath } from "@/lib/site";
import type { InHouseProduct } from "@/lib/work";

export const classloopStudy: InHouseProduct = {
  kind: "inhouse",
  slug: "classloop",
  number: "05",
  product: "ClassLoop",
  eyebrow: "In-house product by Sayge",
  title: "Building software around the reality of the classroom.",
  seoTitle: "ClassLoop | Education Product Engineering | Sayge",
  seoDescription:
    "How Sayge built ClassLoop as an in-house education product, bringing daily classroom workflows, teacher tools, student participation, attendance, quizzes and homework into one Flutter web application.",
  categories: [
    "In-house product",
    "Education software",
    "Flutter web",
  ],
  indexTitle: "In-house education product",
  indexLine:
    "A daily academic engagement platform for professors and students, built by Sayge.",
  logo: {
    src: "/classloop.png",
    alt: "ClassLoop",
    width: 252,
    height: 62,
  },
  productCtaLabel: "Open ClassLoop",
  heroSupport:
    "ClassLoop is an in-house Sayge product: a lightweight daily academic engagement platform for college professors and students, built as a Flutter web application.",
  live: {
    heading: "Don't take our word for it. Try the product.",
    paragraphs: [
      "ClassLoop is something we built ourselves. The application is a Flutter web PWA. Opening it requires signing in or creating an account; the product also includes clearly labelled one-tap demo accounts so you can explore the professor and student surfaces.",
    ],
    note: "A public production URL is not recorded in the ClassLoop repository, so this page does not invent one. When a live URL is confirmed, it will be the primary CTA.",
    secondaryLabel: "See what went into building it",
    secondaryHref: "#how-we-built-it",
  },
  why: {
    lede: "We don't only build products for clients. Sometimes we build because we want to understand the problem ourselves.",
    paragraphs: [
      "ClassLoop is one of those products.",
      "The loop we wanted to understand was small and daily: a professor posts today's work, watches participation land, and sees who needs attention. A student opens the app, sees today's tasks, checks in, takes the quiz, hands in homework, and keeps a streak.",
      "Building that loop — rather than describing it — is how the product took shape.",
    ],
  },
  problem: {
    heading: "01 / The problem",
    paragraphs: [
      "A college class does not live in a single document. Attendance, a short quiz, homework and an announcement all happen on the same day, for the same people, under time pressure.",
      "Software that treats those as disconnected tools makes the day harder. The product question was whether they could live in one daily loop without becoming a heavy campus system.",
    ],
    bullets: [
      "professors need today's class, not last month's archive",
      "students need a list of what to do now",
      "attendance has to work in a real room, not only on a roster",
      "a quiz has to be authorable in minutes",
    ],
  },
  idea: {
    heading: "02 / The product idea",
    paragraphs: [
      "Keep the product deliberately small. Professor and student each get a surface built around today. Classes, activities and insights exist, but they serve that daily loop rather than replacing a full LMS.",
      "The application is web-first: portrait-first on phones, a genuine multi-column layout on tablet, and usable on a laptop. Hash-based routing keeps deep links and QR check-ins working on static hosting.",
    ],
  },
  experience: {
    heading: "03 / The experience",
    paragraphs: [
      "A professor's home is today: announce, start attendance, see live sessions and who needs attention. Classes, activities and insights sit alongside that.",
      "A student's home is a single list, in the order it should be done — attendance, quiz, homework, announcements — plus classes, progress (including streaks) and updates.",
      "An administrator role already flows through authentication and routing. It currently lands on the professor surface; a dedicated institution dashboard is not in the product yet.",
    ],
  },
  workflow: {
    summary:
      "A classroom day in ClassLoop: the professor starts the day's work, students join and check in, attendance is taken, learning activity and a quiz can run, homework is handed in, and the professor can see participation and who needs attention.",
    steps: [
      { title: "Professor starts the day", detail: "Today's class, announce, take attendance." },
      { title: "Students join", detail: "Class join code, then today's list." },
      { title: "Attendance", detail: "Live session, rotating classroom code, optional location." },
      { title: "Learning activity", detail: "Announcements, homework, the day's tasks." },
      { title: "Quiz", detail: "Author, publish or schedule; students take it." },
      { title: "Participation", detail: "Check-in, quiz attempt, homework, streak." },
      { title: "Professor sees the outcome", detail: "Live roster, insights, who needs attention." },
    ],
  },
  roles: {
    heading: "04 / One product. Different realities.",
    intro:
      "The same day looks different depending on who you are. ClassLoop does not offer one generic dashboard and call it a product.",
    items: [
      {
        title: "Professor",
        copy: "Run today: take attendance, post a quiz, set homework, announce, watch a live session, and see who needs attention.",
      },
      {
        title: "Student",
        copy: "Join a class, check in, work through today's list, take the quiz, hand in homework, and keep a streak visible in progress.",
      },
      {
        title: "Admin",
        copy: "The role exists in auth, routing and navigation. It currently uses the professor surface until an institution dashboard is built.",
      },
    ],
  },
  feature: {
    heading: "Attendance was not treated as a checkbox.",
    paragraphs: [
      "Indoor location is unreliable, so verification never depends on it alone. A professor starts a session from their own position, which can set a geofence. The app then shows a large 6-character classroom code plus a QR code, and can rotate the code if it leaks.",
      "A check-in is accepted when the code matches and, if the session requires location, the device is inside the radius. When a location fix is too imprecise to trust, the session can fall back to code-only rather than rejecting an honest student. The record stores how attendance was earned — code and location, code only, location only, or marked by the professor. Sessions expire, duplicate check-ins are rejected, and the professor can still mark or correct anyone from the live roster.",
    ],
  },
  quizzes: {
    heading: "From classroom activity to assessment.",
    paragraphs: [
      "Quizzes are multiple choice and true/false. Creation is built for speed: duplicate the last quiz, reuse any past quiz, or start blank with defaults already filled. A true/false question needs a prompt. Quizzes save as drafts, publish immediately, or schedule. Each has an availability window, per-question marks, optional explanations, and a switch for whether students see their score on submit.",
      "This is not an automated quiz generator. The professor authors or reuses the questions.",
    ],
    steps: [
      { title: "Author or reuse", detail: "Blank draft, duplicate yesterday, or reuse a past quiz." },
      { title: "Publish", detail: "Draft, go live now, or schedule a window." },
      { title: "Student attempt", detail: "The quiz appears in today's list." },
      { title: "Outcome", detail: "Results, optional instant score, insights for the professor." },
    ],
  },
  engineering: {
    heading: "05 / The engineering",
    paragraphs: [
      "ClassLoop is a Flutter application with a web-first PWA shell. State is a single immutable snapshot behind Riverpod. Writes go through services; persistence is debounced into local storage. Authentication is isolated so a real identity provider can drop into one place. Routing is role-aware, with shareable URLs for professor and student surfaces and landings for QR check-in and class join.",
      "The boundary is intentional: swapping the local store for a networked backend means reimplementing the store and services, while UI, routing and the design system stay put. The current repository does not use Supabase.",
    ],
    bullets: [
      "Flutter, web-first, responsive breakpoints",
      "Riverpod and a single immutable snapshot",
      "Role-aware routing and deep links",
      "Attendance: rotating code, QR, optional geofence",
      "Quiz authoring, windows and grading",
      "Homework, announcements, streaks and insights",
      "Local persistence — not a claimed cloud backend",
    ],
  },
  learnings: {
    heading: "06 / Building it taught us something.",
    paragraphs: [
      "A classroom product is a state machine wearing a friendly face. Who is in the room, whether the window is still open, whether the code leaked, whether GPS is lying, and whether the student already checked in — those are product rules, not decorations.",
      "Speed of authoring matters as much as the student player. If a quiz takes too long to make, it will not happen today. Multi-role UX is not a theme switch: it is different jobs sharing one day.",
      "Web-first Flutter made the product usable on the devices a class already has. Hash routing made QR and share links possible on static hosting. Keeping the backend swappable was a product decision: the pilot can run locally while the UI is already the real application.",
    ],
    points: [
      "multi-role UX for professor and student",
      "classroom state and session windows",
      "attendance when location is imprecise",
      "authoring speed for daily quizzes",
      "web-first layout across phone, tablet and laptop",
      "keeping a local store so the UI is not waiting on infrastructure",
    ],
  },
  commercial: {
    heading: "If you have a product idea, this is the part that matters.",
    paragraphs: [
      "ClassLoop is an example of what happens when a product moves beyond an idea and becomes something people can actually interact with — roles, workflows, state and the awkward edges included.",
      "We can do the same for a product that is yours: figure out what should be built, engineer the experience, and get it into users' hands. That work sits in the same place as Sayge's custom software practice.",
    ],
  },
  pauseQuote:
    "We don't just implement requirements. We think about products because we build them ourselves.",
  facts: [
    { label: "Project", value: "ClassLoop" },
    { label: "Type", value: "In-house product" },
    {
      label: "Role",
      value: "Product strategy · Product engineering · Application development",
    },
    { label: "Platform", value: "Web-first Flutter (PWA); phone, tablet and laptop layouts" },
    { label: "Technology", value: "Flutter" },
    { label: "Status", value: "In-house product" },
    {
      label: "Focus",
      value: "Daily academic engagement · Attendance · Quizzes · Homework",
    },
  ],
  technologies: ["Flutter", "Dart", "Riverpod", "go_router"],
  stack: [
    { label: "Application", value: "Flutter (web-first PWA)" },
    { label: "State", value: "Riverpod · immutable snapshot" },
    { label: "Routing", value: "go_router · hash URLs · role guards" },
    { label: "Persistence", value: "Local store (shared preferences)" },
    { label: "Location", value: "Geolocator, when a session requires it" },
  ],
  closing: {
    heading: "Have a product in mind?",
    lockup: "ClassLoop · Sayge",
    paragraphs: [
      "Bring us the problem, the rough idea or the product you can't quite explain yet. We'll help turn it into something concrete.",
    ],
    ctaLabel: "Start a conversation",
    ctaHref: "/contact",
  },
  relatedLinks: [
    { href: customSoftwarePath, label: "Custom software development" },
    { href: "/work/nivaas", label: "Nivaas" },
    { href: "/contact", label: "Contact" },
  ],
};
