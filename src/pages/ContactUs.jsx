import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import PartnerLogos from "../components/PartnerLogos";

export default function BookAppointment() {
  const { t, i18n } = useTranslation("contact");
  const isRTL = i18n.language === "ar";
  const formLoaded = useRef(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (formLoaded.current) return;

    // Check if redirected after submission
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("submissionGuid")) {
      setSubmitted(true);

      // Clean URL after tracking
      const cleanUrl = window.location.origin + window.location.pathname;
      window.history.replaceState({}, "", cleanUrl);
    }

    // Load HubSpot Tracking script
    const trackingScript = document.createElement("script");
    trackingScript.src = "https://js.hs-scripts.com/24455730.js";
    trackingScript.async = true;
    trackingScript.defer = true;
    document.body.appendChild(trackingScript);

    // Load HubSpot Form script
    const formScript = document.createElement("script");
    formScript.src = "https://js.hsforms.net/forms/v2.js";
    formScript.async = true;

    formScript.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "24455730",
          formId: "3d3b396e-7f7d-4924-9beb-27a684c4ec34",
          target: "#form-target",
          css: "",
          redirectUrl: "https://nuage-digital.sa/book-appointment",
          onFormSubmit: () => {
            console.log("HubSpot form tracked & submitted!");
          }
        });
        formLoaded.current = true;
      }
    };

    document.body.appendChild(formScript);

    return () => {
      if (formScript.parentNode) {
        document.body.removeChild(formScript);
      }
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-success text-white py-5 text-center">
        <div className="container">
          <h1 className="display-5 fw-bold">
            {t("book_appointment", "Book an Appointment")}
          </h1>
        </div>
      </section>

      {/* Form + Map Section */}
      <section className="py-5">
        <div className="container">

          {/* Success Message */}
          {submitted && (
            <div className="alert alert-success text-center fw-bold mb-4">
              {t("form_success", "Thank you! We received your request. We will contact you soon.")}
            </div>
          )}

          <div className={`row g-5 ${isRTL ? "flex-row-reverse" : ""}`}>

            {/* HubSpot Form */}
            <div className="col-12 col-lg-6">
              <div id="form-target" className="bg-white p-3 rounded-4 shadow-sm" />
            </div>

            {/* Map */}
            <div className="col-12 col-lg-6">
              <iframe
                title="Nuage Digital Location"
                src="https://www.google.com/maps/embed?pb=!1m18..."
                width="100%"
                height="900"
                style={{ border: 0, borderRadius: "12px" }}
                loading="lazy"
              />
            </div>

          </div>
        </div>

        <PartnerLogos />
      </section>
    </>
  );
}
