import React from 'react'
import Link from 'next/link'

export default function GameReview() {
    return (
        <section className="sh-feedback pt-120 game-bg-dark">
            <div className="container position-relative">
                <div className="row justify-content-between">
                    <div className="col-lg-4 col-md-7">
                        <div className="section-title mb-4 mb-lg-0">
                            <h3 className="text-white">Customer Feedback! Say About Us?</h3>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-4">
                        <div className="text-md-end">
                            <Link href="/about-us">
                                <a className="game-btn-mdm text-white">
                                    More Feedback
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 g-4 justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="sh-feedback-wrapper mb-5 mb-lg-0">
                            <img
                                src="/client-34.png"
                                alt="client"
                                className="clients-thumb img-fluid rounded-circle"
                            />
                            <span className="quote-icon float-end mt-3">
                                <svg
                                    width="36"
                                    height="27"
                                    viewBox="0 0 36 27"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        opacity="0.4"
                                        d="M11.25 4.5L13.5 0H9C4.0275 0 0 6.2775 0 11.25V27H15.75V11.25H6.75C6.75 4.5 11.25 4.5 11.25 4.5ZM27 11.25C27 4.5 31.5 4.5 31.5 4.5L33.75 0H29.25C24.2775 0 20.25 6.2775 20.25 11.25V27H36V11.25H27Z"
                                        fill="#DBDBDB"
                                    />
                                </svg>
                            </span>
                            <p className="mt-3 text-off-white">
                                "Humouror randomised words which look even slightly believable. If
                                Lorem Ipsum Lorem Ipsum, you need to be sure there isn't anything
                                embarrassing."
                            </p>
                            <hr className="spacer" />
                            <div
                                className="sh-feedback-bottom d-flex align-items-center justify-content-between"
                            >
                                <div className="sh-feedback-client">
                                    <h6 className="mb-0 text-white">Darrell Steward</h6>
                                    <small className="text-off-white">Co Founder</small>
                                </div>
                                <div className="sh-feedback-rating">
                                    <img
                                        src="/three-star.svg"
                                        alt="rating"
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="sh-feedback-wrapper mb-5 mb-lg-0">
                            <img
                                src="/client-2.png"
                                alt="client"
                                className="clients-thumb img-fluid rounded-circle"
                            />
                            <span className="quote-icon float-end mt-3">
                                <svg
                                    width="36"
                                    height="27"
                                    viewBox="0 0 36 27"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        opacity="0.4"
                                        d="M11.25 4.5L13.5 0H9C4.0275 0 0 6.2775 0 11.25V27H15.75V11.25H6.75C6.75 4.5 11.25 4.5 11.25 4.5ZM27 11.25C27 4.5 31.5 4.5 31.5 4.5L33.75 0H29.25C24.2775 0 20.25 6.2775 20.25 11.25V27H36V11.25H27Z"
                                        fill="#DBDBDB"
                                    />
                                </svg>
                            </span>
                            <p className="mt-3 text-off-white">
                                "Humouror randomised words which look even slightly believable. If
                                Lorem Ipsum Lorem Ipsum, you need to be sure there isn't anything
                                embarrassing."
                            </p>
                            <hr className="spacer" />
                            <div
                                className="sh-feedback-bottom d-flex align-items-center justify-content-between"
                            >
                                <div className="sh-feedback-client">
                                    <h6 className="mb-0 text-white">Darrell Steward</h6>
                                    <small className="text-off-white">Co Founder</small>
                                </div>
                                <div className="sh-feedback-rating">
                                    <img
                                        src="/five-star.svg"
                                        alt="rating"
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="sh-feedback-wrapper">
                            <img
                                src="/client-3.png"
                                alt="client"
                                className="clients-thumb img-fluid rounded-circle"
                            />
                            <span className="quote-icon float-end mt-3">
                                <svg
                                    width="36"
                                    height="27"
                                    viewBox="0 0 36 27"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        opacity="0.4"
                                        d="M11.25 4.5L13.5 0H9C4.0275 0 0 6.2775 0 11.25V27H15.75V11.25H6.75C6.75 4.5 11.25 4.5 11.25 4.5ZM27 11.25C27 4.5 31.5 4.5 31.5 4.5L33.75 0H29.25C24.2775 0 20.25 6.2775 20.25 11.25V27H36V11.25H27Z"
                                        fill="#DBDBDB"
                                    />
                                </svg>
                            </span>
                            <p className="mt-3 text-off-white">
                                "Humouror randomised words which look even slightly believable. If
                                Lorem Ipsum Lorem Ipsum, you need to be sure there isn't anything
                                embarrassing."
                            </p>
                            <hr className="spacer" />
                            <div
                                className="sh-feedback-bottom d-flex align-items-center justify-content-between"
                            >
                                <div className="sh-feedback-client">
                                    <h6 className="mb-0 text-white">Darrell Steward</h6>
                                    <small className="text-off-white">Co Founder</small>
                                </div>
                                <div className="sh-feedback-rating">
                                    <img
                                        src="/two-star.svg"
                                        alt="rating"
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="position-relative pt-80">
                    <div
                        className="game-cta-bg rounded-top px-4 px-md-0 ps-md-5 pt-80"
                        style={{
                            background: "url(/Minecraft.png)",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        <div className="row">
                            <div className="col-lg-5 col-md-8">
                                <div className="game-cta-content">
                                    <h3 className="text-white mb-3">
                                        Discover the Best Minecraft Multi-Player Servers.
                                    </h3>
                                    <p className="text-off-white">
                                        Globally foster interoperable infomediaries before turnkey
                                        content. Holisticly scale client-centric.
                                    </p>
                                    <Link href="/contact-us">
                                        <a className="game-btn-mdm mt-4 text-white">Purchase Now</a>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="game-img text-lg-end mt-5 mt-lg-0">
                                    <img
                                        src="/minecrapt.png"
                                        className="text-end img-fluid"
                                        alt="game"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/review.png" className='sh-feedback-shape z-5' alt="shape" />
            </div>
        </section>
    )
}























































