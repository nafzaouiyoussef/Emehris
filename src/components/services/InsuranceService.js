import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { insuranceBrands } from "@utils/data";
import dynamic from "next/dynamic";
import Link from "next/link";

const InsuranceService = () => {
  return (
    <section className="ins-service-section pb-120">
      <div className="container">
        <div className="ins-service-top pb-120">
          <div className="row justify-content-between g-4">
            <div className="col-xxl-4 col-xl-5 col-lg-6">
              <div className="ins-service-contact bg-white rounded">
                <div className="d-flex align-items-center mb-30">
                  <h5 className="ins-heading mb-0">Find The Agent Now</h5>
                  <span className="ms-2 d-none d-sm-block">
                    <svg
                      width="111"
                      height="13"
                      viewBox="0 0 111 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.538879 6.62085L101.114 6.62086"
                        stroke="#0EE7C5"
                        strokeWidth="1.99159"
                      />
                      <path
                        d="M110.078 6.62149L101.116 11.7958L101.116 1.44719L110.078 6.62149Z"
                        fill="#0EE7C5"
                      />
                    </svg>
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <span className="icon-wrapper d-flex align-items-center justify-content-center rounded">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.4609 19.2993C23.7118 18.671 19.3181 15.8887 18.5878 16.0164C18.2449 16.0773 17.9826 16.3696 17.2806 17.207C16.956 17.6192 16.5995 18.0052 16.2143 18.3616C15.5087 18.1911 14.8257 17.9379 14.1795 17.6073C11.6452 16.3734 9.59774 14.3254 8.36463 11.7907C8.03398 11.1445 7.78079 10.4615 7.61034 9.75587C7.96668 9.37075 8.35273 9.01422 8.76492 8.68958C9.60149 7.98758 9.89463 7.72701 9.95549 7.38244C10.0832 6.65044 7.29834 2.25844 6.67263 1.50929C6.41034 1.19901 6.17206 0.990723 5.86692 0.990723C4.98234 0.990723 0.981201 5.93815 0.981201 6.57929C0.981201 6.63158 1.06692 11.7822 7.57177 18.4002C14.1898 24.905 19.3403 24.9907 19.3926 24.9907C20.0338 24.9907 24.9812 20.9896 24.9812 20.105C24.9812 19.7999 24.7729 19.5616 24.4609 19.2993Z"
                        fill="white"
                      />
                      <path
                        d="M18.9859 12.1325H20.7002C20.6982 10.3145 19.9751 8.57158 18.6896 7.28606C17.404 6.00053 15.6611 5.27743 13.8431 5.27539V6.98968C15.2066 6.99104 16.5139 7.53331 17.4781 8.49749C18.4423 9.46167 18.9846 10.769 18.9859 12.1325Z"
                        fill="white"
                      />
                      <path
                        d="M23.2716 12.1336H24.9859C24.9825 9.17935 23.8075 6.3471 21.7185 4.25815C19.6296 2.16919 16.7973 0.994125 13.8431 0.990723V2.70501C16.3428 2.70796 18.7393 3.70227 20.5068 5.46983C22.2744 7.23739 23.2687 9.63387 23.2716 12.1336Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <div className="ins-srv-right ms-3">
                    <span className="fw-semibold">Emergency Contact</span>
                    <h5 className="ins-heading mt-1">(+111) 47 789 565</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 align-self-end">
              <div className="ins-brands mt-4 mt-lg-0">
                <div className="d-flex align-items-center justify-content-sm-end justify-content-center">
                  <span className="me-1 d-none d-sm-block">
                    <svg
                      width="141"
                      height="13"
                      viewBox="0 0 141 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M140.86 6.39014H6.42745"
                        stroke="#0EE7C5"
                        strokeWidth="1.49369"
                      />
                      <path
                        d="M0.451783 6.38949L9.41393 1.2152L9.41393 11.5638L0.451783 6.38949Z"
                        fill="#0EE7C5"
                      />
                    </svg>
                  </span>
                  <h5 className="ins-heading">Trusted over 3,500 Customers</h5>
                </div>
                <div className="ins-brand-slider mt-4 swiper">
                  <>
                    <Swiper
                      spaceBetween={8}
                      loop={true}
                      breakpoints={{
                        // when window width is >= 640px
                        375: {
                          width: 375,
                          slidesPerView: 2,
                        },
                        // when window width is >= 768px
                        414: {
                          width: 414,
                          slidesPerView: 3,
                        },
                        // when window width is >= 768px
                        660: {
                          width: 660,
                          slidesPerView: 4,
                        },

                        // when window width is >= 768px
                        768: {
                          width: 768,
                          slidesPerView: 6,
                        },

                        // when window width is >= 768px
                        991: {
                          width: 991,
                          slidesPerView: 8,
                        },

                        // when window width is >= 768px
                        1140: {
                          width: 1140,
                          slidesPerView: 9,
                        },
                        1680: {
                          width: 1680,
                          slidesPerView: 10,
                        },
                        1920: {
                          width: 1920,
                          slidesPerView: 10,
                        },
                      }}
                      className="mySwiper"
                    >
                      {insuranceBrands.map((item, i) => (
                        <SwiperSlide
                          className="h-full relative rounded-lg overflow-hidden"
                          key={i + 1}
                        >
                          <div className="text-sm text-gray-600 hover:text-emerald-dark">
                            <img
                              src={item.url}
                              alt="brand"
                              className="img-fluid"
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-5">
            <div className="ins-title text-center">
              <div className="d-inline-flex align-items-center mb-2">
                <span className="subtitle fw-bold me-2">Service</span>
                <span>
                  <svg
                    width="56"
                    height="13"
                    viewBox="0 0 56 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.262474 6.51123L49.0564 6.51123"
                      stroke="#0EE7C5"
                      strokeWidth="1.49369"
                    />
                    <path
                      d="M55.0297 6.51187L46.0675 11.6862L46.0675 1.33758L55.0297 6.51187Z"
                      fill="#0EE7C5"
                    />
                  </svg>
                </span>
              </div>
              <h2 className="ins-heading">
                The Right Insurance Plan for <mark>Every Need.</mark>
              </h2>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="row justify-content-center g-4">
            <div className="col-xl-4 col-lg-6">
              <div className="ins-service-card text-center py-5 px-4 bg-white rounded-1">
                <img src="/icons/ins-1.svg" alt="icon" className="img-fluid" />
                <Link href="/single-service">
                  <a>
                    <h5 className="mt-4 mb-3 ins-heading">Life Insurance</h5>
                  </a>
                </Link>
                <p className="mb-4 ins-text">
                  Competently seize performance based growth multidisciplinary
                  total linkage. change for customized e-services applications.
                </p>
                <Link href="/single-service">
                  <a className="ins-service-explore fs-md fw-bold">
                    Explore More
                    <span className="ms-1">
                      <svg
                        width="53"
                        height="9"
                        viewBox="0 0 53 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.104523 4.57166L48.8984 4.57166"
                          stroke="#003478"
                          strokeWidth="0.995794"
                        />
                        <path
                          d="M52.8787 4.57082L46.904 8.02035L46.904 1.12129L52.8787 4.57082Z"
                          fill="#003478"
                        />
                      </svg>
                    </span>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="ins-service-card text-center py-5 px-4 bg-white rounded-1">
                <img src="/icons/ins-2.svg" alt="icon" className="img-fluid" />
                <Link href="/single-service">
                  <a>
                    <h5 className="mt-4 mb-3 ins-heading">
                      Business Insurance
                    </h5>
                  </a>
                </Link>
                <p className="mb-4 ins-text">
                  Competently seize performance based growth multidisciplinary
                  total linkage. change for customized e-services applications.
                </p>
                <Link href="/single-service">
                  <a className="ins-service-explore fs-md fw-bold">
                    Explore More
                    <span className="ms-1">
                      <svg
                        width="53"
                        height="9"
                        viewBox="0 0 53 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.104523 4.57166L48.8984 4.57166"
                          stroke="#003478"
                          strokeWidth="0.995794"
                        />
                        <path
                          d="M52.8787 4.57082L46.904 8.02035L46.904 1.12129L52.8787 4.57082Z"
                          fill="#003478"
                        />
                      </svg>
                    </span>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="ins-service-card text-center py-5 px-4 bg-white rounded-1">
                <img src="/icons/ins-3.svg" alt="icon" className="img-fluid" />
                <Link href="/single-service">
                  <a>
                    <h5 className="mt-4 mb-3 ins-heading">Home Insurance</h5>
                  </a>
                </Link>
                <p className="mb-4 ins-text">
                  Competently seize performance based growth multidisciplinary
                  total linkage. change for customized e-services applications.
                </p>
                <Link href="/single-service">
                  <a className="ins-service-explore fs-md fw-bold">
                    Explore More
                    <span className="ms-1">
                      <svg
                        width="53"
                        height="9"
                        viewBox="0 0 53 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.104523 4.57166L48.8984 4.57166"
                          stroke="#003478"
                          strokeWidth="0.995794"
                        />
                        <path
                          d="M52.8787 4.57082L46.904 8.02035L46.904 1.12129L52.8787 4.57082Z"
                          fill="#003478"
                        />
                      </svg>
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <p className="text-center ins-text mt-40 mb-0 fs-md">
            Do You Want to explore more services{" "}
            <Link href="/services">
              <a className="ins-text-secondary text-decoration-underline fw-bold">
                just click here
              </a>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(InsuranceService), { ssr: false });
