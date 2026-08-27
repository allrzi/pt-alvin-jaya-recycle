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
  verification: {
    google: "CDR5sFkZ4rLslkJXKinFJv_BVxldhwKS_n3WX49QeHM",
  },

  title: "PT. ALVIN JAYA RECYCLE | Jual Beli Barang Bekas & Daur Ulang",

  description:
    "PT. ALVIN JAYA RECYCLE melayani jual beli barang bekas dan material daur ulang dengan layanan pickup untuk rumah tangga dan perusahaan.",

  keywords: [
    "barang bekas",
    "jual beli barang bekas",
    "material daur ulang",
    "daur ulang",
    "pengepul barang bekas",
    "pickup barang bekas",
    "scrap",
    "PT Alvin Jaya Recycle",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "PT. ALVIN JAYA RECYCLE | Jual Beli Barang Bekas & Daur Ulang",
    description:
      "Melayani jual beli barang bekas dan material daur ulang dengan layanan pickup untuk rumah tangga dan perusahaan.",
    type: "website",
    locale: "id_ID",
    siteName: "PT. ALVIN JAYA RECYCLE",
  },

  twitter: {
    card: "summary",
    title: "PT. ALVIN JAYA RECYCLE | Jual Beli Barang Bekas & Daur Ulang",
    description:
      "Melayani jual beli barang bekas dan material daur ulang dengan layanan pickup untuk rumah tangga dan perusahaan.",
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
