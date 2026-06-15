import type { Metadata } from "next";
import { Noto_Sans_Tamil } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const tamil = Noto_Sans_Tamil({
  subsets: ["tamil"],
  variable: "--font-tamil",
});

export const metadata: Metadata = {
  title: "TempleDetails.in",
  description: "Complete Temple Information Portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ta"
      className={`${tamil.variable} antialiased`}
    >
      <body className="text-gray-800">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
