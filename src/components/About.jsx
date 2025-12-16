import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"; // Import Link
import capital from "../assets/images/nuage-banner.png";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="container py-5">
      <div className="row align-items-center flex-column-reverse flex-md-row">

        {/* Right Column - Text Section */}
        <div className="col-12 col-md-7 text-center text-md-start mt-4 mt-md-0">
          <h2 className="display-5 text-dark mb-3 fw-bold">
            {t("about.title")}
          </h2>
          <p className="lead text-muted mb-4">{t("about.description")}</p>

          {/* ⭐ Button Linked to Services Page */}
          <Link
            to="/services"
            className="btn btn-warning fw-bold px-4 py-2 rounded-pill"
          >
            {t("about.button")}
          </Link>
        </div>

        {/* Left Column - Image Section */}
        <div className="col-12 col-md-5 mb-4 mb-md-0 d-flex justify-content-center">
          <img
            src={capital}
            alt={t("about.imageAlt")}
            className="img-fluid rounded-3 shadow-sm"
            style={{
              maxHeight: "400px",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
}
