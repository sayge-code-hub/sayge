import type { Metadata } from "next";
import { Approach } from "@/components/Approach";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Partnership } from "@/components/Partnership";
import { People } from "@/components/People";
import {
  homepageDescription,
  homepageTitle,
  ogImage,
  siteUrl,
  websiteJsonLd,
} from "@/lib/site";

export const metadata: Metadata = {
  title: homepageTitle,
  description: homepageDescription,
  alternates: {
    canonical: `${siteUrl}/`,
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/`,
    siteName: "Sayge",
    title: homepageTitle,
    description: homepageDescription,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: homepageTitle,
    description: homepageDescription,
    images: [ogImage],
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={websiteJsonLd} />
      <Header />
      <main>
        <Hero />
        <Partnership />
        <Approach />
        <People />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
