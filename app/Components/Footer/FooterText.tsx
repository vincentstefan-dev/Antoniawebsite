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
        className="absolute left-[5%] top-[14%] w-[1200px] whitespace-nowrap text-[clamp(14rem,24vw,28rem)] font-normal leading-[0.65] tracking-[-0.02em]"
        style={{ fontFamily: "var(--font-luxurious-script)" }}
      >
        {logoText.top}
      </p>

      <p
        className="absolute left-[10%] top-[42%] w-[1400px] whitespace-nowrap text-[clamp(14rem,24vw,28rem)] font-normal italic leading-[0.65] tracking-[-0.01em]"
        style={{ fontFamily: "var(--font-luxurious-script)" }}
      >
        {logoText.bottom}
      </p>

      <div
        className="absolute left-[57%] top-[75%] inline-flex items-center justify-center whitespace-nowrap rounded-full border-[4px] border-[#f2dc78] px-7 py-[0.18rem] text-[#f2dc78]"
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "clamp(1.5rem, 2vw, 2rem)",
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
        className="absolute bottom-[8%] right-[1%] w-[680px] max-w-[680px] text-right text-[#f2dc78]"
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        <p
          className="text-[clamp(1.6rem,2.2vw,2.4rem)] font-bold leading-[0.95] tracking-[-0.08em]"
          style={{
            textShadow:
              "2px 2px 0 rgba(95,72,18,0.95), 0 2px 6px rgba(0,0,0,0.55)",
          }}
        >
          {ctaText}
        </p>

        {note && (
          <p
            className="mt-5 text-[clamp(1.35rem,1.9vw,2rem)] font-bold leading-[0.95] tracking-[-0.08em]"
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