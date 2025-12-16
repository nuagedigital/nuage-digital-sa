import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"; // ✅ Add Link

import graphImage from "../assets/images/Group.jpg";
import documentImage from "../assets/images/Group-1000001759.jpg";

export default function FinancialSolutions() {
  const { t } = useTranslation();

  return (
    <div className="container py-5">
      {/* Hero Section */}
      <section className="text-center mb-5">
        <h3
          className="display-5 fw-bold mb-4"
          style={{
            color: "#000000ff",
            width: "100%",
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: "1.3",
          }}
        >
          {t("financialSolutions.title")}
        </h3>

        <p className="lead text-muted mb-4 px-3 px-md-5">
          {t("financialSolutions.subtitle")}
        </p>
      </section>

      {/* Responsive Cards Section */}
      <div className="row gy-5">

        {/* Card 1 */}
        <div className="col-12">
          <div className="card p-4 shadow-sm border-light rounded overflow-hidden">
            <div className="row g-0 flex-column flex-md-row">

              {/* Image */}
              <div className="col-12 col-md-5">
                <img
                  src={graphImage}
                  alt={t("financialSolutions.card1.title")}
                  className="img-fluid"
                  style={{
                    width: "470px",
                    height: "400px",
                    borderRadius: "0.25rem",
                  }}
                />
              </div>

              {/* Text */}
              <div className="col-12 col-md-7 d-flex align-items-center text-center text-md-start">
                <div className="card-body">
                  <h5 className="card-title display-5 fw-bold mb-3">
                    {t("financialSolutions.card1.title")}
                  </h5>
                  <p className="card-text text-muted mb-4">
                    {t("financialSolutions.card1.text")}
                  </p>

                  {/* ✅ Link Added */}
                  <Link
                    to="/services/accounting"
                    className="btn btn-warning fw-bold rounded-pill px-4 py-2"
                  >
                    {t("financialSolutions.cta")}
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-12">
          <div className="card p-4 shadow-sm border-light rounded overflow-hidden">
            <div className="row g-0 flex-column flex-md-row-reverse">

              {/* Image */}
              <div className="col-12 col-md-5">
                <img
                  src={documentImage}
                  alt={t("financialSolutions.card2.title")}
                  className="img-fluid"
                  style={{
                    height: "300px",
                  }}
                />
              </div>

              {/* Text */}
              <div className="col-12 col-md-7 d-flex align-items-center text-center text-md-start">
                <div className="card-body">
                  <h5 className="card-title display-5 fw-bold mb-3">
                    {t("financialSolutions.card2.title")}
                  </h5>
                  <p className="card-text text-muted mb-4">
                    {t("financialSolutions.card2.text")}
                  </p>

                  {/* ✅ Link Added */}
                  <Link
                    to="/services/consulting"
                    className="btn btn-warning fw-bold rounded-pill px-4 py-2"
                  >
                    {t("financialSolutions.cta")}
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-12">
          <div className="card p-4 shadow-sm border-light rounded overflow-hidden">
            <div className="row g-0 flex-column flex-md-row">

              {/* Image */}
              <div className="col-12 col-md-5">
                <img
                  src={graphImage}
                  alt={t("financialSolutions.card3.title")}
                  className="img-fluid"
                  style={{
                    width: "470px",
                    height: "400px",
                    borderRadius: "0.25rem",
                  }}
                />
              </div>

              {/* Text */}
              <div className="col-12 col-md-7 d-flex align-items-center text-center text-md-start">
                <div className="card-body">
                  <h5 className="card-title display-5 fw-bold mb-3">
                    {t("financialSolutions.card3.title")}
                  </h5>
                  <p className="card-text text-muted mb-4">
                    {t("financialSolutions.card3.text")}
                  </p>

                  {/* ✅ Link Added */}
                  <Link
                    to="/services/manageservices"
                    className="btn btn-warning fw-bold rounded-pill px-4 py-2"
                  >
                    {t("financialSolutions.cta")}
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
