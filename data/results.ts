export type DashboardMetric = {
  id: string;
  label: string;
  value: number;
  suffix: string;
  change: string;
  series: number[];
  isPlaceholder: boolean;
};

export const dashboardMetrics: DashboardMetric[] = [
  {
    id: "reach",
    label: "Reach",
    value: 184,
    suffix: "K",
    change: "+[XX]%",
    series: [18, 22, 20, 28, 34, 31, 42, 48, 55, 62, 70, 84],
    isPlaceholder: true,
  },
  {
    id: "engagement",
    label: "Engagement",
    value: 6.4,
    suffix: "%",
    change: "+[XX]%",
    series: [2.1, 2.4, 2.8, 3.1, 3.6, 3.4, 4.2, 4.8, 5.1, 5.6, 6.0, 6.4],
    isPlaceholder: true,
  },
  {
    id: "followers",
    label: "Follower growth",
    value: 12.8,
    suffix: "K",
    change: "+[XX]%",
    series: [1, 1.4, 1.8, 2.2, 3.1, 3.8, 4.6, 5.9, 7.2, 8.8, 10.4, 12.8],
    isPlaceholder: true,
  },
  {
    id: "leads",
    label: "Leads",
    value: 426,
    suffix: "",
    change: "+[XX]%",
    series: [12, 18, 16, 24, 28, 36, 40, 48, 54, 62, 70, 82],
    isPlaceholder: true,
  },
  {
    id: "ctr",
    label: "CTR",
    value: 2.8,
    suffix: "%",
    change: "+[XX]%",
    series: [0.8, 0.9, 1.1, 1.2, 1.4, 1.6, 1.8, 2.0, 2.2, 2.4, 2.6, 2.8],
    isPlaceholder: true,
  },
  {
    id: "roas",
    label: "ROAS",
    value: 4.2,
    suffix: "x",
    change: "+[XX]%",
    series: [1.4, 1.6, 1.8, 2.1, 2.4, 2.6, 2.9, 3.2, 3.5, 3.7, 4.0, 4.2],
    isPlaceholder: true,
  },
  {
    id: "conversions",
    label: "Conversions",
    value: 318,
    suffix: "",
    change: "+[XX]%",
    series: [8, 12, 14, 18, 22, 26, 30, 36, 42, 48, 54, 64],
    isPlaceholder: true,
  },
];
