type MahindraFinanceLogoProps = {
  alt?: string;
  className?: string;
};

export function MahindraFinanceLogo({
  alt = "Mahindra Finance",
  className = "h-8 w-auto max-w-full md:h-10",
}: MahindraFinanceLogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/mahindra-finance.png"
      alt={alt}
      width={884}
      height={124}
      className={className}
    />
  );
}
