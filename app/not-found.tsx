import { MagneticButton } from "@/components/ui/MagneticButton";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col justify-center px-5 md:px-8">
      <p className="label !text-accent">404</p>
      <h1 className="display section-display mt-6">This page scrolled away.</h1>
      <div className="mt-10">
        <MagneticButton href="/" className="bg-accent text-accent-ink hover:bg-fg">
          Back home
        </MagneticButton>
      </div>
    </main>
  );
}
