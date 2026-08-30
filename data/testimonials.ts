export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  company: string;
  industry: string;
  initials: string;
  isPlaceholder: boolean;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "ScalexMedia didn't just improve our content. They completely changed how people perceive our brand.",
    name: "[CLIENT NAME]",
    company: "[COMPANY]",
    industry: "[INDUSTRY]",
    initials: "CN",
    isPlaceholder: true,
  },
  {
    id: "t2",
    quote:
      "For the first time our social feels like a growth engine — not a content treadmill.",
    name: "[CLIENT NAME]",
    company: "[COMPANY]",
    industry: "[INDUSTRY]",
    initials: "CN",
    isPlaceholder: true,
  },
  {
    id: "t3",
    quote:
      "The work looks expensive. More importantly, it finally has a job to do.",
    name: "[CLIENT NAME]",
    company: "[COMPANY]",
    industry: "[INDUSTRY]",
    initials: "CN",
    isPlaceholder: true,
  },
  {
    id: "t4",
    quote:
      "They treat attention like a business asset. That shift changed everything we post.",
    name: "[CLIENT NAME]",
    company: "[COMPANY]",
    industry: "[INDUSTRY]",
    initials: "CN",
    isPlaceholder: true,
  },
];
