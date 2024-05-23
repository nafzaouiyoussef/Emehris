import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function CustomerBrand() {
  const swiperOption = {
    slidesPerView: 2,
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
      },
      991: {
        slidesPerView: 6,
      },
    },
  };
  return (
    <section className="digtal-marketing-logo pb-120">
      <div className="container">
        <div className="bg-soft-blue py-5 px-4 rounded-3">
          <div className="row justify-content-center">
            <div className="col-auto">
              <h5 className="mb-4">
                Trusted by the best companies in the world
              </h5>
            </div>
          </div>
          <div className="row">
            <div className="col-auto">
              <Swiper className="digi-logo-slider" {...swiperOption}>
                <SwiperSlide>
                  <div className="single-logo">
                    <img
                      src="/brand-logo/google.svg"
                      className="img-fluid"
                      height="30"
                      alt="logo"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {' '}
                  <div className="single-logo">
                    <img
                      src="/brand-logo/facebook.svg"
                      className="img-fluid"
                      alt="logo"
                      height="30"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {' '}
                  <div className="single-logo">
                    <img
                      src="/brand-logo/youtube.svg"
                      className="img-fluid"
                      alt="logo"
                      height="30"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {' '}
                  <div className="single-logo">
                    <img
                      src="/brand-logo/printerest.svg"
                      className="img-fluid"
                      alt="logo"
                      height="30"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {' '}
                  <div className="single-logo">
                    <img
                      src="/brand-logo/webflow.svg"
                      className="img-fluid"
                      alt="logo"
                      height="30"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {' '}
                  <div className="single-logo">
                    <img
                      src="/brand-logo/company.svg"
                      className="img-fluid"
                      alt="logo"
                      height="30"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
