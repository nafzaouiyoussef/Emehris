import Image from "next/image";
import Link from "next/link";
import { RiArrowDownLine } from "react-icons/ri";
import React, { useState } from "react";
import { IoPlayCircleOutline } from "react-icons/io5";
import ModalVideo from "react-modal-video";

const HeroSectionTen = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section
      className="hero-section text-white hero-ten"
      style={{
        background: "url('/cyber_banner_img.png')no-repeat center center",
      }}
    >
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="hAP2QF--2Dg"
        onClose={() => setOpen(false)}
      />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-10">
            <div className="hero-content-wrap mt-5 mt-lg-0 mt-xl-0">
              <h1 className="fw-bold display-5 text-white">
                Quiety is Frist priority Your Cyber Security
              </h1>
              <p className="lead">
                Velit officia consequat duis enim velit mollit Exercitation
                veniam consequat sunt nostrud amet.
              </p>
              <div className="action-btns mt-5 align-items-center d-block d-sm-flex d-lg-flex d-md-flex">
                <Link href="/request-demo">
                  <a className="btn btn-primary">Discover More</a>
                </Link>
                <Link href="/">
                  <a
                    onClick={() => setOpen(true)}
                    type="button"
                    className="text-decoration-none d-inline-flex align-items-center watch-now-btn"
                  >
                    <IoPlayCircleOutline className="ms-2" /> Watch Demo
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-8 mt-5">
            <div className="hero-img position-relative">
              <Image
                src="/cyber_banner_image.svg"
                alt="hero"
                width={546}
                height={367}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        <div className="cyber-down-btn text-center position-relative d-none d-lg-block">
          <Link href="#cyber-about">
            <a className="text-primary">
              <RiArrowDownLine />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionTen;
