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
