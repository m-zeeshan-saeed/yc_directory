import type { Metadata } from "next";
import "./globals.css";
import ToasterProvider from "@/app/ToasterProvider";

export const metadata: Metadata = {
  title: "YC Directory",
  description: "pitch, vote and grow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <ToasterProvider />
      </body>
    </html>
  );
}
