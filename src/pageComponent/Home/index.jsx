import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import FAQ from "@/components/Faq/FAQ";
import Hero from "@/components/Hero/Hero";
import Process from "@/components/Process/Process";
import Services from "@/components/Services/Services";
import Choose from "@/components/Whychoose/Choose";

const HomePageComponent = () => {
  return (
    <>
      <Hero />

      <About />

      <Services />

      <Process />

      <Choose />

      <Contact />

      <FAQ />
    </>
  );
};

export default HomePageComponent;
