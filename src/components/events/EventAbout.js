import React from 'react';
import Link from 'next/link';

export default function EventAbout() {
  return (
    <section
      className="event-about"
      style={{
        background: "url('/event/about-bg.jpg')no-repeat center center/cover",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="ev-ab-img position-relative ms-0 ms-lg-5">
              <img
                src="/event/about-img-1.png"
                className="img-fluid z-5 position-relative"
                alt="men"
              />
              <img
                src="/event/about-img-2.png"
                className="img-fluid ev-about-img-one z-5"
                alt="men"
              />
              <ul className="list-unstyled">
                <li>
                  <h4>
                    Global Conference <span className="text-pink">2022</span>
                  </h4>
                </li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="p-3">
              <span className="text-pink fw-bold mb-3 d-inline-block">
                About The Quiety
              </span>
              <h2 className="mb-4">The Digital Product Quiety is back</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Aenean
                faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut
                sem vitae risus tristique synergy and ethical catalysts for
                change.
              </p>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
              <div>
                <Link href="/signup">
                  <a className="btn btn-primary bg-pink me-3 mb-2 mb-lg-0 mb-md-0">
                    Register Now
                  </a>
                </Link>
                <Link href="/request-for-demo">
                  <a className="btn border-pink">Download PDF</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <ul className="elements list-unstyled d-none d-xl-block">
          <li>
            <img src="/event/star.png" alt="star" />
          </li>
          <li>
            <img
              src="/event/human-shape.png"
              className="img-fluid"
              alt="human"
            />
          </li>
          <li></li>
        </ul>
      </div>
    </section>
  );
}
