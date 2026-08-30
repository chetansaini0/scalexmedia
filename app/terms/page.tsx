import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms",
  description: `Terms of use for the ${site.name} website.`,
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 pt-32 pb-24 md:px-8">
        <h1 className="display section-display">Terms</h1>
        <div className="mt-10 space-y-6 text-[18px] text-muted">
          <p>
            This website presents ScalexMedia&apos;s services. Metrics, testimonials and
            pricing marked as placeholders are not claims. They are ready to be replaced
            with verified information.
          </p>
          <p>
            Starting a project does not create a contract until both parties agree
            a scope and retainer in writing.
          </p>
          <p>
            Questions: {site.email}.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
