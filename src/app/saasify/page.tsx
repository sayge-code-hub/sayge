import { JsonLd } from "@/components/JsonLd";
import { SaasifyOverviewPage } from "@/components/saasify/SaasifyPages";
import {
  saasifyFaqJsonLd,
  saasifyOverview,
  saasifyPageMetadata,
  saasifySoftwareJsonLd,
} from "@/lib/saasify";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/site";

export const metadata = saasifyPageMetadata(saasifyOverview.meta);

export default function SaasifyPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          name: saasifyOverview.meta.title,
          description: saasifyOverview.meta.description,
          path: saasifyOverview.meta.path,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "SaaSify", path: saasifyOverview.meta.path },
        ])}
      />
      <JsonLd
        data={saasifySoftwareJsonLd({
          name: "SaaSify",
          description: saasifyOverview.meta.description,
          path: saasifyOverview.meta.path,
          category: "BusinessApplication",
        })}
      />
      <JsonLd data={saasifyFaqJsonLd(saasifyOverview.faqs)} />
      <SaasifyOverviewPage />
    </>
  );
}
