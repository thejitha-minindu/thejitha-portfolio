// Canonical identity is independent of the deployment host and legacy env vars.
// Local and preview deployments must advertise the production URLs too.
export const siteUrl = "https://thejitha.dev";

// Page metadata replaces nested Open Graph/Twitter objects, so each page must
// include the shared image explicitly instead of relying on layout inheritance.
export const socialImages = [{
  url: `${siteUrl}/opengraph-image`,
  width: 1200,
  height: 630,
  alt: "Thejitha Wijayanayake — Software Engineer",
}];
