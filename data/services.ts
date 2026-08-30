export type Service = {
  id: string;
  number: string;
  title: string;
  description: string;
  preview: {
    label: string;
    stat: string;
    statLabel: string;
    lines: string[];
    tone: "lime" | "warm" | "steel" | "gold";
  };
};

export const services: Service[] = [
  {
    id: "strategy",
    number: "01",
    title: "Social Media Strategy",
    description:
      "Positioning, audience maps, content pillars and a growth system built around business outcomes — not a posting calendar.",
    preview: {
      label: "Strategy system",
      stat: "4",
      statLabel: "Content pillars",
      lines: ["Audience map", "Offer architecture", "90-day roadmap"],
      tone: "lime",
    },
  },
  {
    id: "content",
    number: "02",
    title: "Content Creation",
    description:
      "Scroll-stopping stills, carousels and campaign assets designed to hold attention and move people toward action.",
    preview: {
      label: "Content studio",
      stat: "24",
      statLabel: "Assets / month",
      lines: ["Feed design", "Story systems", "Campaign kits"],
      tone: "warm",
    },
  },
  {
    id: "reels",
    number: "03",
    title: "Reels & Short-Form Video",
    description:
      "Hooks, pacing and edits built for the feed — short-form that earns watch time instead of disappearing in three seconds.",
    preview: {
      label: "Video lab",
      stat: "9:16",
      statLabel: "Native format",
      lines: ["Hook testing", "Edit systems", "Series formats"],
      tone: "steel",
    },
  },
  {
    id: "branding",
    number: "04",
    title: "Branding & Creative Direction",
    description:
      "A visual language that feels expensive, consistent and unmistakably yours across every platform and campaign.",
    preview: {
      label: "Creative direction",
      stat: "1",
      statLabel: "Visual system",
      lines: ["Brand world", "Art direction", "Template kits"],
      tone: "gold",
    },
  },
  {
    id: "ads",
    number: "05",
    title: "Paid Social Advertising",
    description:
      "Campaign architecture, creative testing and media buying that turn attention into qualified demand.",
    preview: {
      label: "Paid media",
      stat: "A/B",
      statLabel: "Creative tests",
      lines: ["Funnel build", "Audience tests", "Creative iteration"],
      tone: "lime",
    },
  },
  {
    id: "community",
    number: "06",
    title: "Community Management",
    description:
      "Conversations, DMs and comments handled like a brand, not a helpdesk — so every reply builds trust.",
    preview: {
      label: "Community",
      stat: "<2h",
      statLabel: "Response target",
      lines: ["Inbox playbooks", "Voice guidelines", "Lead capture"],
      tone: "warm",
    },
  },
  {
    id: "influencers",
    number: "07",
    title: "Influencer / Creator Campaigns",
    description:
      "Creator pairings with a brief, a story and a measurable job — not random shoutouts that vanish after 24 hours.",
    preview: {
      label: "Creator desk",
      stat: "3×",
      statLabel: "Brief cycles",
      lines: ["Creator fit", "Usage rights", "Whitelisting"],
      tone: "steel",
    },
  },
  {
    id: "analytics",
    number: "08",
    title: "Analytics & Growth Optimization",
    description:
      "We read the data, isolate what actually moved, and put more weight behind the patterns that compound.",
    preview: {
      label: "Growth loop",
      stat: "WK",
      statLabel: "Review cadence",
      lines: ["Creative scores", "Retention reads", "Scale decisions"],
      tone: "gold",
    },
  },
];
