// import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import FAQ from "@/components/Faq/FAQ";
// import Hero from "@/components/Hero/Hero";
// import Process from "@/components/Process/Process";
// import Services from "@/components/Services/Services";
import Testimonial from "@/components/Testimonial/Testimonial";
import Choose from "@/components/Whychoose/Choose";

const HomePageComponent = () => {
  return (
    <>
      {/* <div id="hero">
        <Hero />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="process">
        <Process />
      </div> */}

      <div id="why-choose">
        <Choose />
      </div>

      <div id="testimonials">
        <Testimonial />
      </div>
      
      <div id="contact">
        <Contact />
      </div>

      <div id="faq">
        <FAQ />
      </div>
    </>
  );
};

export default HomePageComponent;
