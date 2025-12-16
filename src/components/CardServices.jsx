import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import accountingImage from "../assets/images/salary-1-1.gif";
import advisoryImage from "../assets/images/accountads.gif";
import managedImage from "../assets/images/content-marketing-1-2.gif";
import hrImage from "../assets/images/software-2-1.gif";
import techImage from "../assets/images/account.gif";

export default function CardServices() {
  const { t } = useTranslation();

  // Cards with correct service links
  const cards = [
    {
      key: "card1",
      img: accountingImage,
      link: "/services/accounting",
    },
    {
      key: "card2",
      img: advisoryImage,
      link: "/services/consulting",
    },
    {
      key: "card3",
      img: managedImage,
      link: "/services/manageservices",
    },
    {
      key: "card4",
      img: hrImage,
      link: "/services/human",
    },
    {
      key: "card5",
      img: techImage,
      link: "/services/technology",
    },
  ];

  return (
    <div className="container-fluid py-5">
      {/* Section Title */}
      <h4 className="display-5 fw-bold text-center text-dark mb-5">
        {t("servicesSection.title")}
      </h4>

      {/* Card Grid */}
      <div className="row justify-content-center text-center">
        {cards.map(({ key, img, link }) => (
          <div
            key={key}
            className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4 d-flex"
          >
            {/* Entire card is clickable */}
            <Link
              to={link}
              className="card shadow-sm border-light rounded h-100 w-100 text-decoration-none text-dark"
              style={{ cursor: "pointer" }}
            >
              <div className="card-body d-flex flex-column align-items-center text-center">
                <img
                  src={img}
                  alt={t(`servicesSection.${key}.title`)}
                  className="img-fluid rounded mb-3"
                  style={{
                    height: "100px",
                    width: "100px",
                    objectFit: "cover",
                  }}
                />

                <h5 className="card-title fw-bold mb-2">
                  {t(`servicesSection.${key}.title`)}
                </h5>

                <p className="card-text text-muted">
                  {t(`servicesSection.${key}.text`)}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
