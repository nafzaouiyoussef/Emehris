import Link from "next/link";
import React, { useState } from "react";
import { IoPlayCircleOutline } from "react-icons/io5";
import ModalVideo from "react-modal-video";

export default function HeroThirteen() {
  const [isOpen, setOpen] = useState(false);

  return (
    <section
      className="hero-payment-gateway"
      style={{ backgroundImage: "/pay-h.jpg" }}
    >
      <div className="container">
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId="hAP2QF--2Dg"
          onClose={() => setOpen(false)}
        />
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-10">
            <div className="payment-gateway-text">
              <h1 className="display-5 text-white fw-bold mb-3">
                The Easiest Way to Manage Personal With
                <span className="gr-text fw-bold">Fintech</span>
              </h1>
              <p className="text-white m-0">
                Access your account via your mobile phone View balance, transfer
                funds, view transactions wherever happy clients all around.
              </p>
              <div className="action-btns mt-5 align-items-center d-block d-sm-flex d-lg-flex d-md-flex">
                <Link href="/request-demo">
                  <a className="btn-gradient-sqr ">Download Now</a>
                </Link>
                <div className="ms-2">
                  <Link href="/#">
                    <a
                      onClick={() => setOpen(true)}
                      type="button"
                      className="text-decoration-none d-inline-flex align-items-center watch-now-btn"
                    >
                      <IoPlayCircleOutline className="me-2" /> Watch Video
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="payment-hero-img pt-120 text-center text-lg-end position-relative">
              <img src="/pay-h-img.png" className="img-fluid" alt="smile" />
              <img
                src="/pay-hero-s.png"
                className="img-fluid h-shape"
                alt="smile"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
