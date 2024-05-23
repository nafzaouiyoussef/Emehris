/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Layout from '@layout/Layout';
import Rating from '@components/common/Rating';
import { registerTestimonial, registerTestimonialTarget } from '@utils/data';

const Register = () => {
  return (
    <Layout title="Sign Up" desc="This is sign up page">
      <section
        className="sign-up-in-section bg-dark ptb-60"
        style={{
          background: "url('/page-header-bg.svg')no-repeat right bottom",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12">
              <div className="pricing-content-wrap bg-custom-light rounded-custom shadow-lg">
                <div className="price-feature-col pricing-feature-info text-white left-radius p-5 order-1 order-lg-0">
                  <Link href="/">
                    <a className="mb-5 d-none d-xl-block d-lg-block">
                      <Image
                        width={113}
                        height={36}
                        src="/logo-white.png"
                        alt="logo"
                        className="img-fluid"
                      />
                    </a>
                  </Link>
                  <div className="customer-testimonial-wrap mt-60">
                    <div className="tab-content" id="nav-tabContent">
                      {registerTestimonial.map((testimonial, i) => (
                        <div
                          key={i + 1}
                          className={`tab-pane fade ${testimonial.active}`}
                          id={testimonial.target}
                          role="tabpanel"
                        >
                          <div className="testimonial-tab-content mb-4">
                            <div className="mb-2">
                              <ul className="review-rate mb-0 mt-2 list-unstyled list-inline">
                                <li className="list-inline-item">
                                  <Rating />
                                </li>
                              </ul>
                            </div>
                            <blockquote>
                              <h5>{testimonial.header} </h5>
                              {testimonial.info}
                            </blockquote>
                            <div className="author-info mt-4">
                              <h6 className="mb-0">{testimonial.name} </h6>
                              <span className="small">
                                {testimonial.title}{' '}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <ul
                      className="nav testimonial-tab-list mt-5"
                      id="nav-tab"
                      role="tablist"
                    >
                      {registerTestimonialTarget.map((testimonialTarget, i) => (
                        <li key={i + 1} className="nav-item">
                          <a
                            className={testimonialTarget.active}
                            href={testimonialTarget.target}
                            data-bs-toggle="tab"
                            data-bs-target={testimonialTarget.target}
                            role="tab"
                            aria-selected="true"
                          >
                            <img
                              src={testimonialTarget.image}
                              className="img-fluid rounded-circle"
                              width="60"
                              alt="user"
                            />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="row justify-content-center mt-60">
                    <div className="col-12">
                      <p>Already trusted by some of the greatest companies</p>
                      <ul className="list-unstyled list-inline mb-0">
                        <li className="list-inline-item">
                          <img
                            src="/clients/client-logo-1.svg"
                            width="120"
                            alt="clients logo"
                            className="img-fluid py-3 me-3 customer-logo"
                          />
                        </li>
                        <li className="list-inline-item">
                          <img
                            src="/clients/client-logo-2.svg"
                            width="120"
                            alt="clients logo"
                            className="img-fluid py-3 me-3 customer-logo"
                          />
                        </li>
                        <li className="list-inline-item">
                          <img
                            src="/clients/client-logo-3.svg"
                            width="120"
                            alt="clients logo"
                            className="img-fluid py-3 me-3 customer-logo"
                          />
                        </li>
                        <li className="list-inline-item">
                          <img
                            src="/clients/client-logo-4.svg"
                            width="120"
                            alt="clients logo"
                            className="img-fluid py-3 me-3 customer-logo"
                          />
                        </li>
                        <li className="list-inline-item">
                          <img
                            src="/clients/client-logo-5.svg"
                            width="120"
                            alt="clients logo"
                            className="img-fluid py-3 me-3 customer-logo"
                          />
                        </li>
                        <li className="list-inline-item">
                          <img
                            src="/clients/client-logo-6.svg"
                            width="120"
                            alt="clients logo"
                            className="img-fluid py-3 me-3 customer-logo"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="price-feature-col pricing-action-info p-5 right-radius bg-light order-0 order-lg-1">
                  <a
                    href="index.html"
                    className="mb-5 d-block d-xl-none d-lg-none"
                  >
                    <img
                      src="/logo-color.png"
                      alt="logo"
                      className="img-fluid"
                    />
                  </a>
                  <h1 className="h3">Create an Account</h1>
                  <p className="text-muted">
                    Get started with your free account today. No credit card
                    needed and no setup fees.
                  </p>

                  <form action="#" className="mt-5 register-form">
                    <div className="row">
                      <div className="col-sm-6">
                        <label htmlFor="name" className="mb-1">
                          Name <span className="text-danger">*</span>
                        </label>
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            id="name"
                            required
                            aria-label="name"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6 ">
                        <label htmlFor="email" className="mb-1">
                          Email <span className="text-danger">*</span>
                        </label>
                        <div className="input-group mb-3">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            id="email"
                            required
                            aria-label="email"
                          />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <label htmlFor="company" className="mb-1">
                          Company
                        </label>
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Company"
                            id="company"
                            aria-label="company"
                          />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <label htmlFor="password" className="mb-1">
                          Password <span className="text-danger">*</span>
                        </label>
                        <div className="input-group mb-3">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            id="password"
                            required
                            aria-label="Password"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-check d-flex">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            I have read and agree to the{' '}
                            <a href="#" className="text-decoration-none">
                              Terms & Conditions
                            </a>
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-primary mt-4 d-block w-100"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                    <div className="position-relative d-flex align-items-center justify-content-center mt-4 py-4">
                      <span className="divider-bar"></span>
                      <h6 className="position-absolute text-center divider-text bg-light mb-0">
                        Or
                      </h6>
                    </div>
                    <div className="action-btns">
                      <a
                        href="#"
                        className="btn google-btn mt-4 d-block bg-white shadow-sm d-flex align-items-center text-decoration-none justify-content-center"
                      >
                        <Image
                          width={30}
                          height={29}
                          src="/google-icon.svg"
                          alt="google"
                        />
                        <span className="mx-2">Sign up with Google</span>
                      </a>
                    </div>
                    <p className="text-center text-muted mt-4 mb-0 fw-medium font-monospace">
                      Already have an account?{' '}
                      <Link href="/login">
                        <a className="text-decoration-none">Sign in</a>
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Register;
