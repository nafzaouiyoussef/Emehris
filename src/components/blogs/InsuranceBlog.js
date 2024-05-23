import React from "react";
import { FaRegCalendarAlt, FaRegUser, FaUser } from "react-icons/fa";

const InsuranceBlog = () => {
  return (
    <section className="ins-blog-section ptb-120">
      <div className="container">
        <div className="row justify-content-lg-between align-items-center justify-content-center">
          <div className="col-xl-5 col-lg-6 col-md-7">
            <div className="ins-title text-center text-lg-start">
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
                <span className="subtitle fw-bold">Recent Post</span>
                <span className="ms-1">
                  <svg
                    width="103"
                    height="13"
                    viewBox="0 0 103 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.696533 6.60583L93.3054 6.60584"
                      stroke="#0EE7C5"
                      strokeWidth="1.49369"
                    />
                    <path
                      d="M102.266 6.60263L93.3036 11.7769L93.3036 1.42833L102.266 6.60263Z"
                      fill="#0EE7C5"
                    />
                  </svg>
                </span>
              </div>
              <h2 className="ins-heading">
                News and insights from our <mark>Experts</mark>
              </h2>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 d-none d-lg-block">
            <div className="text-end">
              <a href="blog.html" className="ins-btn ins-secondary-btn">
                Explore More
                <span className="ms-1">
                  <svg
                    width="22"
                    height="9"
                    viewBox="0 0 22 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.776428 4.55017L15.7133 4.55017"
                      stroke="white"
                      strokeWidth="1.49369"
                    />
                    <path
                      d="M21.6888 4.54934L15.7141 7.99887L15.7141 1.09981L21.6888 4.54934Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="row g-4 justify-content-center">
            <div className="col-xl-4 col-md-6">
              <article className="ins-blog-card rounded overflow-hidden bg-white">
                <div className="ins-feature-img overflow-hidden rounded-top">
                  <a href="blog-single.html">
                    <img
                      src="/insurance/blog-1.jpg"
                      alt="not found"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="ins-blog-content">
                  <a href="blog.html" className="ins-btn-meta">
                    Insurance
                  </a>
                  <a href="blog-single.html" className="ins-blog-title">
                    <h4 className="ins-heading mt-3 mb-20">
                      When is the right moment to the acquir life insurance.
                    </h4>
                  </a>
                  <div className="ins-blog-meta mb-4">
                    <span className="me-4">
                      {/* <i className="fa-solid fa-calendar-days"></i> */}
                      <FaRegCalendarAlt className="mb-1" />
                      October 29,2022
                    </span>
                    <span>
                      {/* <i className="fa-regular fa-user"></i> */}
                      <FaRegUser className="mb-1" />
                      Angelo Perara
                    </span>
                  </div>
                  <a
                    href="blog-single.html"
                    className="ins-service-explore fs-md fw-bold"
                  >
                    Explore More
                    <span className="ms-1">
                      <svg
                        width="53"
                        height="9"
                        viewBox="0 0 53 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.104523 4.57166L48.8984 4.57166"
                          stroke="#003478"
                          strokeWidth="0.995794"
                        />
                        <path
                          d="M52.8787 4.57082L46.904 8.02035L46.904 1.12129L52.8787 4.57082Z"
                          fill="#003478"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </article>
            </div>
            <div className="col-xl-4 col-md-6">
              <article className="ins-blog-card rounded overflow-hidden bg-white">
                <div className="ins-feature-img overflow-hidden rounded-top">
                  <a href="blog-single.html">
                    <img
                      src="/insurance/blog-2.jpg"
                      alt="not found"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="ins-blog-content">
                  <a href="blog.html" className="ins-btn-meta">
                    Insurance
                  </a>
                  <a href="blog-single.html" className="ins-blog-title">
                    <h4 className="ins-heading mt-3 mb-20">
                      Insurance covers risk of fire absence of fire insurance.
                    </h4>
                  </a>
                  <div className="ins-blog-meta mb-4">
                    <span className="me-4">
                      {/* <i className="fa-solid fa-calendar-days"></i> */}
                      <FaRegCalendarAlt className="mb-1" />
                      October 29,2022
                    </span>
                    <span>
                      {/* <i className="fa-regular fa-user"></i> */}
                      <FaRegUser className="mb-1" />
                      Angelo Perara
                    </span>
                  </div>
                  <a
                    href="blog-single.html"
                    className="ins-service-explore fs-md fw-bold"
                  >
                    Explore More
                    <span className="ms-1">
                      <svg
                        width="53"
                        height="9"
                        viewBox="0 0 53 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.104523 4.57166L48.8984 4.57166"
                          stroke="#003478"
                          strokeWidth="0.995794"
                        />
                        <path
                          d="M52.8787 4.57082L46.904 8.02035L46.904 1.12129L52.8787 4.57082Z"
                          fill="#003478"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </article>
            </div>
            <div className="col-xl-4 col-md-6">
              <article className="ins-blog-card rounded overflow-hidden bg-white">
                <div className="ins-feature-img overflow-hidden rounded-top">
                  <a href="blog-single.html">
                    <img
                      src="/insurance/blog-3.jpg"
                      alt="not found"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="ins-blog-content">
                  <a href="blog.html" className="ins-btn-meta">
                    Insurance
                  </a>
                  <a href="blog-single.html" className="ins-blog-title">
                    <h4 className="ins-heading mt-3 mb-20">
                      When is the right moment to the acquir life insurance.
                    </h4>
                  </a>
                  <div className="ins-blog-meta mb-4">
                    <span className="me-4">
                      {/* <i className="fa-solid fa-calendar-days"></i> */}
                      <FaRegCalendarAlt className="mb-1" />
                      October 29,2022
                    </span>
                    <span>
                      {/* <i className="fa-regular fa-user"></i> */}
                      <FaRegUser className="mb-1" />
                      Angelo Perara
                    </span>
                  </div>
                  <a
                    href="blog-single.html"
                    className="ins-service-explore fs-md fw-bold"
                  >
                    Explore More
                    <span className="ms-1">
                      <svg
                        width="53"
                        height="9"
                        viewBox="0 0 53 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.104523 4.57166L48.8984 4.57166"
                          stroke="#003478"
                          strokeWidth="0.995794"
                        />
                        <path
                          d="M52.8787 4.57082L46.904 8.02035L46.904 1.12129L52.8787 4.57082Z"
                          fill="#003478"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </article>
            </div>
          </div>
          <div className="text-center mt-5 d-lg-none">
            <a href="blog.html" className="ins-btn ins-secondary-btn">
              Explore More
              <span className="ms-1">
                <svg
                  width="22"
                  height="9"
                  viewBox="0 0 22 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.776428 4.55017L15.7133 4.55017"
                    stroke="white"
                    strokeWidth="1.49369"
                  />
                  <path
                    d="M21.6888 4.54934L15.7141 7.99887L15.7141 1.09981L21.6888 4.54934Z"
                    fill="white"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceBlog;
