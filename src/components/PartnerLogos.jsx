import React from "react";
import { useTranslation } from "react-i18next"; // ✅ import translation hook

// ✅ Example logo imports
import leeLogo from "../assets/images/1.jpg";
import francoLogo from "../assets/images/4.jpeg";
import vectaraLogo from "../assets/images/5.png";
import vardotLogo from "../assets/images/17.png";
import mcaLogo from "../assets/images/12.jpeg";
import engageIQLogo from "../assets/images/13.png";


export default function PartnerLogos() {
  const { t } = useTranslation(); // ✅ initialize translation

  return (
    <div className="container py-5">
      {/* 🌍 Title */}
      <h3 className="display-5 text-center mb-5 fw-bold">{t("partnerLogos.title")}</h3>
 
      {/* 🧩 Logos Scrolling Row */}
      <div className="logos-marquee">
        <div className="logo-row">
          {/* First set of logos */}
          <div className="logo-item">
            <img src={leeLogo} alt="Lee's Sandwiches" className="img-fluid" />
          </div>
          <div className="logo-item">
            <img src={francoLogo} alt="Franco Uomo" className="img-fluid" />
          </div>
          <div className="logo-item">
            <img src={engageIQLogo} alt="Engage IQ" className="img-fluid" />
          </div>
          <div className="logo-item">
            <img src={vectaraLogo} alt="Vectara" className="img-fluid" />
          </div>
          <div className="logo-item">
            <img src={vardotLogo} alt="Vardot" className="img-fluid" />
          </div>
          <div className="logo-item">
            <img src={mcaLogo} alt="MCA" className="img-fluid" />
          </div>

          {/* Second set of logos for seamless looping */}
          <div className="logo-item">
            <img src={leeLogo} alt="Lee's Sandwiches" className="img-fluid" />
          </div>
          <div className="logo-item">
            <img src={francoLogo} alt="Franco Uomo" className="img-fluid" />
          </div>
          <div className="logo-item">
            <img src={engageIQLogo} alt="Engage IQ" className="img-fluid" />
          </div>
          <div className="logo-item">
            <img src={vectaraLogo} alt="Vectara" className="img-fluid" />
          </div>
          <div className="logo-item">
            <img src={vardotLogo} alt="Vardot" className="img-fluid" />
          </div>
          <div className="logo-item">
            <img src={mcaLogo} alt="MCA" className="img-fluid" />
          </div>
           <div className="logo-item">
            <img src={vardotLogo} alt="Vardot" className="img-fluid" />
          </div>
          
        </div>
      </div>
    </div>
  );
}
