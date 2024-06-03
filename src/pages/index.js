import React from "react";
import Layout from "@layout/Layout";
import QuickSupport from "@components/support/QuickSupport";
import FooterShort from "@layout/Footer/FooterShort";
import Navbar from "@layout/Header/Navbar";
import LatestBlog from "@components/blogs/LatestBlog";
import SupportOne from "@components/support/SupportOne";
// import IntegrationOne from "@components/integration/IntegrationOne";
import TestimonialOne from "@components/testimonial/TestimonialOne";
import WorkProcessTwo from "@components/workprocess/WorkProcessTwo";
import HeroSectionThree from "@components/hero-section/HeroSectionThree";
import FeatureImgContentFive from "@components/feature-img-content/FeatureImgContentFive";
import FeatureImgContentFour from "@components/feature-img-content/FeatureImgContentFour";
import DigiSerives from "@components/services/DigiServies";
import PricingOne from "@components/pricing/PricingOne";

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <HeroSectionThree />
      
      <DigiSerives />
      <FeatureImgContentFour />
      <FeatureImgContentFive />
      <TestimonialOne />
      {/* <IntegrationOne /> */}
      
      <PricingOne header ptClass="pt-120" />
      <WorkProcessTwo />
      <LatestBlog />
      

      <SupportOne className />
      <QuickSupport />
      <FooterShort />
    </Layout>
  );
}
