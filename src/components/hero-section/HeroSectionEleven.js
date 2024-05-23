
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react';
import { IoPlayCircleOutline } from 'react-icons/io5';
import ModalVideo from 'react-modal-video';

const HeroSectionEleven = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className="hero-eleven bg-dark-black pt-120">
      
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="hAP2QF--2Dg"
        onClose={() => setOpen(false)}
      />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-12">
            <div className="hero-content-wrap mt-5 mt-lg-0 mt-xl-0">
              <h1 className="fw-bold display-5 text-white">
                Trusted & Secure Trading Crypto Wallet
              </h1>
              <p className="lead text-white">
                You might wonder why a designer would choose to use Morem text
                paragraphs in English or their native language architect interactive.
              </p>
              <div className="action-btns mt-5 align-items-center d-block d-sm-flex d-lg-flex d-md-flex">
                <Link href="/request-demo" >
                 <a className="btn rounded-pill btn-primary me-3"> Get Started</a>
                </Link>
                <div>
                    <Link href="/#">
                      <a
                        onClick={() => setOpen(true)}
                        type="button"
                        className="text-decoration-none d-inline-flex align-items-center watch-now-btn"
                      >
                        <IoPlayCircleOutline className="me-2" /> Watch Demo
                      </a>
                    </Link>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-12">
            <div className="crypto-hero-img pt-80">
              <ul className="currency-icon list-unstyled">
                <li>
                  <Image src="/currency1.svg" alt="icon" width={59} height={59} />
                </li>
                <li>
                  <Image src="/currency2.svg" alt="icon" width={28} height={46}/>
                </li>
                <li>
                  <Image src="/currency3.svg" alt="icon" width={42} height={26}/>
                </li>
                <li>
                  <Image src="/currency4.svg" alt="icon" width={31} height={31}/>
                </li>
              </ul>
              <Image
                src="/crypto-person.png"
                className="Image-fluid cripto-img"
                alt="person"
                width={641}
                height={610}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSectionEleven