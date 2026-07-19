import p1 from "../assets/Expense_Tracker.png";
import p2 from "../assets/BI_Papua.png";
import p3 from "../assets/Tantrum_Noya.png";
import p4 from "../assets/SatisfEAT.gif";
import p5 from "../assets/OuRigin.png";
import p6 from "../assets/MyBaliApp.png";
import p7 from "../assets/Singkron.png";
import v1 from "../assets/singkron_video.mp4";
import singkronDemo from "../assets/Singkron.mp4";
import tantrumDemo from "../assets/Tantrum_Noya.MP4";

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
    featured: true, // ganti jadi true untuk menampilkan project ini di homepage & /projects
    slug: "tantrum-no-ya",
    title: "Tantrum No-Ya!",
    image: [p3],
    // Tambahkan foto-foto UI lain di sini kalau ada lebih dari satu:
    // heroImages: [p3, p3_1],
    category: "Apple Developer Academy",
    tags: ["Team Project", "UX Research", "Mobile App"],
    description:
      "An iOS app that helps special education teachers respond to children's tantrums with personalized voice guidance.",
    year: "2026",
    timeline: "May 2026 - June 2026",
    role: "UI/UX Designer, Researcher, Project Manager",
    duration: "1 month",
    links: {
      testflight: "https://testflight.apple.com/join/RM37ZBCP",
      github: "https://github.com/WilliamHoops2/TantrumNoYa/tree/main/TantrumNoYa.xcodeproj",
    },
    problem: {
      headline: "Context",
      body: "To better understand the challenges teachers face, we interviewed four educators with different backgrounds in special education, ranging from private tutoring to inclusive and special needs schools.",
    },
    research: {
      quotes: [
        {
          text: "Emotional situations in the classroom can easily affect other students, when one child cries, others may also become overstimulated.",
          source:
            "User 1 - Teacher with 3 years of experience in a special school and 1 year in an inclusive school",
        },
        {
          text: "Sensory sensitivity can significantly affect students' behavior and emotional stability.",
          source: "User 2 - Private tutor for children with special educational needs",
        },
        {
          text: "Stress with teaching these students, very easy to be angry... first year was hard enough with 5 students, all different.",
          source: "User 3 - Teacher with 4 years of experience in an inclusive school",
        },
        {
          text: "Practical handling methods for unexpected behaviors are mostly learned through direct experience and discussions with other teachers.",
          source:
            "User 4 - Teacher with 5 years of experience teaching high school students with special educational need",
        },
      ],
      // body: "From these interviews, we identified one consistent pattern: there is no universal way to handle a tantrum. Every child responds differently depending on their disability, sensory needs, and previous experiences. Teachers often rely on personal experience rather than structured guidance, making it especially challenging for less experienced educators.",
    },
    businessImpact: {
      headline: "Teachers Respond Matters",
      body: "A delayed or inappropriate response during a tantrum can negatively affect both the student experiencing the episode and the surrounding classroom environment. We wanted to help teachers feel more prepared by providing quick, personalized guidance during these stressful moments, allowing them to respond with greater confidence while minimizing the impact on other students.",
    },
    contribution: {
      headline: "Led research, design, and delivery",
      body: "I was responsible for designing the wireframes and high-fidelity user interface while collaborating with two other designers throughout the project. My role also involved consolidating our individual design work into a consistent design system, ensuring visual consistency and a seamless user experience across the entire application.",
    },
    outcomes: {
      headline: "Fast, personalized support during tantrums",
      body: "Teachers can instantly access personalized mitigation steps through Siri or a shortcut, then refine the guidance after each session based on what works best for each child, making future responses faster and more effective.",
    },

    learning: {
      headline: "Simple solutions can create greater impact",
      body: "User testing showed us that teacher-initiated mitigation was more reliable than automatic detection in noisy classrooms. This project also strengthened my ability to collaborate with multiple designers and create an interface that remains simple, consistent, and easy to use under pressure.",
    },
    resultVideo: tantrumDemo,
  },
  {
    id: 2,
    featured: false, // ganti jadi true untuk menampilkan project ini di homepage & /projects
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
    featured: false, // ganti jadi true untuk menampilkan project ini di homepage & /projects
    slug: "satisfeat",
    title: "SatisfEAT",
    image: p4,
    category: "Apple Developer Academy",
    tags: ["Team Project", "UI Design", "UX Research"],
    description:
      "Swipe right to save, left to skip — a Tinder-style app that cuts decision fatigue when choosing where to eat.",
    year: "2026",
    timeline: "March 2026",
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
    featured: false, // ganti jadi true untuk menampilkan project ini di homepage & /projects
    slug: "ourigin",
    title: "OuRigin",
    image: p5,
    category: "Apple Developer Academy",
    tags: ["UI Design", "Mobile App", "Native iOS"],
    description:
      "A native iOS contacts app that instantly shows the country origin of any phone number — no Googling needed.",
    year: "2026",
    timeline: "May 2026",
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
    featured: false, // ganti jadi true untuk menampilkan project ini di homepage & /projects
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
    featured: false, // ganti jadi true untuk menampilkan project ini di homepage & /projects
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
    featured: true, // ganti jadi true untuk menampilkan project ini di homepage & /projects
    slug: "singkron-app",
    title: "Singkron",
    image: p7,
    video: v1,
    resultVideo: singkronDemo,
    category: "Apple Developer Academy",
    tags: ["Team Project", "Mobile App", "Native iOS"],
    description:
      "A real-time pitch detection app that tells singers instantly whether they're on key — built and shipped to TestFlight.",
    year: "2026",
    timeline: "June 2026 - July 2026",
    role: "iOS Developer & UI/UX Contributor",
    duration: "14 days",
    links: {
      testflight: "https://testflight.apple.com/join/c7RcxHuk",
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
