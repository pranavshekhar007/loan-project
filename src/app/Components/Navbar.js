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
      {/* Navbar */}
      <nav
        className={`navbar navbar-expand-lg custom-navbar fixed-top ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <div className="container">
        <Link className="navbar-brand d-flex align-items-center" href="/">
          <img
            src="/assets/rupeeloan_logo.png"
            alt="Rupee Logo"
            width={150}
            height={40}
          />
        </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-center">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" href="/">Home</Link>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                  Loan
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" href="/personal-loan">Personal Loan</Link></li>
                  <li><Link className="dropdown-item" href="/business-loan">Business Loan</Link></li>
                  <li><Link className="dropdown-item" href="/consumer-durable">Consumer Durable Loan</Link></li>
                  <li><Link className="dropdown-item" href="/bnpl">Buy Now, Pay Later</Link></li>
                  <li><Link className="dropdown-item" href="/loan-against-property">Loan Against Property</Link></li>
                  <li><Link className="dropdown-item" href="/gold-loan">Gold Loan</Link></li>
                  <li><Link className="dropdown-item" href="/supply-chain">Supply Chain Finance</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" href="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/support">Support</Link>
              </li>
            </ul>
          </div>

          <div className="d-flex">
            <Link href="/form" className="btn btn-apply">Apply Now</Link>
          </div>
        </div>
      </nav>

      {/* Offcanvas Mobile Menu */}
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="mobileMenu">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">RupeeLoan</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav flex-column">
            <li className="nav-item">
              <Link className="nav-link" href="/">Home</Link>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                Loan
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" href="/personal-loan">Personal Loan</Link></li>
                <li><Link className="dropdown-item" href="/business">Business Loan</Link></li>
                <li><Link className="dropdown-item" href="/consumer-durable">Consumer Durable Loan</Link></li>
                <li><Link className="dropdown-item" href="/bnpl">Buy Now, Pay Later</Link></li>
                <li><Link className="dropdown-item" href="/loan-against-property">Loan Against Property</Link></li>
                <li><Link className="dropdown-item" href="/gold-loan">Gold Loan</Link></li>
                <li><Link className="dropdown-item" href="/supply-chain">Supply Chain Finance</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/support">Support</Link>
            </li>
          </ul>

          <div className="d-flex flex-column mt-3">
            <Link href="/form" className="btn btn-apply">Apply Now</Link>
          </div>
        </div>
      </div>
    </>
  );
}
