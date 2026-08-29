export function JsonLd() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://thejitha-portfolio.vercel.app";

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: "Thejitha Wijayanayake",
        alternateName: "Thejitha Wijayanayake Portfolio",
        description:
          "Personal professional portfolio of Thejitha Wijayanayake, Information Technology Undergraduate at University of Moratuwa.",
        publisher: {
          "@id": `${siteUrl}/#person`,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Thejitha Wijayanayake",
        givenName: "Thejitha",
        familyName: "Wijayanayake",
        url: `${siteUrl}/`,
        jobTitle: "Software Engineer",
        description:
          "Thejitha Wijayanayake is an Information Technology undergraduate at the University of Moratuwa interested in software engineering, artificial intelligence, cybersecurity, and research.",
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "University of Moratuwa",
          url: "https://uom.lk/",
        },
        knowsAbout: [
          "Software Engineering",
          "Artificial Intelligence",
          "Machine Learning",
          "Cybersecurity",
          "Full-Stack Development",
          "Next.js",
          "FastAPI",
          "Python",
          "TypeScript",
          "Embedded Systems",
        ],
        sameAs: [
          "https://github.com/thejitha-minindu",
          "https://www.linkedin.com/in/thejitha-wijayanayake",
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
