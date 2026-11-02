import { JsonLd } from "@/components/JsonLd";
import { SaasifyProductPage } from "@/components/saasify/SaasifyPages";
import {
  saasifyFaqJsonLd,
  saasifyFinances,
  saasifyPageMetadata,
  saasifyPath,
  saasifySoftwareJsonLd,
} from "@/lib/saasify";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/site";

export const metadata = saasifyPageMetadata(saasifyFinances.meta);

export default function SaasifyFinancesPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          name: saasifyFinances.meta.title,
          description: saasifyFinances.meta.description,
          path: saasifyFinances.meta.path,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "SaaSify", path: saasifyPath.overview },
          { name: "SaaSify Finances", path: saasifyFinances.meta.path },
        ])}
      />
      <JsonLd
        data={saasifySoftwareJsonLd({
          name: "SaaSify Finances",
          description: saasifyFinances.meta.description,
          path: saasifyFinances.meta.path,
          category: "BusinessApplication",
        })}
      />
      <JsonLd data={saasifyFaqJsonLd(saasifyFinances.faqs)} />
      <SaasifyProductPage product={saasifyFinances} kind="module" />
    </>
  );
}
