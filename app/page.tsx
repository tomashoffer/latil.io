import Hero from "@/components/sections/Hero";
import Problems from "@/components/sections/Problems";
import SolutionsOverview from "@/components/sections/SolutionsOverview";
import About from "@/components/sections/About";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Problems />
      <SolutionsOverview />
      <About />
      <ContactCTA />
    </>
  );
}
