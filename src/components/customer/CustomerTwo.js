import Image from "next/image";
import React from "react";

const CustomerTwo = () => {
  return (
    <section className="brand-logo ptb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-10">
            <div className="section-heading text-center">
              <h2>Over 500+ Companies Trusted Us</h2>
              <p>Over 500+ Companies Trusted Us</p>
            </div>
          </div>
        </div>
        <div className="row">
          <ul className="brand-logo-grid list-unstyled">
            <li>
              <Image
                src="/clients/1.png"
                width={144}
                height={62}
                alt="brand logo"
              />
            </li>
            <li>
              <Image
                src="/clients/2.png"
                width={53}
                height={62}
                alt="brand logo"
              />
            </li>
            <li>
              <Image
                src="/clients/3.png"
                width={69}
                height={62}
                alt="brand logo"
              />
            </li>
            <li>
              <Image
                src="/clients/4.png"
                width={135}
                height={62}
                alt="brand logo"
              />
            </li>
            <li>
              <Image
                src="/clients/5.png"
                width={65}
                height={62}
                alt="brand logo"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CustomerTwo;
