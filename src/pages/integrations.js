import React from 'react';

import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import Promo from '@components/promo/Promo';
import PageHeader from '@components/common/PageHeader';
import SupportOne from '@components/support/SupportOne';
import IntegrationFeature from '@components/integration/IntegrationFeature';


const Integrations = () => {
  return (
    <Layout title="Integrations" desc="This is integrations page">
      <Navbar classOption="navbar-light" />
      <PageHeader
        title="Our Featured Integrations"
        desc="Seamlessly actualize client-based users after out-of-the-box value. Globally embrace strategic data through frictionless expertise."
      />
      <IntegrationFeature />
      <Promo bgWhite />
      <SupportOne className />
      <Footer footerLight />
    </Layout>
  );
};

export default Integrations;
