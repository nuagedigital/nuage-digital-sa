import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import PartnerLogos from "../components/PartnerLogos";

// Icons
import heroImage from "../assets/images/Technology.png";
import placeholderIcon from "../assets/images/software-2-2.gif";
import placeholderIcon1 from "../assets/images/accountads.gif";
import placeholderIcon2 from "../assets/images/financial-advisor-1.gif";
import placeholderIcon3 from "../assets/images/account4.gif";
import placeholderIcon4 from "../assets/images/account5.gif";
import placeholderIcon5 from "../assets/images/19002280.gif";
import placeholderIcon6 from "../assets/images/19018316.gif";
import placeholderIcon7 from "../assets/images/accountads.gif";

export default function Technology() {
  const { t, i18n } = useTranslation("technology");
  const isRTL = i18n.language === "ar";

  // Text alignment responsive
  const textAlignMobile = "text-center"; // mobile always centered
  const textAlignDesktop = isRTL ? "text-lg-end" : "text-lg-start"; // desktop follows language

  const services = [
    { title: t("digital_reporting.title"), desc: t("digital_reporting.desc"), icon: placeholderIcon },
    { title: t("automation.title"), desc: t("automation.desc"), icon: placeholderIcon1 },
    { title: t("cloud_accounting.title"), desc: t("cloud_accounting.desc"), icon: placeholderIcon2 },
    { title: t("erp_integration.title"), desc: t("erp_integration.desc"), icon: placeholderIcon3 },
    { title: t("ai_insights.title"), desc: t("ai_insights.desc"), icon: placeholderIcon4 },
    { title: t("ai_insights1.title"), desc: t("ai_insights1.desc"), icon: placeholderIcon5 },
    { title: t("ai_insights2.title"), desc: t("ai_insights2.desc"), icon: placeholderIcon6 },
    { title: t("ai_insights3.title"), desc: t("ai_insights3.desc"), icon: placeholderIcon7 }
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="py-4">
        <div className="container">
          <div className="row align-items-center g-5">

            {/* TEXT BLOCK */}
            <div
              className={`col-12 col-lg-7 
                ${textAlignMobile} 
                ${textAlignDesktop} 
                ${isRTL ? "order-lg-2" : "order-lg-1"}`}
            >
              <h1 className="display-4 fw-bold mb-3">{t("hero_title")}</h1>
              <p className="lead mb-4">{t("hero_subtitle")}</p>

              <Link
                to="/services"
                className="btn btn-warning btn-lg fw-bold px-4 py-2 rounded-pill"
              >
                {t("hero_button")} →
              </Link>
            </div>

            {/* IMAGE BLOCK */}
            <div
              className={`col-12 col-lg-5 text-center 
              ${isRTL ? "order-lg-1" : "order-lg-2"}`}
            >
              <img
                src={heroImage}
                alt={t("hero_title")}
                className="img-fluid rounded-3 w-100"
                loading="lazy"
                style={{ maxHeight: "380px", objectFit: "contain" }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* SERVICE SECTIONS */}
      {services.map((service, index) => {
        const imageLeft = isRTL ? index % 2 !== 0 : index % 2 === 0;
        const bgClass = index % 2 === 0 ? "bg-white" : "";

        return (
          <section key={index} className={`py-5 ${bgClass}`}>
            <div className="container">
              <div className="row align-items-center g-4">

                {/* IMAGE */}
                <div
                  className={`col-12 col-lg-4 text-center 
                  ${imageLeft ? "" : "order-lg-2"}`}
                >
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="img-fluid rounded-3"
                    loading="lazy"
                    style={{
                      maxHeight: "200px",
                      width: "auto",
                      objectFit: "contain"
                    }}
                  />
                </div>

                {/* TEXT */}
                <div
                  className={`col-12 col-lg-8 
                  ${textAlignMobile} 
                  ${textAlignDesktop} 
                  ${imageLeft ? "" : "order-lg-1"}`}
                >
                  <div className="p-3 p-lg-4">
                    <h2 className="fw-bold mb-3">{service.title}</h2>
                    <p className="text-muted fs-5 lh-base">{service.desc}</p>
                  </div>
                </div>

              </div>
            </div>
          </section>
        );
      })}

      {/* PARTNERS SECTION */}
      <section className="py-5">
        <div className="container">
          <PartnerLogos />
        </div>
      </section>
    </>
  );
}
