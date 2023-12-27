import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Syaina`s Website",
  description: "Hello I am Syaina!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav className="text-secondary color-primary">
            <Link href="/#home">Home</Link>
            <Link href="/#about-me">About Me</Link>
            <Link href="/#portfolio">Portfolio</Link>
            <Link href="/#blog">Blog</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
        </header>

        <section>{children}</section>

        <footer className="text-secondary color-tertiary">
          Made by Syaina in 2023 with happiness☺
        </footer>
      </body>
    </html>
  );
}
