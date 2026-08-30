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
    slug: "manish-trading-company",
    number: "03",
    client: "Manish Trading Company",
    industry: "Trading",
    services: ["Social Media", "Content"],
    year: "2025",
    resultLabel: "Result",
    resultValue: "[RESULT]",
    isPlaceholder: true,
    tone: { from: "#0C1014", to: "#2A3A48", accent: "#C8F531" },
    problem:
      "A trading business needed social that built trust and enquiry — not a feed that looked inactive or generic.",
    strategy:
      "Show the range, the reliability and the people behind the counter. Make the brand easy to find, easy to understand, easy to contact.",
    creative:
      "Clean product frames, warehouse-to-counter stories, and short updates that feel operational, not decorative.",
    execution:
      "Consistent posting, enquiry-led CTAs, and a visual system that can scale across categories.",
    result:
      "[RESULT] — replace this placeholder with the actual campaign outcome once available.",
    learning:
      "Trading brands convert when social proves availability and trust, not when it only looks busy.",
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
    slug: "double-tree-girls-hostel",
    number: "05",
    client: "Double Tree Girls Hostel",
    industry: "Student Housing",
    services: ["Content", "Local Growth"],
    year: "2025",
    resultLabel: "Result",
    resultValue: "[RESULT]",
    isPlaceholder: true,
    tone: { from: "#14100E", to: "#6B3A28", accent: "#E8B48A" },
    problem:
      "A girls hostel needed social that felt safe, lived-in and easy to enquire about — not empty room photos with no story.",
    strategy:
      "Lead with daily life, safety and location. Help parents and students picture the stay, then make the next step a message.",
    creative:
      "Warm interiors, shared spaces, routine, and short-form that answers the questions families actually ask.",
    execution:
      "Local discovery content, enquiry-led CTAs, and a consistent visual language across posts and stories.",
    result:
      "[RESULT] — replace this placeholder with the actual campaign outcome once available.",
    learning:
      "Hostel content works when it reduces doubt — safety, space and belonging — before it asks for a call.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
