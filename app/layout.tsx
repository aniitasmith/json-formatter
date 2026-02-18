import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JSON Formatter",
  description: "Format, validate, and minify JSON with syntax highlighting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
