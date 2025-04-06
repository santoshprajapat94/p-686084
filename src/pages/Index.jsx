
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { WhatIs } from "@/components/landing/WhatIs";
import { Pricing } from "@/components/landing/Pricing";
import { Testimonials } from "@/components/landing/Testimonials";
import { Footer } from "@/components/landing/Footer";
import "../components/landing/FeatureSection.css";
import FeatureSection from "../components/landing/FeatureSection";

const Index = () => {
  return (
    <div className="bg-white flex flex-col overflow-hidden items-stretch">
      <Hero />
      <Features />
      <WhatIs />
      <FeatureSection/>
      <Pricing />
      <Testimonials />
      <Footer/>
    </div>
  );
};

export default Index;
