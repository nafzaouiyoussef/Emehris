import React from 'react';

const InsuranceSubscription = () => {
  return (
    <section className="ins-subscription-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="ins-subscription text-center rounded position-relative overflow-hidden">
              <span className="circle-shape-right"></span>
              <span className="circle-shape-left"></span>
              <span className="circle-shape-top"></span>
              <h2 className="ins-heading mb-3">
                Get your Personalized <br /> Insurance Today!
              </h2>
              <p className="lead ins-text pb-2 mb-0">
                Quiety my business conceptualize cutting-edgeultivate strategic{' '}
              </p>
              <form className="ins-sb-form d-flex align-items-center justify-content-center flex-wrap mt-4">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="bg-white rounded border-0"
                />
                <button className="ins-btn ins-primary-btn">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceSubscription;
