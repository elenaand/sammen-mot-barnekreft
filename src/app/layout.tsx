import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/src/components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sammen mot barnekreft",
  description:
    "Foreningen Sammen mot barnekreft. Arrangerer kunstauksjon til inntekt for Barnekreftforeningen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen `}
      >
        <Header />
        <main className="grow p-8 md:px-16 md:py-8 max-w-3xl prose ">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
