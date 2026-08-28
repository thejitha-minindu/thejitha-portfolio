import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#080909",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Thejitha Wijayanayake — Software Engineering Portfolio",
  description:
    "Thejitha Wijayanayake is an Information Technology undergraduate at the University of Moratuwa exploring software engineering, AI, research and hardware systems.",
  keywords: [
    "Thejitha Wijayanayake",
    "THEJITHA // LAB",
    "Software Engineering",
    "Information Technology",
    "University of Moratuwa",
    "Next.js",
    "FastAPI",
    "MSSQL",
    "CoreXY",
    "Deep Learning",
    "Internship",
  ],
  authors: [{ name: "Thejitha Wijayanayake", url: "https://github.com/thejitha-minindu" }],
  creator: "Thejitha Wijayanayake",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thejitha-lab.dev",
    title: "Thejitha Wijayanayake — Software Engineering Portfolio",
    description:
      "Information Technology undergraduate at the University of Moratuwa exploring software engineering, AI, research and hardware systems.",
    siteName: "THEJITHA // LAB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thejitha Wijayanayake — Software Engineering Portfolio",
    description:
      "Information Technology undergraduate at the University of Moratuwa exploring software engineering, AI, research and hardware systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
