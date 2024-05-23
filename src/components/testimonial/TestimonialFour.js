import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import Image from "next/image";
import Link from "next/link";
import Rating from "@components/common/Rating";
import { testimonialFourData } from "@utils/data";


const TestimonialFour = () => {
  const swiperOption = {
    slidesPerView: 2,
    speed: 700,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: true,

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      991: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  };
  return (
    <section className="crypto-testimonial  bg-dark-black pt-60 pb-120">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="section-title mb-5">
              <h2 className="text-white">What They Say About Us</h2>
              <p className="text-white">
                The standard chunk of Lorem Ipsum used since the is reproduced
                below for those interested Sections.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="text-left text-lg-end mb-5 mb-lg-0">
              <Link href="/about-us">
                <a className="btn btn-primary rounded-pill">
                  All Feedback
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <Swiper {...swiperOption}>
            {testimonialFourData.map((item, i) => (
              <SwiperSlide key={i + 0}>
                <div className="crypto-single-testimonial bg-soft-black">
                  <Rating />
                  <blockquote className="m-0">
                    <p className="m-0">
                      {item.quoate}
                    </p>
                  </blockquote>
                  <div className="author-meta d-flex align-items-center">
                    <div className="pe-3">
                      <Image
                        src={item.authorAvatar}
                        alt="Author"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div>
                      <h5 className="fw-normal text-white h6 m-0">
                        {item.authorName}
                      </h5>
                      <span>{item.quoateDate}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialFour;
