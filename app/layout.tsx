import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./_components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Syaina's Website",
  description: "Hello I am Syaina! Front End Developer",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        <section>{children}</section>

        <footer className="text-secondary color-tertiary">
          Made by Syaina in 2023 with happiness☺
        </footer>
      </body>
    </html>
  );
}
