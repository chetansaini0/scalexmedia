export type Plan = {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  recommended: boolean;
  features: string[];
};

export const pricing = {
  note: "Custom plans available for larger brands.",
  disclaimer: "Prices are placeholders. Replace ₹XX,XXX with live retainers before launch.",
  plans: [
    {
      id: "starter",
      name: "Starter",
      description: "For brands building their social foundation.",
      price: "₹XX,XXX",
      period: "/ month",
      recommended: false,
      features: [
        "2 platforms",
        "Monthly strategy session",
        "12 feed assets",
        "4 reels",
        "Story system",
        "Consistent posting",
        "Community replies",
        "Monthly analytics report",
        "No paid ads included",
      ],
    },
    {
      id: "growth",
      name: "Growth",
      description: "For brands ready to grow consistently.",
      price: "₹XX,XXX",
      period: "/ month",
      recommended: true,
      features: [
        "3 platforms",
        "Full growth roadmap",
        "20 feed assets",
        "8 reels",
        "Campaign creatives",
        "Daily posting cadence",
        "Community + inbox",
        "Bi-weekly optimization",
        "Paid ads advisory",
      ],
    },
    {
      id: "scale",
      name: "Scale",
      description: "For brands ready to aggressively expand.",
      price: "₹XX,XXX",
      period: "/ month",
      recommended: false,
      features: [
        "4+ platforms",
        "Always-on strategy",
        "Unlimited campaign kits*",
        "12+ reels",
        "Full creative direction",
        "Always-on publishing",
        "Dedicated community desk",
        "Weekly growth reviews",
        "Paid social management",
      ],
    },
  ] satisfies Plan[],
};
