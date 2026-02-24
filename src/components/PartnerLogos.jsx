import React from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Your local logo imports
import leeLogo from "../assets/images/1.jpg";
import francoLogo from "../assets/images/4.jpeg";
import vectaraLogo from "../assets/images/5.png";
import vardotLogo from "../assets/images/17.png";
import mcaLogo from "../assets/images/12.jpeg";
import engageIQLogo from "../assets/images/13.png";

export default function PartnerLogos() {
  const { t } = useTranslation();

  const settings = {
    dots: false,              // clean look, no dots needed for continuous flow
    infinite: true,
    speed: 6000,              // ← higher = slower, smoother continuous feel (try 4000–10000)
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,         // ← 0 = no pause, immediate next transition
    pauseOnHover: true,       // still pause nicely on hover
    pauseOnDotsHover: false,
    arrows: false,            // hide arrows for pure auto marquee vibe (or keep true if you want manual control)
    cssEase: "linear",        // ← crucial: constant speed, no easing in/out → true smooth scroll
    draggable: true,          // allow swipe on touch
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const logos = [
    { src: leeLogo, alt: "Lee's Sandwiches" },
    { src: francoLogo, alt: "Franco Uomo" },
    { src: engageIQLogo, alt: "Engage IQ" },
    { src: vectaraLogo, alt: "Vectara" },
    { src: vardotLogo, alt: "Vardot" },
    { src: mcaLogo, alt: "MCA" },
  ];

  // Duplicate helps make the loop feel endless without visible jump
  const displayedLogos = [...logos, ...logos];

  return (
    <div className="container py-5">
      <h3 className="display-5 text-center mb-5 fw-bold">
        {t("partnerLogos.title") || "Our Partners"}
      </h3>

      <Slider {...settings}>
        {displayedLogos.map((logo, index) => (
          <div key={index} className="px-4"> {/* wider padding for breathing room */}
            <div
              className="logo-item text-center"
              style={{
                height: "120px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "transform 0.3s ease",
              }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="img-fluid"
                style={{
                  maxHeight: "90px",
                  maxWidth: "100%",
                  objectFit: "contain",
                  filter: "grayscale(80%)",          // optional: subtle look
                }}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}