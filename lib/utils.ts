export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatMetric(value: number) {
  return Number.isInteger(value) ? String(value) : value.toFixed(1);
}
