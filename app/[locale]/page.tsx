import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/ui/Hero";
import Projects from "@/components/ui/Projects/Projects";
import Experience from "@/components/ui/Experience/Experience";
import ScrollIndicator from "@/components/atoms/ScrollIndicator";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
      </main>
      <ScrollIndicator />
    </>
  );
}
