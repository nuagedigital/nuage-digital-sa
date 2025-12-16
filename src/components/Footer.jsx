// src/components/Footer.js
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Footer() {
  const { t, i18n } = useTranslation("common"); // common namespace
  const isRTL = i18n.language === "ar";

  return (
    <footer className="bg-light py-4 border-top mt-5">
      <div
        className={`container d-flex flex-column flex-md-row align-items-center justify-content-between ${
          isRTL ? "text-end" : "text-start"
        }`}
        dir={isRTL ? "rtl" : "ltr"}
      >
        {/* Left: Social Icons */}
        <div className="d-flex align-items-center mb-3 mb-md-0">
          <a
            href="https://facebook.com"
            className={`text-muted ${isRTL ? "ms-3" : "me-3"}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <i className="bi bi-facebook" style={{ fontSize: "20px" }}></i>
          </a>
          <a
            href="https://twitter.com"
            className={`text-muted ${isRTL ? "ms-3" : "me-3"}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <i className="bi bi-twitter" style={{ fontSize: "20px" }}></i>
          </a>
          <a
            href="https://instagram.com"
            className={`text-muted ${isRTL ? "ms-3" : "me-3"}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="bi bi-instagram" style={{ fontSize: "20px" }}></i>
          </a>
          <a
            href="https://linkedin.com"
            className="text-muted"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="bi bi-linkedin" style={{ fontSize: "20px" }}></i>
          </a>
        </div>

        {/* Center: Copyright */}
        <div className="text-center text-muted small mb-3 mb-md-0">
          © {new Date().getFullYear()} Nuage Digital. {t("Footer.all_rights_reserved")}
        </div>

        {/* Right: Privacy Policy */}
        <div className={`text-${isRTL ? "start" : "end"}`}>
          <Link to="/privacy-policy" className="text-muted small text-decoration-none">
            {t("Footer.privacy_policy")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
