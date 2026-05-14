type MiddleCTATextProps = {
  eyebrow: string;
  leftText: string[];
  rightText: string[];
};

export default function MiddleCTAText({
  eyebrow,
  leftText,
  rightText,
}: MiddleCTATextProps) {
  return (
    <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center">
      <p
        className="mb-10 text-[clamp(1rem,1.8vw,1.35rem)] font-bold leading-none tracking-[-0.04em]"
        style={{
          fontFamily: "var(--font-cormorant)",
          transform: "translate(0rem, 0rem)",
        }}
      >
        {eyebrow}
      </p>

      <div className="grid w-full max-w-[980px] grid-cols-1 items-center gap-8 md:grid-cols-2">
        <h2
          className="text-[clamp(2.8rem,5vw,5rem)] font-semibold italic leading-[0.72] tracking-[-0.07em] drop-shadow-[0_2px_0_rgba(95,72,18,0.9)]"
          style={{
            fontFamily: "var(--font-cormorant)",
            transform: "translate(2rem, -1.5rem)",
          }}
        >
          {leftText.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>

        <h2
          className="text-[clamp(2.8rem,5vw,5rem)] font-semibold italic leading-[0.72] tracking-[-0.07em] drop-shadow-[0_2px_0_rgba(95,72,18,0.9)]"
          style={{
            fontFamily: "var(--font-cormorant)",
            transform: "translate(1rem, -0.5rem)",
          }}
        >
          {rightText.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
      </div>
    </div>
  );
}