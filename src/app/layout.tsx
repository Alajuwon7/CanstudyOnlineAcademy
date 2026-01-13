import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const heading = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Canstudy Online Academy",
  description: "Outstanding online learning for ambitious professionals.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${heading.variable}`}>
      <body>{children}</body>
    </html>
  );
}
