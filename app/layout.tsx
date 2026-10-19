import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

import Navbar from "./component/header/navbar";
import Footer from "./component/Footer/footer";
import SmoothScroll from "./component/ui/SmoothScroll";
import CursorGlow from "./component/ui/CursorGlow";
import CustomCursor from "./component/ui/CustomCursor";

const display = Space_Grotesk({
  variable: "--nf-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const body = Inter({
  variable: "--nf-body",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--nf-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05070f",
};

export const metadata: Metadata = {
  title: "Smartway Technoway - From Thought to Impact | Innovative IT & Digital Solutions Company",
  description: "Discover Smartway Technoway, the technology division of Smartway Group empowering businesses through AI, automation, cloud solutions, and custom software development. From thought to impact — we build technology that drives the future.",
  keywords: "Smartway Technoway, IT solutions India & World, AI automation company, cloud infrastructure services, custom software development, digital transformation partner",
  authors: [{ name: "Smartway Technoway PVT LTD" }],
  robots: "index, follow",
  openGraph: {
    title: "Smartway Technoway - From Thought to Impact | Innovative IT & Digital Solutions Company",
    description: "Discover Smartway Technoway, the technology division of Smartway Group empowering businesses through AI, automation, cloud solutions, and custom software development. From thought to impact — we build technology that drives the future.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smartway Technoway - From Thought to Impact | Innovative IT & Digital Solutions Company",
    description: "Discover Smartway Technoway, the technology division of Smartway Group empowering businesses through AI, automation, cloud solutions, and custom software development. From thought to impact — we build technology that drives the future.",
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="antialiased">
        <SmoothScroll />
        <CursorGlow />
        <CustomCursor />
        <div className="noise" aria-hidden />
        <Toaster position="top-right" toastOptions={{ className: 'toast-dark' }} />
        <Navbar />
        <main className="relative z-[1]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
