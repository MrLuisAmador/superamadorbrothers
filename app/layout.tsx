import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "./components/header";
import Footer from "./components/footer";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Those Amador Bros | Luis & Evan",
  description: "Meet the talented Amador brothers - Luis, the rising child actor, and Evan, the YouTube gaming influencer. Discover their skills, achievements, and creative content.",
  keywords: "Luis Amador, Evan Amador, child actor, YouTube influencer, Minecraft, gaming, theater, performance",
  authors: [{ name: "Luis Amador" }],
  openGraph: {
    title: "Those Amador Bros | Luis & Evan",
    description: "Meet the talented Amador brothers - Luis, the rising child actor, and Evan, the YouTube gaming influencer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="px-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
