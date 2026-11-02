import { JsonLd } from "@/components/JsonLd";
import { SaasifyProductPage } from "@/components/saasify/SaasifyPages";
import {
  saasifyChecklist,
  saasifyFaqJsonLd,
  saasifyPageMetadata,
  saasifyPath,
  saasifySoftwareJsonLd,
} from "@/lib/saasify";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/site";

export const metadata = saasifyPageMetadata(saasifyChecklist.meta);

export default function SaasifyDigitalChecklistPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          name: saasifyChecklist.meta.title,
          description: saasifyChecklist.meta.description,
          path: saasifyChecklist.meta.path,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "SaaSify", path: saasifyPath.overview },
          { name: "SaaSify Digital Checklist", path: saasifyChecklist.meta.path },
        ])}
      />
      <JsonLd
        data={saasifySoftwareJsonLd({
          name: "SaaSify Digital Checklist",
          description: saasifyChecklist.meta.description,
          path: saasifyChecklist.meta.path,
          category: "BusinessApplication",
        })}
      />
      <JsonLd data={saasifyFaqJsonLd(saasifyChecklist.faqs)} />
      <SaasifyProductPage product={saasifyChecklist} kind="module" />
    </>
  );
}
