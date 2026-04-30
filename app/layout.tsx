import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const brockmann = localFont({
  src: [
    {
      path: "./fonts/brockmann-regular-webfont.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/brockmann-regularitalic-webfont.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/brockmann-medium-webfont.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/brockmann-mediumitalic-webfont.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/brockmann-semibold-webfont.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/brockmann-bold-webfont.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-brockmann",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oskar Sundberg",
  description: "Things I've built. Newest first.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${brockmann.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
