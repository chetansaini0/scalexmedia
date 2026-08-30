export function PlaceholderNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="label mt-3">
      Placeholder — {children}
    </p>
  );
}
