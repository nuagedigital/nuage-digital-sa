// src/pages/ManageServices.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import PartnerLogos from "../components/PartnerLogos";

// Icons
import heroImage from "../assets/images/managed.png";
import hrIcon from "../assets/images/Book.gif";
import accountingIcon from "../assets/images/salary-1-1.gif";
import bpoIcon from "../assets/images/Book.gif";

export default function ManageServices() {
  const { t, i18n } = useTranslation("manage");
  const isRTL = i18n.language === "ar";

  // text alignment rules
  const textAlignMobile = "text-center"; // ALWAYS center on mobile
  const textAlignDesktop = isRTL ? "text-lg-end" : "text-lg-start"; // RTL/LTR on desktop only

  const services = [
    {
      title: t("hr.title"),
      desc: t("hr.desc"),
      icon: hrIcon,
    },
    {
      title: t("accounting.title"),
      desc: t("accounting.desc"),
      icon: accountingIcon,
    },
    {
      title: t("bpo.title"),
      desc: t("bpo.desc"),
      icon: bpoIcon,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-3">
        <div className="container">
          <div className="row align-items-center g-4">

            {/* Hero Image */}
            <div className={`col-12 col-lg-6 ${isRTL ? "order-lg-2" : ""} text-center`}>
              <img
                src={heroImage}
                alt={t("hero_title")}
                className="img-fluid rounded-3 w-100"
                style={{
                  maxHeight: "440px",
                  objectFit: "contain",
                }}
                loading="lazy"
              />
            </div>

            {/* Hero Text */}
            <div
              className={`col-12 col-lg-6 ${isRTL ? "order-lg-1" : ""} ${textAlignMobile} ${textAlignDesktop}`}
            >
              <h1 className="display-5 fw-bold mb-3">{t("hero_title")}</h1>
              <p className="lead mb-4">{t("hero_subtitle")}</p>

              <Link
                to="/services"
                className="btn btn-warning btn-lg fw-bold px-4 py-2 rounded-pill"
              >
                {t("hero_button")} →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, index) => {
        const imageLeft = isRTL ? index % 2 !== 0 : index % 2 === 0;

        return (
          <section key={index} className="py-5 bg-white">
            <div className="container">
              <div className="row align-items-center g-4">

                {/* Image */}
                <div className={`col-12 col-lg-4 text-center ${imageLeft ? "" : "order-lg-2"}`}>
                  <div className="p-3 bg-white rounded-3">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="img-fluid"
                      loading="lazy"
                      style={{
                        maxHeight: "180px",
                        width: "auto",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`col-12 col-lg-8 ${imageLeft ? "" : "order-lg-1"} ${textAlignMobile} ${textAlignDesktop} px-3 px-md-5`}
                >
                  <h3 className="h3 fw-bold mb-3">{service.title}</h3>
                  <p className="text-muted mb-4 fs-5 lh-base">{service.desc}</p>
                </div>

              </div>
            </div>
          </section>
        );
      })}

      {/* Partners */}
      <section className="py-5">
        <div className="container">
          <PartnerLogos />
        </div>
      </section>
    </>
  );
}
