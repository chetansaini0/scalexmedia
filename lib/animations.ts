export const easeOut = [0.16, 1, 0.3, 1] as const;

export const reveal = {
  hidden: { y: "110%" },
  show: {
    y: "0%",
    transition: { duration: 0.95, ease: easeOut },
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

export const stagger = {
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.08 },
  },
};
