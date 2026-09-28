import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogArticleBody } from "@/components/BlogArticleBody";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { getAdjacentPosts, getPost, getPosts } from "@/lib/blog";
import {
  absoluteUrl,
  blogPath,
  breadcrumbJsonLd,
  ogImage,
  siteName,
  siteUrl,
} from "@/lib/site";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const url = absoluteUrl(`/blog/${post.slug}`);
  const title = post.seoTitle ?? `${post.title.replace(/\.$/, "")} | Sayge`;
  const description = post.seoDescription ?? post.dek;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName,
      title,
      description,
      publishedTime: post.date,
      ...(post.dateModified ? { modifiedTime: post.dateModified } : {}),
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const path = `/blog/${post.slug}`;
  const { newer, older } = getAdjacentPosts(post.slug);
  const linkClass =
    "text-[15px] tracking-tight text-foreground underline-offset-[5px] transition hover:text-brand hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[var(--brand)]";

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.seoDescription ?? post.dek,
          datePublished: post.date,
          ...(post.dateModified ? { dateModified: post.dateModified } : {}),
          url: absoluteUrl(path),
          inLanguage: "en",
          image: ogImage.url,
          author: { "@id": `${siteUrl}/#organization` },
          publisher: { "@id": `${siteUrl}/#organization` },
          isPartOf: { "@id": `${siteUrl}/#website` },
          mainEntityOfPage: absoluteUrl(path),
        }}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: blogPath },
          { name: post.title, path },
        ])}
      />
      <Header />
      <main>
        <article className="mx-auto max-w-[1180px] px-6 pb-24 pt-10 md:pb-28 md:pt-14">
          <Breadcrumb
            current={post.title}
            parents={[
              { name: "Home", href: "/" },
              { name: "Blog", href: blogPath },
            ]}
          />

          <header className="mt-8 max-w-[52rem] md:mt-10 lg:max-w-[56rem]">
            <p className="text-[13px] leading-5 text-muted">
              {post.dateLabel}
              <span aria-hidden="true"> · </span>
              {post.readingTime}
            </p>
            <h1 className="font-display mt-3 text-[clamp(1.55rem,2.4vw,2.05rem)] leading-[1.2] tracking-tight text-foreground">
              {post.title}
            </h1>
          </header>

          <div className="blog-article mt-8 max-w-[52rem] border-t border-line pt-8 lg:max-w-[56rem]">
            <BlogArticleBody body={post.body} />
          </div>

          <nav
            aria-label="More writing"
            className="mt-12 max-w-[52rem] border-t border-line pt-8 lg:max-w-[56rem]"
          >
            <Link href={blogPath} className={linkClass}>
              All notes
            </Link>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 sm:gap-10">
              {older ? (
                <Link
                  href={`/blog/${older.slug}`}
                  className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[6px] focus-visible:outline-[var(--brand)]"
                >
                  <p className="text-[12px] tracking-[0.12em] text-muted">
                    Older
                  </p>
                  <p className="mt-1.5 text-[16px] leading-snug tracking-tight text-foreground transition-colors group-hover:text-brand">
                    {older.title}
                  </p>
                </Link>
              ) : (
                <span />
              )}
              {newer ? (
                <Link
                  href={`/blog/${newer.slug}`}
                  className="group block sm:text-right focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[6px] focus-visible:outline-[var(--brand)]"
                >
                  <p className="text-[12px] tracking-[0.12em] text-muted">
                    Newer
                  </p>
                  <p className="mt-1.5 text-[16px] leading-snug tracking-tight text-foreground transition-colors group-hover:text-brand">
                    {newer.title}
                  </p>
                </Link>
              ) : null}
            </div>
          </nav>
        </article>
      </main>
      <Footer />
    </>
  );
}
