import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "./components/header/page";
import { Container } from "./components/ui/Container";

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
        </Container>
      </body>
    </html>
  );
}
