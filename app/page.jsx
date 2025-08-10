// app/page.jsx
import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";
import SolutionTabs from "@/components/SolutionTabs";
import WhatWeCollect from "@/components/WhatWeCollect";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection"; 
export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemStatement />
      <SolutionTabs />
      <WhatWeCollect />
      <AboutSection />
      <ContactSection /> 
    </main>
  );
}