import p1 from "../assets/Expense_Tracker.png";
import p2 from "../assets/BI_Papua.png";
import p3 from "../assets/Tantrum_Noya.png";
import p4 from "../assets/SatisfEAT.gif";
import p5 from "../assets/OuRigin.png";
import p6 from "../assets/MyBaliApp.png";

const projects = [
  {
    id: 1,
    slug: "tantrum-no-ya",
    title: "Tantrum No-Ya!",
    image: p3,
    category: "Apple Developer Academy",
    tags: ["Team Project", "UX Research", "Mobile App"],
    description:
      "An audio-detection-based iOS app that helps teachers quickly identify and respond to children's tantrum situations in educational environments through real-time sound analysis and guided mitigation instructions.",
    year: "2026",
    timeline: "May 2026 - June 2026",
    role: "UI/UX Designer, Researcher, Project Manager",
    duration: "1 month",
    links: {
      prototype: "https://sketch.com/s/80de569b-be34-43a6-88f3-cce4b4ec52dc", // Sketch
      github: "https://github.com/WilliamHoops2/TantrumNoYa/tree/main/TantrumNoYa.xcodeproj",
    },
    sections: [
      {
        title: "Empathize",
        content:
          "Conducted observations and gained an understanding of the challenges teachers face when handling children experiencing tantrums, especially in situations that require quick and appropriate responses.",
      },
      {
        title: "Define",
        content:
          "Defined the main problem as the difficulty of detecting tantrum situations quickly and determining the appropriate handling steps for each specific students within a limited amount of time in educational environments.",
      },
      {
        title: "Ideate",
        content:
          "Developed the idea of an application capable of giving personalized mitigations guidance through the smartphone speaker to assist teachers in taking appropriate action.",
      },
      {
        title: "Prototype",
        content:
          "Created a mobile application prototype featuring siri, shortcuts, personalized mitigations and voice-based mitigation instructions that could be directly used by teachers.",
      },
      {
        title: "Test",
        content:
          "Conducted testing on the application flow to ensure the system could properly detect tantrum indications and provide mitigation instructions that were easy for users to understand.",
      },
      {
        title: "Result",
        content:
          "Produced an educational application concept based on audio detection technology that helps teachers handle tantrum situations more quickly, responsively, and effectively within children's learning environments.",
        link: null,
      },
    ],
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
      "A mobile expense tracking app that simplifies daily financial management through automatic receipt scanning, smart categorization, and visual spending summaries — making budgeting faster and more effortless.",
    year: "2026",
    timeline: "March 2026 - April 2026",
    role: "UI/UX Designer",
    duration: "1 month",
    links: {
      prototype: "https://sketch.com/s/a10c4010-da7c-4f45-ad21-6c4ba31e0a48", // Sketch
      github: "https://github.com/abui-am/expense-tracker",
    },
    sections: [
      {
        title: "Empathize",
        content:
          "Conducted research on users' spending habits and discovered that manual expense tracking often feels time-consuming and inconvenient. Users needed a faster, more practical, and user-friendly solution to manage their daily expenses efficiently.",
      },
      {
        title: "Define",
        content:
          "Defined the main problem as the inefficiency of manual expense recording, which often caused users to forget to track their transactions. The proposed solution focused on simplifying the process through automatic receipt scanning using a smartphone camera.",
      },
      {
        title: "Ideate",
        content:
          "Developed several feature ideas such as automatic receipt scanning, expense categorization, daily financial summaries, and simple spending visualizations to help users better understand their spending patterns.",
      },
      {
        title: "Prototype",
        content:
          "Created a mobile application prototype with a simple and intuitive flow, starting from receipt scanning, expense data validation, to an easy-to-understand expense monitoring dashboard.",
      },
      {
        title: "Test",
        content:
          "Conducted usability testing with several users to ensure the scanning feature was easy to use, the interface was understandable, and the expense recording process could be completed quickly without confusion.",
      },
      {
        title: "Result",
        content:
          "Produced a modern expense tracker application concept that helps users record and monitor their daily expenses more practically, quickly, and efficiently through camera-based scanning technology.",
        link: null,
      },
    ],
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
      "A swipe-based restaurant discovery app that eliminates decision fatigue by letting users swipe through nearby dining options tailored to their mood and location — making choosing where to eat fun and effortless.",
    year: "2026",
    timeline: "Mar 2026",
    role: "UI/UX Designer & Researcher",
    duration: "12 days",
    links: {
      prototype: "https://sketch.com/s/e7400bac-b351-4271-a86c-756eb14a14f1", // Sketch
    },
    sections: [
      {
        title: "Empathize",
        content:
          "Conducted research on how people often struggle to decide where to eat nearby, especially when facing too many options or unclear preferences for the day. Users wanted a faster, more enjoyable way to discover restaurants that actually matched what they felt like eating in the moment.",
      },
      {
        title: "Define",
        content:
          "Defined the main problem as decision fatigue when choosing a place to eat — traditional list-based restaurant apps felt slow and overwhelming. The solution needed to make food discovery quick, fun, and personalized to the user's current mood and location.",
      },
      {
        title: "Ideate",
        content:
          "Developed the idea of a swipe-based food discovery experience, similar to Tinder, where users swipe through nearby restaurant recommendations based on their location and preferences for the day, making decisions faster and more engaging.",
      },
      {
        title: "Prototype",
        content:
          "Created a mobile application prototype featuring a card-swiping interface for restaurant recommendations, location-based filtering, and preference matching to surface the most relevant dining options nearby.",
      },
      {
        title: "Test",
        content:
          "Conducted usability testing to ensure the swipe interaction felt intuitive, recommendations matched user preferences accurately, and the overall flow from swiping to choosing a restaurant was smooth and enjoyable.",
      },
      {
        title: "Result",
        content:
          "Produced SatisfEat, a fun and intuitive restaurant discovery app that helps users find nearby dining options matching their preferences for the day through a familiar, swipe-based interaction similar to Tinder.",
        link: null,
      },
    ],
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
      "A native iOS contacts app that automatically identifies the country and regional origin of any phone number based on its dialing code — giving users instant context without ever leaving their contact list.",
    year: "2026",
    timeline: "Mei 2026",
    role: "UI/UX Designer & iOS Developer",
    duration: "10 days",
    links: {
      prototype: "https://sketch.com/s/be5c6b95-e721-4b01-a96b-6793ae4a8ef9", // Sketch
      github: "https://github.com/AbigailMetanoia/ADAProject/tree/main/OuRigin_White",
    },
    sections: [
      {
        title: "Empathize",
        content:
          "Conducted research on how users often receive calls or messages from unfamiliar phone numbers and need to manually search the internet to identify where the numbers originate from. This process is time-consuming and inconvenient, especially when users want quick information directly from their contact list.",
      },
      {
        title: "Define",
        content:
          "Defined the main problem as the lack of contextual information within the native Contacts experience. Users could store phone numbers, but they had no simple way to understand the origin or region associated with a contact number without leaving the application.",
      },
      {
        title: "Ideate",
        content:
          "Explored ideas for enhancing the native iOS Contacts experience by automatically identifying the origin of a phone number through its country and regional dialing codes. The concept focused on providing useful insights directly within the contact details page while maintaining a familiar and intuitive user experience.",
      },
      {
        title: "Prototype",
        content:
          "Designed and developed OuRigin, a native iOS application inspired by Apple's Contacts app. The prototype was capable of automatically reading phone number prefixes and displaying relevant information about the number's origin, reducing the need for external searches.",
      },
      {
        title: "Test",
        content:
          "Conducted usability testing with users to evaluate whether the origin information was easy to understand, whether the integration felt natural within a contact-management workflow, and whether the overall experience improved confidence when handling unfamiliar numbers.",
      },
      {
        title: "Result",
        content:
          "Successfully delivered OuRigin, a native iOS contact application that automatically identifies the origin of phone numbers based on their dialing codes. The solution provides users with valuable contextual information directly within the app, creating a faster and more informative contact management experience.",
        link: null,
      },
    ],
    resultImage: p5,
  },
  {
    id: 6,
    slug: "bi-papua",
    title: "BI Papua",
    image: p2,
    category: "Freelance",
    tags: ["UI Design", "Built-In Website"],
    description:
      "A SharePoint-based internal website for Bank Indonesia Papua, designed to support both executive and non-executive staff with a structured, professional, and easy-to-navigate operational platform.",
    year: "2025",
    timeline: "Jan 2025 - Feb 2025",
    role: "UI/UX Designer & SharePoint Developer",
    duration: "1 month",
    links: {
      prototype:
        "https://www.figma.com/design/RmWwsDpv8k3W6cj3smJFe3/Project-RBT_BI_PAPUA?node-id=3-4&t=l0DaGpUY2NgUX7SO-1", // Figma
    },
    sections: [
      {
        title: "Empathize",
        content:
          "Developed an understanding of the needs of internal employees at Bank Indonesia Papua, including both executive and non-executive staff, to ensure that the website's information and features effectively supported their daily operational activities.",
      },
      {
        title: "Define",
        content:
          "Defined the system requirements based on the provided Software Requirement Specification (SRS) documents, focusing on accessibility, workflow efficiency, and consistency across all website pages.",
      },
      {
        title: "Ideate",
        content:
          "Explored interface and page structure ideas that aligned with internal company requirements, while emphasizing easy navigation, clear information hierarchy, and a professional user experience.",
      },
      {
        title: "Prototype",
        content:
          "Created prototypes and implemented SharePoint-based website pages according to the provided designs and SRS requirements for both SRS and Non-SRS functions.",
      },
      {
        title: "Test",
        content:
          "Conducted interface and functionality testing to ensure all features worked properly, were responsive, and met the needs of internal users.",
      },
      {
        title: "Result",
        content:
          "Successfully developed SharePoint-based internal website pages that supported Bank Indonesia Papua's operational activities through a structured, professional, and user-friendly interface.",
        link: null,
      },
    ],
    resultImage: p2,
  },
  {
    id: 5,
    slug: "ADA-Kos-app",
    title: "ADAKos",
    image: p6,
    category: "Apple Developer Academy",
    tags: ["UX Research", "UI Design", "Mobile App"],
    description:
      "A dedicated accommodation finder for Apple Developer Academy students, consolidating boarding house listings with clear pricing, walking distance to the Academy, and facility filters — making the housing search significantly faster.",
    year: "2026",
    timeline: "March 2026",
    role: "UI/UX Designer & Researcher",
    duration: "5 days",
    links: {
      prototype: "https://sketch.com/s/72fbe0f9-6852-4506-8256-c82c65e2c469", // Sketch
      github: "https://github.com/AbigailMetanoia/ADAProject/tree/main/MyBaliApp",
    },
    sections: [
      {
        title: "Empathize",
        content:
          "Conducted research on the challenges faced by Apple Developer Academy participants when searching for accommodation near the Academy. Many students struggled to find boarding houses (kos) that matched their budget, distance preference, and required facilities, often relying on scattered information from word of mouth or unstructured group chats.",
      },
      {
        title: "Define",
        content:
          "Defined the main problem as the lack of a centralized, reliable source of accommodation information tailored specifically for ADA students. Key decision factors such as price, walking distance to the Academy, and available facilities were difficult to compare quickly, making the search process inefficient and time-consuming.",
      },
      {
        title: "Ideate",
        content:
          "Developed the idea of ADAKos, a dedicated accommodation-finder app for ADA students that consolidates listings with clear price information, walking distance in meters to the Academy, and available facilities, allowing users to compare and filter options based on their personal preferences.",
      },
      {
        title: "Prototype",
        content:
          "Created a mobile application prototype featuring accommodation listings with price details, walking distance indicators to the Academy, facility tags, and filtering options, designed to make the search and comparison process simple and intuitive for ADA students.",
      },
      {
        title: "Test",
        content:
          "Conducted usability testing with ADA students to evaluate whether the listing information was clear, whether the distance and price details helped them make faster decisions, and whether the filtering experience felt intuitive when narrowing down accommodation options.",
      },
      {
        title: "Result",
        content:
          "Produced ADAKos, an accommodation discovery app built specifically for Apple Developer Academy students, helping them find the most suitable boarding houses near the Academy based on price, walking distance, and facilities, making the housing search process significantly faster and easier.",
        link: null,
      },
    ],
    resultImage: p6,
  },
];

export default projects;
