import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://thejitha-portfolio.vercel.app";

export const viewport: Viewport = {
  themeColor: "#070808",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Thejitha Wijayanayake | Software Engineer",
    template: "%s | Thejitha Wijayanayake",
  },
  description:
    "Thejitha Wijayanayake is an Information Technology undergraduate at the University of Moratuwa interested in software engineering, artificial intelligence, cybersecurity, and research.",
  keywords: [
    "Thejitha Wijayanayake",
    "Thejitha Wijayanayake Software Engineer",
    "Thejitha Wijayanayake University of Moratuwa",
    "Thejitha Wijayanayake Portfolio",
    "Software Engineering",
    "Information Technology",
    "University of Moratuwa",
    "Next.js",
    "FastAPI",
    "MSSQL",
    "Machine Learning",
    "Cybersecurity",
    "Deep Learning",
  ],
  authors: [
    {
      name: "Thejitha Wijayanayake",
      url: "https://github.com/thejitha-minindu",
    },
  ],
  creator: "Thejitha Wijayanayake",
  publisher: "Thejitha Wijayanayake",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Thejitha Wijayanayake",
    title: "Thejitha Wijayanayake | Software Engineer",
    description:
      "Thejitha Wijayanayake is an Information Technology undergraduate at the University of Moratuwa interested in software engineering, artificial intelligence, cybersecurity, and research.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thejitha Wijayanayake | Software Engineer",
    description:
      "Thejitha Wijayanayake is an Information Technology undergraduate at the University of Moratuwa interested in software engineering, artificial intelligence, cybersecurity, and research.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google092690344991e23a",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
