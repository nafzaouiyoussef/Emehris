import React from "react";
import Link from "next/link";

export default function GameFooter() {
  return <footer className="game-footer game-footer-bg">
    <div className="container">
      <div className="row ptb-120">
        <div className="col-lg-6 col-md-6">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="game-footer-nav mb-4">
                <h5 className="text-white position-relative mb-3">Others  Services</h5>
                <ul className="list-unstyled">
                  <li className="py-1">
                    <Link href='/'>
                      <a className="text-decoration-none">Wordpress Hosting</a>
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link href='/'>
                      <a className="text-decoration-none">Shared Cloud Hosting</a>
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link href='/' >
                      <a className="text-decoration-none">VPS Cloud Hosting</a>
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link href='/'>
                      <a className="text-decoration-none">Dedicated CPU Servers</a>
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link href='/'>
                      <a className="text-decoration-none">Domains Search</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="game-footer-nav mb-4">
                <h5 className="text-white position-relative mb-3">Game Servers</h5>
                <ul className="list-unstyled">
                  <li className="py-1">
                    <Link href='/'>
                      <a className="text-decoration-none">Game Servers</a>
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link href='/'>
                      <a className="text-decoration-none">Battlefield 4 Servers</a>
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link href='/' >
                      <a className="text-decoration-none">Minecraft Servers</a>
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link href='/' >
                      <a className="text-decoration-none">DayZ Servers</a>
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link href='/'>
                      <a className="text-decoration-none"> Battlefield 3 Hosting</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="game-footer-nav mb-4">
                <h5 className="text-white position-relative mb-3">Others  Services</h5>
                <ul className="list-unstyled">
                  <li className="py-1">
                    <Link href='/'>
                      <a className="text-decoration-none">Wordpress Hosting</a>
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link href='/'>
                      <a className="text-decoration-none">Shared Cloud Hosting</a>
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link href='/'>
                      <a className="text-decoration-none">VPS Cloud Hosting</a>
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link href='/'>
                      <a className="text-decoration-none">Dedicated CPU Servers</a>
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link href='/'>
                      <a className="text-decoration-none">Domains Search</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="game-footer-nav mb-4">
                <h5 className="text-white position-relative mb-3">Legal Information</h5>
                <ul className="list-unstyled">
                  <li className="py-1">
                    <Link href='/'>
                      <a className="text-decoration-none">Nominet Terms</a>
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link href='/'>
                      <a className="text-decoration-none">  UK Service Level Commitment</a>
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link href='/' >
                      <a className="text-decoration-none">Complaints Procedure</a>
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link href='/'>
                      <a className="text-decoration-none">WooCommerce Tutorials</a>
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link href='/'>
                      <a className="text-decoration-none">Prestashop Tutorials</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="game-footer-right">
            <div className="game-footer-newsletter mb-5">
              <h3 className="text-white">Sign Up For Newsletter</h3>
              <p className="m-0 py-3">Stay up to date with our latest news and products.</p>
              <form action="#">
                <div className="position-relative g-news-letter">
                  <input type="text" className="form-control shadow-none" placeholder="Type your email" />
                  <button>Subscribe</button>
                </div>
              </form>
            </div>
            <div className="game-award mb-4">
              <h5 className="text-white mb-4">Hostim Best Awards</h5>
              <ul className="list-unstyled d-flex">
                <li className="me-4"><img src="/award-1.png" className="img-fluid" alt="award" /></li>
                <li className="me-4"> <img src="/award-2.png" className="img-fluid" alt="award" /></li>
                <li><img src="/award-3.png" className="img-fluid" alt="award" /></li>
              </ul>
            </div>
            <div className="game-payment">
              <h5 className="text-white mb-4">We Accepted </h5>
              <img src="/payment.png" className="img-fluid" alt="payment" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-black">
      <div className="container">
        <div className="row justify-content-between py-3">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="c-left mb-4 mb-md-0">
              <p className="text-white m-0">Copyright 2022 Themestags. All Rights reserved</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="c-right text-md-end">
              <Link href='/' >
                <a className="text-decoration-none text-white pe-4">Privacy Policy</a>
              </Link>
              <Link href='/'>
                <a className="text-decoration-none text-white">Terms & Conditons</a></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>;
}




