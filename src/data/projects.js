import p1 from "../assets/Expense_Tracker.png";
import p2 from "../assets/BI_Papua.png";
import p3 from "../assets/Tantrum_Noya.png";
import p4 from "../assets/SatisfEAT.gif";

const projects = [
  {
    id: 1,
    slug: "tantrum-no-ya",
    title: "TANTRUM NO-YA",
    image: p3,
    category: "Apple Developer Academy",
    tags: ["Team Project", "UX Research", "Mobile App"],
    sections: [
      {
        title: "Empathize",
        content:
          "Conducted observations and gained an understanding of the challenges teachers face when handling children experiencing tantrums, especially in situations that require quick and appropriate responses.",
      },
      {
        title: "Define",
        content:
          "Defined the main problem as the difficulty of detecting tantrum situations quickly and determining the appropriate handling steps within a limited amount of time in educational environments.",
      },
      {
        title: "Ideate",
        content:
          "Developed the idea of an audio-detection-based application capable of recognizing tantrum indications through sound analysis and automatically providing mitigation guidance through the smartphone speaker to assist teachers in taking appropriate action.",
      },
      {
        title: "Prototype",
        content:
          "Created a mobile application prototype featuring tantrum sound detection, emotional indication analysis, and voice-based mitigation instructions that could be directly used by teachers.",
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
    title: "SatisfEat",
    image: p4,
    category: "Apple Developer Academy",
    tags: ["Team Project", "UI Design", "UX Research"],
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
    slug: "bi-papua",
    title: "BI Papua",
    image: p2,
    category: "Freelance",
    tags: ["UI Design", "Built-In Website"],
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
];

export default projects;
