import React from "react";
import Layout from "@layout/Layout";
import Navbar from "@layout/Header/Navbar";
import Footer from "@layout/Footer/Footer";
import OurTeam from "@components/our-team/OurTeam";
import OurStory from "@components/our-story/OurStory";
import OurOffice from "@components/our-office/OurOffice";
import SupportOne from "@components/support/SupportOne";
import HeroSectionTwo from "@components/hero-section/HeroSectionTwo";
import TestimonialTwo from "@components/testimonial/TestimonialTwo";
import FeatureImgContentTwo from "@components/feature-img-content/FeatureImgContentTwo";

const AboutUs = () => {
  return (
    <Layout title="About Us" desc="this is about us page">
      <Navbar classOption="navbar-light" />
      <HeroSectionTwo />
      <OurStory />
      <FeatureImgContentTwo />
      <OurTeam />
      <TestimonialTwo swiperBgClass="bg-white" />
      <OurOffice />
      <SupportOne className="true" />
      <Footer footerLight />
    </Layout>
  );
};

export default AboutUs;
