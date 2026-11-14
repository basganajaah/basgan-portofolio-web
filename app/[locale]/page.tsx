import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/ui/Hero";
import Projects from "@/components/ui/Projects/Projects";
import ScrollIndicator from "@/components/atoms/ScrollIndicator";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
      </main>
      <ScrollIndicator />
    </>
  );
}
