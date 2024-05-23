import Link from 'next/link'
import React from 'react'
import {FaListUl,FaCloud,FaDatabase,FaUserLock,FaServer,FaShieldAlt, FaAngleRight} from 'react-icons/fa'

export const CyberService = () => {
  return (
    <section className="cyber-features pt-100 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="section-heading text-center mb-5">
              <h5 className="h6 text-primary">Service</h5>
              <h2>High Quality Trusted Cyber Security solution</h2>
              <p>
                Uniquely promote adaptive quality vectors rather than
                stand-alone e-markets. pontificate alternative architectures
                whereas iterate
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="cyber-single-service bg-white rounded-custom mb-30">
              <div className="feature-icon pb-5 rounded bg-primary-soft text-primary mb-4">
               <i> <FaListUl/></i>
              </div>
              <div className="cyber feature-info-wrap">
                <h3 className="h5">Disaster Planning</h3>
                <p>
                  Randomised words which don't look even passage of Lorem Ipsum.
                  You need to be Lorem Ipsum randomised even .
                </p>
              </div>
              <Link
                href="/single-service"
              >
                <a  className="link-with-icon text-decoration-none"> Explore More <i><FaAngleRight/></i></a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cyber-single-service bg-white rounded-custom mb-30">
              <div className="feature-icon pb-5 rounded bg-primary-soft text-primary mb-4">
                <i><FaCloud/></i>
              </div>
              <div className="cyber feature-info-wrap">
                <h3 className="h5">Cloud Security</h3>
                <p>
                  Randomised words which don't look even passage of Lorem Ipsum.
                  You need to be Lorem Ipsum randomised even .
                </p>
              </div>
              <Link
                href="/single-service"
              >
               <a  className="link-with-icon text-decoration-none"> Explore More <i><FaAngleRight/></i></a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cyber-single-service bg-white rounded-custom mb-30">
              <div className="feature-icon pb-5 rounded bg-primary-soft text-primary mb-4">
                <i><FaDatabase/></i>
              </div>
              <div className="cyber feature-info-wrap">
                <h3 className="h5">Database Security</h3>
                <p>
                  Randomised words which don't look even passage of Lorem Ipsum.
                  You need to be Lorem Ipsum randomised even .
                </p>
              </div>
              <Link
                href="/single-service"
              >
                <a  className="link-with-icon text-decoration-none"> Explore More <i><FaAngleRight/></i></a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cyber-single-service bg-white rounded-custom mb-30">
              <div className="feature-icon pb-5 rounded bg-primary-soft text-primary mb-4">
                <i><FaServer/></i>
              </div>
              <div className="cyber feature-info-wrap">
                <h3 className="h5">Locker Security</h3>
                <p>
                  Randomised words which don't look even passage of Lorem Ipsum.
                  You need to be Lorem Ipsum randomised even .
                </p>
              </div>
              <Link
                href="/single-service"
              >
                <a  className="link-with-icon text-decoration-none"> Explore More <i><FaAngleRight/></i></a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cyber-single-service bg-white rounded-custom mb-30">
              <div className="feature-icon pb-5 rounded bg-primary-soft text-primary mb-4">
                <i><FaUserLock/></i>
              </div>
              <div className="cyber feature-info-wrap">
                <h3 className="h5">Data Security</h3>
                <p>
                  Randomised words which don't look even passage of Lorem Ipsum.
                  You need to be Lorem Ipsum randomised even .
                </p>
              </div>
              <Link
                href="/single-service"
              >
                <a  className="link-with-icon text-decoration-none"> Explore More <i><FaAngleRight/></i></a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cyber-single-service bg-white rounded-custom mb-30">
              <div className="feature-icon pb-5 rounded bg-primary-soft text-primary mb-4">
                <i><FaShieldAlt/></i>
              </div>
              <div className="cyber feature-info-wrap">
                <h3 className="h5">Web Security</h3>
                <p>
                  Randomised words which don't look even passage of Lorem Ipsum.
                  You need to be Lorem Ipsum randomised even .
                </p>
              </div>
              <Link
                href="/single-service"
              >
               <a  className="link-with-icon text-decoration-none"> Explore More <i><FaAngleRight/></i></a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
