import React from "react";
import { useTranslation } from "react-i18next"; // ✅ import translation hook

import WorldMap from "../components/WorldMap";
import About from "../components/About";
import CardServices from "../components/CardServices";
import FinancialSolutions from "../components/FinancialSolutions";
import BusinessSolutions from "../components/BusinessSolutions";
import PartnerLogos from "../components/PartnerLogos";

export default function Home() {
  const { t } = useTranslation(); // ✅ initialize i18next

  return (
    <>
      {/* Hero Section */}
      <section className="home-section py-3 text-center" id="cs-services">
        <div className="container" id="home_describe">
          <button className="btn btn-outline-success btn-lg rounded-pill px-4 mb-3">
            {t("home.cta")}{" "}
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* ✅ FIXED: clip-path -> clipPath */}
              <g clipPath="url(#clip0_522_6534)">
                <rect width="13.4595" height="13.4595" rx="6.72976" fill="white" />
                <path
                  d="M6.72994 12.7099C10.0331 12.7099 12.7109 10.0321 12.7109 6.72896C12.7109 3.42579 10.0331 0.748047 6.72994 0.748047C3.42677 0.748047 0.749023 3.42579 0.749023 6.72896C0.749023 10.0321 3.42677 12.7099 6.72994 12.7099Z"
                  fill="#005430"
                />
                <path
                  d="M6.66998 5.67095C6.65004 5.49152 6.74973 5.31209 6.92915 5.35197C7.06871 5.3719 7.2282 5.51146 7.14845 5.65101C7.02884 5.87031 6.70985 5.87031 6.51049 5.98993C6.53043 6.10955 7.10858 5.97 7.20826 5.97C7.30795 5.97 7.40763 6.00987 7.34782 6.12949C7.28801 6.2491 7.08864 6.2491 6.96903 6.26904C6.84941 6.28898 6.65004 6.28898 6.59023 6.38866C6.47062 6.54815 6.70985 6.56809 6.7896 6.60796C6.98896 6.70764 6.66998 6.80732 6.59023 6.78739C6.29119 6.72758 6.23138 6.56809 6.05195 6.36872C5.87253 6.60796 5.31431 7.14624 5.19469 6.58802C4.99532 6.66777 4.79596 6.76745 4.57666 6.78739C4.67634 6.64783 4.87571 6.58802 5.0352 6.50828C5.23456 6.4086 5.23456 6.22917 5.35418 6.06968C5.39405 6.12949 5.35418 6.20923 5.37412 6.28898C5.53361 6.20923 5.73297 6.04974 5.65322 5.85038C5.65322 5.83044 5.41399 5.35197 5.61335 5.43171C5.79278 5.51146 5.73297 5.69089 5.77284 5.83044C5.83265 6.08961 5.71303 6.22917 5.51367 6.38866C5.43392 6.44847 5.21462 6.6877 5.4738 6.6877C5.65322 6.6877 5.81272 6.48834 5.9124 6.36872C6.03202 6.20923 5.99214 6.04974 5.9124 5.87031C5.85259 5.73076 5.71303 5.43171 5.89246 5.33203C6.03202 5.55133 6.09183 5.8105 6.15163 6.06968C6.19151 6.28898 6.23138 6.50828 6.47062 6.56809C6.45068 6.4086 6.55036 6.28898 6.68992 6.22917C6.59023 6.14942 6.03202 6.2491 6.25132 5.95006C6.27125 5.8105 6.66998 5.7507 6.66998 5.67095Z"
                  fill="white"
                />
                {/* (rest of your SVG paths unchanged) */}
                {/* ... keep everything else exactly as you had it ... */}
                <path
                  d="M8.56415 8.68256L8.4844 8.44333L8.40466 8.68256H4.03859C4.03859 8.68256 4.07846 9.04142 4.51706 9.04142H8.38472V9.32053H9.44135V8.68256H8.56415ZM9.24199 9.16104H8.52428V8.96167H9.24199V9.16104Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_522_6534">
                  <rect width="13.4595" height="13.4595" rx="6.72976" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>

          <h1 className="fw-bold display-4 mb-3" id="home_title">
            {t("home.title")}
          </h1>
          <p className="lead text-muted mb-4">{t("home.subtitle")}</p>
        </div>
      </section>

      {/* Component Sections */}
      <WorldMap id="global-map" />
      <About />
      <CardServices />
      <FinancialSolutions />
      <BusinessSolutions />
      <PartnerLogos id="partner-logos" />
    </>
  );
}