import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "./shop/components/header/page";
import { Container } from "./shop/components/ui/Container";
import Footer from "./shop/components/footer/page";

const manrope = Manrope({
  subsets: ["cyrillic", "latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Laviss-Brick",
  description: "Будівельні матеріали",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={manrope.variable}>
        <Container className="sm:block">
          <Header />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
