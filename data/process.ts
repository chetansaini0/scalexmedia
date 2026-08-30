export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your brand, audience, competitors and goals before a single asset is made.",
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "We create your content and growth roadmap — pillars, offers, platforms and the job of every format.",
  },
  {
    number: "03",
    title: "Create",
    description:
      "We produce content designed to earn attention: hooks, craft, and a visual language that holds.",
  },
  {
    number: "04",
    title: "Publish",
    description:
      "We distribute content consistently across the right platforms, at the right cadence, with the right CTA.",
  },
  {
    number: "05",
    title: "Optimize",
    description:
      "We analyze performance and identify winning patterns — then we cut what is noise.",
  },
  {
    number: "06",
    title: "Scale",
    description:
      "We invest more into what works and continuously improve the system that compounds.",
  },
];
