"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
     {/* <!-- Header --> */}
  <nav className={`navbar navbar-expand-lg ${scrolled ? "scrolled" : ""}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img src="assets/rupeeloan_logo.png" alt="logo" />
      </a>
      <button className="navbar-toggler mobile-menu-button" type="button" data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse desktop-menu" id="mainNavbar">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          {/* <!-- Loans Mega Dropdown --> */}
          <li className="nav-item dropdown main-list-item">
            <a className="nav-link dropdown-toggle" href="#" id="loanDropdown" role="button" data-bs-toggle="dropdown">
              Loans
              <i className="bi bi-chevron-down ms-1"></i>
            </a>
            <div className="dropdown-menu p-3" aria-labelledby="loanDropdown">
              <div className="row g-3">
                <div className="col-lg-4 col-md-6">
                  <div className="mega-item">
                    <div className="row">
                      <div className="col-2">
                        <i className="bi bi-cash-coin"></i>
                      </div>
                      <div className="col-10">
                        <h3> Personal Loan</h3>
                        <p>Get up to ₹10L in 10 mins</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="mega-item">
                    <div className="row">
                      <div className="col-2">
                        <i className="bi bi-briefcase"></i>
                      </div>
                      <div className="col-10">
                        <h3> Business Loan</h3>
                        <p>Get up to ₹5L with 60M tenure</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="mega-item">
                    <div className="row">
                      <div className="col-2">
                        <i className="bi bi-house-door"></i>
                      </div>
                      <div className="col-10">
                        <h3> Home Loan</h3>
                        <p>Interest starts from 7.75%* p.a.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="mega-item">
                    <div className="row">
                      <div className="col-2">
                        <i className="bi bi-credit-card"></i>
                      </div>
                      <div className="col-10">
                        <h3> Credit Card</h3>
                        <p>Lifetime FREE cards with up to ₹5L limit</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="mega-item">
                    <div className="row">
                      <div className="col-2">
                        <i className="bi bi-building"></i>
                      </div>
                      <div className="col-10">
                        <h3> Loan Against Property</h3>
                        <p>Up to ₹75L without ITR</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/* <!-- Other Menus --> */}
          <li className="nav-item"><a className="nav-link" href="#">Save </a></li>
          <li className="nav-item"><a className="nav-link" href="#">Insure </a></li>
          <li className="nav-item"><a className="nav-link" href="#">Track </a></li>
          <li className="nav-item"><a className="nav-link" href="#">Pay </a></li>
          <li className="nav-item"><a className="nav-link" href="#">Calculators </a></li>
          <li className="nav-item"><a className="nav-link" href="#">Contact Us</a></li>
        </ul>
      </div>
    </div>
  </nav>

  {/* <!-- Offcanvas Menu for Mobile --> */}
  <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div className="offcanvas-body">
      <ul className="navbar-nav">
        {/* <!-- Loans Dropdown --> */}
        <li className="nav-item">
          <a className="nav-link d-flex justify-content-between align-items-center" href="#loanMenu"
            data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="loanMenu">
            Loans
            <i className="bi bi-chevron-down"></i>
          </a>
          <div className="collapse" id="loanMenu">
            <ul className="list-unstyled offcanvas-list ps-3">
              <li><a href="#"><span><i className="bi bi-cash-coin"></i></span> Personal Loan</a></li>
              <li><a href="#"> <span><i className="bi bi-briefcase"></i></span> Business Loan</a></li>
              <li><a href="#"><span><i className="bi bi-house-door"></i></span>Home Loan</a></li>
              <li><a href="#"> <span><i className="bi bi-credit-card"></i></span> Credit Card</a></li>
              <li><a href="#"> <span> <i className="bi bi-building"></i></span> Loan Against Property</a></li>
            </ul>
          </div>
        </li>

        {/* <!-- Other Menus --> */}
        <li className="nav-item"><a className="nav-link" href="#">Save</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Insure</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Track</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Pay</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Calculators</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Contact Us</a></li>
      </ul>
    </div>
  </div>
     
    </>
  );
}
