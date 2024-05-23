import Link from 'next/link'
import React from 'react'


export default function PaymentCounter() {
    return (
        <section className="payment-counter payment-counter-bg ptb-120">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 order-last order-md-first">
                        <div className="card-shape position-relative">
                            <div className="card-img mt-5 mt-lg-0">
                                <img
                                    src="/cr-card.png"
                                    className="img-fluid"
                                    alt="card"
                                />
                            </div>
                            <ul className="list-unstyled m-0">
                                <li>
                                    <div className="counter-circle">
                                        <h4 className="text-danger m-0">32k</h4>
                                        <small>Daily Transaction</small>
                                    </div>
                                </li>
                                <li>
                                    <div className="counter-circle">
                                        <h4 className="text-success m-0">2.3K</h4>
                                        <small>Seller</small>
                                    </div>
                                </li>
                                <li>
                                    <div className="counter-circle">
                                        <h4 className="text-warning m-0">12b+</h4>
                                        <small>Success Payment</small>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="payment-counter-right">
                            <h2 className="text-black mb-4">The Universal Way of Payments</h2>
                            <div className="mb-3">
                                <h5 className="mb-2 h6">Debit Card</h5>
                                <p className="m-0">
                                    Energistically synergize emerging . Monotonectally incubate
                                    bleeding-edge e-business Appropriately matrix quality.
                                </p>
                            </div>
                            <div className="">
                                <h5 className="mb-2 h6">Mobile App Payment</h5>
                                <p className="m-0">
                                    Energistically synergize emerging . Monotonectally incubate
                                    bleeding-edge e-business Appropriately matrix quality.
                                </p>
                            </div>
                            <Link href="/contact-us">
                                <a className="btn-gradient-sqr mt-40"> Get Started </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
