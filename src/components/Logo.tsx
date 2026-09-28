export function Logo() {
  return (
    <span className="group inline-flex items-center gap-3">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/sayge-mark.png"
        alt=""
        width={40}
        height={38}
        className="h-9 w-auto transition-transform duration-500 ease-out group-hover:rotate-[20deg] md:h-10"
      />
      <span className="text-[24px] font-semibold tracking-tight md:text-[26px]">sayge</span>
    </span>
  );
}
