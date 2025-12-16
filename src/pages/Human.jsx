import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import PartnerLogos from "../components/PartnerLogos";

// Icons
import heroImage from "../assets/images/human.png";
import salariesIcon from "../assets/images/software-2-1.gif";
import expensesIcon from "../assets/images/19028850.gif";
import hcdIcon from "../assets/images/tax.gif";
import qiwaIcon from "../assets/images/Book.gif";

export default function Human() {
  const { t, i18n } = useTranslation("human_resoure");
  const isRTL = i18n.language === "ar";

  const services = [
    { title: t("salaries.title"), desc: t("salaries.desc"), icon: salariesIcon },
    { title: t("expenses.title"), desc: t("expenses.desc"), icon: expensesIcon },
    { title: t("hcd.title"), desc: t("hcd.desc"), icon: hcdIcon },
    { title: t("qiwa.title"), desc: t("qiwa.desc"), icon: qiwaIcon },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-4">
        <div className="container">
          <div className="row align-items-center g-5">

             {/* Hero Image */}
            <div className={`col-lg-6 text-center ${isRTL ? "order-lg-1" : ""}`}>
              <img
                src={heroImage}
                alt={t("hero_title")}
                className="img-fluid rounded-3 w-100"
                style={{ maxWidth: "500px" }}
                loading="lazy"
              />
            </div>
            
            {/* Text */}
            <div className={`col-lg-6 text-center text-lg-start ${isRTL ? "order-lg-2" : ""}`}>
              <h1 className="mb-3 display-5 fw-bold">{t("hero_title")}</h1>
              <p className="lead mb-4">{t("hero_subtitle")}</p>

              {/* RTL / LTR Button */}
              <Link
                to="/services"
                className={`btn btn-warning btn-lg fw-bold px-4 py-2 rounded-pill btn-arrow ${isRTL ? "text-end" : "text-start"}`}
              >
                {t("hero_button")}
                <span>→</span>
              </Link>
            </div>

           

          </div>
        </div>
      </section>

      {/* Services Section */}
      {services.map((service, index) => {
        const imageLeft = isRTL ? index % 2 !== 0 : index % 2 === 0;

        return (
          <section key={index} className="py-5 bg-white">
            <div className="container">
              <div className="row align-items-center g-5">
                
                {/* Image */}
                <div className={`col-12 col-md-5 text-center ${imageLeft ? "" : "order-md-2"}`}>
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="img-fluid mx-auto d-block"
                    style={{ maxHeight: "180px", objectFit: "contain" }}
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className={`col-12 col-md-7 ${imageLeft ? "" : "order-md-1"}`}>
                  <div className={`p-3 p-md-4 text-center text-md-${isRTL ? "end" : "start"}`}>
                    <h3 className="fw-bold mb-3">{service.title}</h3>
                    <p className="text-muted fs-5 lh-base">{service.desc}</p>
                  </div>
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
