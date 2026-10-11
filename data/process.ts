export interface CommunicationChannel {
  channel: string;
  purpose: string;
}

export const COMMUNICATION_CHANNELS: CommunicationChannel[] = [
  {
    channel: "Email",
    purpose: "The best way to reach me. Questions, files and anything that needs a written record.",
  },
  {
    channel: "LinkedIn",
    purpose: "A good place for introductions and professional conversations.",
  },
  {
    channel: "GitHub",
    purpose: "Where you can look at my public repositories and activity.",
  },
];

export const QUALITY_PRINCIPLES = [
  "Pages and screens that work on both phones and desktops",
  "Text that is readable, with sensible contrast and clear structure",
  "Links, buttons and forms that do what they say",
  "Honest labels for what is finished, in testing or still an idea",
  "Testing a build myself before I show it to anyone",
  "Saying so when something is outside what I have done before",
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ProcessStageDetail extends ProcessStep {
  deliverables: string[];
  clientInvolvement: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    description: "Work out what the software needs to do and who it is for before building anything.",
  },
  {
    number: "02",
    title: "Plan and design",
    description: "Sketch the screens and decide what to build first.",
  },
  {
    number: "03",
    title: "Build",
    description: "Write the code in small steps, so there is always something working to look at.",
  },
  {
    number: "04",
    title: "Test",
    description: "Try it on real devices and fix what breaks. For apps, testers help find problems.",
  },
  {
    number: "05",
    title: "Release and improve",
    description: "Put it in front of people, learn from what happens and keep improving it.",
  },
];

// A fuller description of the five steps above, used on the Process page.
export const PROJECT_LIFECYCLE: ProcessStageDetail[] = [
  {
    number: "01",
    title: "Understand",
    description:
      "Working out what the software needs to do, who will use it, and what a good result looks like.",
    deliverables: ["A short written summary of the goal", "A list of what is in and out of scope"],
    clientInvolvement: "A conversation, usually by email, about what you need.",
  },
  {
    number: "02",
    title: "Plan and design",
    description: "Turning the goal into a list of screens or pages and deciding what to build first.",
    deliverables: ["A simple page or screen list", "Rough layouts of the main screens"],
    clientInvolvement: "Looking over the plan and saying what matters most.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Writing the code in small steps, so that there is always a working version to check.",
    deliverables: ["Working versions at agreed points", "Code kept in version control"],
    clientInvolvement: "Optional check-ins on the working version.",
  },
  {
    number: "04",
    title: "Test",
    description:
      "Trying the software on phones and desktops, fixing what breaks, and for apps, using testers to find problems I miss.",
    deliverables: ["A tested build", "A list of known issues"],
    clientInvolvement: "Trying the build and sharing feedback.",
  },
  {
    number: "05",
    title: "Release and improve",
    description:
      "Putting the software where people can use it, then learning from how it goes and improving it.",
    deliverables: ["A released or deployed version", "Notes on what to improve next"],
    clientInvolvement: "Reporting problems as they come up.",
  },
];

export interface ProcessFAQ {
  question: string;
  answer: string;
}

export const PROCESS_FAQ: ProcessFAQ[] = [
  {
    question: "Is this a formal process used on client projects?",
    answer:
      "No. It is the approach I follow on my own projects, written down. I have not run it on a client engagement.",
  },
  {
    question: "What happens if the scope of a project changes?",
    answer:
      "I would talk it through with you and be honest about whether it fits within what we agreed, before doing the extra work.",
  },
  {
    question: "Do you provide support after a project is released?",
    answer:
      "There is no formal support plan. For projects I work on with someone, any follow-up work would be agreed as part of that project.",
  },
];
