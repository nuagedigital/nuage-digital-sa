import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import PartnerLogos from "../components/PartnerLogos";

// Icons / Images
import heroImage from "../assets/images/accounting_banner.png";
import bookkeepingIcon from "../assets/images/account1.gif";
import placeholderIcon from "../assets/images/accountads.gif";
import placeholderIcon1 from "../assets/images/account2.gif";
import placeholderIcon2 from "../assets/images/account3.gif";
import placeholderIcon3 from "../assets/images/account4.gif";
import placeholderIcon4 from "../assets/images/account5.gif";

export default function Accounting() {
  const { t, i18n } = useTranslation("bookkeeping_lang");
  const isRTL = i18n.language === "ar";

  // Dynamic classes based on RTL or LTR
  const textAlign = isRTL ? "text-end" : "text-start";
  const textAlignLg = isRTL ? "text-lg-end" : "text-lg-start";

  const services = [
    {
      title: t("bookkeeping.title"),
      desc: t("bookkeeping.desc"),
      icon: bookkeepingIcon,
      link: "/Bookkeeping/bookkeeping",
      cta: t("bookkeeping.cta"),
    },
    {
      title: t("payroll.title"),
      desc: t("payroll.desc"),
      icon: placeholderIcon,
      link: "/Bookkeeping/payroll",
      cta: t("payroll.cta"),
    },
    {
      title: t("tax.title"),
      desc: t("tax.desc"),
      icon: placeholderIcon1,
      link: "/Bookkeeping/tax",
      cta: t("tax.cta"),
    },
    {
      title: t("digital_media.title"),
      desc: t("digital_media.desc"),
      icon: placeholderIcon2,
      link: "/Bookkeeping/digital-media",
      cta: t("digital_media.cta"),
    },
    {
      title: t("consulting.title"),
      desc: t("consulting.desc"),
      icon: placeholderIcon3,
      link: "/Bookkeeping/consulting",
      cta: t("consulting.cta"),
    },
    {
      title: t("hr.title"),
      desc: t("hr.desc"),
      icon: placeholderIcon4,
      link: "/Bookkeeping/hr",
      cta: t("hr.cta"),
    },
  ];

  return (
    <>
      {/* 🌟 Hero Section */}
      <section className="py-5">
        <div className="container">
          <div
            className={`row align-items-center g-4 flex-column-reverse flex-lg-row ${
              isRTL ? "flex-lg-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="col-12 col-lg-6 d-flex justify-content-center">
              <img
                src={heroImage}
                alt={t("hero_title")}
                className="img-fluid rounded-3"
                style={{
        
                  objectFit: "cover",
                }}
                loading="lazy"
              />
            </div>

            {/* Text */}
            <div className={`col-12 col-lg-6 ${textAlign} ${textAlignLg}`}>
              <h1 className="mb-3 display-5 fw-bold">{t("hero_title")}</h1>
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

      {/* 🧾 Services Section */}
      {services.map((service, index) => {
        const imageLeft = isRTL ? index % 2 !== 0 : index % 2 === 0;

        return (
          <section key={service.link} className="py-5">
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
                {/* Image */}
                <div className="col-12 col-lg-4 text-center">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="img-fluid"
                    style={{
                      maxHeight: "180px",
                      width: "auto",
                      objectFit: "contain",
                    }}
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className={`col-12 col-lg-8 ${textAlign} ${textAlignLg} px-3 px-md-5`}>
                  <h3 className="h3 fw-bold mb-3">{service.title}</h3>
                  <p className="text-muted mb-4 fs-5 lh-base">{service.desc}</p>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* 🤝 Partner Logos */}
      <PartnerLogos />
    </>
  );
}
