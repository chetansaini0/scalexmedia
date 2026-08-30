export type CaseStudy = {
  slug: string;
  number: string;
  client: string;
  industry: string;
  services: string[];
  year: string;
  resultLabel: string;
  resultValue: string;
  isPlaceholder: boolean;
  tone: {
    from: string;
    to: string;
    accent: string;
  };
  problem: string;
  strategy: string;
  creative: string;
  execution: string;
  result: string;
  learning: string;
};

export const projects: CaseStudy[] = [
  {
    slug: "mb-jewellers",
    number: "01",
    client: "MB Jewellers",
    industry: "Luxury Jewellery",
    services: ["Social Media", "Creative Direction"],
    year: "2025",
    resultLabel: "Result",
    resultValue: "[RESULT]",
    isPlaceholder: true,
    tone: { from: "#1A1208", to: "#C9A227", accent: "#E4C56A" },
    problem:
      "A luxury jewellery brand needed social to feel as considered as the pieces themselves — not like another product dump.",
    strategy:
      "Build a visual world around craft, occasion and desire. Treat every post as a vitrine, not a catalogue page.",
    creative:
      "Quiet luxury frames, close-up metal work, and editorial sequences that make jewellery feel cinematic.",
    execution:
      "Feed system, stories architecture, and campaign drops timed around festivals and high-intent moments.",
    result:
      "[RESULT] — replace this placeholder with the actual campaign outcome once available.",
    learning:
      "Luxury social wins when restraint is the creative idea, not an afterthought.",
  },
  {
    slug: "krishna-shudhama-palace",
    number: "02",
    client: "Krishna Shudhama Palace",
    industry: "Hospitality",
    services: ["Content", "Social Growth"],
    year: "2025",
    resultLabel: "Result",
    resultValue: "[RESULT]",
    isPlaceholder: true,
    tone: { from: "#14100C", to: "#8B5A2B", accent: "#D4A574" },
    problem:
      "A hospitality brand needed social that sold the stay — rooms, ritual and place — instead of generic hotel imagery.",
    strategy:
      "Position the property as a destination story. Lead with atmosphere, then convert curiosity into enquiry.",
    creative:
      "Warm interiors, guest rituals, and short-form sequences that feel like arriving, not advertising.",
    execution:
      "Content calendar around occupancy windows, local discovery, and booking-led CTAs.",
    result:
      "[RESULT] — replace this placeholder with the actual campaign outcome once available.",
    learning:
      "Hospitality content converts when it sells a feeling people can already see themselves in.",
  },
  {
    slug: "fitness-brand",
    number: "03",
    client: "[FITNESS BRAND]",
    industry: "Fitness",
    services: ["Reels", "Paid Media"],
    year: "—",
    resultLabel: "Result",
    resultValue: "[RESULT]",
    isPlaceholder: true,
    tone: { from: "#0A0C0A", to: "#2F4A22", accent: "#C8F531" },
    problem:
      "[PROBLEM] — the brand needed social that drives trial, not just workout aesthetics.",
    strategy:
      "[STRATEGY] — pair proof-led short-form with paid amplification on converting creatives.",
    creative:
      "[CREATIVE] — high-energy cuts, transformation proof, and offer-led hooks.",
    execution:
      "[EXECUTION] — organic series plus paid tests on the strongest performers.",
    result: "[RESULT] — replace with measured outcomes.",
    learning: "[KEY LEARNING]",
  },
  {
    slug: "d2c-fashion",
    number: "04",
    client: "[D2C FASHION BRAND]",
    industry: "Fashion",
    services: ["Creative", "Performance"],
    year: "—",
    resultLabel: "Result",
    resultValue: "[RESULT]",
    isPlaceholder: true,
    tone: { from: "#140C10", to: "#6B2D44", accent: "#F2B8C6" },
    problem:
      "[PROBLEM] — beautiful product, but the feed was not creating demand.",
    strategy:
      "[STRATEGY] — editorial drops plus performance creatives built around occasions and identity.",
    creative:
      "[CREATIVE] — lookbook energy in the feed, sharper offers in ads.",
    execution:
      "[EXECUTION] — always-on organic, burst campaigns around drops.",
    result: "[RESULT] — replace with measured outcomes.",
    learning: "[KEY LEARNING]",
  },
  {
    slug: "restaurant-brand",
    number: "05",
    client: "[RESTAURANT BRAND]",
    industry: "Food & Beverage",
    services: ["Reels", "Local Growth"],
    year: "—",
    resultLabel: "Result",
    resultValue: "[RESULT]",
    isPlaceholder: true,
    tone: { from: "#120A08", to: "#7A2E14", accent: "#F07A3A" },
    problem:
      "[PROBLEM] — the food was memorable. The content was not.",
    strategy:
      "[STRATEGY] — local discovery, signature dishes, and reservation-led CTAs.",
    creative:
      "[CREATIVE] — steam, texture, service, and the room after dark.",
    execution:
      "[EXECUTION] — weekly reel cadence plus geo-targeted paid.",
    result: "[RESULT] — replace with measured outcomes.",
    learning: "[KEY LEARNING]",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
