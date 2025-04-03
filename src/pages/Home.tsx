import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Analytics from "@/components/sections/Analytics";
import Success from "@/components/sections/Success";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import Pricing from "@/components/sections/Pricing";
import Partners from "@/components/sections/Partners";
import FAQ from "@/components/sections/FAQ";
import ProductDemo from "@/components/sections/ProductDemo";
import Footer from "@/components/layout/Footer";
import ContactUs from "@/components/sections/Contact";
import HeroSection from "../components/sections/Hero";
import ServicesSection from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/Cta";
import AboutUs from "@/components/sections/About";
import ProductsServices from "@/components/sections/Services";
import IndustriesWeServe from "@/components/sections/Industries";
import Resources from "@/components/sections/Resources";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyCustomFit from "@/components/sections/WhyUs";
import ProductSection from "@/components/sections/Products";
import FeaturesSection from "@/components/sections/Features";
import SolutionsSection from "@/components/sections/Solutions";
import CaseStudies from "@/components/sections/CaseStudy";
import IndustriesSection from "@/components/sections/Industries";
import SustainabilitySection from "./Sustainability";
import PartnershipsSection from "@/components/sections/Partners";
import FAQSection from "@/components/sections/FAQ";

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <HowItWorks/>
      <Features/>
      <Pricing/>
      <FAQSection/>      
      <Footer/>
    </main>
  );
}