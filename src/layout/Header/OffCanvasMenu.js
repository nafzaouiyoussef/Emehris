import React from "react";
import Link from "next/link";
import {
  navCompanyLinks,
  navCompanyPage,
  offcanvasMenuData,
} from "../../utils/data";

const OffCanvasMenu = () => {
  return (
    <div className="offcanvas-body">
      <ul className="nav col-12 col-md-auto justify-content-center main-menu">
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle d-flex justify-content-between"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Home
          </a>
          <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
            <div className="dropdown-grid rounded-custom width-half">
              <div className="dropdown-grid-item">
                <h6 className="drop-heading">Different Home</h6>
                {offcanvasMenuData.map((navH, i) => (
                  <span key={i + 1}>
                    <Link href={navH.href}>
                      <a
                        className="dropdown-link"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      >
                        <span className="demo-list bg-primary rounded text-white fw-bold">
                          {i + 1}
                        </span>
                        <span className="dropdown-info mb-0">
                          <span className="drop-title">{navH.title}</span>
                          <span>{navH.info}</span>
                        </span>
                      </a>
                    </Link>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </li>
        <li data-bs-dismiss="offcanvas" aria-label="Close">
          <Link href="/about-us">
            <a className="nav-link">About</a>
          </Link>
        </li>
        <li data-bs-dismiss="offcanvas" aria-label="Close">
          <Link href="/services">
            <a className="nav-link">Services</a>
          </Link>
        </li>

        <li data-bs-dismiss="offcanvas" aria-label="Close">
          <Link href="/pricing">
            <a className="nav-link">Pricing</a>
          </Link>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle d-flex justify-content-between"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Company
          </a>
          <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
            <div className="dropdown-grid rounded-custom width-full">
              <div className="dropdown-grid-item">
                <h6 className="drop-heading">Useful Links</h6>
                {navCompanyLinks.map((navLink, i) => (
                  <span key={i + 1}>
                    <Link href={navLink.href}>
                      <a
                        className="dropdown-link px-0"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      >
                        <span className="me-2">{navLink.icon}</span>
                        <span className="drop-title mb-0">
                          {navLink.title}{" "}
                        </span>
                      </a>
                    </Link>
                  </span>
                ))}
              </div>
              <div className="dropdown-grid-item radius-right-side bg-light">
                <h6 className="drop-heading">Utility Pages</h6>
                {navCompanyPage.map((navPage, i) => (
                  <span key={i + 1}>
                    <Link href={navPage.href}>
                      <a
                        className="dropdown-link"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      >
                        <span className="me-2">{navPage.icon}</span>
                        <span className="drop-title mb-0">
                          {navPage.title}{" "}
                        </span>
                      </a>
                    </Link>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div className="action-btns mt-4 ps-3">
        <span data-bs-dismiss="offcanvas" aria-label="Close">
          <Link href="/login">
            <a className="btn btn-outline-primary text-decoration-none me-2">
              Sign In
            </a>
          </Link>
        </span>
        <span data-bs-dismiss="offcanvas" aria-label="Close">
          <Link href="/request-demo">
            <a className="btn btn-primary">Get Started</a>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default OffCanvasMenu;
