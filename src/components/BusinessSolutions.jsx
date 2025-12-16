import React from "react";
import { useTranslation } from "react-i18next";
import laptopImage from "../assets/images/dashboard.jpg"; // ✅ replace with your image

export default function BusinessSolutions() {
  const { t, i18n } = useTranslation();

  return (
    <div className="container py-5">
      {/* Header Section */}
      <div className="row mb-5">
        <div className="col-12 text-center">
          <section className="mb-5">
            <h3
              className="display-5 fw-bold mb-4"
              style={{ color: "#000000ff", lineHeight: "1.3" }}
            >
              {t("businessSolutions.title")}
            </h3>

            <p className="lead text-muted mb-4 px-3 px-md-5">
              {t("businessSolutions.subtitle")}
            </p>

            <button className="btn btn-warning fw-bold px-4 py-2 rounded-pill">
              {t("businessSolutions.cta")}
            </button>
          </section>
        </div>
      </div>

      {/* Hero Section */}
      <section
        className={`row align-items-center g-4 flex-column flex-md-row ${i18n.language === "ar" ? "flex-md-row-reverse" : ""
          }`}
      >
        {/* Image Column — Appears ABOVE on Mobile */}
        <div className="col-12 col-md-6 d-flex justify-content-center mb-4 mb-md-0">
          <img
            src={laptopImage}
            alt={t("businessSolutions.imageAlt")}
            className="img-fluid rounded-3"
            style={{
              maxWidth: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Cards/Text Column */}
        <div
          className={`col-12 col-md-6 d-flex flex-column justify-content-center text-center text-md-start ${i18n.language === "ar" ? "text-md-end" : ""
            }`}
        >
          {/* Card 1 */}
          <div className="card shadow-sm border-0 rounded-3 p-4 mb-3 card-hover-green">
            <h5 className="card-title mb-3 fw-bold">
              {t("businessSolutions.card1.title")}
            </h5>
            <p className="card-text text-muted">
              {t("businessSolutions.card1.text")}
            </p>
          </div>

          {/* Card 2 */}
          <div className="card shadow-sm border-0 rounded-3 p-4 mb-3 card-hover-green">
            <h5 className="card-title mb-3 fw-bold">    
              {t("businessSolutions.card2.title")}
            </h5>
            <p className="card-text text-muted">
              {t("businessSolutions.card2.text")}
            </p>
          </div>

          {/* Card 3 */}
          <div className="card shadow-sm border-0 rounded-3 p-4 card-hover-green">
            <h5 className="card-title mb-3 fw-bold">
              {t("businessSolutions.card3.title")}
            </h5>
            <p className="card-text text-muted">
              {t("businessSolutions.card3.text")}
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
