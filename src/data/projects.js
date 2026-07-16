import p1 from "../assets/Expense_Tracker.png";
import p2 from "../assets/BI_Papua.png";
import p3 from "../assets/Tantrum_Noya.png";
import p4 from "../assets/SatisfEAT.gif";
import p5 from "../assets/OuRigin.png";
import p6 from "../assets/MyBaliApp.png";
import p7 from "../assets/Singkron.png";
import v1 from "../assets/singkron_video.mp4";

/* ─────────────────────────────────────────────
   Every project follows the same 6-part story:
   1. brief            – what it is, at a glance
   2. problem           – the problem worth solving
   3. businessImpact     – why it mattered / who benefits
   4. contribution      – what I actually did
   5. outcomes           – what shipped, and proof of it
   6. learning          – what I took away from it
───────────────────────────────────────────── */

const projects = [
  {
    id: 1,
    slug: "tantrum-no-ya",
    title: "Tantrum No-Ya!",
    image: p3,
    category: "Apple Developer Academy",
    tags: ["Team Project", "UX Research", "Mobile App"],
    description:
      "An iOS app that helps teachers detect and respond to children's tantrums instantly through personalized voice-guided mitigation.",
    year: "2026",
    timeline: "May 2026 - June 2026",
    role: "UI/UX Designer, Researcher, Project Manager",
    duration: "1 month",
    links: {
      testflight: "https://testflight.apple.com/join/RM37ZBCP",
      github: "https://github.com/WilliamHoops2/TantrumNoYa/tree/main/TantrumNoYa.xcodeproj",
    },
    problem: {
      headline: "Teachers can't always react fast enough",
      body: "Observing classrooms showed how difficult it is for teachers to detect a tantrum early and decide on the right response in the moment. Every child needed a different approach, and educators had no quick way to access personalized guidance in the middle of a busy classroom — the gap wasn't a lack of training, it was a lack of speed.",
    },
    businessImpact: {
      headline: "Scalable support without extra staff",
      body: "For schools, the concept offers individualized behavioral support without hiring specialists or running extra training. Because the guidance is voice-based and hands-free, it fits directly into a teacher's existing workflow, making it a low-friction addition to a classroom's toolkit rather than another system to learn.",
    },
    contribution: {
      headline: "Led research, design, and delivery",
      body: "As UI/UX Designer, Researcher, and Project Manager, I ran the empathy interviews with teachers, defined the core problem statement, and shaped the idea of delivering mitigation steps through the phone's speaker via Siri Shortcuts. I designed the prototype end-to-end and coordinated the team through build and testing.",
    },
    outcomes: {
      headline: "A working concept teachers could trust in the moment",
      body: "The result is an audio-detection driven app that gives teachers fast, personalized mitigation steps exactly when they're needed — validated through usability testing to confirm both the detection and the instructions were easy to follow under pressure.",
    },
    learning: {
      headline: "Design for the moment of crisis, not the ideal case",
      body: "Leading both research and project management taught me to design for the worst-case, highest-pressure moment a user will face, not the calm walkthrough. Balancing technical constraints like audio detection with the emotional reality of a tantrum in progress shaped every decision after that.",
    },
    resultImage: p3,
  },
  {
    id: 2,
    slug: "expense-tracker",
    title: "Expense Tracker",
    image: p1,
    category: "Personal Project",
    tags: ["Team Project", "Mobile App"],
    description:
      "A receipt-scanning app that tracks daily expenses automatically, so budgeting takes seconds instead of minutes.",
    year: "2026",
    timeline: "March 2026 - April 2026",
    role: "UI/UX Designer",
    duration: "1 month",
    links: {
      prototype: "https://sketch.com/s/a10c4010-da7c-4f45-ad21-6c4ba31e0a48",
      github: "https://github.com/abui-am/expense-tracker",
    },
    problem: {
      headline: "Manual tracking gets forgotten",
      body: "Research into everyday spending habits showed manual expense recording felt slow and inconvenient, so people simply stopped doing it. The real problem wasn't a lack of budgeting apps — it was that typing in every transaction was enough friction to break the habit within days.",
    },
    businessImpact: {
      headline: "Less friction, more daily engagement",
      body: "Automating entry through receipt scanning removes the single biggest drop-off point for budgeting apps. For a product in this category, that translates directly into stronger daily engagement and retention, since users only get value if they keep logging expenses long enough to see patterns.",
    },
    contribution: {
      headline: "Designed the scan-to-dashboard flow",
      body: "I designed the full prototype in Sketch — from camera-based receipt scanning, through data validation, to a simple financial dashboard — and worked closely with the developer to make sure the flow matched what was technically feasible in the shipped repo.",
    },
    outcomes: {
      headline: "A faster way to see where money goes",
      body: "The result is a modern expense tracker concept that lets people record and monitor daily spending in seconds through camera-based scanning, validated with users to confirm the interface was clear and the scanning flow felt fast.",
    },
    learning: {
      headline: "Simplicity beats feature completeness",
      body: "This project taught me to prioritize cutting steps over adding intelligence. It's tempting to add smarter categorization or richer insights, but for a habit-forming tool, removing friction from the very first action matters more than any feature built on top of it.",
    },
    resultImage: p1,
  },
  {
    id: 3,
    slug: "satisfeat",
    title: "SatisfEAT",
    image: p4,
    category: "Apple Developer Academy",
    tags: ["Team Project", "UI Design", "UX Research"],
    description:
      "Swipe right to save, left to skip — a Tinder-style app that cuts decision fatigue when choosing where to eat.",
    year: "2026",
    timeline: "Mar 2026",
    role: "UI/UX Designer & Researcher",
    duration: "12 days",
    links: {
      prototype: "https://sketch.com/s/e7400bac-b351-4271-a86c-756eb14a14f1",
    },
    problem: {
      headline: "Too many options, not enough decision energy",
      body: "People often struggle to decide where to eat nearby — not because there aren't enough options, but because there are too many, and list-based restaurant apps make comparing them feel slow and overwhelming. The problem was decision fatigue itself, not a lack of information.",
    },
    businessImpact: {
      headline: "An engagement loop built for food discovery",
      body: "Borrowing the swipe mechanic from dating apps turns a chore (scrolling a list) into a quick, repeatable habit. That kind of engagement loop is exactly what a food-discovery product needs to build daily usage, and it opens the door to future partnerships with restaurants for sponsored placement.",
    },
    contribution: {
      headline: "Designed and tested the swipe experience",
      body: "I researched the decision-fatigue problem, then designed the card-swiping interface, location-based filtering, and preference matching that power the recommendations. I also ran the usability tests that validated the interaction within a tight 12-day sprint.",
    },
    outcomes: {
      headline: "A swipe-based way to pick where to eat",
      body: "SatisfEat shipped as a fun, intuitive restaurant discovery experience that helps users find nearby dining options matching their mood for the day, using a swipe interaction people already understand from other apps.",
    },
    learning: {
      headline: "Familiar patterns can solve unrelated problems",
      body: "Reusing a swipe mechanic outside of dating apps showed me how much value there is in borrowing interaction patterns people already trust, rather than inventing a new one. It also sharpened my ability to test and iterate quickly under a tight sprint timeline.",
    },
    resultImage: p4,
  },
  {
    id: 4,
    slug: "ourigin",
    title: "OuRigin",
    image: p5,
    category: "Apple Developer Academy",
    tags: ["UI Design", "Mobile App", "Native iOS"],
    description:
      "A native iOS contacts app that instantly shows the country origin of any phone number — no Googling needed.",
    year: "2026",
    timeline: "Mei 2026",
    role: "UI/UX Designer & iOS Developer",
    duration: "10 days",
    links: {
      prototype: "https://sketch.com/s/be5c6b95-e721-4b01-a96b-6793ae4a8ef9",
      github: "https://github.com/AbigailMetanoia/ADAProject/tree/main/OuRigin_White",
    },
    problem: {
      headline: "No context for unfamiliar numbers",
      body: "Users receiving calls or messages from unfamiliar numbers had to leave the app and search the web just to figure out where a number came from. The native Contacts experience stored numbers but offered no context about them, making a simple question take several inconvenient steps to answer.",
    },
    businessImpact: {
      headline: "A native-feeling utility that builds platform stickiness",
      body: "Adding this kind of contextual information directly inside a system app reduces reliance on third-party lookup tools, and shows how a small, well-integrated feature can strengthen loyalty to the platform it lives on rather than sending users elsewhere.",
    },
    contribution: {
      headline: "Designed and built the feature myself",
      body: "As both designer and iOS developer, I designed OuRigin to feel like a natural extension of Apple's own Contacts app, then implemented the logic that reads a number's dialing code and surfaces its origin directly on the contact details page.",
    },
    outcomes: {
      headline: "Origin info, right where you already look",
      body: "OuRigin shipped as a working native iOS app that automatically identifies a phone number's origin from its dialing code, tested with users to confirm the integration felt natural inside their existing contact-management habits.",
    },
    learning: {
      headline: "Design within the platform's existing mental model",
      body: "Rather than inventing new UI, I learned to design inside the mental model people already have for Apple's Contacts app — and picking up iOS development alongside the design work gave me a much clearer sense of what's actually feasible to ship.",
    },
    resultImage: p5,
  },
  {
    id: 5,
    slug: "bi-papua",
    title: "BI Papua",
    image: p2,
    category: "Freelance",
    tags: ["UI Design", "Built-In Website"],
    description:
      "An internal SharePoint website for Bank Indonesia Papua built to streamline daily operations for all staff levels.",
    year: "2025",
    timeline: "Jan 2025 - Feb 2025",
    role: "UI/UX Designer & SharePoint Developer",
    duration: "1 month",
    links: {
      prototype:
        "https://www.figma.com/design/RmWwsDpv8k3W6cj3smJFe3/Project-RBT_BI_PAPUA?node-id=3-4&t=l0DaGpUY2NgUX7SO-1",
    },
    problem: {
      headline: "No consistent way to support daily operations",
      body: "Internal staff at Bank Indonesia Papua, from executive to non-executive levels, had no single, consistent interface for the tools their daily operations depended on. Requirements were spread across formal Software Requirement Specification (SRS) documents that needed to be translated into something usable.",
    },
    businessImpact: {
      headline: "Operational efficiency for a regional institution",
      body: "A structured, SRS-compliant internal website reduces time staff spend navigating scattered internal systems and keeps the organization aligned with its own formal documentation — a direct operational efficiency gain for a regional bank branch.",
    },
    contribution: {
      headline: "Designed and built the SharePoint pages",
      body: "I designed and implemented the SharePoint-based website pages according to the client's SRS and non-SRS requirements, focusing on clear information hierarchy and consistent navigation across every page.",
    },
    outcomes: {
      headline: "A professional, SRS-compliant internal site",
      body: "The result is a structured internal website that supports Bank Indonesia Papua's daily operations, tested for functionality and responsiveness to make sure it held up for real internal use.",
    },
    learning: {
      headline: "Formal specs are a design constraint, not paperwork",
      body: "Working from a formal SRS document taught me how to translate rigid institutional requirements into real design decisions, and gave me a much clearer sense of the discipline enterprise client work demands compared to a personal project.",
    },
    resultImage: p2,
  },
  {
    id: 6,
    slug: "ADA-Kos-app",
    title: "ADAKos",
    image: p6,
    category: "Apple Developer Academy",
    tags: ["UX Research", "UI Design", "Mobile App"],
    description:
      "A kos-finder app for ADA students that filters by price, distance to campus, and facilities in one place.",
    year: "2026",
    timeline: "March 2026",
    role: "UI/UX Designer & Researcher",
    duration: "5 days",
    links: {
      prototype: "https://sketch.com/s/72fbe0f9-6852-4506-8256-c82c65e2c469",
      github: "https://github.com/AbigailMetanoia/ADAProject/tree/main/MyBaliApp",
    },
    problem: {
      headline: "Accommodation info scattered across group chats",
      body: "Apple Developer Academy participants struggled to find boarding houses (kos) matching their budget, distance preference, and facilities, often relying on word of mouth or unstructured group chats. There was no centralized, reliable source built for their specific needs.",
    },
    businessImpact: {
      headline: "A repeatable onboarding tool for every cohort",
      body: "Positioned as a niche accommodation marketplace, ADAKos reduces onboarding friction for every new academy cohort — a recurring pain point that makes it valuable not just to individual students but to the institution running the program.",
    },
    contribution: {
      headline: "Scoped and designed the MVP in 5 days",
      body: "I researched the pain points directly with students, then designed the listing and filtering prototype — surfacing price, walking distance, and facilities as the three decision factors that actually mattered, all within a 5-day sprint.",
    },
    outcomes: {
      headline: "Faster housing decisions for new students",
      body: "ADAKos shipped as an accommodation discovery concept built specifically for ADA students, helping them compare boarding houses near the Academy on the factors that matter most, validated through usability testing with real students.",
    },
    learning: {
      headline: "Scope ruthlessly when time is the real constraint",
      body: "Working under a 5-day deadline forced me to scope an MVP around only the handful of decision factors that truly mattered, rather than trying to cover every feature — a discipline that's easy to skip when there's more time available.",
    },
    resultImage: p6,
  },
  {
    id: 7,
    slug: "singkron-app",
    title: "Singkron",
    image: p7,
    video: v1,
    resultVideo: v1,
    category: "Apple Developer Academy",
    tags: ["Team Project", "Mobile App", "Native iOS"],
    description:
      "A real-time pitch detection app that tells singers instantly whether they're on key — built and shipped to TestFlight.",
    year: "2026",
    timeline: "June 2026 - July 2026",
    role: "iOS Developer & UI/UX Contributor",
    duration: "14 days",
    links: {
      prototype:
        "https://www.figma.com/design/AWjuHxd6nwVdF0jXEs451f/Challange-4?node-id=0-1&t=XFuLyhYEeC2zZUVG-1",
      github: "https://github.com/arheana/PitchDetector",
    },
    problem: {
      headline: "No real-time feedback without a coach",
      body: "Music learners and hobbyist singers had no accessible way to know whether they were singing in tune without a teacher present, leaving most of them relying on guesswork or an expensive vocal coach just to get basic feedback on pitch accuracy.",
    },
    businessImpact: {
      headline: "A lower-cost path to feedback-driven practice",
      body: "Singkron shows that real-time, coach-free pitch feedback is technically feasible on a phone — relevant to any music-education product trying to lower the cost barrier between a learner and useful, immediate feedback.",
    },
    contribution: {
      headline: "Built the real-time detection and its UI",
      body: "As iOS Developer and UI/UX contributor, I built the real-time pitch detection using Swift and AVFoundation, designed the live feedback UI showing flat, sharp, or on-target status, and tested responsiveness with singers of different skill levels.",
    },
    outcomes: {
      headline: "Shipped to TestFlight, not just prototyped",
      body: "The team delivered a working iOS app that detects and displays vocal pitch in real time — a milestone project where I moved from design into full implementation, contributing directly to the codebase behind a shipped product.",
    },
    learning: {
      headline: "Design specs meet real technical constraints",
      body: "Contributing directly to the codebase taught me how design intentions run into real technical constraints like audio latency and real-time UI updates, and how much stronger a design gets when the person shaping it can also help build it.",
    },
    resultImage: p7,
  },
];

export default projects;
