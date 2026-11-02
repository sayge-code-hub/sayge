import { JsonLd } from "@/components/JsonLd";
import { SaasifyProductPage } from "@/components/saasify/SaasifyPages";
import {
  saasifyDms,
  saasifyFaqJsonLd,
  saasifyPageMetadata,
  saasifyPath,
  saasifySoftwareJsonLd,
} from "@/lib/saasify";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/site";

export const metadata = saasifyPageMetadata(saasifyDms.meta);

export default function SaasifyDmsPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          name: saasifyDms.meta.title,
          description: saasifyDms.meta.description,
          path: saasifyDms.meta.path,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "SaaSify", path: saasifyPath.overview },
          { name: "SaaSify DMS", path: saasifyDms.meta.path },
        ])}
      />
      <JsonLd
        data={saasifySoftwareJsonLd({
          name: "SaaSify DMS",
          description: saasifyDms.meta.description,
          path: saasifyDms.meta.path,
          category: "BusinessApplication",
        })}
      />
      <JsonLd data={saasifyFaqJsonLd(saasifyDms.faqs)} />
      <SaasifyProductPage product={saasifyDms} kind="module" />
    </>
  );
}
