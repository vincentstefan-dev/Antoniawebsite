// app/Components/Footer/FooterText.tsx

type FooterTextProps = {
  logoText: {
    top: string;
    badge: string;
    bottom: string;
  };
  ctaText: string;
  note?: string;
};

export default function FooterText({
  logoText,
  ctaText,
  note,
}: FooterTextProps) {
  return (
    <div className="absolute inset-0 z-20 text-[#f2dc78]">
      <p
        className="absolute left-[7%] top-[8%] w-auto whitespace-nowrap text-[clamp(5rem,22vw,8rem)] font-normal leading-[0.65] tracking-[-0.02em] lg:left-[5%] lg:top-[5%] lg:w-[1200px] lg:text-[clamp(11rem,18vw,22rem)]"
        style={{
          fontFamily: "var(--font-luxurious-script)",
          transform: "translate(0rem, 0rem)",
        }}
      >
        {logoText.top}
      </p>

      <p
        className="absolute left-[13%] top-[28%] w-auto whitespace-nowrap text-[clamp(5rem,22vw,8rem)] font-normal italic leading-[0.65] tracking-[-0.01em] lg:left-[10%] lg:top-[30%] lg:w-[1400px] lg:text-[clamp(11rem,18vw,22rem)]"
        style={{
          fontFamily: "var(--font-luxurious-script)",
          transform: "translate(0rem, 0rem)",
        }}
      >
        {logoText.bottom}
      </p>

      <div
        className="absolute left-1/2 top-[58%] inline-flex -translate-x-1/2 items-center justify-center whitespace-nowrap rounded-full border-[2px] border-[#f2dc78] px-4 py-[0.12rem] text-[#f2dc78] lg:left-[52%] lg:top-[60%] lg:translate-x-0 lg:border-[4px] lg:px-7 lg:py-[0.18rem]"
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "clamp(0.75rem, 3vw, 1.1rem)",
          fontWeight: 700,
          fontStyle: "italic",
          lineHeight: 1,
          textShadow: "0 2px 3px rgba(0,0,0,0.45)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
          backdropFilter: "blur(1px)",
        }}
      >
        {logoText.badge}
      </div>

      <div
        className="absolute bottom-[7%] left-1/2 w-[90%] max-w-[340px] -translate-x-1/2 text-center text-[#f2dc78] lg:bottom-[8%] lg:left-auto lg:right-[1%] lg:w-[680px] lg:max-w-[680px] lg:translate-x-0 lg:text-right"
        style={{
          fontFamily: "var(--font-cormorant)",
        }}
      >
        <p
          className="text-[clamp(0.75rem,3vw,1rem)] font-bold leading-[0.95] tracking-[-0.08em] lg:text-[clamp(1.2rem,1.8vw,2rem)]"
          style={{
            textShadow:
              "2px 2px 0 rgba(95,72,18,0.95), 0 2px 6px rgba(0,0,0,0.55)",
          }}
        >
          {ctaText}
        </p>

        {note && (
          <p
            className="mt-3 text-[clamp(0.7rem,2.8vw,0.95rem)] font-bold leading-[0.95] tracking-[-0.08em] lg:mt-5 lg:text-[clamp(1rem,1.5vw,1.6rem)]"
            style={{
              textShadow:
                "2px 2px 0 rgba(95,72,18,0.95), 0 2px 6px rgba(0,0,0,0.55)",
            }}
          >
            {note}
          </p>
        )}
      </div>
    </div>
  );
}