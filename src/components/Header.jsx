import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import logoen from "../assets/images/logos-en.svg";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isGlobalOpen, setIsGlobalOpen] = useState(false);

  const activeLogo = i18n.language === "ar" ? logo : logoen;

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  const handleChangeLanguage = (lang) => i18n.changeLanguage(lang);

  const toggleNav = () => setIsNavOpen((prev) => !prev);
  const toggleServices = () => setIsServicesOpen((prev) => !prev);
  const toggleGlobal = () => setIsGlobalOpen((prev) => !prev);

  return (
    <>
      {/* ======================== MOBILE HEADER ======================== */}
      <div className="d-block d-md-none">
        {/* Global bar */}
        <div
          style={{
            backgroundColor: "#0E5E52",
            color: "white",
            padding: "0.25rem 0"   // equivalent to py-1
          }}
        >
          <div className="container d-flex justify-content-start align-items-center gap-2">
            <i className="bi bi-globe ms-2"></i>

            <div className="dropdown">
              <span
                className="dropdown-toggle"
                role="button"
                style={{ cursor: "pointer" }}
                onClick={toggleGlobal}
                aria-expanded={isGlobalOpen}
              >
                {t("global")}
                <i
                  className={`bi ${isServicesOpen ? "bi-chevron-up" : "bi-chevron-down"
                    } ms-2`}
                ></i>
              </span>
              <ul className={`dropdown-menu ${isGlobalOpen ? "show" : ""}`}>
                <li>
                  <a className="dropdown-item" href="https://nuage-digital.com/">
                    United States
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="https://nuage-digital.sa/">
                    Saudi
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile navbar */}
        <nav className="navbar navbar-expand-lg bg-light py-3">
          <div className="container d-flex justify-content-between">
<Link
  className="navbar-brand text-dark"
  to="/"
  id="brand-logo-link"
  onClick={(e) => {
    e.preventDefault(); // stop the router default behavior
    window.location.href = "/"; // full reload
  }}
>
  <img src={activeLogo} alt="Brand Logo" height="35" />
</Link>


            {/* Toggler */}
            <button
              className="navbar-toggler"
              type="button"
              aria-expanded={isNavOpen}
              aria-label={t("toggle_navigation")}
              onClick={toggleNav}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Collapsed nav content */}
            <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}>
              <ul className="navbar-nav text-center w-100">

                 {/* Home */}
                <li className="nav-item mb-2">
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-warning fw-bold px-3 rounded-pill"
                  >
                    {t("Home")}
                  </a>
                </li>

                {/* Login */}
                <li className="nav-item mb-2">
                  <a
                    href="https://pulse.nuage-digital.com/en/sign-in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-warning fw-bold px-3 rounded-pill"
                  >
                    {t("login")}
                  </a>
                </li>

                {/* Language */}
                <li className="nav-item d-flex align-items-center justify-content-center mx-2">
                  <a
                    onClick={() => handleChangeLanguage("ar")}
                    className={`fw-bold mx-1 d-flex align-items-center gap-1 text-decoration-none ${i18n.language === "ar" ? "text-warning" : "text-dark"
                      }`}
                    role="button"
                  >
                    {/* <img src="https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/sa.svg" width="18" height="18" /> */}
                    AR
                  </a>

                  <span className="fw-bold mx-1 text-muted">|</span>

                  <a
                    onClick={() => handleChangeLanguage("en")}
                    className={`fw-bold mx-1 d-flex align-items-center gap-1 text-decoration-none ${i18n.language === "en" ? "text-warning" : "text-dark"
                      }`}
                    role="button"
                  >
                    {/* <img src="https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/us.svg" width="18" height="18" /> */}
                    EN
                  </a>
                </li>

                {/* SERVICES (mobile: CLICK) */}
                <li className={`nav-item dropdown ${isServicesOpen ? "show" : ""}`}>
                  <span
                    className="nav-link dropdown-toggle fw-semibold text-dark"
                    onClick={toggleServices}
                    role="button"
                    aria-expanded={isServicesOpen}
                  >
                    {t("services")}
                    <i
                      className={`bi ${isServicesOpen ? "bi-chevron-up" : "bi-chevron-down"
                        } ms-2`}
                    ></i>
                  </span>

                  <ul className={`dropdown-menu ${isServicesOpen ? "show" : ""}`}>
                    <li><Link className="dropdown-item" to="/services/accounting">{t("Accounting & Assurance Services")}</Link></li>
                    <li><Link className="dropdown-item" to="/services/consulting">{t("Consulting Services with Advisory")}</Link></li>
                    <li><Link className="dropdown-item" to="/services/manageservices">{t("Managed Services")}</Link></li>
                    <li><Link className="dropdown-item" to="/services/technology">{t("Technology and transformation")}</Link></li>
                    <li><Link className="dropdown-item" to="/services/human">{t("Human Resource Services")}</Link></li>
                  </ul>
                </li>

                {/* Contact */}
                <li className="nav-item mt-2">
                  <Link className="nav-link text-dark" to="/contact-us">{t("contact")}</Link>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* ======================== DESKTOP HEADER ======================== */}
      <div className="d-none d-md-block">
        <div
          style={{
            backgroundColor: "#0E5E52",
            color: "white",
            padding: "0.25rem 0"   // equivalent to py-1
          }}
        >
          <div className="container d-flex justify-content-start align-items-center gap-2">
            <i className="bi bi-globe ms-2"></i>

            <div className="dropdown">
              <span className="dropdown-toggle" role="button" style={{ cursor: "pointer" }}>
                {t("global")}  <i
                  className={`bi ${isServicesOpen ? "bi-chevron-up" : "bi-chevron-down"
                    } ms-2`}
                ></i>
              </span>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="https://nuage-digital.com/">United States</a></li>
                <li><a className="dropdown-item" href="https://nuage-digital.sa/">Saudi</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Desktop navbar */}
        <nav className="navbar navbar-expand-lg bg-light py-3">
          <div className={`container d-flex align-items-center justify-content-between ${i18n.language === "ar" ? "flex-row-reverse" : ""}`}>

           {/* Logo */}
