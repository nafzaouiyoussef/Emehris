import React from 'react';

export default function EventCounter() {
  return (
    <section
      className="ev-counter pt-100"
      style={{
        background: "url('/ev-counter-bg.jpg')no-repeat center center/ cover",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="text-center">
              <span className="fw-bold text-white">Conference Countdown</span>
              <h2 className="text-white mb-4">
                Never Miss Another Speaker Announcement
              </h2>
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="ev-count-down">
                    <div className="ev-cd-box">
                      <h4 className="h3 mb-0">36</h4>
                      <span className="small">Day</span>
                    </div>
                    <div className="ev-cd-box">
                      <h4 className="h3 mb-0">19</h4>
                      <span className="small">Hours</span>
                    </div>
                    <div className="ev-cd-box">
                      <h4 className="h3 mb-0">48</h4>
                      <span className="small">Minutes</span>
                    </div>
                    <div className="ev-cd-box">
                      <h4 className="h3 mb-0">16</h4>
                      <span className="small">Seconds</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
