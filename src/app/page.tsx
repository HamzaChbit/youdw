import About from "@/components/About";
import Banner from "@/components/Banner";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";


export default function Home() {
  return (
  <div className="bg-back mx-auto max-w-screen-xl">
        <Hero/>
        <About/>
        <Banner/>
        <Faq/>
  </div>
  );
}
