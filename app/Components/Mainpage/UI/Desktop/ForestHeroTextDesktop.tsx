import Link from "next/link";

type ForestHeroTextProps = {
  heroText: {
    top: string;
    button: string;
    bottom: string;
  };
  insideHref: string;
};

export default function ForestHeroText({
  heroText,
  insideHref,
}: ForestHeroTextProps) {
  return (
    <div className="absolute left-1/2 top-[15%] z-20 w-full max-w-[1040px] -translate-x-1/2 text-center">
      <p
        className="translate-x-[-10rem] translate-y-[1rem] leading-[0.78] tracking-[-0.04em] text-[#f2dc78]"
        style={{
          fontFamily: "var(--font-luxurious-script)",
          fontSize: "clamp(12rem, 24vw, 26rem)",
          fontWeight: 400,
        }}
      >
        {heroText.top}
      </p>

      <div className="my-[-0.45em] flex translate-x-[15rem] translate-y-[15rem] items-center justify-end pr-[8%]">
        <Link href={insideHref}>
        <span
          className="inline-flex cursor-pointer items-center justify-center text-[#f2dc78] transition-all duration-200 hover:scale-105"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(1.4rem, 2.8vw, 2.8rem)",
            fontWeight: 700,
            fontStyle: "italic",
            lineHeight: 1,
            opacity: 1,
            border: "4px solid #f2dc78",
            borderRadius: "999px",
            padding: "0.06em 1em 0.12em",
            background: "rgba(0, 0, 0, 0.05)",
            textShadow: "0 2px 3px rgba(0,0,0,0.55)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.35)",
            backdropFilter: "blur(1px)",
          }}
        >
          {heroText.button}
        </span>
        </Link>
      </div>

        <p
          className="translate-x-[5rem] translate-y-[-5rem] leading-[0.78] tracking-[-0.04em] text-[#f2dc78]"
          style={{
            fontFamily: "var(--font-luxurious-script)",
            fontSize: "clamp(20rem, 24vw, 26rem)",
            fontStyle: "italic",
            fontWeight: 400,
          }}
        >
          {heroText.bottom}
        </p>
    </div>
  );
}