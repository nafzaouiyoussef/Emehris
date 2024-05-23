import React from 'react';
import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import PageHeader from '@components/common/PageHeader';
import ContactCard from '@components/contact-us/ContactCard';
import ContactForm from '@components/contact-us/ContactForm';

const ContactUs = () => {
  return (
    <Layout title="Contact Us" desc="This is contact us page">
      <Navbar classOption="navbar-light" />
      <PageHeader
        title="Contact Us"
        desc="Seamlessly actualize client-based users after out-of-the-box value data through frictionless expertise. Proactively coordinate quality quality vectors vis-a-vis supply chains. Quickly engage client-centric web services."
      />
      <ContactCard />
      <ContactForm />
      <Footer />
    </Layout>
  );
};

export default ContactUs;
