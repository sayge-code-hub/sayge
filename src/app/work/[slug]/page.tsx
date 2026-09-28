import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudy } from "@/components/CaseStudy";
import { EngagementOverview } from "@/components/EngagementOverview";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InHouseProduct } from "@/components/InHouseProduct";
import { JsonLd } from "@/components/JsonLd";
import { ProductCaseStudy } from "@/components/ProductCaseStudy";
import {
  absoluteUrl,
  breadcrumbJsonLd,
  ogImage,
  siteName,
  siteUrl,
  webPageJsonLd,
  websiteJsonLd,
} from "@/lib/site";
import {
  caseStudyPath,
  getWorkDocument,
  getWorkDocuments,
  isEngagementOverview,
  isInHouseProduct,
  isProductStudy,
  isStaffingStudy,
  workBreadcrumb,
} from "@/lib/work";

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getWorkDocuments().map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const doc = getWorkDocument(slug);
  if (!doc) return {};

  const url = absoluteUrl(caseStudyPath(doc.slug));

  return {
    title: doc.seoTitle,
    description: doc.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName,
      title: doc.seoTitle,
      description: doc.seoDescription,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: doc.seoTitle,
      description: doc.seoDescription,
      images: [ogImage],
    },
  };
}

export default async function WorkCaseStudyPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const doc = getWorkDocument(slug);
  if (!doc) notFound();

  const path = caseStudyPath(doc.slug);

  return (
    <>
      <JsonLd data={websiteJsonLd} />
      <JsonLd
        data={{
          ...webPageJsonLd({
            name: doc.seoTitle,
            description: doc.seoDescription,
            path,
          }),
          about: { "@id": `${siteUrl}/#organization` },
          publisher: { "@id": `${siteUrl}/#organization` },
        }}
      />
      <JsonLd data={breadcrumbJsonLd(workBreadcrumb(doc))} />
      <Header />
      <main>
        {isStaffingStudy(doc) ? <CaseStudy study={doc} /> : null}
        {isProductStudy(doc) ? <ProductCaseStudy study={doc} /> : null}
        {isInHouseProduct(doc) ? <InHouseProduct study={doc} /> : null}
        {isEngagementOverview(doc) ? <EngagementOverview study={doc} /> : null}
      </main>
      <Footer />
    </>
  );
}
