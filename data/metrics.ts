export type Metric = {
  id: string;
  value: number;
  prefix: string;
  suffix: string;
  label: string;
  isPlaceholder: boolean;
};

export const metrics: Metric[] = [
  {
    id: "impressions",
    value: 2.8,
    prefix: "+",
    suffix: "M",
    label: "Organic impressions",
    isPlaceholder: true,
  },
  {
    id: "engagements",
    value: 147,
    prefix: "+",
    suffix: "K",
    label: "Engagements",
    isPlaceholder: true,
  },
  {
    id: "campaigns",
    value: 86,
    prefix: "",
    suffix: "+",
    label: "Campaigns",
    isPlaceholder: true,
  },
  {
    id: "brands",
    value: 32,
    prefix: "",
    suffix: "+",
    label: "Brands",
    isPlaceholder: true,
  },
];
