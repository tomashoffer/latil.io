import Hero from "@/components/sections/Hero";
import Problems from "@/components/sections/Problems";
import SolutionCloud from "@/components/sections/SolutionCloud";
import SolutionFinance from "@/components/sections/SolutionFinance";
import Clients from "@/components/sections/Clients";
import About from "@/components/sections/About";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Problems />
      <SolutionCloud />
      <SolutionFinance />
      <Clients />
      <About />
      <ContactCTA />
    </>
  );
}

