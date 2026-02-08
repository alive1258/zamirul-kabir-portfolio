import About from "@/components/Home/About/About";
import BlogSection from "@/components/Home/Blog/BlogSection";
import ChooseMe from "@/components/Home/ChooseMe/ChooseMe";
import Contact from "@/components/Home/Contact/Contact";
import LicensesCertifications from "@/components/Home/Education/LicensesCertifications";
import Experience from "@/components/Home/Experience/Experience";
import Hero from "@/components/Home/Hero/Hero";
import Projects from "@/components/Home/Projects/Projects";
import Service from "@/components/Home/Services/Services";
import FeedTestimonials from "@/components/Home/Testimonials/Testimonials";

// Dynamically import problematic components
import dynamic from "next/dynamic";

const Skills = dynamic(() => import("@/components/Home/Skills/Skills"), {
  ssr: false,
});

const Education = dynamic(
  () => import("@/components/Home/Education/Education"),
  {
    ssr: false,
  },
);

const HomePage = () => {
  return (
    <>
      <div>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <LicensesCertifications />
        <ChooseMe />
        <BlogSection />
        <Service />
        <FeedTestimonials />
        <Contact />
      </div>
    </>
  );
};

export default HomePage;
