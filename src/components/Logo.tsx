export function Logo({ size = "default" }: { size?: "default" | "inline" }) {
  const inline = size === "inline";
  return (
    <span className={inline ? "inline-flex items-center gap-1.5 text-[1em] leading-none" : "group inline-flex items-center gap-3"}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/sayge-mark.png"
        alt=""
        width={40}
        height={38}
        className={
          inline
            ? "h-[1em] w-auto"
            : "h-9 w-auto transition-transform duration-500 ease-out group-hover:rotate-[20deg] md:h-10"
        }
      />
      <span className={inline ? "text-[1em] font-semibold leading-none tracking-tight text-[#111827]" : "text-[24px] font-semibold tracking-tight md:text-[26px]"}>
        sayge
      </span>
    </span>
  );
}
