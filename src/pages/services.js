import React from "react";

import Layout from "@layout/Layout";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import PageHeader from "@components/common/PageHeader";
import ServiceOne from "@components/services/ServiceOne";
import SupportOne from "@components/support/SupportOne";
import TestimonialTwo from "@components/testimonial/TestimonialTwo";

const services = () => {
  return (
    <Layout title="Services" desc="this is services page  ">
      <Navbar classOption="navbar-light" />
      <PageHeader
        title="We are Development Experts"
        desc="Seamlessly actualize client-based users after out-of-the-box value. Globally embrace strategic data through frictionless expertise."
      />

      <ServiceOne />
      <TestimonialTwo sectionBgClass="bg-white" swiperBgClass="bg-white" />
      <SupportOne className="true" />
      <Footer footerLight />
    </Layout>
  );
};

export default services;
