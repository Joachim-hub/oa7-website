export const CONTACT_FAQ = [
  {
    question: "How do I reach you?",
    answer:
      "Email is best: osafoamoatengj@gmail.com. You can also message me on LinkedIn. The form on this page opens your email app with your message ready to send.",
  },
  {
    question: "What should I include in my message?",
    answer:
      "Who you are, what you have in mind, and any timing that matters. A few lines is enough to start.",
  },
  {
    question: "Are you open to employment or collaboration?",
    answer:
      "Yes. I am open to conversations with employers, clients and collaborators. My work so far is independent projects, and I describe it that way.",
  },
  {
    question: "I'm not sure whether you can help. Can I still write?",
    answer:
      "Yes. Tell me what you are trying to do and I will tell you honestly whether it is something I can help with.",
  },
];

/**
 * Maps the `intent` query param (set by CTAs across the site, e.g.
 * `/contact?template=slug&intent=inquiry`) to a plain-language phrase used to
 * start the message, so the visitor knows we saw where they came from.
 */
export const INTENT_LABELS: Record<string, string> = {
  inquiry: "asking about",
  "similar-project": "asking about something similar to",
};
