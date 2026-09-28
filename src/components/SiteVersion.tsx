import { siteVersion } from "@/lib/site";

export function SiteVersion() {
  return (
    <span
      className="text-[10px] leading-none tracking-[0.12em] text-muted/40"
      title={`Sayge site version ${siteVersion}`}
    >
      v{siteVersion}
    </span>
  );
}
