import React from 'react';

export default function NewsLetterTwo() {
  return (
    <section className="digi-news-letter">
      <div className="container">
        <div className="bg-dark text-light rounded-custom p-4 p-md-5 p-lg-5">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="digi-newsletter">
                <div>
                  <span className="span-arrow text-pink">
                    Best Yout website
                  </span>
                  <img src="/arro-right.svg" alt="arrow" />
                </div>
                <h2>Test your Website for Free with Quiety</h2>
                <p>
                  Intrinsicly cultivate user-centric collaboration and
                  idea-sharing after value-added processes repurpose unique
                  models and global schemas.
                </p>
                <form className="mt-4">
                  <div className="position-relative digi-news-form">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Website Url"
                    />
                    <button className="digi-news-button">
                      Analysis Webiste
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="dg-news-img text-end">
                <img
                  src="/d-pie.png"
                  className="img-fluid text-end"
                  alt="pie"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
