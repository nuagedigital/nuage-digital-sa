import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";

const SITE_URL = "https://nuage-digital.sa";

// ✅ All pages + services
const pages = [
  "/",
  "/contact-us",
  "/services/accounting",
  "/services/consulting",
  "/services/manageservices",
  "/services/technology",
  "/services/human",
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: SITE_URL });
  const writeStream = createWriteStream("./public/sitemap.xml");

  sitemap.pipe(writeStream);

  pages.forEach((page) => {
    sitemap.write({
      url: page,
      changefreq: "weekly",
      priority: page === "/" ? 1.0 : 0.8,
    });
  });

  sitemap.end();
  await streamToPromise(sitemap);

  console.log("✅ sitemap.xml generated successfully");
}

generateSitemap().catch((err) => {
  console.error("❌ Error generating sitemap:", err);
  process.exit(1);
});
