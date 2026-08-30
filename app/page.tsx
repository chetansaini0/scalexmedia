import { About } from "@/components/About";
import { Comparison } from "@/components/Comparison";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Metrics } from "@/components/Metrics";
import { Navbar } from "@/components/Navbar";
import { Portfolio } from "@/components/Portfolio";
import { Pricing } from "@/components/Pricing";
import { ProblemSection } from "@/components/ProblemSection";
import { Process } from "@/components/Process";
import { ResultsDashboard } from "@/components/ResultsDashboard";
import { Services } from "@/components/Services";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";
import { WhyScalex } from "@/components/WhyScalex";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Metrics />
        <ProblemSection />
        <Services />
        <Portfolio />
        <Process />
        <WhyScalex />
        <Comparison />
        <Pricing />
        <ResultsDashboard />
        <Testimonials />
        <Team />
        <About />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
