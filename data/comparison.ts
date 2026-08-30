export type ComparisonValue = "yes" | "partial" | "no";

export type ComparisonRow = {
  category: string;
  diy: ComparisonValue;
  freelancer: ComparisonValue;
  agency: ComparisonValue;
  scalex: ComparisonValue;
};

export const comparisonColumns = [
  { id: "diy", label: "DIY" },
  { id: "freelancer", label: "Freelancer" },
  { id: "agency", label: "Traditional agency" },
  { id: "scalex", label: "ScalexMedia", featured: true },
] as const;

export const comparisonRows: ComparisonRow[] = [
  { category: "Strategy", diy: "no", freelancer: "partial", agency: "yes", scalex: "yes" },
  { category: "Content", diy: "partial", freelancer: "yes", agency: "yes", scalex: "yes" },
  { category: "Consistency", diy: "no", freelancer: "partial", agency: "partial", scalex: "yes" },
  { category: "Creative direction", diy: "no", freelancer: "partial", agency: "yes", scalex: "yes" },
  { category: "Analytics", diy: "no", freelancer: "no", agency: "partial", scalex: "yes" },
  { category: "Paid campaigns", diy: "no", freelancer: "partial", agency: "yes", scalex: "yes" },
  { category: "Optimization", diy: "no", freelancer: "no", agency: "partial", scalex: "yes" },
  { category: "Communication", diy: "yes", freelancer: "partial", agency: "partial", scalex: "yes" },
  { category: "Scalability", diy: "no", freelancer: "no", agency: "partial", scalex: "yes" },
];
