import type { Metadata } from "next";
import { Fraunces, Geist } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { ogImage, organizationJsonLd, siteName, siteUrl } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [{ url: "/sayge-mark.png", type: "image/png" }],
    apple: [{ url: "/sayge-mark.png", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    siteName,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    images: [ogImage],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        <JsonLd data={organizationJsonLd} />
        {children}
      </body>
    </html>
  );
}
