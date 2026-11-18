import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/ui/Hero";
import Projects from "@/components/ui/Projects/Projects";
import Experience from "@/components/ui/Experience/Experience";
import About from "@/components/ui/About/About";
import Skills from "@/components/ui/Skills/Skills";
import Certificate from "@/components/ui/Certificate/Certificate";
import Contact from "@/components/ui/Contact";
import Footer from "@/components/layout/Footer";

import ScrollIndicator from "@/components/atoms/ScrollIndicator";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Skills />
        <Certificate />
        <Contact />
      </main>
      <Footer />
      <ScrollIndicator />
    </>
  );
}
