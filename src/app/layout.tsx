import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/general/navbar/Navbar";
import Footer from "./components/general/Footer";
import ScrollToTopButton from "./components/general/ScrollToTopButton";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kendrick Chandra — Full-Stack Developer",
  description:
    "Portfolio of Kendrick Chandra, a Full-Stack Developer based in Dumai, Indonesia. Specializing in React, Next.js, Vue.js, and Laravel. Open to full-time opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} bg-slate-950 antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
