import type { Metadata } from "next";
import { Noto_Sans_Tamil } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider, LanguageProvider } from "@/context";

const tamil = Noto_Sans_Tamil({
  subsets: ["tamil"],
  variable: "--font-tamil",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://templedetails.in"),
  title: {
    default: "TempleDetails.in | Tamil Nadu Temple Guide",
    template: "%s | TempleDetails.in",
  },
  description:
    "Explore Tamil Nadu temples, festivals, deities, districts, sacred groups, and heritage locations with TempleDetails.in.",
  keywords: [
    "Tamil Nadu temples",
    "TempleDetails",
    "Shiva temples",
    "Vishnu temples",
    "Murugan temples",
    "Amman temples",
    "temple festivals",
    "temple guide",
  ],
  authors: [{ name: "TempleDetails.in" }],
  creator: "TempleDetails.in",
  publisher: "TempleDetails.in",
  applicationName: "TempleDetails.in",
  openGraph: {
    title: "TempleDetails.in | Tamil Nadu Temple Guide",
    description:
      "Discover sacred temples, deities, districts, festivals, and pilgrimage information across Tamil Nadu.",
    url: "https://templedetails.in",
    siteName: "TempleDetails.in",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TempleDetails.in | Tamil Nadu Temple Guide",
    description:
      "Explore Tamil Nadu temples, festivals, deities, districts, and sacred collections.",
  },
  alternates: {
    canonical: "https://templedetails.in",
  },
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
      suppressHydrationWarning
    >
      <body className="text-gray-800 dark:bg-gray-900 dark:text-gray-100">
        <ThemeProvider>
          <LanguageProvider>
            <Header />
            {children}
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
