import { JsonLd } from "@/components/JsonLd";
import { SaasifyProductPage } from "@/components/saasify/SaasifyPages";
import {
  saasifyAssets,
  saasifyFaqJsonLd,
  saasifyPageMetadata,
  saasifyPath,
  saasifySoftwareJsonLd,
} from "@/lib/saasify";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/site";

export const metadata = saasifyPageMetadata(saasifyAssets.meta);

export default function SaasifyAssetManagementPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          name: saasifyAssets.meta.title,
          description: saasifyAssets.meta.description,
          path: saasifyAssets.meta.path,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "SaaSify", path: saasifyPath.overview },
          { name: "SaaSify Asset Management", path: saasifyAssets.meta.path },
        ])}
      />
      <JsonLd
        data={saasifySoftwareJsonLd({
          name: "SaaSify Asset Management",
          description: saasifyAssets.meta.description,
          path: saasifyAssets.meta.path,
          category: "BusinessApplication",
        })}
      />
      <JsonLd data={saasifyFaqJsonLd(saasifyAssets.faqs)} />
      <SaasifyProductPage product={saasifyAssets} kind="module" />
    </>
  );
}
