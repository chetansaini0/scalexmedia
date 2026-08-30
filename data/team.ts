export type TeamMember = {
  id: string;
  role: string;
  name: string;
  isPlaceholder: boolean;
};

export const team: TeamMember[] = [
  { id: "founder", role: "Founder / Creative Director", name: "[NAME]", isPlaceholder: true },
  { id: "strategist", role: "Social Strategist", name: "[NAME]", isPlaceholder: true },
  { id: "creator", role: "Content Creator", name: "[NAME]", isPlaceholder: true },
  { id: "performance", role: "Performance Marketer", name: "[NAME]", isPlaceholder: true },
  { id: "designer", role: "Designer", name: "[NAME]", isPlaceholder: true },
  { id: "editor", role: "Video Editor", name: "[NAME]", isPlaceholder: true },
];

export const about = {
  headline: ["BEHIND", "THE SCALE."],
  intro:
    "ScalexMedia is a creative growth team — strategy, content and performance in one room.",
  manifesto: [
    "ScalexMedia exists because too many businesses treat social media like a checklist.",
    "Post. Repeat. Hope.",
    "We believe social should be a growth engine.",
    "Every piece of content should have a purpose. Every campaign should teach us something. Every result should influence the next move.",
  ],
  chain: ["STRATEGY", "CREATIVE", "DISTRIBUTION", "DATA", "SCALE"],
} as const;
