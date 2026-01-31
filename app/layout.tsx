import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";   // ✅ Bootstrap CSS
// import "./globals.css";
import "../public/assets/scss/app.scss";

import Navbar from "./component/header/navbar";
import Footer from "./component/Footer/footer";
import AOSInitializer from "./component/AOSInitializer/AOSInitializer";
import BootstrapClient from "./component/BootstrapClient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Smartway Technoway - From Thought to Impact | Innovative IT & Digital Solutions Company",
  description: "Discover Smartway Technoway, the technology division of Smartway Group empowering businesses through AI, automation, cloud solutions, and custom software development. From thought to impact — we build technology that drives the future.",
  keywords: "Smartway Technoway, IT solutions India & World, AI automation company, cloud infrastructure services, custom software development, digital transformation partner",
  authors: [{ name: "Smartway Technoway" }],
  viewport: "width=device-width, initial-scale=1",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AOSInitializer />
        <BootstrapClient />
        <Navbar />
        {children}
        <Footer />


      </body>
    </html>
  );
}
