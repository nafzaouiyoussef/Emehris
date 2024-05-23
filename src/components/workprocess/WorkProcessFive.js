import React from 'react'

export default function WorkProcessFive() {
    return (
        <section
            className="ptb-60"
            style={{ background: "url('/payment-step.jpg')no-repeat center center / cover" }}
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="text-center mb-5">
                            <h2 className="text-white mb-3">Just Few Steps to Start</h2>
                            <p className="text-off-white">
                                Access your account via your mobile phone. View balance, transfer
                                funds, view transactions wherever you are Login with fingerprint
                                or Face ID..
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row mb--150">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="single-payment-step p-4 mb-4 mb-lg-0">
                            <img src="/pi-1.png" alt="icon" />
                            <h6 className="mt-3">Register for Free</h6>
                            <p className="mb-0">Simply sign up online for free and verify your identity.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="single-payment-step p-4 mb-4 mb-lg-0">
                            <img src="/pi-2.png" alt="icon" />
                            <h6 className="mt-3">Set up your Transfer</h6>
                            <p className="mb-0">Add a recipient's details and choose which currency ...</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="single-payment-step p-4 mb-4 mb-lg-0">
                            <img src="/pi-3.png" alt="icon" />
                            <h6 className="mt-3">Make your Payment</h6>
                            <p className="mb-0">Send us your funds with a bank transfer and we'll notify..</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="single-payment-step p-4 mb-4 mb-lg-0">
                            <img src="/pi-4.png" alt="icon" />
                            <h6 className="mt-3">Enjoy your Service</h6>
                            <p className="mb-0">We inform you when the money has been sent and can also ...</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