<Link
  className={`navbar-brand fw-bold text-dark ${
    i18n.language === "ar" ? "order-2" : "order-0"
  }`}
  to="/"
  onClick={(e) => {
    e.preventDefault(); // Stop React Router from blocking reload
    window.location.href = "/"; // Force full page reload
  }}
>
  <img src={activeLogo} alt="Brand Logo" height="35" />
</Link>


            <div className="collapse navbar-collapse show">
              <ul className={`navbar-nav align-items-center ${i18n.language === "ar" ? "me-auto flex-row-reverse text-end" : "ms-auto"}`}>



                <li className="nav-item mx-2">
                  <a
                    href="https://pulse.nuage-digital.com/en/sign-in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-warning fw-bold px-3 rounded-pill"
                  >
                    {t("login")}
                  </a>
                </li>

                {/* Language */}
                <li className="nav-item d-flex align-items-center mx-2">
                  <a
                    onClick={() => handleChangeLanguage("ar")}
                    className={`fw-bold mx-1 d-flex align-items-center gap-1 text-decoration-none ${i18n.language === "ar" ? "text-warning" : "text-dark"}`}
                    role="button"
                  >
                    {/* <img src="https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/sa.svg" width="18" height="18" /> */}
                    AR
                  </a>

                  <span className="fw-bold mx-1 text-muted">|</span>

                  <a
                    onClick={() => handleChangeLanguage("en")}
                    className={`fw-bold mx-1 d-flex align-items-center gap-1 text-decoration-none ${i18n.language === "en" ? "text-warning" : "text-dark"}`}
                    role="button"
                  >
                    {/* <img src="https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/us.svg" width="18" height="18" /> */}
                    EN
                  </a>
                </li>

                {/* SERVICES (desktop hover) */}
                <li className="nav-item dropdown mx-2">

                  <span className="nav-link dropdown-toggle fw-semibold text-dark">{t("services")}

                    <i
                      className={`bi ${isServicesOpen ? "bi-chevron-up" : "bi-chevron-down"
                        } ms-2`}
                    ></i>
                  </span>


                  <ul className={`dropdown-menu ${i18n.language === "ar" ? "dropdown-menu-rtl" : ""}`}>
                    <li><Link className="dropdown-item" to="/services/accounting">{t("Accounting & Assurance Services")}</Link></li>
                    <li><Link className="dropdown-item" to="/services/consulting">{t("Consulting Services with Advisory")}</Link></li>
                    <li><Link className="dropdown-item" to="/services/manageservices">{t("Managed Services")}</Link></li>
                    <li><Link className="dropdown-item" to="/services/technology">{t("Technology and transformation")}</Link></li>
                    <li><Link className="dropdown-item" to="/services/human">{t("Human Resource Services")}</Link></li>
                  </ul>
                </li>

                <li className="nav-item mx-2">
                  <Link className="nav-link fw-semibold text-dark" to="/contact-us">{t("contact")}</Link>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
