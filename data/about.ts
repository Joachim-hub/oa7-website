import type { ServiceBenefit, ServiceProcessStep, ServiceFAQ } from "@/data/services-detail";

export const STORY =
  "OA7 Software is my independent software initiative. I am a Mathematics graduate of the University of Mines and Technology (UMaT) in Ghana, and I have learned to build software through independent learning and practice: HTML, CSS and JavaScript for the web, Flutter for mobile apps, and Python, SQL, Microsoft Excel and Power BI for working with data. I build websites and mobile apps as personal projects to develop practical skills, and OA7 is the home for that work. So far that means two completed portfolio projects, two apps in closed testing and two apps in development. I have not built up a client portfolio, and this site does not pretend otherwise.";

export const MISSION =
  "To build useful software, learn from every project I ship and test, and keep improving until my work can stand next to professional work.";

export const VISION =
  "To grow from independent projects into software work that employers, clients and collaborators can trust, because the projects behind it are real and honestly described.";

export const PHILOSOPHY =
  "A visitor decides quickly whether software feels trustworthy. A slow page, an inconsistent layout or a broken link can be the whole impression. I try to build with that in mind, and I try to describe my work just as carefully: what is finished, what is in testing and what is still an idea.";

export const CORE_VALUES: ServiceBenefit[] = [
  {
    title: "Honesty over hype",
    description:
      "I describe my work as it is. Independent projects are called independent projects, and unfinished work is labelled unfinished.",
  },
  {
    title: "Analytical thinking",
    description:
      "My Mathematics background pushes me to break problems into parts, check assumptions and test results.",
  },
  {
    title: "Learning by building",
    description:
      "I improve through making and testing real projects, not only by studying them.",
  },
  {
    title: "Clear communication",
    description:
      "I try to explain what I am doing in plain language and to say so when I do not know something yet.",
  },
  {
    title: "Care for the details",
    description:
      "Readable text, sensible layouts and links that work. These are small things users notice.",
  },
];

export const FOUNDER = {
  name: "Joachim Osafo Amoateng",
  role: "Founder of OA7 Software",
  bio: "Joachim is a Mathematics graduate of the University of Mines and Technology (UMaT) in Ghana and an independent software developer. He founded OA7 Software to build websites and mobile apps as personal projects and develop his practical skills. He works on his own, and has learned HTML, CSS, JavaScript, Python, Flutter, Microsoft Excel, Power BI and SQL.",
};

export const COMPANY_TIMELINE: ServiceProcessStep[] = [
  {
    number: "01",
    title: "Foundations",
    description:
      "A Mathematics degree at UMaT, and self-directed learning of HTML, CSS, JavaScript, Python, Flutter, Excel, Power BI and SQL.",
  },
  {
    number: "02",
    title: "Independent projects",
    description:
      "FarmLink Ghana and Bright Future Academy completed as portfolio projects, plus personal websites, some deployed on Vercel.",
  },
  {
    number: "03",
    title: "Testing and development",
    description:
      "Hitzplay and Unit Converter in closed testing with 12 testers each. Puzzleplay and a Health & Wellness App in development.",
  },
  {
    number: "04",
    title: "Open to opportunities",
    description:
      "Open to conversations with employers, clients and collaborators.",
  },
];

export const ABOUT_TECH_STACK = [
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "Flutter",
  "Microsoft Excel",
  "Power BI",
  "SQL",
];

export const ABOUT_FAQ: ServiceFAQ[] = [
  {
    question: "Is OA7 a company with a team?",
    answer:
      "No. OA7 Software is an independent initiative and I work on my own. When I say \"I\" on this site, I mean me.",
  },
  {
    question: "Do you have clients?",
    answer:
      "I have not built a substantial client portfolio. The projects on this site are independent projects that I built to develop my skills.",
  },
  {
    question: "Are the template concepts for sale?",
    answer:
      "No. The Concepts page shows ideas for website designs. They are not products you can buy, and there are no live demos.",
  },
  {
    question: "How can I contact you?",
    answer:
      "Email osafoamoatengj@gmail.com, or find me on LinkedIn or GitHub. All three links are on the Contact page.",
  },
];
