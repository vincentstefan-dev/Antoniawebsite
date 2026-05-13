import Link from "next/link";

type ForestHeroTextMobileProps = {
  heroText: {
    top: string;
    button: string;
    bottom: string;
  };
  insideHref: string;
};

export default function ForestHeroTextMobile({
  heroText,
  insideHref,
}: ForestHeroTextMobileProps) {
  return (
    <div className="absolute left-1/2 top-[27%] z-20 w-full -translate-x-1/2 px-4 text-center sm:top-[26%] md:top-[24%]">
      <p
        className="leading-[0.82] tracking-[-0.05em] text-[#f2dc78] sm:leading-[0.8] md:leading-[0.78]"
        style={{
          fontFamily: "var(--font-luxurious-script)",
          fontSize: "clamp(7rem, 26vw, 14rem)",
          fontWeight: 400,
        }}
      >
        {heroText.top}
      </p>

      <p
        className="mt-[-0.18em] leading-[0.82] tracking-[-0.05em] text-[#f2dc78] sm:leading-[0.8] md:mt-[-0.22em] md:leading-[0.78]"
        style={{
          fontFamily: "var(--font-luxurious-script)",
          fontSize: "clamp(7rem, 26vw, 14rem)",
          fontStyle: "italic",
          fontWeight: 400,
        }}
      >
        {heroText.bottom}
      </p>

      <div className="mt-3 flex justify-center sm:mt-4 md:mt-5">
        <Link href={insideHref}>
          <span
            className="inline-flex cursor-pointer items-center justify-center text-[#f2dc78] transition-all duration-200 hover:scale-105"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1.3rem, 3.8vw, 2.1rem)",
              fontWeight: 700,
              lineHeight: 1,
              border: "2px solid rgba(242,220,120,0.75)",
              borderRadius: "999px",
              padding: "0.42em 1.35em",
              backdropFilter: "blur(2px)",
              background: "rgba(0,0,0,0.12)",
            }}
          >
            {heroText.button}
          </span>
        </Link>
      </div>
    </div>
  );
}