export const CONTACT_FAQ = [
  {
    question: "How quickly do you reply?",
    answer:
      "Within a couple of business days, usually sooner. If it's urgent, say so in the message and mention it again over WhatsApp.",
  },
  {
    question: "What should I include in my message?",
    answer:
      "What you're building, roughly who it's for, and any deadline you're working against. You don't need a full spec. We'll ask the rest during discovery.",
  },
  {
    question: "Do you take on small projects, or only larger ones?",
    answer:
      "Both. A template customization and a multi-portal system go through the same process, just at different scales.",
  },
  {
    question: "I'm not sure yet what I need. Can I still reach out?",
    answer:
      "Yes. Tell us what problem you're trying to solve and we'll help you figure out whether that's a template, a custom build, or something smaller than either.",
  },
];

/**
 * Maps the `intent` query param (set by CTAs across the site, e.g.
 * `/contact?template=slug&intent=purchase`) to a plain-language sentence
 * shown above the form, so the visitor knows we saw where they came from.
 */
export const INTENT_LABELS: Record<string, string> = {
  purchase: "buying",
  customize: "customizing",
  inquiry: "learning more about",
  "similar-project": "starting something similar to",
};
