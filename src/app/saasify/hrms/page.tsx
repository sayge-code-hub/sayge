import { JsonLd } from "@/components/JsonLd";
import { SaasifyProductPage } from "@/components/saasify/SaasifyPages";
import {
  saasifyFaqJsonLd,
  saasifyHrms,
  saasifyPageMetadata,
  saasifyPath,
  saasifySoftwareJsonLd,
} from "@/lib/saasify";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/site";

export const metadata = saasifyPageMetadata(saasifyHrms.meta);

export default function SaasifyHrmsPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          name: saasifyHrms.meta.title,
          description: saasifyHrms.meta.description,
          path: saasifyHrms.meta.path,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "SaaSify", path: saasifyPath.overview },
          { name: "SaaSify HRMS", path: saasifyHrms.meta.path },
        ])}
      />
      <JsonLd
        data={saasifySoftwareJsonLd({
          name: "SaaSify HRMS",
          description: saasifyHrms.meta.description,
          path: saasifyHrms.meta.path,
          category: "BusinessApplication",
        })}
      />
      <JsonLd data={saasifyFaqJsonLd(saasifyHrms.faqs)} />
      <SaasifyProductPage product={saasifyHrms} kind="hrms" />
    </>
  );
}
