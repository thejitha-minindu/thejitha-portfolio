import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Thejitha Wijayanayake — Software Engineer",
    short_name: "Thejitha",
    description:
      "Information Technology undergraduate at the University of Moratuwa interested in software engineering, artificial intelligence, cybersecurity, and research.",
    start_url: "/",
    display: "standalone",
    background_color: "#070809",
    theme_color: "#070808",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
