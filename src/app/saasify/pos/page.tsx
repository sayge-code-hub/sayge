import { JsonLd } from "@/components/JsonLd";
import { SaasifyPosLanding } from "@/components/saasify/SaasifyPosLanding";
import {
  saasifyFaqJsonLd,
  saasifyPageMetadata,
  saasifyPath,
  saasifyPos,
  saasifySoftwareJsonLd,
} from "@/lib/saasify";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/site";

export const metadata = saasifyPageMetadata(saasifyPos.meta);

export default function SaasifyPosPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          name: saasifyPos.meta.title,
          description: saasifyPos.meta.description,
          path: saasifyPos.meta.path,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "SaaSify", path: saasifyPath.overview },
          { name: "SaaSify POS", path: saasifyPos.meta.path },
        ])}
      />
      <JsonLd
        data={saasifySoftwareJsonLd({
          name: "SaaSify POS",
          description: saasifyPos.meta.description,
          path: saasifyPos.meta.path,
          category: "BusinessApplication",
        })}
      />
      <JsonLd data={saasifyFaqJsonLd(saasifyPos.faqs)} />
      <SaasifyPosLanding />
    </>
  );
}
