import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PT. ALVIN JAYA RECYCLE | Barang Bekas & Material Daur Ulang",
  description:
    "PT. ALVIN JAYA RECYCLE membeli berbagai barang bekas dan material daur ulang, dengan layanan pickup untuk individu dan perusahaan.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PT. ALVIN JAYA RECYCLE | Barang Bekas & Material Daur Ulang",
    description:
      "PT. ALVIN JAYA RECYCLE membeli berbagai barang bekas dan material daur ulang, dengan layanan pickup untuk individu dan perusahaan.",
    type: "website",
    locale: "id_ID",
    siteName: "PT. ALVIN JAYA RECYCLE",
  },
  twitter: {
    card: "summary",
    title: "PT. ALVIN JAYA RECYCLE | Barang Bekas & Material Daur Ulang",
    description:
      "PT. ALVIN JAYA RECYCLE membeli berbagai barang bekas dan material daur ulang, dengan layanan pickup untuk individu dan perusahaan.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
