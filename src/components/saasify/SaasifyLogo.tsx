export function SaasifyLogo({
  className = "h-7 w-auto",
  alt = "SaaSify",
}: {
  className?: string;
  alt?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/saasify.png"
      alt={alt}
      width={599}
      height={180}
      className={className}
      decoding="async"
    />
  );
}
