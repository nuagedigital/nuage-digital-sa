import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import PartnerLogos from "../components/PartnerLogos";

// Import service icons
import bookkeepingIcon from "../assets/images/accountads.gif";
import payrollIcon from "../assets/images/Book.gif";
import taxIcon from "../assets/images/account.gif";
import digitalMediaIcon from "../assets/images/content-marketing-1-2.gif";
import consultingIcon from "../assets/images/financial-advisor-1.gif";
import hrIcon from "../assets/images/salary-1-1-1.gif";
import heroImage from "../assets/images/services-banner.png";

export default function Services() {
  const { t } = useTranslation("services");

  const servicesList = [
    {
      title: t("bookkeeping.title"),
      desc: t("bookkeeping.desc"),
      icon: bookkeepingIcon,
      link: "/services/accounting", // ✔ updated
      cta: t("bookkeeping.cta"),
    },
    {
      title: t("payroll.title"),
      desc: t("payroll.desc"),
      icon: payrollIcon,
      link: "/services/manageservices", // ✔ updated
      cta: t("payroll.cta"),
    },
    {
      title: t("tax.title"),
      desc: t("tax.desc"),
      icon: taxIcon,
      link: "/services/manageservices", // ✔ updated
      cta: t("tax.cta"),
    },
    {
      title: t("digital_media.title"),
      desc: t("digital_media.desc"),
      icon: digitalMediaIcon,
      link: "/services/technology", // ✔ updated
      cta: t("digital_media.cta"),
    },
    {
      title: t("consulting.title"),
      desc: t("consulting.desc"),
      icon: consultingIcon,
      link: "/services/consulting", // ✔ updated
      cta: t("consulting.cta"),
    },
    {
      title: t("hr.title"),
      desc: t("hr.desc"),
      icon: hrIcon,
      link: "/services/human", // ✔ updated
      cta: t("hr.cta"),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-5">
        <div className="container">
          <div className="row d-flex">

            {/* Text */}
            <div className="col-lg-6 d-flex align-items-center justify-content-start">
              <div>
                <h1 className="display-4 fw-bold mb-3">
                  {t("hero_title", "خدماتنا")}
                </h1>
                <p className="lead mb-4">
                  {t(
                    "hero_subtitle",
                    "اكتشف إمكانيات نواج ديجيتال! نقدم مجموعة شاملة من الخدمات لدعم نمو أعمالك"
                  )}
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="col-lg-6">
              <img src={heroImage} alt="Hero" className="img-fluid w-100" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-5">
        <div className="container">
          <div className="row g-5">
            {servicesList.map((service, index) => (
              <div key={index} className="col-lg-6">
                <div className="card border-0 shadow-sm h-100 p-4">
                  <div className="row g-4 align-items-center">

                    {/* Icon */}
                    <div className="col-auto">
                      <img
                        src={service.icon}
                        alt={service.title}
                        width="80"
                        height="80"
                        className="img-fluid"
                      />
                    </div>

                    {/* Content */}
                    <div className="col">
                      <h3 className="h4 fw-bold mb-2">{service.title}</h3>
                      <p className="text-muted small mb-3">{service.desc}</p>

                      {/* CTA */}
                      <Link
                        to={service.link}
                        className="btn btn-warning btn-sm rounded-pill px-4"
                      >
                        {service.cta}
                      </Link>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <PartnerLogos />
    </>
  );
}
