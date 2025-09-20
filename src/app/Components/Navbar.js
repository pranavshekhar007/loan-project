"use client";
import { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { LoggedDataContext } from "../context/Context";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { loggedUserData } = useContext(LoggedDataContext);

  const pathname = usePathname();

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 50) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const loanPaths = [
    "/personal-loan",
    "/business-loan",
    "/loan-against-property",
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <>
      {/* <!-- Header --> */}
      <nav className={`navbar navbar-expand-lg ${scrolled ? "scrolled" : ""}`}>
        {/* <nav className={`navbar navbar-expand-lg  `}> */}
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="/">
        <img src="/assets/rupeeloan_logo.png" alt="logo" />
      </a> */}
          <a className="navbar-brand" href="/">
            <img src="/assets/logo.jpeg" alt="Logo" />
            <span className="nav-brand-text">Rupee Loan</span>
          </a>
          <button
            className="navbar-toggler mobile-menu-button"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            style={{ width: "auto" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse desktop-menu"
            id="mainNavbar"
          >
            <ul
              className="navbar-nav ms-auto mb-2 mb-lg-0"
              style={{ alignItems: "center" }}
            >
              {/* <!-- Loans Mega Dropdown --> */}
              <li className="nav-item dropdown main-list-item">
                <a
                  className={`nav-link dropdown-toggle ${
                    loanPaths.includes(pathname) ? "nav-link-active" : ""
                  }`}
                  href="#"
                  id="loanDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Loans
                  <i className="bi bi-chevron-down ms-1"></i>
                </a>
                <div
                  className="dropdown-menu p-3"
                  aria-labelledby="loanDropdown"
                >
                  <div className="row g-3">
                    <div className="col-lg-4 col-md-6">
                      <div className="mega-item">
                        <Link href="/personal-loan">
                          <div className="row">
                            <div className="col-2">
                              <i className="bi bi-cash-coin"></i>
                            </div>
                            <div className="col-10">
                              <h3 className="text-dark"> Personal Loan</h3>
                              <p>Get up to ₹10L in 10 mins</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="mega-item">
                        <Link href="/business-loan">
                          <div className="row">
                            <div className="col-2">
                              <i className="bi bi-briefcase"></i>
                            </div>
                            <div className="col-10">
                              <h3 className="text-dark"> Business Loan</h3>
                              <p>Get up to ₹5L with 60M tenure</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="mega-item">
                        <Link href="/">
                          <div className="row">
                            <div className="col-2">
                              <i className="bi bi-house-door"></i>
                            </div>
                            <div className="col-10">
                              <h3 className="text-dark"> Home Loan</h3>
                              <p>Interest starts from 7.75%* p.a.</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="mega-item">
                        <Link href="/">
                          <div className="row">
                            <div className="col-2">
                              <i className="bi bi-credit-card"></i>
                            </div>
                            <div className="col-10">
                              <h3 className="text-dark"> Credit Card</h3>
                              <p>Lifetime FREE cards with up to ₹5L limit</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="mega-item">
                        <Link href="/loan-against-property">
                          <div className="row">
                            <div className="col-2">
                              <i className="bi bi-building"></i>
                            </div>
                            <div className="col-10">
                              <h3 className="text-dark">
                                {" "}
                                Loan Against Property
                              </h3>
                              <p>Up to ₹75L without ITR</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* <!-- Other Menus --> */}
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    pathname === "/save" ? "nav-link-active" : ""
                  }`}
                  href="#"
                >
                  Save{" "}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    pathname === "/insure" ? "nav-link-active" : ""
                  }`}
                  href="#"
                >
                  Insure{" "}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    pathname === "/track" ? "nav-link-active" : ""
                  }`}
                  href="#"
                >
                  Track{" "}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    pathname === "/pay" ? "nav-link-active" : ""
                  }`}
                  href="#"
                >
                  Pay{" "}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    pathname === "/calculators" ? "nav-link-active" : ""
                  }`}
                  href="/calculator"
                >
                  Calculator{" "}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    pathname === "/support" ? "nav-link-active" : ""
                  }`}
                  href="/support"
                >
                  Contact Us
                </a>
              </li>

              {loggedUserData ? (
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="/profile">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/1144/1144760.png"
                      alt="Profile"
                      style={{ height: "30px", width: "30px" }}
                    ></img>
                  </a>
                </li>
              ) : (
                <li className="nav-item ">
                  {" "}
                  <a className="nav-link sign-in-btn" href="/sign-up">
                    {" "}
                    Sign In
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* <!-- Offcanvas Menu for Mobile --> */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
            Menu
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            {/* <!-- Loans Dropdown --> */}
            <li className="nav-item">
              <a
                className={`nav-link d-flex flex-row justify-content-between align-items-center  ${
                  loanPaths.includes(pathname) ? "nav-link-active" : ""
                }`}
                href="#loanMenu"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="loanMenu"
                 onClick={handleToggle}
              >
                Loans
                <i
        className={`bi bi-chevron-down transition-all duration-300 ${
          isOpen ? "rotate-icon" : ""
        }`}
      ></i>
              </a>
              <div className="collapse" id="loanMenu">
                <ul className="list-unstyled offcanvas-list ps-3">
                  <li>
                    <a href="/personal-loan">
                      <span>
                        <i className="bi bi-cash-coin"></i>
                      </span>{" "}
                      Personal Loan
                    </a>
                  </li>
                  <li>
                    <a href="/business-loan">
                      {" "}
                      <span>
                        <i className="bi bi-briefcase"></i>
                      </span>{" "}
                      Business Loan
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <i className="bi bi-house-door"></i>
                      </span>
                      Home Loan
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <span>
                        <i className="bi bi-credit-card"></i>
                      </span>{" "}
                      Credit Card
                    </a>
                  </li>
                  <li>
                    <a href="/loan-against-property">
                      {" "}
                      <span>
                        {" "}
                        <i className="bi bi-building"></i>
                      </span>{" "}
                      Loan Against Property
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            {/* <!-- Other Menus --> */}
            <li className="nav-item">
              <a className="nav-link" href="#">
                Save
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Insure
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Track
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pay
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Calculators
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  pathname === "/support" ? "nav-link-active" : ""
                }`}
                href="/support"
              >
                Contact Us
              </a>
            </li>
            {loggedUserData ? (
              <li className="nav-item">
                {" "}
                <a
                  className={`nav-link  ${
                    pathname === "/profile" ? "nav-link-active" : ""
                  }`}
                  href="/profile"
                >
                  Profile
                </a>
              </li>
            ) : (
              <li className="nav-item">
                <a
                  className={`nav-link  ${
                    pathname === "/sign-up" ? "nav-link-active" : ""
                  }`}
                  href="/sign-up"
                >
                  {" "}
                  Sign In{" "}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
