import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} handles enquiry information.`,
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 pt-32 pb-24 md:px-8">
        <h1 className="display section-display">Privacy Policy</h1>
        <p className="mt-8 text-muted">Last updated {site.year}.</p>
        <div className="mt-10 space-y-6 text-[18px] text-muted">
          <p>
            ScalexMedia collects only the information you submit through the contact form:
            name, email, phone, company, and project details.
          </p>
          <p>
            That information is used to respond to your enquiry. It is not sold.
            A connected form backend can be added later without changing the public site.
          </p>
          <p>
            For questions, write to {site.email}.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
