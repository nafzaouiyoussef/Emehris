import React from 'react';
import {
  BsFillChatSquareTextFill,
  BsFillEnvelopeFill,
  BsTelephoneInbound,
} from 'react-icons/bs';

const ContactCard = () => {
  return (
    <section className="contact-promo ptb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div className="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100">
              <span className="fad fa-3x text-primary">
                <BsFillChatSquareTextFill />
              </span>
              <div className="contact-promo-info mb-4">
                <h5>Chat with us</h5>
                <p>
                  We have got live Social Experts waiting to help you{' '}
                  <strong>monday to friday</strong> from
                  <strong>9am to 5pm EST.</strong>
                </p>
              </div>
              <a
                href="mailto:hellothemetags@gmail.com"
                className="btn btn-link mt-auto"
              >
                Chat with us
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div className="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100">
              <span className="fad fa-3x text-primary">
                <BsFillEnvelopeFill />
              </span>
              <div className="contact-promo-info mb-4">
                <h5>Email Us</h5>
                <p>
                  Simple drop us an email at{' '}
                  <strong>hellothemetags@gmail.com</strong>
                  and you will receive a reply within 24 hours
                </p>
              </div>
              <a
                href="mailto:hellothemetags@gmail.com"
                className="btn btn-primary mt-auto"
              >
                Email Us
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div className="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100">
              <span className="fad fa-3x text-primary">
                <BsTelephoneInbound />
              </span>
              <div className="contact-promo-info mb-4">
                <h5>Give us a call</h5>
                <p>
                  Give us a ring.Our Experts are standing by{' '}
                  <strong>monday to friday</strong> from
                  <strong>9am to 5pm EST.</strong>
                </p>
              </div>
              <a href="tel:00-976-561-008" className="btn btn-link mt-auto">
                00-976-561-008
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
