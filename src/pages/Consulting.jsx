import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import PartnerLogos from "../components/PartnerLogos";

// Icons / Images
import heroImage from "../assets/images/consultings.png";
import reviewsIcon from "../assets/images/budgeting.gif";
import strategyIcon from "../assets/images/accountads.gif";
import budgetingIcon from "../assets/images/account4.gif";
import dueCareIcon from "../assets/images/financial-advisor-1.gif";
import taxConsultingIcon from "../assets/images/tax.gif";
import riskAssessmentIcon from "../assets/images/accountads.gif";
import marketIntelligenceIcon from "../assets/images/salary-1-1.gif";
import globalMobilityIcon from "../assets/images/Book.gif";
import incorporationIcon from "../assets/images/software-2-1.gif";

export default function Consulting() {
  const { t, i18n } = useTranslation("consulting");
  const isRTL = i18n.language === "ar";

  // Dynamic alignment based on language
  const textAlign = isRTL ? "text-end" : "text-start";
  const textAlignLg = isRTL ? "text-lg-end" : "text-lg-start";

  const services = [
    {
      title: t("reviews.title"),
      desc: t("reviews.desc"),
      icon: reviewsIcon,
    },
    {
      title: t("business_strategy.title"),
      desc: t("business_strategy.desc"),
      icon: strategyIcon,
    },
    {
      title: t("budgeting.title"),
      desc: t("budgeting.desc"),
      icon: budgetingIcon,
    },
    {
      title: t("due_care.title"),
      desc: t("due_care.desc"),
      icon: dueCareIcon,
    },
    {
      title: t("tax_consulting.title"),
      desc: t("tax_consulting.desc"),
      icon: taxConsultingIcon,
    },
    {
      title: t("Risk_Assessment.title"),
      desc: t("Risk_Assessment.desc"),
      icon: riskAssessmentIcon,
    },
    {
      title: t("Market_Intelligence.title"),
      desc: t("Market_Intelligence.desc"),
      icon: marketIntelligenceIcon,
    },
    {
      title: t("Global_Mobility.title"),
      desc: t("Global_Mobility.desc"),
      icon: globalMobilityIcon,
    },
    {
      title: t("Incorporation_Services.title"),
      desc: t("Incorporation_Services.desc"),
      icon: incorporationIcon,
    },
  ];

  return (
    <>
      {/* 🌟 Hero Section */}
      <section className="py-5">
        <div className="container">
          <div
            className={`row align-items-center g-4 flex-column-reverse flex-lg-row 
            ${isRTL ? "flex-lg-row-reverse" : ""}`}
          >

            {/* Image */}
            <div className="col-12 col-lg-6 d-flex justify-content-center">
              <img
                src={heroImage}
                alt={t("hero_title")}
                className="img-fluid rounded-3"
                style={{
                  maxHeight: "500px",
                  width: "100%",
                  objectFit: "contain",
                }}
                loading="lazy"
              />
            </div>

            {/* Text */}
            <div className={`col-12 col-lg-6 ${textAlign} ${textAlignLg}`}>
              <h1 className="mb-3 display-5 fw-bold">{t("hero_title")}</h1>
              <p className="lead mb-4 px-3 px-md-0">{t("hero_subtitle")}</p>
              <Link
                to="/consulting/reviews"
                className="btn btn-warning btn-lg fw-bold px-4 py-2 rounded-pill"
              >
                {t("hero_button")} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 🧩 Service Sections */}
      {services.map((service, index) => {
        const imageLeft = isRTL ? index % 2 !== 0 : index % 2 === 0;

        return (
          <section key={index} className="py-5">
            <div className="container">
              <div
                className={`row align-items-center g-4 flex-column flex-lg-row ${
                  isRTL
                    ? imageLeft
                      ? "flex-lg-row-reverse"
                      : ""
                    : imageLeft
                    ? ""
                    : "flex-lg-row-reverse"
                }`}
              >
                {/* Text Content */}
                <div
                  className={`col-12 col-lg-8 ${textAlign} ${textAlignLg} px-3 px-md-5`}
                >
                  <h3 className="h3 fw-bold mb-3">{service.title}</h3>
                  <p className="text-muted fs-5 lh-base">{service.desc}</p>
                </div>

                {/* Image */}
                <div className={`col-12 col-lg-4 ${textAlign}`}>
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="img-fluid rounded-3"
                    style={{
                      maxHeight: "180px",
                      objectFit: "contain",
                    }}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* 🤝 Partner Logos Section */}
      <section className="py-5">
        <div className="container">
          <PartnerLogos />
        </div>
      </section>
    </>
  );
}
