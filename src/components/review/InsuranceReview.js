import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import dynamic from "next/dynamic";

const InsuranceReview = () => {
  const swiperRef = useRef();

  return (
    <section
      className="ins-feedback-section pb-120"
      style={{
        background: "url('/insurance/map-bg.png')",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-8">
            <div className="ins-title text-center">
              <div className="d-flex align-items-center justify-content-center mb-1">
                <span className="subtitle fw-bold">Testimonial</span>
                <span className="ms-1">
                  <svg
                    width="103"
                    height="13"
                    viewBox="0 0 103 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.696533 6.60583L93.3054 6.60584"
                      stroke="#0EE7C5"
                      strokeWidth="1.49369"
                    />
                    <path
                      d="M102.266 6.60263L93.3036 11.7769L93.3036 1.42833L102.266 6.60263Z"
                      fill="#0EE7C5"
                    />
                  </svg>
                </span>
              </div>
              <h2 className="ins-heading">
                What Our <mark>Customers are</mark> Talking About!
              </h2>
            </div>
          </div>
        </div>
        <div className="ins-feedback-slider-wrapper overflow-hidden mt-4">
          <div className="ins-feedback-slider swiper overflow-visible">
            <Swiper
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              spaceBetween={8}
              loop={true}
              navigation={{
                nextEl: ".review-swiper-button-next",
                prevEl: ".review-swiper-button-prev",
              }}
              modules={[Navigation]}
              className="swiper-wrapper"
            >
              <SwiperSlide>
                <div className="row g-4 align-items-center">
                  <div className="col-lg-5 order-2 order-lg-1">
                    <div className="ins-feedback-content text-center text-lg-start">
                      <h4 className="ins-heading mb-3">Awesome Service</h4>
                      <p className="mb-30">
                        “I have gotten at least 50 times the value from Quiety.
                        After using Surely my business conceptualize cutting
                        edgeultivate strategic e-business for sustainable
                        outsourcing."
                      </p>
                      <div className="ins-feedback-author d-flex align-items-center justify-content-center justify-content-lg-start">
                        <img
                          src="/testimonial/4.jpg"
                          alt="client"
                          className="rounded-circle flex-shrink-0"
                        />
                        <div className="ins-author-info ms-3 text-start">
                          <h6 className="ins-heading mb-0">Kareem Pelletier</h6>
                          <span className="fs-sm">Founder & CEO</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2">
                    <div className="client-thumb text-center">
                      <img
                        src="/insurance/client-1.png"
                        alt="client"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div
              onClick={() => swiperRef.current?.slidePrev()}
              className="swiper-btn-prev swiper-control-btn"
            >
              <FaArrowLeft className="fa-solid fa-arrow-left" />
            </div>
            <div
              onClick={() => swiperRef.current?.slideNext()}
              className="swiper-btn-next swiper-control-btn"
            >
              <FaArrowRight className="fa-solid fa-arrow-right" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(InsuranceReview), { ssr: false });
