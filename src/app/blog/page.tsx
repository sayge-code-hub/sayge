import type { Metadata } from "next";
import { BlogIndex } from "@/components/BlogIndex";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { getPosts } from "@/lib/blog";
import {
  absoluteUrl,
  blogDescription,
  blogPath,
  blogTitle,
  breadcrumbJsonLd,
  ogImage,
  siteName,
  webPageJsonLd,
} from "@/lib/site";

export const metadata: Metadata = {
  title: blogTitle,
  description: blogDescription,
  alternates: {
    canonical: absoluteUrl(blogPath),
  },
  openGraph: {
    type: "website",
    url: absoluteUrl(blogPath),
    siteName,
    title: blogTitle,
    description: blogDescription,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: blogTitle,
    description: blogDescription,
    images: [ogImage],
  },
};

export default function BlogPage() {
  const articles = getPosts();

  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          name: blogTitle,
          description: blogDescription,
          path: blogPath,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: blogPath },
        ])}
      />
      <Header />
      <main>
        <section className="mx-auto max-w-[1180px] px-6 pb-24 pt-10 md:pb-28 md:pt-14">
          <Breadcrumb current="Blog" />
          <BlogIndex posts={articles} />
        </section>
      </main>
      <Footer />
    </>
  );
}
