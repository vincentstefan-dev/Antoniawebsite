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
        className="absolute left-[5%] top-[5%] w-[1200px] whitespace-nowrap text-[clamp(11rem,18vw,22rem)] font-normal leading-[0.65] tracking-[-0.02em]"
        style={{
          fontFamily: "var(--font-luxurious-script)",
          transform: "translate(0rem, 0rem)",
        }}
      >
        {logoText.top}
      </p>

      <p
        className="absolute left-[10%] top-[30%] w-[1400px] whitespace-nowrap text-[clamp(11rem,18vw,22rem)] font-normal italic leading-[0.65] tracking-[-0.01em]"
        style={{
          fontFamily: "var(--font-luxurious-script)",
          transform: "translate(0rem, 0rem)",
        }}
      >
        {logoText.bottom}
      </p>

      <div
        className="absolute left-[52%] top-[60%] inline-flex items-center justify-center whitespace-nowrap rounded-full border-[4px] border-[#f2dc78] px-7 py-[0.18rem] text-[#f2dc78]"
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "clamp(1.1rem, 1.6vw, 1.6rem)",
          fontWeight: 700,
          fontStyle: "italic",
          lineHeight: 1,
          textShadow: "0 2px 3px rgba(0,0,0,0.45)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
          backdropFilter: "blur(1px)",
          transform: "translate(0rem, 0rem)",
        }}
      >
        {logoText.badge}
      </div>

      <div
        className="absolute bottom-[8%] right-[1%] w-[680px] max-w-[680px] text-right text-[#f2dc78]"
        style={{
          fontFamily: "var(--font-cormorant)",
          transform: "translate(0rem, 0rem)",
        }}
      >
        <p
          className="text-[clamp(1.2rem,1.8vw,2rem)] font-bold leading-[0.95] tracking-[-0.08em]"
          style={{
            textShadow:
              "2px 2px 0 rgba(95,72,18,0.95), 0 2px 6px rgba(0,0,0,0.55)",
          }}
        >
          {ctaText}
        </p>

        {note && (
          <p
            className="mt-5 text-[clamp(1rem,1.5vw,1.6rem)] font-bold leading-[0.95] tracking-[-0.08em]"
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