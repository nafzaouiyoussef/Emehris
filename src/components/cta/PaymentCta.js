import Link from 'next/link'
import React from 'react'
import {FaGooglePlay,FaApple} from 'react-icons/fa'

export default function PaymentCta() {
    return (
        <section className="payment-news-letter pt-60 pb-120">
            <div className="container">
                <div className="row ptb-120 align-items-center">
                    <div className="col-lg-5">
                        <div className="mb-5 me-3 mb-lg-0">
                            <h2 className="mb-4">Get Mobile App & Make Life more Easy</h2>
                            <p>
                                Globally expedite sticky platforms whereas end-to-end vortals.
                                Energistically synergize emerging . Monotonectally incubate
                                bleeding-edge e-business Appropriately matrix quality core
                                competencies via cross-media functionalities.
                            </p>
                            <div className="payment-store-btn mt-4">
                                <ul className="list-unstyled m-0">
                                    <li className="d-inline-block me-2 mb-3 mb-md-0">
                                        <Link href='/'>
                                            <a className="d-flex align-items-center text-decoration-none rounded shadow-lg"
                                            ><FaGooglePlay className='fs-2 pe-2'/>
                                                <span className='fw-bold'>Get it on<span className="d-block fw-semi-bold">Google Play</span></span></a>
                                        </Link>
                                    </li>
                                    <li className="d-inline-block">
                                        <Link href='/'>
                                            <a className="d-flex align-items-center text-decoration-none rounded shadow-lg"
                                            ><FaApple  className='fs-2 pe-2'/>
                                                <span className='fw-bold'>
                                                    Downlad on the<span className="d-block fw-medium">App Store
                                                    </span></span></a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="p-cta-right position-relative mt-5 mt-lg-0">
                            <div className="p-cta-img text-center position-relative">
                                <img src="/p-mock.png" alt="Mockup" />
                            </div>
                            <ul className="payment-cta-shape list-unstyled">
                                <li>
                                    <img
                                        src="/ps-1.png"
                                        className="shadow-md"
                                        alt="Shape"
                                    />
                                </li>
                                <li><img src="/ps-2.png" alt="Shape" /></li>
                                <li>
                                    <img
                                        src="/ps-3.png"
                                        className="shadow-lg rounded-circle"
                                        alt="Shape"
                                    />
                                </li>
                                <li>
                                    <img src="/ps-4.png" className="rouned-circle shadow-md" alt="Shape" />
                                </li>
                                <li><img src="/ps-5.png" alt="Shape" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="text-center">
                            <h3>Start Trading on Quiety</h3>
                            <p className="">
                                Collaboratively extend state of the art products for
                                functionalized action items. Credibly orchestrate user friendly
                                resources.
                            </p>
                            <form>
                                <div className="payment-email-form d-flex position-relative">
                                    <input
                                        type="text"
                                        className="mail-input form-control shadow-none"
                                        placeholder="Enter your email"
                                    />
                                    <button className="payment-btn position-absolute end-0">
                                        Subscribe Now
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
