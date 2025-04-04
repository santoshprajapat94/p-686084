
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { WhatIs } from "@/components/landing/WhatIs";
import { Pricing } from "@/components/landing/Pricing";
import { Testimonials } from "@/components/landing/Testimonials";
import { Footer } from "@/components/landing/Footer";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { FAQ } from "@/components/landing/FAQ";

const Index = () => {
  return (
    <div className="bg-white flex flex-col overflow-hidden items-stretch pt-[39px] pb-[81px]">
      <Hero />
      <Features />
      <WhatIs />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
