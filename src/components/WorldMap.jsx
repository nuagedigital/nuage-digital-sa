import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next"; // ✅ import translation hook
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { feature } from "topojson-client";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

// 🟡 Highlighted countries (with keys for i18n)
const highlightedCountries = {
  USA: { key: "usa" },
  GBR: { key: "gbr" },
  SAU: { key: "sau" },
  PAK: { key: "pak" }
};

// 🟡 Numeric ISO → Alpha-3 Country Mapping
const isoNumericToAlpha3 = {
  840: "USA", // United States
  826: "GBR", // United Kingdom
  682: "SAU", // Saudi Arabia
  586: "PAK", // Pakistan
};

export default function WorldMap({ id = "world-map" }) {
  const { t, i18n } = useTranslation(); // ✅ use translations
  const [geographies, setGeographies] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  // ✅ Load map data
  useEffect(() => {
    fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
      .then((res) => res.json())
      .then((worldData) => {
        const geoFeatures = feature(worldData, worldData.objects.countries).features;
        setGeographies(geoFeatures);
      })
      .catch((err) => console.error("Error loading map data:", err));
  }, []);

  const handleCountryHover = (isoNumeric) => {
    const isoAlpha3 = isoNumericToAlpha3[isoNumeric];
    if (isoAlpha3 && highlightedCountries[isoAlpha3]) {
      setSelectedCountry(highlightedCountries[isoAlpha3]);
    }
  };

  const handleMouseLeave = () => setSelectedCountry(null);

  return (
    <div
      id={id}
      style={{
        width: "100%",
        margin: "10px auto",
        textAlign: "center",
        backgroundColor: "#fff",
      }}
    >
      <ComposableMap
        projectionConfig={{ scale: 380, center: [8, 30] }}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={geographies}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const isoNumeric = geo.id;
              const isoAlpha3 = isoNumericToAlpha3[isoNumeric];
              const isHighlighted = highlightedCountries[isoAlpha3];

              const className = isHighlighted ? "map-country active-country" : "map-country";

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  className={className}
                  onMouseEnter={() => handleCountryHover(isoNumeric)}
                  onMouseLeave={handleMouseLeave}
                  data-tooltip-content={
                    isHighlighted ? `${t(`map.${highlightedCountries[isoAlpha3].key}.name`)} - ${t(`map.${highlightedCountries[isoAlpha3].key}.info`)}` : ""
                  }
                  style={{
                    default: {
                      fill: isHighlighted ? "#FFD84D" : "#FFFFFF",
                      stroke: "rgba(0, 0, 0, 0.8)",
                      strokeWidth: 0.22,
                      outline: "none",
                      transition: "fill 0.3s",
                    },
                    hover: {
                      fill: isHighlighted ? "#FFC300" : "#F5F5F5",
                      stroke: "rgba(0, 0, 0, 0.8)",
                      strokeWidth: 0.22,
                      outline: "none",
                    },
                    pressed: {
                      fill: "#FFB100",
                      stroke: "rgba(0, 0, 0, 0.8)",
                      strokeWidth: 0.22,
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      <ReactTooltip
        anchorSelect=".active-country"
        place="top"
        style={{
          backgroundColor: "#fff",
          color: "#333",
          borderRadius: "10px",
          padding: "10px 15px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
          fontSize: "14px",
          textAlign: "center",
          fontWeight: "500",
          direction: i18n.language === "ar" ? "rtl" : "ltr", // ✅ auto RTL/LTR
        }}
      />

      {/* ✅ Popup with translated text */}
      {selectedCountry && (
        <div
          className="country-popup"
          style={{
            position: "fixed",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#fff",
            padding: "20px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            zIndex: 9999,
            borderRadius: "8px",
            width: "300px",
            direction: i18n.language === "ar" ? "rtl" : "ltr",
          }}
        >
          <span
            onClick={handleMouseLeave}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              cursor: "pointer",
              fontSize: "18px",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            ×
          </span>

          <h5 className="country-name text-dark">
            {t(`map.${selectedCountry.key}.name`)}{" "}
            <img
              src={t(`map.${selectedCountry.key}.flagUrl`)}
              alt={t(`map.${selectedCountry.key}.name`) + " Flag"}
              style={{ width: "30px", height: "20px" }}
            />
          </h5>
          <p className="country-info">
            <strong>{t(`map.${selectedCountry.key}.info`)}</strong>
          </p>
          <p className="location text-muted">{t(`map.${selectedCountry.key}.location`)}</p>
        </div>
      )}
    </div>
  );
}
