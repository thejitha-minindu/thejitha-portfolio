import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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

export const viewport: Viewport = {
  themeColor: "#070808",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Thejitha Wijayanayake",
    template: "%s | Thejitha Wijayanayake",
  },
  description:
    "Thejitha Wijayanayake is an Information Technology undergraduate at the University of Moratuwa exploring software engineering, AI, research and hardware systems.",
  keywords: [
    "Thejitha Wijayanayake",
    "THEJITHA",
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
    url: "https://thejitha-lab.dev",
    title: "Thejitha Wijayanayake",
    description:
      "Information Technology undergraduate at the University of Moratuwa exploring software engineering, AI, research and hardware systems.",
    siteName: "THEJITHA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thejitha Wijayanayake",
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
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
