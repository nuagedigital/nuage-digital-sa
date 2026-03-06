import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { feature } from "topojson-client";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const highlightedCountries = {
  USA: { key: "usa" },
  GBR: { key: "gbr" },
  SAU: { key: "sau" },
  PAK: { key: "pak" },
};

const isoNumericToAlpha3 = {
  840: "USA",
  826: "GBR",
  682: "SAU",
  586: "PAK",
};

export default function WorldMap({ id = "world-map" }) {
  const { t, i18n } = useTranslation();
  const [geographies, setGeographies] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [popupPos, setPopupPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
      .then((res) => res.json())
      .then((worldData) => {
        const geoFeatures = feature(worldData, worldData.objects.countries).features;
        setGeographies(geoFeatures);
      })
      .catch((err) => console.error("Error loading map data:", err));
  }, []);

  // ✅ keeps popup inside viewport (flip left/top when needed)
  const getSafePos = (clientX, clientY) => {
    const offset = 14;
    const popupW = 280; // must match popup width
    const popupH = 140; // approximate height (safe enough)
    const margin = 10;

    let x = clientX + offset;
    let y = clientY + offset;

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // If overflow right -> flip to left of cursor
    if (x + popupW + margin > vw) {
      x = clientX - popupW - offset;
    }

    // If overflow bottom -> move above cursor
    if (y + popupH + margin > vh) {
      y = clientY - popupH - offset;
    }

    // Clamp (final safety)
    x = Math.max(margin, Math.min(x, vw - popupW - margin));
    y = Math.max(margin, Math.min(y, vh - popupH - margin));

    return { x, y };
  };

  const handleCountryHover = (isoNumeric, evt) => {
    const isoAlpha3 = isoNumericToAlpha3[isoNumeric];
    if (isoAlpha3 && highlightedCountries[isoAlpha3]) {
      setSelectedCountry(highlightedCountries[isoAlpha3]);
      setPopupPos(getSafePos(evt.clientX, evt.clientY));
    } else {
      setSelectedCountry(null);
    }
  };

  const handleMouseMove = (evt) => {
    if (!selectedCountry) return;
    setPopupPos(getSafePos(evt.clientX, evt.clientY));
  };

  const handleMouseLeave = () => setSelectedCountry(null);

  const popupStyle = {
    position: "fixed",
    left: popupPos.x,
    top: popupPos.y,
    backgroundColor: "#fff",
    padding: "14px",
    boxShadow: "0 4px 14px rgba(0,0,0,0.18)",
    zIndex: 9999,
    borderRadius: "10px",
    width: "280px",
    direction: i18n.language === "ar" ? "rtl" : "ltr",
    pointerEvents: "none", // keep hover working
  };

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

              const className = isHighlighted
                ? "map-country active-country"
                : "map-country";

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  className={className}
                  onMouseEnter={(e) => handleCountryHover(isoNumeric, e)}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  data-tooltip-content={
                    isHighlighted
                      ? `${t(`map.${highlightedCountries[isoAlpha3].key}.name`)} - ${t(
                          `map.${highlightedCountries[isoAlpha3].key}.info`
                        )}`
                      : ""
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
          direction: i18n.language === "ar" ? "rtl" : "ltr",
        }}
      />

      {selectedCountry && (
        <div className="country-popup" style={popupStyle}>
          <h5 style={{ margin: 0, color: "#111" }}>
            {t(`map.${selectedCountry.key}.name`)}{" "}
            <img
              src={t(`map.${selectedCountry.key}.flagUrl`)}
              alt={t(`map.${selectedCountry.key}.name`) + " Flag"}
              style={{ width: "30px", height: "20px", marginInlineStart: "8px" }}
            />
          </h5>

          <p style={{ margin: "8px 0 0" }}>
            <strong>{t(`map.${selectedCountry.key}.info`)}</strong>
          </p>

          <p style={{ margin: "6px 0 0", color: "#666" }}>
            {t(`map.${selectedCountry.key}.location`)}
          </p>
        </div>
      )}
    </div>
  );
}