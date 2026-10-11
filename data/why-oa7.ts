export interface Reason {
  icon: "message" | "sigma" | "hammer" | "shield";
  title: string;
  description: string;
}

export const WHY_OA7: Reason[] = [
  {
    icon: "message",
    title: "Direct communication",
    description:
      "OA7 is a one-person initiative. You talk to the person doing the work, with no hand-offs and no account managers.",
  },
  {
    icon: "sigma",
    title: "An analytical approach",
    description:
      "My Mathematics background shapes how I break a problem into parts, check assumptions and test the result.",
  },
  {
    icon: "hammer",
    title: "Learning by building",
    description:
      "I build and test real projects, including apps in Google Play closed testing, and improve with each one.",
  },
  {
    icon: "shield",
    title: "Honest about experience",
    description:
      "My work so far is independent projects, and I describe it that way. I would rather show you what exists than overstate it.",
  },
];
