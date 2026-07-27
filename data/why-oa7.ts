export interface Reason {
  icon: "users" | "gauge" | "shield" | "headset";
  title: string;
  description: string;
}

export const WHY_OA7: Reason[] = [
  {
    icon: "users",
    title: "One team, start to finish",
    description: "No handoffs between agencies. The people who design your product are the ones who build and ship it.",
  },
  {
    icon: "gauge",
    title: "Built for real load",
    description: "Every project is engineered for performance from day one, not optimized after the fact.",
  },
  {
    icon: "shield",
    title: "Direct communication",
    description: "You talk to the person doing the work, not an account manager relaying messages.",
  },
  {
    icon: "headset",
    title: "Support after launch",
    description: "Launch day isn't the finish line. We stay on to fix, refine, and extend what we've built.",
  },
];
