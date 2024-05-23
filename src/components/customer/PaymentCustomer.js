import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function PaymentCustomer() {
  const swiperOption = {
    spaceBetween: 24,
    speed: 1000,
    autoplay: {
      delay: 2500,
    },
    slidesPerGroup: 1,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      991: {
        slidesPerView: 5,
        spaceBetween: 15,
      },
    },
  };
  return (
    <section className="payment-brand-logo pt-120 pb-80 bg-white-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="text-center mb-4">
              <h5>
                Join this Comapnies Making
                <span className="gr-text ms-2">Business Flow</span>
              </h5>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Swiper {...swiperOption} className="payment-brand-logo">
              <SwiperSlide>
                <div className="logo-grid-item">
                  <img
                    src="/brand-logo/tb-1.png"
                    className="img-fluid"
                    alt="logo"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="logo-grid-item">
                  <img
                    src="/brand-logo/tb-2.png"
                    className="img-fluid"
                    alt="logo"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="logo-grid-item">
                  <img
                    src="/brand-logo/tb-3.png"
                    className="img-fluid"
                    alt="logo"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="logo-grid-item">
                  <img
                    src="/brand-logo/tb-4.png"
                    className="img-fluid"
                    alt="logo"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="logo-grid-item">
                  <img
                    src="/brand-logo/tb-5.png"
                    className="img-fluid"
                    alt="logo"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
