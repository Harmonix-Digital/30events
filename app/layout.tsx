import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import AOSInit from "@/components/shared/AOSInit";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import GHLChatWidget from "@/components/shared/GHLChatWidget";
import EventbriteProvider from "@/components/shared/EventbriteProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-inter",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "Your 30+ Events",
  description: "The night still belongs to you!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bebas.variable} font-sans`}
    >
      <body className="min-h-full flex flex-col">
        <EventbriteProvider>
          <Header />
          {children}
          <GHLChatWidget />
          <Footer />
          <AOSInit />
        </EventbriteProvider>
      </body>
    </html>
  );
}